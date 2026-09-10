---
name: efficient-development
description: applies development and orchestration defaults for scoped coding work. Proportional mechanisms, semantic verification, and independent delegation. Use when implementing, fixing, refactoring or coordinating coding subagents.
---

# Efficient Orchestration

Apply these as defaults, not mandatory process. Explicit task requirements and the nearest repository guidance take precedence.

## 1. Develop from existing authority

Before editing:

1. Identify the authoritative requirements, observable final state, scope boundaries, invariants, and any material missing information or authority.
2. Locate the deepest existing owner of the behavior.
3. Read the smallest relevant flow, including callers of the intended seam, before deciding where to change it.
4. Declare the smallest expected write set, acceptance predicates, the authoritative check for each, and a stopping condition.
5. Baseline each predicate as satisfied, failing, or uncheckable. If all pass, return a verified no-op.

Keep this contract proportional. A small reversible task may need only one sentence plus its owning check. Ask one smallest question only when missing information or authority would change the correct result and cannot be resolved from existing sources.

Keep each change centered on one production seam. Split independent seams before implementation.

Make the smallest reversible semantic change in the owner. Do not broaden behavior or refactor neighboring code.

Keep one canonical source for each fact or invariant. Query or derive from that source instead of adding independently editable mirrors, catalogs, manifests, or configuration. Add derived state only when it has a concrete consumer, an authoritative source, and a defined rebuild or invalidation path.

## 2. Keep mechanisms proportional

Do not add a fingerprint, secondary identity, cache, custom validator, abstraction, registry, compatibility layer, migration, retry loop, or orchestrator without a concrete requirement the existing owner cannot satisfy.

Before adding such machinery, state briefly:

1. the missing guarantee;
2. the observed failure, threat, or boundary requiring it;
3. why the existing owner cannot provide it;
4. who owns lifecycle, invalidation, or recovery;
5. the focused check proving the guarantee.

If these cannot be stated, do not add the mechanism.

Prefer repository-relative paths and named references and avoid the use of hashes or digests.

Do not introduce speculative interfaces, plugins, aliases, migrations, or backward compatibility for hypothetical future consumers. Add them only for a concrete second variant or compatibility obligation.

## 3. Verify outcomes, not proxies

Test semantic behavior through the owning or public interface. Avoid bytewise, fingerprint, source-text, file-list, reference-consistency, or snapshot assertions unless that exact representation is the contract.

A successful tool call, mutation response, or diff is not completion. After the final mutation, freshly re-observe every material predicate against the resulting artifact or authoritative state. For reversible local changes, collect the changed-resource diff and focused owning check. For stateful or ambiguous writes, require an authoritative readback or operation receipt.

During iteration, run the smallest relevant owning check. Reserve broad suites and project-wide analyzers for final validation or evidence-backed failures. Run required broader package or project checks once before completion when repository guidance requires them or the change crosses a real boundary.

For objective or material changes, use the strongest affordable verifier that does not merely repeat the producing action, such as an existing owning-interface test on the final artifact, a clean build or type check, a differential or property check, or independent artifact review. Same-model or subagent critique may identify candidate defects, but is not the sole acceptance gate.

Passing tests is evidence, not proof of correct scope. Inspect the final diff for unrelated files, behavior, duplicated authority, and evaluator changes. If tests or evaluators changed, map each change to an acceptance predicate and verify production behavior separately; a weakened acceptance surface cannot prove completion. Put optional cleanup or refactoring in a separate task.

## 4. Orchestrate only independent work

Use one scoped writer in the current checkout by default. Delegate only distinct read-only questions or disjoint mutation seams where parallelism has a concrete benefit.

Each delegation must define:

- goal;
- scope and exclusions;
- authoritative inputs;
- writable paths;
- deliverable;
- stopping condition.

Do not allow nested delegation unless the task explicitly requires another orchestration layer.

Parallel writers require exclusive path ownership or isolated worktrees with an explicit base revision. Verify working directory, branch, and repository status before mutation and collection.

The lead owns decisions, integration, and final verification. Subagents return evidence, changes, contradictions, and gaps rather than an unreviewed final decision.

Classify each blocker before recovery as a contract or precondition error, model decision, transient tool failure, environment or state drift, ambiguous commit, or failed semantic postcondition. Correct contract or model errors from fresh evidence; retry only transient read-only or idempotent calls within a fixed budget; re-observe after state drift; never replay an ambiguous non-idempotent write. When an action recurs without material state delta, allow one diagnostic observation and one materially different repair, then stop.

Account for every delegated result or disclosed failure, reconcile conflicts, and stop when the acceptance condition is satisfied.

## Completion gate

Report one terminal status:

- `completed`: every material acceptance predicate freshly passes;
- `failed`: a material predicate is observed failing after bounded repair;
- `indeterminate`: a mutation may have happened but authoritative state cannot establish it;
- `unverified`: an artifact or action exists but the required final check could not run.

Name partial progress or a blocked condition and the exact missing predicate, input, authority, or tool when relevant. Missing proof never becomes `completed`.

A completion receipt names the touched resources, fresh predicate and verifier results, required broader checks, and anything unrun. Finish as `completed` only when:

- the requested final state is satisfied at the deepest existing owner;
- each added mechanism passed the proportionality test;
- focused semantic checks and any required independent verifier pass;
- every changed resource maps to an acceptance predicate, with no unrelated scope, duplicated authority, or weakened evaluator;
- every delegated result or failure is accounted for;
- required broader verification is complete.
