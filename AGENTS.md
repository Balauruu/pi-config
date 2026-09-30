# AGENTS.md

## Specs
- Operating system: CachyOS (Arch Linux);
- Shell tool: fish;

## Working agreement

- Preserve user-authored and uncommitted changes unless explicitly authorized to discard or overwrite them.
- Deliver only the requested scope. Do not add adjacent features or abstractions for hypothetical future requirements.
- Treat work as personal and non-shared unless stated otherwise. Prioritize requested functionality, correctness, and simplicity.
- Do not claim completion without evidence. Summarize completed work concisely.

<important if="you are running Python or installing Python dependencies">

`/usr/bin/python` is system-managed. Never install packages into it. Use the project's declared environment.

</important>

<important if="you are considering privacy or security analysis, hardening, or additional requirements">

Only introduce this work when explicitly requested or necessary to prevent a concrete unintended exposure or destructive action in the current task. Hypothetical concerns must not expand scope or drive implementation choices.

Do not disable existing safeguards or ignore explicit project requirements.

</important>

<important if="authorized work changes durable conventions, commands, or architecture">

Update the authoritative documentation in the same task.

</important>

<important if="you are making time-sensitive or external factual claims">

Verify with available web tools, prefer primary sources, and cite links.

</important>

<important if="the user asks about a library, framework, SDK, API, CLI tool, or cloud service">

<!-- context7 -->
Use Context7 MCP for current documentation, even for familiar technologies. Prefer it over web search for library documentation.

This includes API syntax, configuration, migrations, library-specific debugging, setup, and CLI usage. Do not use it for refactoring, scripts from scratch, business-logic debugging, code review, or general programming concepts alone.

1. Start with `resolve-library-id`, supplying the library name and documentation question. Skip resolution only when the user provides an exact `/org/project` library ID.
2. Select the best match using name and description relevance, snippet count, source reputation (High/Medium preferred), and benchmark score. Retry with alternate names or queries if results are unsuitable. Use version-specific IDs when the user specifies a version.
3. Call `query-docs` with the selected ID and a specific question scoped to one concept. Query distinct concepts separately unless their interaction is the question.
4. Base the answer on the fetched documentation.
<!-- context7 -->

</important>

## Communication

- Use plain, specific language and unambiguous domain terminology.
- Challenge incorrect assumptions directly and explain why.
- Avoid analogies, unsupported praise or agreement.
- Use numbered lists and headings when they improve navigation.
- The user reads the end first. Place the most important information there.

<important if="you are explaining structure, behavior, or alternatives">

Prefer a concise diagram, tree, pseudocode sketch, or diff when it makes
the explanation clearer than prose. Use the smallest useful view.

</important>

<important if="you are presenting three or more findings, decisions, options, risks, questions, or actions">

Assign each item a short reference code:
- Findings: F1, F2, …
- Decisions: D1, D2, …
- Options: O1, O2, …
- Risks: R1, R2, …
- Questions: Q1, Q2, …
- Actions: A1, A2, …

Create suitable prefixes for other categories. Preserve codes throughout the conversation. Do not add codes to short, simple answers.

</important>

<important if="you are referencing files, directories, or external sources">

- Show local paths as full absolute filesystem paths.

</important>

<important if="you are answering codebase questions or exploring project structure">

When the current project has a Graphify knowledge graph at `graphify-out/`:
- For codebase questions, first run `graphify query "<question>"` if `graphify-out/graph.json` exists.
- Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts.
- If `graphify-out/wiki/index.md` exists, use it for broad navigation.
- Read `graphify-out/GRAPH_REPORT.md` only for broad architecture review or when `query`, `path`, or `explain` do not provide enough context.
- Dirty graph files are not by themselves a reason to skip Graphify. Skip it only when the task concerns stale or incorrect graph output, or the user explicitly says not to use it.

</important>

<important if="you are modifying code in a Graphify-indexed project">

After modifying code, run `graphify update .` to keep the graph current.

</important>

