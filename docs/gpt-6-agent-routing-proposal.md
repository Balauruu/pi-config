# GPT-6 model routing proposal for Pi agents

Research date: 2026-09-26. **Proposal only:** no live agent settings or frontmatter were changed.

## Scope and decision

This covers the 22 user agent definitions in `/home/balauru/.pi/agent/agents/` and the four additional bundled roles (`delegate`, `evidence-auditor`, `oracle`, `reviewer`) configured in `/home/balauru/.pi/agent/settings.json`. It does not include `slice-verifier` or `web-search-researcher`: those exist in `/home/balauru/.pi-profiles/rpiv/agents/` but have no matching live user agent definition. The user agents named `scout`, `worker`, and `researcher` shadow bundled definitions of the same names; the recommendations below follow the **user** prompts for those roles. The four additional bundled role definitions are in `/home/balauru/.pi/agent/npm/node_modules/pi-subagents/agents/`.

**Adopt as defaults after a small local trial:** Luna/medium for narrow discovery or mechanical enumeration; Sol/medium for multi-file interpretation and synthesis; Sol/high for consequential code changes, adversarial review, and source verification; Astra/high for the rare high-context `oracle`. Use per-run escalation for unusually difficult assignments instead of paying for `max` or Astra on every invocation. All proposed models are in the GPT-6 family.

## Evidence and limits

