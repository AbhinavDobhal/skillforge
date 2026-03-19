# Tasks: [FEATURE NAME]

**Created**: [DATE]
**Spec**: `specs/[feature-name]/spec.md`
**Plan**: `specs/[feature-name]/plan.md`

## Format

`- [ ] T### [P] [US#] Description — file/path`

- `[P]` = can run in parallel (no shared files, no dependencies on other in-progress tasks)
- `[US#]` = which user story this task belongs to (US1, US2, US3…)

---

## Phase 1: Setup

**Goal**: Project structure, dependencies, environment config

- [ ] T001 Install and configure dependencies — `package.json`
- [ ] T002 [P] Set up environment config — `.env.example`, `lib/config.ts`
- [ ] T003 [P] Configure linting and formatting — `.eslintrc`, `.prettierrc`

---

## Phase 2: Foundation ⚠️ Must complete before user-story phases

**Goal**: Core infrastructure all stories depend on

- [ ] T004 Create database schema — `prisma/schema.prisma`
- [ ] T005 [P] Implement auth middleware — `lib/auth.ts`
- [ ] T006 [P] Set up API routing — `app/api/`
- [ ] T007 Configure error handling — `lib/errors.ts`

**Checkpoint**: Foundation ready — user story work can begin.

---

## Phase 3: User Story 1 — [Title] (P1) 🎯 MVP

**Goal**: [What this story delivers]
**Independent test**: [How to verify this story alone works]

- [ ] T008 [US1] [Backend task] — `path/to/file`
- [ ] T009 [P] [US1] [Frontend task] — `path/to/file`
- [ ] T010 [P] [US1] Write unit tests — `__tests__/`

**Checkpoint**: P1 story complete and independently demonstrable.

---

## Phase 4: User Story 2 — [Title] (P2)

**Goal**: [What this story delivers]

- [ ] T011 [US2] [Task] — `path/to/file`
- [ ] T012 [P] [US2] [Task] — `path/to/file`

---

## Phase 5: Polish

- [ ] T013 Error and empty state handling
- [ ] T014 [P] Accessibility audit (keyboard nav, ARIA labels)
- [ ] T015 [P] Performance review (bundle size, query optimization)
- [ ] T016 Update documentation — `docs/`, `README.md`

---

## Completion Checklist

- [ ] All user stories have passing acceptance tests
- [ ] No task left unchecked without documented reason
- [ ] Spec acceptance criteria verified
- [ ] Code reviewed
