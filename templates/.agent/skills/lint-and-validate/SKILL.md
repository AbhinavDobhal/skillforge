---
name: lint-and-validate
description: "Code validation workflow for linting, type checks, formatting, and pre-merge quality gates. Use when checking implementation readiness, tightening code quality, or setting up validation steps. Triggers on keywords like lint, validate, typecheck, format, static analysis, readiness, ci checks."
---

# Lint And Validate

## Core Guidance

- Run the cheapest static checks first.
- Treat type errors and lint failures as design feedback, not only syntax issues.
- Keep validation commands deterministic and easy to reproduce locally.
- Prefer failing fast over long opaque validation pipelines.
