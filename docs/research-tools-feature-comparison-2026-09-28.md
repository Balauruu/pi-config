# Comparison of Three Deep-Research Tools

**Research date:** 2026-09-28. **Scope:** the two supplied Pi packages and the supplied GPT Researcher repository, plus linked first-party documentation and source. Three independent source reviews were conducted, one per product. The packages and repository were inspected, but none was installed or run.

## Executive summary

These tools overlap in planning research, gathering sources, and producing cited reports, but they are different kinds of software:

- **`pi-deep-research`** is a Pi package that combines a research skill, slash-command prompt, and a small extension exposing search, extraction, and checkpoint tools. Most of the workflow is model-directed by instructions. It is the most explicitly plan-and-review-oriented of the two Pi packages. [A1][A2][A4][A5]
- **`@lincoln504/pi-research`** is a more fully orchestrated research engine available as a Pi extension and as a CLI/Agent Skill/TypeScript SDK. It adds parallel researchers, specialized research tools, progress controls, and an optional local knowledge store. [B1][B2][B5][B6][B9][B11]
- **GPT Researcher** is a Python research library and self-hostable app/framework. Its notable breadth is configurable web retrieval plus local-document and hybrid research, with API/UI and MCP integrations. It is not simply another Pi extension. [C1][C3][C7][C10][C11]

**No overall quality winner is supported by the evidence.** There is no like-for-like evaluation of these three tools. Their reported depth settings, source counts, timing, and provider costs are not comparable measurements.

## Feature comparison matrix

**Evidence labels:** *Code-backed* means the reviewed source exposes the behavior; it does not mean this comparison executed it. *Documented* means the official prompt/docs describe it, but runtime behavior may depend on the model or deployment. *Not established* means the reviewed sources did not settle the point—not that the feature is absent.

