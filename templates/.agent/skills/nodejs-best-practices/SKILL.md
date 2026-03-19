---
name: nodejs-best-practices
description: "Node.js service design and runtime practices for reliability, async correctness, observability, and maintainability. Use when building backend services, refactoring handlers, or reviewing Node application structure. Triggers on keywords like nodejs, express, server, async, event loop, middleware, backend service, api server."
---

# Node.js Best Practices

## Core Guidance

- Keep request handlers thin and move business logic into testable modules.
- Handle async failures explicitly and centralize error mapping.
- Avoid blocking work in request paths.
- Use structured logging and clear startup/shutdown behavior.
