---
description: Execute an implementation plan by working through tasks phase by phase
---

# /implement - Implementation Execution

## Overview

Work through a feature's task list phase by phase, implementing each task in dependency order. Run this after `/tasks` to start coding. Unlike `/create` (which builds from scratch), `/implement` follows a pre-defined plan with specific tasks.

## When to Use

- After generating tasks with `/tasks`
- When executing a structured feature plan
- For systematic, phase-gated implementation with checkpoints
- When you need traceability between tasks and code changes

## Workflow

### Step 1: Load Task List

Read `specs/<feature>/tasks.md` (or ask the user to provide tasks). Review:
- Total phases and approximate task count
- Any checklist files that must pass before implementation

### Step 2: Check Prerequisites

Before writing code:
1. Confirm the development environment is ready (dependencies installed, env vars set)
2. Identify any tasks marked as Foundation phase — complete these before user-story tasks
3. Note all `[P]` (parallel-safe) tasks for potential parallel execution

### Step 3: Execute Phase by Phase

For each phase:
1. **Announce** the phase and its goal
2. **Work through tasks** in order, marking each complete as you go
3. **Show a checkpoint** after each phase:
   - Tasks completed
   - Files created or modified
   - Any blockers or deviations from plan

```
## Phase 2 Checkpoint — Foundation
✅ T001 Database schema created — prisma/schema.prisma
✅ T002 Auth middleware configured — lib/auth.ts
✅ T003 Environment config added — .env.example
Blocker: None
Next: Phase 3 — User Story 1 (Registration)
```

### Step 4: Handle Deviations

If a task needs adjustment from the plan:
1. Note the original task and the change
2. Explain why the plan changed (discovered dependency, better approach)
3. Do NOT silently diverge — log it in the checkpoint

### Step 5: Final Checklist

After all phases complete:
- [ ] All tasks in `tasks.md` are checked off
- [ ] Tests pass for each user story
- [ ] No skipped tasks without documented reason
- [ ] Spec acceptance criteria are met
- [ ] PRD or spec updated if scope changed during implementation

## Tips

- Always implement Foundation phase before user story phases
- If a task is blocked, skip it (log it) and continue with unblocked parallel tasks
- After P1 story tasks are done, the feature should be independently demonstrable
- Run `/analyze` if you suspect spec, plan, and tasks have drifted out of sync
