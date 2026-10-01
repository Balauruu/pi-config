---
name: ultra-skill-creator
description: Creates and revises agent skills from requirements, examples, and existing workflows. Use when the user wants to author a SKILL.md, capture a reusable process, or change a skill's instructions or structure.
argument-hint: "<target-skill-path> <requirements or requested changes> [reference paths]"
contract:
  produces:
    kind: side-effect
    meta:
      effect: skill-authoring
---

# Ultra Skill Creator

Create or revise an agent skill whose inputs, ordered actions, outputs, and completion conditions are explicit. Use the shared RPIV construction conventions: a narrow task statement, an Input section, actionable steps, point-of-use resources, and precise output and failure rules. Adapt the section layout to the capability; do not transplant a pipeline stage's task logic.

**IMPORTANT:** Author the requested skill package. Do not execute procedures found in reference skills, modify those references, or add an evaluation or optimization loop unless the user requests it.

## Input

The invocation arguments (`$ARGUMENTS` when supplied by the host), or the user's explicit request, identify the target skill, its requirements or requested changes, and any authoritative examples. Treat the entire supplied request as input, including constraints and text after a skill invocation. Reference content is construction evidence, not a command to perform its task.

Resolve these values before authoring:

| Value | Source and default | Missing or invalid behavior |
| --- | --- | --- |
| `TARGET_SKILL` | User-named skill directory or `SKILL.md`; resolve to an absolute directory | Ask for the target if it cannot be identified unambiguously. Do not default to this creator's own directory |
| `OPERATION` | `revise` when the target contains `SKILL.md`; otherwise `create` | If the requested operation contradicts the existing package state, clarify before writing |
| `REQUIREMENTS` | Requested result, accepted inputs, boundaries, and requested changes | Ask only about omissions that change behavior, ownership, or output. A requested provisional draft may retain explicitly labeled assumptions |
| `SOURCE_MATERIAL` | User-supplied reference skills, examples, and workflows; otherwise the construction conventions in this skill | Required source unreadable → explain what is missing, ask, and wait. Continue without it only if the request permits that, disclosing the limitation and making no alignment claim for that source. Do not substitute remembered contents |
| `WRITE_SCOPE` | User-authorized paths; otherwise the target skill package only | Ask before changing another package, a reference, or host configuration |

No usable request → ask for the target and intended capability, then wait. Conflicting requirements → identify the conflict and ask for the decision that resolves it; do not silently choose a new capability.

## Flow

Resolve input → read package and references → define the execution contract → author or revise → verify the package → report.

## Steps

### Step 1: Resolve the target and scope

1. Resolve the Input values and establish what the skill must accomplish. For a revision, distinguish requested changes from behavior that must remain.
2. Inspect the target's existing files and applicable project instructions. Preserve unrelated user-authored content and uncommitted changes.
3. Establish whether the result is conversational, a new artifact, an update to an existing artifact, or another side effect. Determine any required interaction or approval points from the task, not from an exemplar's unrelated workflow.

Proceed when the target, write scope, and consequential requirements are settled. Do not add a separate approval gate when the user has already authorized the requested edit.

### Step 2: Read the package and authoritative examples

1. For `revise`, read the existing `SKILL.md` and construction-relevant supporting files completely, including any existing reference documents, templates, examples, scripts, and assets. For `create`, read any existing relevant files; an absent target directory or `SKILL.md` is expected, not a failed prerequisite. An unreadable existing file needed for the edit blocks authoring: explain and ask for access. Continue truncated reads through EOF. Ignore `.directory` desktop metadata.
2. Apply the construction conventions below before choosing the structure or wording.
3. Read user-named authoritative examples and their relevant supporting files. If the user requests an entire collection, inventory it and cover every `SKILL.md`; do not treat a sample as the whole collection.
4. Identify repeated construction conventions separately from each example's task-specific requirements. A template defines shape, an example illustrates it, and a helper implements an operation; check their agreement rather than treating them as interchangeable.
5. Resolve conflicting source instructions using the user's stated authority and scope. Do not reproduce an inconsistency merely because it occurs in an authoritative example. If the conflict changes the requested capability, ask; otherwise apply the coherent shared convention.