| Dimension | `pi-deep-research` | `@lincoln504/pi-research` | GPT Researcher |
|---|---|---|---|
| **Product form** | Pi skill + `/research` prompt + extension. **Code/docs.** [A2][A3][A4] | Pi extension, standalone CLI/Agent Skill, and TypeScript SDK. **Code/docs.** [B2][B3][B4][B11] | Python library and self-hostable FastAPI app/UI, with MCP retriever/client integration. **Code/docs.** [C1][C3][C10][C11] |
| **Research flow** | Prompted plan approval → search/read → reflect and iterate → report. Four named depth presets: quick, standard, deep, exhaustive. **Documented workflow;** the extension implements tools and a rule-based checkpoint, not the whole research loop. [A5][A6] | Coordinator planning/search burst → parallel researcher rounds → routing and synthesis. Depth settings bound the number of researchers/rounds. **Code-backed orchestration.** [B5][B6] | Plans queries, gathers and filters context, then writes a report; deep research recursively expands branches and runs paths concurrently. **Code-backed.** Deep mode’s documented default breadth conflicts with the repository default. [C4][C5][C14] |
| **Search and retrieval** | Configurable provider chain with Tavily, Brave, and `agent-reach`; providers are tried sequentially and the first successful provider supplies results. Custom TypeScript providers are supported. **Code-backed.** [A2][A4][A8] | DuckDuckGo Lite via local browser workers; direct HTTP fetch is tried before Camoufox/Playwright scraping fallback. Also includes security-database, Stack Exchange, and YouTube-transcript tools. **Code-backed.** No separate search-provider API account is documented. [B5][B7] | Configurable retrievers include general web and scholarly sources, plus MCP and custom retrievers. **Code-backed.** Provider keys, optional packages, and quotas vary by selection. [C9][C10][C14] |
| **Source inputs** | Primarily web search and URL extraction in the reviewed package. A built-in local-document workflow was **not established** by the reviewed package sources. [A4][A5] | Web pages, selected focused sources, YouTube transcripts, and local file reads. **Code-backed.** Local reads are not the same as a persistent document corpus. [B5][B7] | Web, specified URLs, local documents, and hybrid local-plus-web research. Documented local formats include PDF, text, CSV, Excel, Markdown, PowerPoint, and Word; loaders/dependencies matter. **Code/docs.** [C1][C7][C8] |
| **Evidence and citations** | The skill asks for source-quality tiers, inline citations, contradictions, and gaps. The checkpoint calculates a verdict from model-supplied counts/confidence/answers; it does **not** verify the underlying sources or enforce that the model follows the verdict. **Prompt + code, not independent fact-checking.** [A4][A5][A6][A7] | Produces Markdown with normalized citation links, but the reviewed synthesis code does not verify every claim against retrieved text and can retain parsed links for pages that were not fetched. **Code-backed citation formatting, not claim verification.** [B8] | Tracks source URLs and has reference-list helpers; the inspected standard report-writing path does not mechanically validate citation correctness. **Code-backed source tracking; generated citation accuracy remains unestablished.** [C3][C4] |
| **Knowledge reuse** | A persistent cross-run knowledge store was **not established** in the reviewed package sources. [A2][A5] | Optional local LanceDB store with global/project scopes and hybrid vector+BM25 or BM25 retrieval. It can answer from stored material or seed live research with useful URLs; knowledge-first use is advisory. **Documented.** [B9] | Local documents and run context are supported. A persistent cross-run knowledge base comparable to B’s store was **not established** in the reviewed sources. [C7][C8] |
| **Human control and progress** | Plan approval is an instruction to the Pi model, not a separate confirmation gate in extension code. The checkpoint is deterministic over submitted values, but is skippable/model-dependent. [A4][A5] | Research progress and steering/cancellation are part of the documented Pi experience; standalone surfaces and defaults vary. [B2][B4][B5] | The app exposes progress/report interfaces; optional LangGraph examples add human oversight. This is not evidence that every default library run pauses for approval. [C11][C13] |
| **Output** | Skill/template instruct the model to write a structured Markdown report. The extension itself does not implement a report writer or citation validator, so saved-file behavior depends on the host agent. [A4][A5][A7] | Core result is Markdown. File export is configurable and documented as off by default; the SDK returns content and leaves writing to the caller. [B8][B10][B11] | Python API returns research/report content; app and integrations add report interfaces. Output formatting is configurable; formats depend on the selected app/example. [C1][C3][C13] |
| **Model/configuration** | Uses the model selected by the Pi host; configure search providers via environment/config or custom `.ts` providers. [A3][A4][A8] | Pi uses its configured session model; standalone/SDK use explicit model configuration. The SDK exports TypeScript source and may need a TS loader. [B3][B10][B11] | Configurable LLM providers, retrievers, report type, source URLs/domains, prompts, and tone. The current repository’s setup uses provider credentials; actual options depend on installed integrations. [C2][C3][C9][C15] |
| **Operational constraints** | Search availability/credentials depend on selected provider. Basic HTTP extraction may miss JavaScript-rendered pages and is capped at 8,000 words. [A4][A8] | Node `>=22.22.2`, a 100k+ context-window model per README, internet access, and a large first-use browser download are stated requirements; the project recommends residential internet due to bot blocking. [B2][B3] | Current README/metadata require Python `>=3.12`; older docs state lower floors. It is an operator-managed Python/provider stack, not a turnkey Pi package. [C1][C2][C6] |
| **Public performance/cost evidence** | Depth limits and time estimates are maintainer guidance, not an independent benchmark. [A6] | Researcher/round ceilings and “no search API quota” positioning do not establish quality, speed, or unlimited availability. LLM use still depends on model/auth and its cost. [B2][B6][B10] | Provider cost and runtime depend on model/retriever and configuration. No cross-tool normalized quality, latency, or cost result was found. [C4][C9] |

## Detailed analysis

### 1. The main difference is the level of orchestration

`pi-deep-research` is comparatively lightweight at the implementation layer: its extension registers `web_search`, `web_extract`, and `research_checkpoint`, while the skill tells the host Pi model how to plan, request approval, assess sources, iterate, and write the report. That makes the procedure legible and customizable, but also means plan approval, source analysis, citations, and file creation depend on model compliance. Its provider chain is failover-oriented rather than a way to merge independent providers’ result sets. [A4][A5][A8]

