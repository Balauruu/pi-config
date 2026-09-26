---
name: Explain-everything
description: Explain the project from architecture to details
placement: prepend
order: 10
---
Use /skill:show-me to explain the entire project we're in, moving from the big picture to implementation details. Start with the project’s purpose and overall architecture. Then explain each major subsystem, its responsibilities, key files and interfaces, and how data and control flow between the frontend, API, storage, jobs, analysis, and external integrations. Walk through the main user workflows end to end, followed by the important contracts, tests, setup requirements, and known limitations. Use concise diagrams and code-shape sketches where they make the relationships easier to understand. Make this comprehensive rather than a brief overview. Ground explanations in the repository’s source and documentation, cite the relevant files, and distinguish implemented behavior from plans or inferred relationships.

You may `graphify` if present in the project to navigate the project, but verify graph claims against the source before presenting them as facts.