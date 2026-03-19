---
description: Cross-artifact consistency and quality analysis across spec, plan, and tasks
---

# /analyze - Consistency Analysis

## Overview

Perform a read-only audit across spec, plan, and tasks to surface inconsistencies, gaps, duplications, and ambiguities before implementation begins. Run this after `/tasks` and before `/implement`.

## When to Use

- After spec, plan, and tasks are all written
- Before starting implementation to catch contradictions early
- When something feels "off" across the documents
- Before a review or handoff to another team

## Workflow

> **STRICTLY READ-ONLY**: This workflow does not modify any files. It outputs a structured analysis report and recommends fixes — but changes require your explicit approval.

### Step 1: Load All Artifacts

Read in order:
1. `specs/<feature>/spec.md` — user stories, requirements, edge cases
2. `specs/<feature>/plan.md` — technical context, architecture, phases
3. `specs/<feature>/tasks.md` — task list with phases and dependencies

### Step 2: Run Consistency Checks

**Spec ↔ Plan**
- Does the plan cover every functional requirement in the spec?
- Are non-functional requirements (performance, security) addressed in the plan?
- Do the user stories map to concrete technical components?
- Are any requirements in the spec impossible given the technical constraints in the plan?

**Plan ↔ Tasks**
- Does every phase in the plan have corresponding tasks?
- Do task file paths match the project structure defined in the plan?
- Are all dependencies between tasks correctly ordered?
- Are any plan components unrepresented in the task list?

**Spec ↔ Tasks**
- Does every user story have at least one task?
- Are P1 story tasks prioritized before P2 and P3 tasks?
- Do acceptance criteria map to testable tasks?

**Internal Consistency**
- Any contradictions within the spec (e.g., requirement conflicts)?
- Any duplicated tasks across phases?
- Vague or unmeasurable requirements not previously clarified?

### Step 3: Output Analysis Report

Structure the report as:

```
## Consistency Analysis Report

### ✅ Aligned
- [List of areas that are consistent across artifacts]

### ⚠️ Warnings
- [W001] Plan does not address NFR: "must support 1000 concurrent users" from spec
- [W002] Task T012 references `src/lib/mailer.ts` but plan shows `services/email.ts`

### ❌ Blockers
- [E001] User Story 3 (notifications) has no tasks in tasks.md
- [E002] Spec requires OAuth2 but plan only implements email/password auth

### 💡 Recommendations
For each warning and blocker, suggest how to resolve it.
```

### Step 4: Offer Remediation

After presenting the report:
1. Ask whether to fix each blocker or warning
2. On approval, update the relevant file(s)
3. Re-run the check after fixes to confirm resolution

## Severity Levels

| Level | Meaning |
|-------|---------|
| ❌ Blocker | Will cause implementation failure or incorrect behavior |
| ⚠️ Warning | Likely to cause rework or confusion during implementation |
| 💡 Suggestion | Minor improvement that would increase clarity |