`@lincoln504/pi-research` implements more of the research loop as software. A coordinator plans and searches, researchers work in parallel, and later rounds can be routed or concluded before synthesis. It also has useful, specialized tools beyond general web browsing—security advisories, Stack Exchange, and YouTube transcripts—and a visible Pi progress/steering workflow. Its search path is distinctive: DuckDuckGo through local browser workers, with direct HTTP followed by browser-based scraping fallback. [B5][B6][B7]

GPT Researcher is broader as a developer platform. The Python API supports a reusable research/report flow; the repository also contains a self-hostable server and UI. The core can combine configured retrievers with web, user-specified URLs, and local documents. Deep research recursively expands branches and processes them concurrently. The extra flexibility comes with more deployment and provider configuration than a Pi package. [C1][C3][C4][C5][C7][C9][C11]

### 2. Citation output is not the same as verified research

All three can produce source-linked reports, but the reviewed sources do not establish that any of them reliably proves every claim from retrieved source text:

- In `pi-deep-research`, checkpoint thresholds operate over information the model submits; the extension does not reconcile those values with a recorded evidence set. The skill’s source-quality and citation requirements are instructions, not an independent validator. [A4][A5][A6]
- `pi-research` normalizes citation links and builds a cited-links section, but its synthesis code can retain parsed citations even where retrieval did not succeed. [B8]
- GPT Researcher tracks source URLs and offers reference helpers, while standard report writing delegates content to the model; the inspected path does not mechanically certify citation correctness. [C3][C4]

Treat citations from each as a useful audit trail, not proof of factual accuracy. If citation fidelity is a deciding requirement, test representative reports against the fetched pages.

### 3. Local research and reuse favor different tools

GPT Researcher has the clearest documented path for mixing a local document folder with web research, including a broad set of common document formats. `@lincoln504/pi-research` is notable for the opposite kind of local capability: an optional persistent LanceDB knowledge store that can be queried or used to seed later live research. Its ability to read local files should not be confused with that persistent store. For `pi-deep-research`, a built-in local corpus or cross-run store was not established in the inspected package sources; that is an evidence gap, not a claim that the host Pi agent cannot read files. [B7][B9][C7][C8]

### 4. Setup and documentation caveats

The Pi packages keep usage close to an existing Pi workflow, but `pi-research` has meaningful local-browser requirements and may be blocked by target sites. `pi-deep-research` relies on the chosen search provider; its extraction fallback is ordinary HTTP/HTML handling, not browser rendering. Its README describes depth-threshold overrides, while the extension contains hard-coded checkpoint thresholds; treat the configuration text as model guidance unless verified against the installed version. [A4][A6][A8][B2][B3][B5]

GPT Researcher’s current repository is more suitable when a Python API or self-hosted app is wanted, but check the exact release and interface before adopting it. As of this review, current repository metadata says Python 3.12+, while older official docs say 3.10+ (and another page says 3.11+). The published OpenAPI schema also describes routes that differ from those in the inspected current server code. Deep-research breadth defaults differ between the docs and repository config. These appear to be version/documentation drift, so use current package metadata and code rather than assuming older examples match the release being deployed. [C2][C6][C11][C12][C14]

`@lincoln504/pi-research` has smaller but relevant discrepancies too: its architecture page describes depths 1–3, while v1.7.2 supports opt-in depth 0; its README says no install scripts, while the published manifest declares lifecycle scripts. The package page, registry, and manifest agree on v1.7.2, but exact tarball-to-commit identity was not independently verified. [B1][B2][B3][B5][B12]

## Best-fit use cases

These are **evidence-based fit judgments**, not measured rankings:

- **Choose `pi-deep-research`** when the work already happens in Pi and a structured, user-visible plan/approval → research → report routine matters more than internal multi-agent execution or a persistent knowledge base. It is the most explicit about research phases and source/gap reporting, with the caveat that those behaviors depend substantially on the host model following instructions. [A2][A5][A7]
- **Choose `@lincoln504/pi-research`** when you want a Pi-native research engine with parallel researchers, specialized web/security/video tools, progress controls, and optional local knowledge reuse. First check the Node/context/browser requirements and whether the target sites work from the available network. [B2][B5][B6][B7][B9]
- **Choose GPT Researcher** when you need a Python library or self-hosted research app, especially to combine web research with a local document corpus or to plug in different retrievers/models. Confirm the specific release’s Python floor, API routes, provider configuration, and citation behavior before deployment. The repository itself cautions against treating it as an academic-paper research authority. [C1][C2][C3][C7][C9][C11][C12]

