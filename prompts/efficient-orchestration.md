---
description: Execute a substantial task with parent-owned, context-efficient delegation
argument-hint: "[task]"
---
Execute ${ARGUMENTS:-the current task} as the root orchestrator.

- Read the request and canonical project sources before delegating.
- Delegate only when it saves work. Use at most two focused, read-only context agents for unresolved seams, and do not ask them to run builds or tests unless required by their task.
- Launch initial workers and reviewers with fresh context and a bounded task containing the necessary evidence. Resume the same worker for repairs.
- Keep one mutation-capable agent in the shared worktree. Parallelize only independent read-only work.
- Slice implementation around one production seam plus focused tests. Split independent seams before writing.
- During iteration, run the smallest relevant checks. Batch reviewer blockers, recheck only repaired findings, then perform one full-range closure review and final validation.
- Keep product, architecture, scope, and risk-acceptance decisions with the parent or user.
