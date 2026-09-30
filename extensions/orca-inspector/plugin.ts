import { execFile } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, readFileSync, writeFileSync, renameSync, unlinkSync } from "node:fs";
import { join } from "node:path";
import type { InspectorContext, InspectorPlugin } from "pi-subagents/inspectors";

type Terminal = { handle: string; incarnationId: string; worktreeId: string; title: string; connected?: boolean };
type Binding = Terminal & { cli: string };
export type Runner = (cli: string, args: string[], context: InspectorContext) => Promise<any>;

const defaultRunner: Runner = (cli, args, context) => new Promise((resolve, reject) => {
  execFile(cli, [...args, "--json"], {
    cwd: context.cwd, env: context.env, signal: context.signal,
    timeout: 15_000, maxBuffer: 256 * 1024, encoding: "utf8",
  }, (error, stdout, stderr) => {
    if (error) { reject(new Error(`${error.message}${stderr ? `: ${stderr.trim()}` : ""}`)); return; }
    try {
      const response = JSON.parse(stdout);
      if (response.ok !== true) throw new Error(JSON.stringify(response.error ?? response));
      resolve(response.result);
    } catch (error) { reject(error); }
  });
});

// Orca types --command into the login shell. POSIX quoting also works in fish.
export function shellQuote(value: string): string {
  return `'${value.replace(/'/g, `'"'"'`)}'`;
}

export function resolveCli(env: NodeJS.ProcessEnv): string {
  return env.ORCA_CLI_COMMAND || (env.ORCA_DEV_REPO_ROOT ? "orca-dev" :
    process.platform === "linux" ? "orca-ide" : "orca");
}

function bindingPath(context: InspectorContext): string {
  const key = createHash("sha256").update(JSON.stringify([
    context.env.ORCA_WORKTREE_ID, context.target.runId, context.target.index ?? null,
  ])).digest("hex").slice(0, 24);
  return join(context.target.asyncDir, `orca-inspector-${key}.json`);
}

function readBinding(context: InspectorContext): Binding {
  const binding = JSON.parse(readFileSync(bindingPath(context), "utf8"));
  if (!["handle", "incarnationId", "worktreeId", "title", "cli"].every(key =>
    typeof binding[key] === "string" && binding[key].length > 0) ||
    binding.worktreeId !== context.env.ORCA_WORKTREE_ID) {
    throw new Error("Invalid Orca inspector binding; refusing to use it.");
  }
  return binding;
}

function result(text: string, isError = false) {
  return { content: [{ type: "text" as const, text }], details: { mode: "management" as const, results: [] },
    ...(isError ? { isError: true } : {}) };
}

export function createOrcaInspector(runner: Runner = defaultRunner): InspectorPlugin {
  // Serialize actions for each binding so parallel opens cannot orphan a terminal.
  const pending = new Map<string, Promise<unknown>>();
  const guarded = (context: InspectorContext, action: () => Promise<ReturnType<typeof result>>) => {
    const key = bindingPath(context);
    const operation = (pending.get(key) ?? Promise.resolve()).then(action).catch(error =>
      result(`Orca inspector error: ${error instanceof Error ? error.message : String(error)}`, true));
    pending.set(key, operation);
    void operation.finally(() => { if (pending.get(key) === operation) pending.delete(key); });
    return operation;
  };
  const verify = async (context: InspectorContext, binding: Binding) => {
    const { terminal } = await runner(binding.cli, ["terminal", "show", "--terminal", binding.handle], context);
    if (!terminal || terminal.handle !== binding.handle || terminal.incarnationId !== binding.incarnationId ||
      terminal.worktreeId !== binding.worktreeId) {
      throw new Error(`Inspector terminal identity changed; refusing to reuse or close it. Verify the old inspector is gone before removing stale binding ${bindingPath(context)}.`);
    }
    return terminal as Terminal;
  };
  return {
    name: "orca",
    available: context => process.platform !== "win32" && Boolean(context.env.ORCA_WORKTREE_ID),
    owns: context => existsSync(bindingPath(context)),
    open: (context, launch, params) => guarded(context, async () => {
      if (!context.env.ORCA_WORKTREE_ID) throw new Error("Start Pi in an Orca-managed terminal.");
      if (existsSync(bindingPath(context))) {
        const binding = readBinding(context);
        await verify(context, binding);
        if (params.focus === true) await runner(binding.cli, ["terminal", "switch", "--terminal", binding.handle], context);
        return result(`Orca inspector already open: ${binding.handle}.`);
      }
      const cli = resolveCli(context.env);
      const title = `Subagent inspector ${context.target.runId}${context.target.index === undefined ? "" : ` [${context.target.index}]`}`;
      const cwd = context.target.status.cwd ?? context.cwd;
      // Use a POSIX shell wrapper: the Orca terminal may run either fish or bash.
      const portableCommand = `/bin/sh -c ${shellQuote(`cd ${shellQuote(cwd)} && exec ${[launch.executable, ...launch.argv].map(shellQuote).join(" ")}`)}`;
      const response = await runner(cli, ["terminal", "create", "--worktree", `id:${context.env.ORCA_WORKTREE_ID}`,
        "--title", title, "--command", portableCommand, ...(params.focus === true ? ["--focus"] : [])], context);
      const terminal = response.terminal;
      if (!terminal?.handle) throw new Error("Orca created a terminal but returned no handle; inspect Orca before retrying.");
      // Some create responses omit identity metadata; show is authoritative.
      const shown = (await runner(cli, ["terminal", "show", "--terminal", terminal.handle], context)).terminal;
      if (shown?.handle !== terminal.handle || !shown?.incarnationId || shown.worktreeId !== context.env.ORCA_WORKTREE_ID) {
        throw new Error(`Could not verify created inspector ${terminal.handle}; inspect Orca before retrying.`);
      }
      const path = bindingPath(context);
      const temp = `${path}.${process.pid}.tmp`;
      writeFileSync(temp, JSON.stringify({ handle: shown.handle, incarnationId: shown.incarnationId,
        worktreeId: shown.worktreeId, title, cli }, null, 2));
      renameSync(temp, path);
      return result(`Opened Orca inspector ${shown.handle} for run ${context.target.runId}.`);
    }),
    status: context => guarded(context, async () => {
      const binding = readBinding(context);
      const terminal = await verify(context, binding);
      return result(`Orca inspector ${binding.handle}: ${terminal.connected === false ? "disconnected" : "open"}. Binding: ${bindingPath(context)}`);
    }),
    close: context => guarded(context, async () => {
      const binding = readBinding(context);
      await verify(context, binding);
      const closed = await runner(binding.cli, ["terminal", "close", "--terminal", binding.handle], context);
      if (closed.close?.handle !== binding.handle || closed.close?.ptyKilled !== true) {
        throw new Error("Orca did not confirm that the inspector terminal closed; binding retained. Inspect Orca before retrying.");
      }
      unlinkSync(bindingPath(context));
      return result(`Closed Orca inspector ${binding.handle}. The subagent was not stopped.`);
    }),
  };
}