## Evidence limits and unresolved points

- No candidate was installed or run. Implementation labels are based on first-party source inspection; they do not establish runtime reliability.
- No independent, matched benchmark across the three was found. Reported timings, depth presets, source ceilings, and costs use different configurations or are maintainer guidance, so they are not ranked here.
- “Not established” in the matrix means the reviewed sources did not document or prove the feature. It must not be read as proof that the software cannot do it.
- Current defaults, versions, and integration details can change. The package listings and repository/docs were checked on the research date above; GPT Researcher’s current repo/docs show the most consequential version drift noted in this report.

## Sources

All sources below are first-party package listings, package artifacts, repositories, or official documentation, retrieved 2026-09-28. Mutable repository branch links are interpreted as they appeared on that date; the `pi-deep-research` code links are pinned to its v0.4.1 release commit, and `pi-research` artifact links are version-pinned to 1.7.2.

### `pi-deep-research`

- [A1] Pi package listing — supplied package entry and package information.
- [A2] v0.4.1 repository README — installation, intended uses, workflow overview.
- [A3] v0.4.1 package manifest — registered Pi skill/prompt/extension and package version.
- [A4] v0.4.1 extension source — search, extraction, checkpoint tools and provider resolution.
- [A5] v0.4.1 research skill — prescribed workflow, approval, report instructions.
- [A6] v0.4.1 research configuration — depth guidance, source tiers and checkpoint thresholds.
- [A7] v0.4.1 report template — report structure and output format.
- [A8] v0.4.1 provider-chain source — provider behavior and extraction fallback.

### `@lincoln504/pi-research`

- [B1] Pi package listing — supplied package entry.
- [B2] Published v1.7.2 README — install surfaces, workflow, operational guidance.
- [B3] Published v1.7.2 package manifest — version, Node engine, exports and lifecycle scripts.
- [B4] Published v1.7.2 Pi extension documentation — commands and integration.
- [B5] Published v1.7.2 architecture docs — orchestration, browser infrastructure and tool inventory.
- [B6] Published v1.7.2 deep-research orchestrator — parallel rounds and routing.
- [B7] Published v1.7.2 research-tool and scraper sources — supported tools and search/scraping behavior.
- [B8] Published v1.7.2 synthesis service — citation normalization and grounding behavior.
- [B9] Published v1.7.2 knowledge-store docs — scopes, retrieval modes, reuse.
- [B10] Published v1.7.2 configuration docs — model/provider configuration.
- [B11] Published v1.7.2 SDK docs — programmatic interface and export behavior.
- [B12] v1.7.2 changelog — opt-in quick-depth history.

### GPT Researcher

- [C1] Official repository README — project scope, features, limitations and setup.
- [C2] Current repository `pyproject.toml` — Python requirement and package metadata.
- [C3] Current repository Python API (`agent.py`) — library entry points and report-writing flow.
- [C4] Current repository researcher/deep-research implementations — standard and recursive workflows.
- [C5] Official Deep Research documentation — documented deep-mode controls and examples.
- [C6] Official pip-package / older getting-started documentation — package use and historical runtime requirement.
- [C7] Official local-documents documentation and README — local input formats and configuration.
- [C8] Official tailored-research documentation — user-supplied URL behavior.
- [C9] Current repository retriever and default configuration source — retriever/model options and defaults.
- [C10] Official MCP integration documentation — MCP retriever/client configuration.
- [C11] Current repository FastAPI server source — implemented server routes.
- [C12] Published OpenAPI specification — API schema, noted as differing from inspected current routes.
- [C13] Official LangGraph example — optional human-oversight/report-publishing integration.
- [C14] Current repository default configuration — deep-research breadth/depth/concurrency defaults.
- [C15] Current repository LLM provider implementation — supported provider configuration.

