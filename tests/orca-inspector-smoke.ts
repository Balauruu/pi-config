// Opt-in live test: creates and closes only its own Orca terminal.
import assert from "node:assert/strict";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createOrcaInspector } from "../extensions/orca-inspector/plugin.ts";

async function main() {
if (!process.env.ORCA_WORKTREE_ID) throw new Error("Run inside Orca.");
const dir = mkdtempSync(join(tmpdir(), "orca-inspector-smoke-"));
const context = { cwd: process.cwd(), env: process.env,
  target: { runId: `smoke-${process.pid}`, asyncDir: dir, status: { state: "complete" } } };
const plugin = createOrcaInspector();
let opened = false;
try {
  const response = await plugin.open(context, { executable: "/bin/sleep", argv: ["120"], displayCommand: "",
    allowSteer: false, allowStop: false, sessionRoots: [] }, { focus: false });
  console.log(JSON.stringify(response));
  assert.ok(!(response as any).isError, "open failed");
  opened = true;
  const status = await plugin.status!(context);
  console.log(JSON.stringify(status));
  assert.ok(!(status as any).isError, "status failed");
} finally {
  if (opened) {
    const closed = await plugin.close!(context);
    console.log(JSON.stringify(closed));
    assert.ok(!(closed as any).isError, "close failed; binding retained");
  }
  if (!plugin.owns(context)) rmSync(dir, { recursive: true, force: true });
}
}
void main().catch(error => { console.error(error); process.exitCode = 1; });