- [OpenAI's GPT-6 model guidance](https://developers.openai.com/api/docs/guides/latest-model?model=gpt-6-sol) positions Astra for the hardest end-to-end work, Sol for demanding reasoning, and Luna for efficient repeatable work. Its [model comparison](https://developers.openai.com/api/docs/models/compare) describes Sol as built for complex coding and agentic workflows and Luna as focused/high-volume. Astra supports `low` through `max`; Sol and Luna additionally support `none` ([Astra](https://developers.openai.com/api/docs/models/gpt-6-astra), [Luna](https://developers.openai.com/api/docs/models/gpt-6-luna)). The [September 22 OpenAI announcement on its forum](https://community.openai.com/t/announcing-gpt-6-sol-and-gpt-6-luna-in-the-api-codex-and-chatgpt/1399925) links the requested [Sol/Luna launch article](https://openai.com/index/introducing-gpt-6-sol-and-luna/) and describes them as faster, more affordable descendants of Astra. **Access limit:** the launch article itself returned HTTP 403 and a browser challenge; I did not independently read its tables. I therefore do not treat search-generated summaries of that article as primary evidence for particular benchmark scores.
- [Official standard API prices](https://developers.openai.com/api/docs/pricing?tab=suite), USD per million input/output tokens: Luna **$0.10/$0.50**, Sol **$2/$10**, Astra **$10/$50**. That is a 20× Sol/Luna and 5× Astra/Sol *per-token* gap, not a per-agent-run estimate. Cache hits, cache writes, reasoning tokens, tools, output lengths, and long-context surcharges affect actual cost. Subscription/Codex usage may not follow API prices.
- [Artificial Analysis's September 2026 assessment](https://artificialanalysis.ai/articles/gpt-6-sol-and-luna-push-the-cost-efficiency-frontier) finds mixed quality changes despite sharply improved cost efficiency: in its **Codex-harness Coding Agent Index**, Sol/max scores 57 and Luna/max 41. Luna loses ground against its predecessor on code-agent tasks; Sol gains modestly. The same article reports regressions in professional-work evaluations, often from shorter deliverables that omit rubric elements. Its [Coding Agent Index methodology](https://artificialanalysis.ai/methodology/coding-agents-benchmarking) averages DeepSWE v1.1, Terminal-Bench 4.0, and SWE-Atlas-QnA, with three attempts per task. It evaluates agent variants, not these exact local Pi prompts.
- Within a separate [Artificial Analysis Intelligence Index comparison at **max**](https://artificialanalysis.ai/models/comparisons/gpt-6-luna-vs-gpt-6-sol), Luna/Sol score **37/48** and **13%/44%** on Terminal-Bench 4.0, at **$0.07/$1.06** per Intelligence Index task; [Sol/Astra at max](https://artificialanalysis.ai/models/comparisons/gpt-6-sol-vs-gpt-6-astra) score **48/53** and **44%/59%**, at **$1.06/$3.26** per task. Those are *Intelligence Index* runs, distinct from the Coding Agent Index above. They suggest reserving Sol/Astra for tasks involving complex tool use and expensive errors; they do not prove a particular agent will pass.
- Effort materially changes both quality and consumed tokens even though token *rates* stay fixed. Artificial Analysis reports [Sol medium/high](https://artificialanalysis.ai/models/comparisons/gpt-6-sol-medium-vs-gpt-6-sol-high) Intelligence Index **40/43**, about **$0.25/$0.37** per task, and [Luna medium/high](https://artificialanalysis.ai/models/comparisons/gpt-6-luna-medium-vs-gpt-6-luna-high) **29/32**, about **$0.02/$0.03**. [Luna low/medium](https://artificialanalysis.ai/models/comparisons/gpt-6-luna-low-vs-gpt-6-luna-medium) scores **21/29**, with a marked automation-workflow gap; `low` is therefore not the blanket default even for search roles. Effort/quality curves and costs depend on the evaluation; `max` is not automatically optimal.

**Interpretation:** these are vendor descriptions, independent benchmark observations, and role-based *inferences*, respectively. They are not a head-to-head A/B test in this Pi installation. Do not equate differently named benchmark versions, harnesses, or index costs; do not treat the three models' identical official context-window specifications as evidence of identical long-context comprehension. There is no local quality, latency, or token-usage baseline for these agents yet.

## Proposed defaults

Read each row as `model / thinking`. Current values come from `/home/balauru/.pi/agent/settings.json`; the reason is based on the named agent's actual prompt and tool boundary in the directories above. Rows are grouped by workload, not by current price.

### Discovery, extraction, and structured comparison

| Agent | Current | Proposed | Why |
| --- | --- | --- | --- |
| `artifacts-locator` | Luna/high | **Luna/medium** | Finds and classifies artifact paths; explicitly does not analyze document contents. |
| `codebase-locator` | Luna/high | **Luna/medium** | Ranks likely files and directories; a bounded search/handoff, not implementation reasoning. |
| `integration-scanner` | Sol/high | **Luna/medium** | Enumerates references, dependencies, registrations, and subscriptions without explaining behavior. |
| `diff-auditor` | Sol/xhigh | **Luna/medium** | Mechanical diff-to-surface matching and pipe-delimited evidence rows; escalate if surfaces require semantic interpretation. |
| `scout` | Luna/max | **Luna/medium** | Fast selective reconnaissance and compressed handoff, not final design or edits. |
| `codebase-pattern-finder` | Sol/high | **Sol/medium** | Finds *and explains* analogous implementations; interpretation is deeper than path lookup but bounded. |
| `artifacts-analyzer` | Astra/medium | **Sol/medium** | Extracts decisions, conclusions, and cross-document insights; substantive synthesis, but not frontier-level end-to-end execution. |
| `codebase-analyzer` | Sol/xhigh | **Sol/medium** | Traces one implementation and its data flow with precise citations; scale effort per complexity. |
| `precedent-locator` | Luna/max | **Sol/medium** | Connects similar commits, follow-up fixes, and lessons; causal inference matters more than a pure grep. |
| `scope-tracer` | Astra/medium | **Sol/medium** | Traces 5–10 key files across research seams and frames questions; multi-file synthesis, not a final architecture decision. |
| `peer-comparator` | Luna/max | **Sol/medium** | Enumerates public-surface invariants and judges whether divergences are intentional; semantic comparison can affect acceptance. |

### Review, verification, and planning

| Agent | Current | Proposed | Why |
| --- | --- | --- | --- |
| `artifact-coverage-reviewer` | Sol/xhigh | **Sol/medium** | Checks that explicit verification intents appear in code or success criteria; bounded but omissions matter. |
| `artifact-code-reviewer` | Sol/xhigh | **Sol/high** | Adversarially reviews code fences against the live codebase for correctness and actionability. |
| `claim-verifier` | Luna/max | **Sol/high** | Independently adjudicates supplied findings against code; a false verification may propagate a bad decision. |
| `evidence-auditor` | Sol/(inherited bundled high) | **Sol/high** | Independently checks decision-critical research claims and their cited sources; preserve the effective high effort explicitly. |
| `reviewer` | Sol/xhigh | **Sol/high** | Bundled broad code/plan reviewer with evidence-backed findings; reserve xhigh for especially intricate diffs. |
| `planner` | Astra/medium | **Sol/high** | Produces executable architecture and implementation plans; serious synthesis, but routine plans do not justify Astra. |
| `researcher` | Luna/max | **Sol/medium** | Synthesizes sources into a brief; unsupported claims and missing qualifications matter. Use high per run for contested decisions. |
| `oracle` | Sol/xhigh | **Astra/high** | Rare high-context decision-consistency escalation across prior constraints; the only standing Astra assignment. Use xhigh per run only when high demonstrably misses material conflicts. |

### Implementation and general delegation

| Agent | Current | Proposed | Why |
| --- | --- | --- | --- |
| `doc-writer` | Luna/max | **Sol/medium** | Turns actual code behavior into accurate documentation and examples; higher than lookup, lower than hard implementation. |
| `git-ops` | Sol/high | **Sol/high** | Conflict resolution and rebase decisions can lose intent; retain a strong default. |
| `javascript-pro` | Luna/max | **Sol/high** | Production code, async/concurrency, performance and debugging require reliable multi-step tool use. |
| `tester` | Sol/xhigh | **Sol/high** | Tests need contracts, edge cases, and meaningful assertions; xhigh only for complex regressions. |
| `typescript-pro` | Luna/max | **Sol/high** | Advanced generics, type-level logic, and build integration are error-sensitive. |
| `worker` | Luna/max | **Sol/high** | General single-writer implementation with verification and escalation; Luna's coding-agent gap argues against a cheap default. |
| `delegate` | Luna/max | **Sol/medium** | Generic capability spans more than rote tasks; use explicit per-run Luna/medium for clearly narrow handoffs and Sol/high for hard writes. |

This is **26 configured roles**: 25 proposed on Luna or Sol, one (`oracle`) on Astra. `max` is deliberately absent from *defaults*, not forbidden for exceptional launches.

## How to use and validate this proposal

1. Keep `/home/balauru/.pi/agent/settings.json` unchanged until acceptance; when approved, change only the listed `subagents.agentOverrides.<name>.model` and `.thinking` fields. For `evidence-auditor`, add `"thinking": "high"` to its existing override. No frontmatter edits are needed.
2. Run 3–5 representative, identical, read-only tasks per role cluster (lookup, semantic tracing, review, research), and a few isolated implementation tasks for writer roles, under both current and proposed configurations. Hold task, repo revision, tools, timeout, and acceptance rubric fixed; record pass/fail, missed citations/invariants, time, tokens, and actual billed or quota cost. Run more repetitions for noisy cases. Do not test two writers in one shared checkout.
3. Promote only when the cheaper default meets the role's acceptance criteria. Example gates: locators return the known top files; analyzers cite the complete data flow; coverage reviewers find seeded omissions without spurious findings; workers pass tests and a fresh review. If Luna repeatedly misses a bounded semantic requirement, try Sol/medium before raising Luna to max. If Sol/medium misses a high-impact issue, test Sol/high; reserve Astra for escalations with demonstrable added value.
4. Recheck the [official model/pricing pages](https://developers.openai.com/api/docs/models) and the benchmark's version/methodology before future rerouting. Model routing is a default, not a substitute for task-specific model choice or verification.
