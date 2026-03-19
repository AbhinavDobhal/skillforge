# [PROJECT NAME] Constitution

**Version**: 1.0.0 | **Ratified**: [DATE] | **Last Amended**: [DATE]

---

## Purpose

This constitution defines the non-negotiable principles that govern how this project is built. It is the source of truth for all technical, architectural, and process decisions. When a principle conflicts with convenience or short-term speed, the principle wins.

---

## Core Principles

### I. [PRINCIPLE NAME]
<!-- Example: "Test-First" or "Library-First" or "API Contract Before Implementation" -->

[Describe the principle in 2–4 sentences. Be specific and non-negotiable.]

<!-- Example:
Every feature must have failing tests before implementation begins.
Red-Green-Refactor cycle is mandatory.
No code ships without test coverage for the happy path and at least one error case.
-->

### II. [PRINCIPLE NAME]

[Describe the principle.]

### III. [PRINCIPLE NAME]

[Describe the principle.]

### IV. [PRINCIPLE NAME]

[Describe the principle.]

### V. [PRINCIPLE NAME]

[Describe the principle.]

---

## Development Standards

**Code Style**: [e.g., Prettier + ESLint with project config; no manual formatting debates]

**Branching**: [e.g., feature branches from `main`; squash merge; no direct pushes to `main`]

**Testing Gate**: [e.g., all tests must pass before merge; coverage must not decrease]

**Review**: [e.g., minimum 1 approving review; author cannot approve their own PR]

**Dependency Policy**: [e.g., no new dependencies without documented justification]

---

## Quality Gates

Before merging any feature:

- [ ] Tests written and passing
- [ ] No new lint errors
- [ ] Performance targets verified (if applicable)
- [ ] Security review passed (if touching auth, payments, or user data)
- [ ] Documentation updated

---

## Governance

- All amendments require updating this file with a version increment
- MAJOR version: removing or redefining a core principle
- MINOR version: adding a new principle or section
- PATCH version: clarifications, wording fixes
- Constitution supersedes all other practices; conflicts are resolved here, not in PRs