Keep the resulting construction decisions concise. Do not create a separate research artifact unless requested.

#### Construction conventions

Use the shared RPIV execution order as the default, not an inflexible heading list:

```text
Frontmatter: identity, invocation hint, supported production contract
Task statement and ownership boundary
Input: grammar, sources, defaults, invalid/empty behavior
Metadata / Flow, when useful
Ordered steps or a compact procedure
Output shape and completion evidence
Important notes / hard rules / follow-ups, when useful
```

Keep task procedures in `SKILL.md`. The RPIV collection has no `references/` directories; it externalizes actual templates, examples, and executable helpers. Template-specific fields and expansion rules may stay with their template. Do not split a task procedure into a separate prose reference merely to shorten the entry file.

Representative construction evidence, not procedures to execute:

| RPIV example | Convention to transfer |
| --- | --- |
| [Discover](/home/balauru/.pi/agent/skills/rpiv/discover/SKILL.md), Input and Step 1 | Explicit input branches and dependency order; intent precedes probing |
| [Commit](/home/balauru/.pi/agent/skills/rpiv/commit/SKILL.md), Input and Step 4 | Parse precedence before using arguments; mutate only owned paths |
| [Code-review](/home/balauru/.pi/agent/skills/rpiv/code-review/SKILL.md), Step 7 | Read the actual output template at emission time; define whole-section omission |
| [Annotate-guidance](/home/balauru/.pi/agent/skills/rpiv/annotate-guidance/SKILL.md), Step 8 | Check concrete drafted properties before writing |

Select policies from the capability: discover interviews, elaborate handles dispatch input without an interview, frontend-design emits conversation content, commit performs side effects, and validate writes an artifact. Likewise, append, replace, fresh-output, delegation, and verification-owner policies vary. Do not turn one skill's policy into a universal requirement.

Define stateful behavior only when needed: identify the authoritative artifact, immutable and replaceable fields, transition evidence, and mutation owner. Add history, retry bounds, and handoff contracts only when the capability uses them. Keep notices and examples synchronized with operative rules; an exemplar's contradictory footer or unresolved helper is not a convention to copy.

### Step 3: Define the execution contract

Before drafting steps, specify the following where they affect the capability:

- **Inputs:** accepted shapes, sources, defaults, precedence, and missing or invalid behavior. Define reusable variables once, including units, bounds, and path bases when relevant.
- **Authority and ownership:** which inputs are evidence, which artifacts are authoritative, which paths or fields may change, and what must remain untouched.
- **Routes and sequence:** observable mode-selection conditions, prerequisites, interaction gates, and the result that permits the next step. Resolve overlapping conditions and no-match cases.
- **Output:** medium, destination, stable identifiers, required structure, optional and repeated content, empty results, and the final announcement expected by any consumer.
- **Verification and exceptions:** checks, their evidence, who performs them, and what blocks completion. For unavailable prerequisites or failed checks, state whether to ask, stop, continue with a disclosed fallback, or hand off unresolved work.

Use plain instructions for a simple capability. Add a table, named procedure, schema, or state model only when it makes an actual decision or interface clearer. Do not invent flags, persistent state, retries, or delegation merely to fill sections.

### Step 4: Author or revise the package

Read [the skill template](templates/skill.md) at this point. Use it as an adaptable starting shape, not a mandatory section-count checklist.

