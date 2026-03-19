---
description: Document features, architecture decisions, and operational notes for teams
---

# /doc - Documentation Workflow

## Overview

Use this workflow to create or update project documentation so implementation decisions and usage are clear for developers, reviewers, and future maintainers.

## When to Use

- A new feature is implemented and needs docs
- Architecture or behavior changed significantly
- Setup or run instructions are unclear
- Team handoff or onboarding needs better guidance

## Workflow

### Step 1: Identify Documentation Scope

- What changed?
- Who is the audience? (developer, reviewer, operator, end user)
- Which docs need updates? (README, architecture, workflow docs, setup guides)

### Step 2: Gather Source of Truth

- Read code and config that represent current behavior
- Validate commands and paths in docs against actual files
- Remove stale claims and outdated counts

### Step 3: Write or Update Docs

- Keep docs specific and actionable
- Include examples for common tasks
- Prefer short sections and checklists for operational steps

### Step 4: Cross-Check

- Verify every command actually works
- Verify every referenced file exists
- Ensure examples match current implementation

## Output

- [ ] Documentation scope is defined
- [ ] Relevant docs are updated
- [ ] Stale information removed
- [ ] Commands and paths verified