[A1]: https://pi.dev/packages/pi-deep-research?name=deep+research
[A2]: https://raw.githubusercontent.com/czhiming-maker/pi-deep-research/2f87a0844973f48cd32f21da32618fbe8bee4089/README.md
[A3]: https://raw.githubusercontent.com/czhiming-maker/pi-deep-research/2f87a0844973f48cd32f21da32618fbe8bee4089/package.json
[A4]: https://raw.githubusercontent.com/czhiming-maker/pi-deep-research/2f87a0844973f48cd32f21da32618fbe8bee4089/extension.ts
[A5]: https://raw.githubusercontent.com/czhiming-maker/pi-deep-research/2f87a0844973f48cd32f21da32618fbe8bee4089/pi-deep-research/SKILL.md
[A6]: https://raw.githubusercontent.com/czhiming-maker/pi-deep-research/2f87a0844973f48cd32f21da32618fbe8bee4089/references/config.md
[A7]: https://raw.githubusercontent.com/czhiming-maker/pi-deep-research/2f87a0844973f48cd32f21da32618fbe8bee4089/references/report-template.md
[A8]: https://raw.githubusercontent.com/czhiming-maker/pi-deep-research/2f87a0844973f48cd32f21da32618fbe8bee4089/src/chain.ts
[B1]: https://pi.dev/packages/%40lincoln504/pi-research?name=deep+research
[B2]: https://cdn.jsdelivr.net/npm/@lincoln504/pi-research@1.7.2/README.md
[B3]: https://cdn.jsdelivr.net/npm/@lincoln504/pi-research@1.7.2/package.json
[B4]: https://cdn.jsdelivr.net/npm/@lincoln504/pi-research@1.7.2/docs/PI-EXTENSION.md
[B5]: https://cdn.jsdelivr.net/npm/@lincoln504/pi-research@1.7.2/docs/ARCHITECTURE.md
[B6]: https://cdn.jsdelivr.net/npm/@lincoln504/pi-research@1.7.2/src/orchestration/deep-research-orchestrator.ts
[B7]: https://cdn.jsdelivr.net/npm/@lincoln504/pi-research@1.7.2/src/tools/index.ts
[B8]: https://cdn.jsdelivr.net/npm/@lincoln504/pi-research@1.7.2/src/orchestration/research-synthesis-service.ts
[B9]: https://cdn.jsdelivr.net/npm/@lincoln504/pi-research@1.7.2/docs/KNOWLEDGE-STORE.md
[B10]: https://cdn.jsdelivr.net/npm/@lincoln504/pi-research@1.7.2/docs/CONFIGURATION.md
[B11]: https://cdn.jsdelivr.net/npm/@lincoln504/pi-research@1.7.2/docs/SDK.md
[B12]: https://github.com/Lincoln504/pi-research/blob/bcebb2f20351a734a2033d0c6d19f985c8dd39e0/docs/CHANGELOG.md
[C1]: https://github.com/assafelovic/gpt-researcher/blob/main/README.md
[C2]: https://github.com/assafelovic/gpt-researcher/blob/main/pyproject.toml
[C3]: https://github.com/assafelovic/gpt-researcher/blob/main/gpt_researcher/agent.py
[C4]: https://github.com/assafelovic/gpt-researcher/blob/main/gpt_researcher/skills/researcher.py
[C5]: https://docs.gptr.dev/docs/gpt-researcher/gptr/deep_research
[C6]: https://docs.gptr.dev/docs/gpt-researcher/gptr/pip-package
[C7]: https://docs.gptr.dev/docs/gpt-researcher/context/local-docs
[C8]: https://docs.gptr.dev/docs/gpt-researcher/context/tailored-research
[C9]: https://github.com/assafelovic/gpt-researcher/blob/main/gpt_researcher/actions/retriever.py
[C10]: https://docs.gptr.dev/docs/gpt-researcher/retrievers/mcp-configs
[C11]: https://github.com/assafelovic/gpt-researcher/blob/main/backend/server/app.py
[C12]: https://gptr.dev/openapi.json
[C13]: https://docs.gptr.dev/docs/gpt-researcher/multi_agents/langgraph
[C14]: https://github.com/assafelovic/gpt-researcher/blob/main/gpt_researcher/config/variables/default.py
[C15]: https://github.com/assafelovic/gpt-researcher/blob/main/gpt_researcher/llm_provider/generic/base.py