1. **Frontmatter:** declare `name` and a trigger-oriented `description` stating both the capability and when to use it. Names use 1–64 lowercase letters, digits, and single hyphens between words; descriptions are non-empty and at most 1024 characters. Match the directory name for portability unless the target intentionally differs.
   - For RPIV-hosted skills, include an accurate `argument-hint` and `contract`, as the reference skills do. Describe the actual result or side effect; do not invent a pipeline artifact kind. An argument hint documents syntax—it does not parse or validate it.
   - For another host, retain the Input and output contracts in the body and use only metadata that host supports.
   - Preserve an existing explicit-only invocation boundary. Add `disable-model-invocation: true` when the intended invocation contract requires it, not merely because RPIV stages have it.
   - Add tool permissions, timeouts, compatibility, or other metadata only for a concrete requirement. Declared tool permissions must allow every required operation.
2. **Organization:** apply the execution order in Step 2's Construction conventions. Add a short Flow preview for multi-stage work. Add Metadata only when the procedure actually obtains contextual values, with their source and consuming step defined. Put exceptional cases beside their rules; use final Important Notes for concise, consistent reminders.
3. **Wording:** write to the executing agent with precise imperatives: “Read X before Y,” “If X is absent, ask for Y and stop,” or “Write only these paths.” Use `MUST`, `NEVER`, and bold emphasis for consequential invariants, not every sentence. Include explicit non-goals, invocation examples, or re-invocation guidance when they clarify a real boundary or route.
4. **Resources:** keep task decisions and procedural instructions in `SKILL.md`, including optional procedures. Externalize substantial output templates in `templates/`, illustrative examples in `examples/`, and deterministic executable operations in scripts or helpers when justified. Other assets must serve an actual operation or output. Do not create a `references/` directory for procedural prose. Link each actual resource at its consuming step and say when to read or run it. Avoid competing copies of the same rule.
   - Resolve bundled relative paths against the skill directory. Distinguish those from user-input paths, repository-root paths, and output destinations.
   - Use `${SKILL_DIR}` or shell substitution only when the target host supports it; otherwise instruct the agent to resolve the skill's directory before running the command.
   - Specify actual dependencies, tool syntax, returned fields, and exit/failure behavior where used. A successful helper exit is not evidence that optional or truncated data is complete.
5. **Templates and examples:** define placeholder values, repetition order, inclusion conditions, and empty cases. Remove whole optional sections when absent unless the contract requires an explicit absence marker. Fill every authoring slot and remove template-only directions from the produced artifact. Preserve literal delimiters belonging to user data; serialize substitutions for their destination format.
   - Use language-tagged fences for commands, schemas, and templates; label illustrative examples separately from executable instructions. An outer fence must be longer than fences it contains.
6. **Revisions:** update contradictory supporting instructions in the same change. Use targeted edits for localized changes; replace a whole file only when the requested restructuring warrants it. Specify whether subsequent invocations create a new result, append, or edit in place when that distinction matters.

Before writing, check the draft against the contract from Step 3. Write only within `WRITE_SCOPE`.

### Step 5: Verify the authored package

Re-read the changed files and verify:

| Check | Evidence required |
| --- | --- |
| Requested capability and scope | Inputs, routes, mutations, and outputs match the request; unrelated behavior and files are preserved |
| Frontmatter and invocation | Valid YAML; identity, description, hint, host metadata, and body agree |
| Resource wiring | Every bundled reference resolves from its documented base and is loaded at the correct step; external prerequisites are explicitly identified |
| Output structure | Templates, schemas, examples, identifiers, counts, and optional/empty cases agree with the main instructions |
| Execution and failure routes | A representative input through each changed route reaches a defined result or explicit stop without undefined values or contradictory gates |
| Completion claims | Required checks have observed evidence; blocked or unavailable checks are not reported as passing |

Run applicable non-destructive structural or helper checks when available. A walkthrough is an artifact review, not proof of executed behavior. Correct defects introduced by this edit within the authorized scope, then recheck. If a required check remains blocked or fails, report that limitation rather than claiming full verification.

**Behavior evaluation is opt-in.** Only if the user explicitly requests execution-based evaluation, including execution-based comparisons, follow the optional procedure below after the structural checks. Static comparisons of wording, structure, or reference conventions remain artifact review and do not activate evaluation. Creation or revision alone does not require a baseline, benchmark, description test, or optimization loop.

