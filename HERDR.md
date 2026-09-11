# Herdr Repository Management

## Repository boundary

Herdr is an independent Git repository managed by this parent repository as a submodule.

- Parent: `https://github.com/Balauruu/pi-config.git`
- Submodule name: `herdr`
- Path: `git/github.com/Balauruu/pi-interactive-subagents-herdr`
- Herdr remote: `https://github.com/Balauruu/pi-interactive-subagents-herdr`

The path is a narrow exception in the parent `.gitignore` and `git/.gitignore` rules for Pi-managed Git package caches. Do not replace it with a copied tree or a machine-specific symlink.

Pi's `settings.json` intentionally keeps the deployed Herdr package pinned as `git:github.com/Balauruu/pi-interactive-subagents-herdr@<commit>`. Keep that commit equal to the submodule commit before running Pi package reconciliation. The Herdr deployment command owns pin changes and rollback metadata.

## Clone and setup

Clone both repositories in one operation:

```bash
git clone --recurse-submodules https://github.com/Balauruu/pi-config.git
cd pi-config/git/github.com/Balauruu/pi-interactive-subagents-herdr
npm ci
```

For a parent clone created without `--recurse-submodules`:

```bash
git submodule sync -- git/github.com/Balauruu/pi-interactive-subagents-herdr
git submodule update --init --recursive -- git/github.com/Balauruu/pi-interactive-subagents-herdr
```

For an existing clone that already has an independent Herdr checkout at the exact path, first confirm its work is preserved and its HEAD matches the parent gitlink. Then register it without moving or copying the source tree:

```bash
git -C git/github.com/Balauruu/pi-interactive-subagents-herdr status --short --branch
git submodule init -- git/github.com/Balauruu/pi-interactive-subagents-herdr
test "$(git -C git/github.com/Balauruu/pi-interactive-subagents-herdr rev-parse HEAD)" = "$(git ls-tree HEAD git/github.com/Balauruu/pi-interactive-subagents-herdr | awk '{print $3}')"
git submodule update --init --recursive -- git/github.com/Balauruu/pi-interactive-subagents-herdr
```

If the commits differ, do not run the final update command until the child branch or uncommitted work has been preserved. Git may check out the parent-recorded commit.

## Update

To restore Herdr to the commit recorded by the parent:

```bash
git submodule update --init --recursive -- git/github.com/Balauruu/pi-interactive-subagents-herdr
```

To advance Herdr deliberately:

1. Fetch and check out the intended Herdr branch or commit inside the submodule.
2. Run the Herdr verification commands from the submodule root.
3. Use `scripts/deploy-active-package.ts` in Herdr to update the parent `settings.json` pin through its compare-and-swap and rollback workflow.
4. Record the new gitlink in the parent with `git add git/github.com/Balauruu/pi-interactive-subagents-herdr`.
5. Confirm the parent gitlink, Herdr HEAD, and deployed package pin are the same commit.

Do not run a Pi package update while Herdr HEAD intentionally differs from the deployed pin. The pinned-package updater may reset the checkout to the configured commit.

## GSD tasks

The parent GSD preferences declare this repository as `herdr`:

```yaml
workspace:
  mode: parent
  repositories:
    herdr:
      path: git/github.com/Balauruu/pi-interactive-subagents-herdr
```

A Herdr task must use `targetRepositories: ["herdr"]`. Its files and verification command are relative to the Herdr root:

```text
files: ["pi-extension/subagents/index.ts", "test/lifecycle.test.ts"]
verify: node --test test/lifecycle.test.ts
targetRepositories: ["herdr"]
```

Do not use `git/github.com/Balauruu/pi-interactive-subagents-herdr/test/...` or `npm --prefix git/github.com/Balauruu/pi-interactive-subagents-herdr ...` in that task contract. GSD host verification changes its working directory to the declared repository root.

## Verification

From the parent repository:

```bash
git status --short --branch
git submodule status --recursive
git -C git/github.com/Balauruu/pi-interactive-subagents-herdr rev-parse --show-toplevel
git -C git/github.com/Balauruu/pi-interactive-subagents-herdr status --short --branch
test -r git/github.com/Balauruu/pi-interactive-subagents-herdr/package.json
```

From the Herdr repository root:

```bash
npm test
node --test test/deploy-active-package.test.ts
```

Live integration tests require the explicit opt-in and model configuration documented in the Herdr `README.md`. They are not part of routine offline verification.
