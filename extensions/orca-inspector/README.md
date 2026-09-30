# Orca inspector for pi-subagents

Personal Pi extension at `/home/balauru/.pi/agent/extensions/orca-inspector/index.ts`.
It registers an external `orca` inspector provider. It does not replace subagents
or change permissions, trusted session roots, steering, or stop behavior.

## Use

1. Run Pi in an Orca-managed terminal and run `/reload` (or restart Pi).
2. Open `/subagents-fleet`, select a run, and press Enter/H.
3. The inspector opens in a new terminal tab in the **parent Pi worktree**.
   It runs in the target run's working directory. It does not create a worktree.

The existing `inspector.open`, `inspector.status`, and `inspector.close` actions
also work. `focus: true` focuses the created or existing terminal; otherwise
creation requests a background tab. Closing the inspector never stops the run.
Reload/session shutdown unregisters callbacks without closing inspector tabs.

Requires pi-subagents' external inspector API (v0.72.0+) and Orca's CLI terminal
commands. Tested on Linux with fish and POSIX shells. Windows is not supported.
The plugin activates only when `ORCA_WORKTREE_ID` is present. It resolves the
CLI from `ORCA_CLI_COMMAND`, then `ORCA_DEV_REPO_ROOT` (`orca-dev`), then
`orca-ide` on Linux or `orca` on macOS. It never invokes Linux's screen reader
`/usr/bin/orca` as a fallback. It does not start Orca automatically.

pi-subagents tries bundled Herdr and Ghostty providers before external providers.

## Bindings and ownership

Each target/index/parent-worktree has a binding file
`<asyncDir>/orca-inspector-<hash>.json`, surviving `/reload`.
Open reuses an existing bound inspector. Status/close verify the runtime-issued
terminal handle, incarnation ID, and worktree ID before acting. Terminal titles
are not identity: login shells can change them. A stale/replaced terminal or Orca
restart fails explicitly rather than risking closing another terminal.

To recover a stale binding, confirm the old inspector is gone (or close that
specific inspector manually in Orca), then remove only its binding file and
reopen it. Do not remove a binding for a still-open inspector: that can create a
duplicate tab. CLI mutation errors are not retried automatically. A launch that
cannot be verified reports its terminal handle when available; inspect Orca
before retrying. Closing a terminal must report `ptyKilled: true` before the
binding is removed.

## Tests

```sh
/home/balauru/.pi/agent/npm/node_modules/.bin/tsx --test /home/balauru/.pi/agent/tests/orca-inspector.test.ts
# Optional live test, from an Orca-managed shell: opens sleep, checks status,
# then closes only the terminal created by this test. No subagent is launched.
/home/balauru/.pi/agent/npm/node_modules/.bin/tsx /home/balauru/.pi/agent/tests/orca-inspector-smoke.ts
```

API reference:
https://github.com/nicobailon/pi-subagents/blob/main/docs/extension-api.md#register-an-external-inspector
