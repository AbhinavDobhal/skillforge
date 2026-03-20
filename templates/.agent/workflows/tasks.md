---
description: Break a feature plan into actionable, dependency-ordered tasks
---

# /tasks - Task Generation

## Overview

Generate an ordered, actionable task list from a feature spec and plan. Tasks are grouped by user story so each story can be implemented and tested independently. Run this after `/project-plan`.

## When to Use

- After completing `/project-plan` for a feature
- When you need granular, executable work items
- Before `/implement` to know what to build step by step
- For estimating effort or assigning work

## Workflow

### Step 1: Load Context

Read the available documents (in priority order):
1. `specs/<feature>/spec.md` — user stories and requirements
2. `specs/<feature>/plan.md` — technical approach and architecture
3. Any data-model or contracts documents from the plan

### Step 2: Identify Phases

**Phase 1 — Setup** (shared infrastructure): project scaffolding, dependencies, config

**Phase 2 — Foundation** (blocking prerequisites): database schema, auth framework, base API structure — nothing else can start until this is done

**Phase 3+ — User Stories**: one phase per user story, ordered by priority (P1 first)

**Final Phase — Polish**: performance tuning, accessibility, error handling, documentation

### Step 3: Generate Tasks

For each task, include:
- **ID**: `T001`, `T002`, etc.
- **[P]** marker if it can run in parallel with other tasks (no shared files, no dependencies)
- **User story**: which story it belongs to (`US1`, `US2`, etc.)
- **Description**: specific action with file paths where known
- **Estimate**: time in hours or days

```
## Phase 2: Foundation

- [ ] T001 Create database schema — `prisma/schema.prisma`
- [ ] T002 [P] Setup authentication middleware — `lib/auth.ts`
- [ ] T003 [P] Configure environment variables — `.env.example`, `lib/config.ts`

## Phase 3: User Story 1 — Registration (P1)

- [ ] T004 POST /api/auth/register endpoint — `app/api/auth/register/route.ts`
- [ ] T005 [P] Registration form component — `components/auth/RegisterForm.tsx`
- [ ] T006 Email verification service — `lib/email.ts`
- [ ] T007 [P] Registration unit tests — `__tests__/auth/register.test.ts`
```

### Step 4: Validate the Task List

Before delivering:
- Every user story from the spec has at least one task
- All P1 story tasks come before P2 story tasks
- No task has an unresolved dependency on a later task
- File paths match the architecture defined in the plan

### Step 5: Handoff

Suggest next steps:
- `/implement` to begin executing the tasks phase by phase
- `/analyze` to check for consistency across spec, plan, and tasks before coding

## Task Naming Rules

- Use imperative verbs: "Create", "Add", "Implement", "Configure", "Write", "Fix"
- Include file path when known: `Create user model — prisma/schema.prisma`
- Keep descriptions under 80 characters
- Separate concerns: one task per file or logical unit