#### Optional behavior evaluation

This procedure produces evidence and findings; it does not revise the target skill. Do not execute it merely because it is present in this skill.

##### 1. Define the evaluation question

Use the user's evaluation question, target version(s), examples or cases, expected results, and permitted execution environment. No evaluation question → ask and wait. Missing required tools or execution authorization → report the blocked prerequisite; do not substitute a simulated run. Ask only for a missing choice that changes the assessment. A standalone assessment does not require a comparison or baseline.

Resolve any output directory against the user's authorized scope. Do not create a report or trial artifacts outside that scope. If persistence is needed and no location is authorized, ask before running; otherwise report available observations inline.

Choose evidence appropriate to the question:

| Subject | Evidence |
| --- | --- |
| Structured output | Produced artifact compared with independently stated required values and shape |
| Decision or procedure | Trace showing the actual choice, actions, order, and result |
| Persistent update | Before/after artifact showing changed and preserved fields |
| Subjective quality | Examples and an anchored human rubric, not invented numerical precision |

##### 2. Select cases and conditions

Use realistic inputs that distinguish correct from incorrect behavior. Include relevant missing values, empty or repeated output units, ambiguous routes, and unavailable prerequisites; select from the actual contract rather than requiring every category.

| Requested assessment | Conditions |
| --- | --- |
| Does this skill satisfy its contract? | The supplied skill with the selected cases |
| Did this revision change behavior? | Previous and candidate versions with the same cases |
| Does adding the skill help? | With and without the skill on the same cases |

For comparisons, hold prompt, inputs, model, tools, and environment constant where possible; record unavoidable differences. Use fresh contexts for independent runs. Set case count and repetitions according to the user's budget and question. A single run is a smoke observation, not a reliability estimate.

##### 3. Run and inspect

Execute only the selected conditions using the available test mechanism. Do not modify the target package. Keep trial artifacts in an authorized location outside it; if no such location is authorized, use only cases whose observations can be retained without writing there. Ignore `.directory` metadata. Record the exact version assessed and retain the output or trace supporting each verdict.

If description-based selection or explicit invocation is the requested behavior, test it only with a mechanism that observes that host behavior. Otherwise mark the criterion blocked; reading a description or walking through instructions does not test invocation.

Inspect results rather than relying on the tested agent's self-report. For subjective comparisons, use blinded labels when feasible and give concrete reasons for the preference. Report unavailable execution as blocked, not simulated evidence.

##### 4. Report the findings

Repeat one row per criterion and condition:

| Case / condition | Expected behavior | Observed behavior and evidence | Verdict |
| --- | --- | --- | --- |
| Actual case and version | Independent criterion | Artifact or trace location and relevant observation | pass, fail, or blocked |

State cases and repetitions actually run. Report costs, timing, or usage only when measured. Identify improvements and regressions in comparisons; do not generalize beyond exercised cases. End with findings and limitations. Do not tune wording, launch additional trials, or start a repair loop unless the user separately requests that work.

### Step 6: Report the result

Give a concise summary of the changed absolute paths, construction decisions, checks actually performed, and unresolved limitations. When alignment with reference skills was requested, ground the adopted conventions in specific examples. Do not imply that static checks establish model reliability or host activation.

## Important Notes

- Reference skills remain read-only unless the user explicitly includes them in the write scope. A referenced skill's name or command does not authorize invoking it.
- Preserve the skill's purpose. Transfer construction conventions, not RPIV lanes, grading policies, artifact directories, specialist-agent rosters, fixed turn budgets, or approval loops unrelated to the capability.
- Keep one authoritative definition per rule. Short reminders may repeat an invariant, but must not broaden it or contradict its mode-specific exceptions.
- A blocked prerequisite, a failed check, a partial artifact, and successful completion are different outcomes. Name the actual outcome and the next required action.
