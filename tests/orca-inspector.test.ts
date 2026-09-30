import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, readdirSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { execFileSync } from "node:child_process";
import extension from "../extensions/orca-inspector/index.ts";
import { createOrcaInspector, resolveCli, shellQuote } from "../extensions/orca-inspector/plugin.ts";

function fixture() {
  const dir = mkdtempSync(join(tmpdir(), "orca-inspector-test-"));
  const context = { cwd: dir, env: { ORCA_WORKTREE_ID: "repo::/project", ORCA_CLI_COMMAND: "test-orca" },
    target: { runId: "run", asyncDir: dir, status: { state: "complete", cwd: dir } } };
  let terminal: any;
  const calls: string[][] = [];
  const runner = async (_cli: string, args: string[]) => {
    calls.push(args);
    if (args[1] === "create") {
      terminal = { handle: "term_test", incarnationId: "incarnation", worktreeId: context.env.ORCA_WORKTREE_ID,
        title: args[args.indexOf("--title") + 1], connected: true };
      return { terminal };
    }
    if (args[1] === "show") return { terminal };
    if (args[1] === "close") { terminal = undefined; return { close: { handle: "term_test", ptyKilled: true } }; }
    return {};
  };
  const launch = { executable: "/bin/echo", argv: ["a'b", "$(touch nope)", "line\nbreak", ""], displayCommand: "DO NOT USE",
    allowSteer: false, allowStop: false, sessionRoots: [] };
  return { context, launch, calls, runner, plugin: createOrcaInspector(runner),
    changeIdentity: () => { terminal.incarnationId = "replacement"; }, cleanup: () => rmSync(dir, { recursive: true, force: true }) };
}

test("registration lifecycle disposes old callbacks, without closing terminals", () => {
  const handlers: any = {};
  let disposed = 0;
  extension({ on: (name: string, handler: any) => { handlers[name] = handler; }, events: {
    emit: (name: string, request: any) => {
      assert.equal(name, "pi-subagents:inspector-register:v1");
      assert.equal(request.plugin.name, "orca");
      request.result = { ok: true, registration: { dispose: () => { disposed++; } } };
    },
  } } as any);
  handlers.session_start({}, {});
  handlers.session_start({}, {});
  handlers.session_shutdown();
  assert.equal(disposed, 2);
});

test("open/status/reopen after reload/close and focus", async () => {
  const f = fixture();
  try {
    assert.equal(f.plugin.available(f.context), true);
    assert.equal(f.plugin.available({ ...f.context, env: {} }), false);
    assert.equal(f.plugin.owns(f.context), false);
    assert.ok(!(await f.plugin.open(f.context, f.launch, {})).isError);
    assert.equal(f.plugin.owns(f.context), true);
    assert.ok(!(await f.plugin.status!(f.context)).isError);
    const reloaded = createOrcaInspector(f.runner);
    assert.ok(!(await reloaded.open(f.context, f.launch, { focus: true })).isError);
    assert.equal(f.calls.filter(args => args[1] === "create").length, 1);
    assert.ok(f.calls.some(args => args[1] === "switch"));
    assert.ok(!(await reloaded.close!(f.context)).isError);
    assert.equal(reloaded.owns(f.context), false);
    assert.deepEqual(readdirSync(f.context.cwd), []);
  } finally { f.cleanup(); }
});

test("preserves every launch argument through POSIX and fish shell quoting", async () => {
  const f = fixture();
  try {
    await f.plugin.open(f.context, f.launch, { focus: true });
    const args = f.calls[0];
    assert.ok(args.includes("--focus"));
    const command = args[args.indexOf("--command") + 1];
    for (const shell of ["/bin/sh", "/usr/bin/fish"]) {
      const output = execFileSync(shell, ["-c", command], { encoding: "utf8" });
      assert.equal(output, `${f.launch.argv.join(" ")}\n`);
    }
    assert.equal(readdirSync(f.context.cwd).some(file => file === "nope"), false);
    assert.equal(shellQuote(""), "''");
    assert.equal(resolveCli({ ORCA_CLI_COMMAND: "/custom/orca" }), "/custom/orca");
    assert.equal(resolveCli({ ORCA_DEV_REPO_ROOT: "/dev" }), "orca-dev");
  } finally { f.cleanup(); }
});

test("refuses to close a replaced terminal or a terminal owned by another worktree", async () => {
  const f = fixture();
  try {
    await f.plugin.open(f.context, f.launch, {});
    f.changeIdentity();
    assert.equal((await f.plugin.close!(f.context)).isError, true);
    assert.equal(f.calls.some(args => args[1] === "close"), false);
    assert.equal(f.plugin.owns({ ...f.context, env: { ...f.context.env, ORCA_WORKTREE_ID: "different" } }), false);
  } finally { f.cleanup(); }
});

test("parallel opens create just one terminal; CLI failure is explicit", async () => {
  const f = fixture();
  try {
    await Promise.all([f.plugin.open(f.context, f.launch, {}), f.plugin.open(f.context, f.launch, {})]);
    assert.equal(f.calls.filter(args => args[1] === "create").length, 1);
    const plugin = createOrcaInspector(async () => { throw new Error("host unavailable"); });
    const response = await plugin.status!(f.context);
    assert.equal(response.isError, true);
    assert.match(response.content[0].text!, /host unavailable/);
  } finally { f.cleanup(); }
});
