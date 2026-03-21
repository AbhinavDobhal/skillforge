---
description: Run end-to-end project discovery, planning, artifact generation, and completeness validation
---

# /full - End-to-End Product Planning Orchestrator

## Overview

Use `/full` when you want one command to perform complete project planning from discovery to documentation, including folder creation, user stories, sprint plans, task generation, and final gap checks.

## Outputs Created

At minimum, create these folders in the current project root:
- `user_stories/`
- `tasks/`
- `sprints/`
- `userflow/`
- `docs/`

Generate these baseline files (or equivalent detailed files split by topic):
- `docs/prd.md`
- `docs/user_stories.md`
- `docs/sprints_plan.md`
- `userflow/overview.md`

## Workflow

### Step 1: Deep Project Scan

Inspect the current folder before planning:
1. Read top-level folders and key files
2. Identify current architecture, domain, and constraints
3. Detect existing planning artifacts and avoid duplicates
4. Summarize what exists and what is missing

### Step 2: Discovery and Brainstorming

Start with `/brainstorm` style questioning:
- Target users and personas
- Core problem and business goals
- Success metrics
- Time constraints and sprint cadence
- Technical and operational constraints

Ask follow-up questions if critical information is missing.

### Step 3: Structured Planning Chain

Run the equivalent of these workflows in order when needed:
1. `/prd` for product requirements
2. `/specify` for user stories and acceptance criteria
3. `/clarify` to resolve ambiguity
4. `/project-plan` for architecture and phases
5. `/tasks` for dependency-ordered implementation tasks
6. `/analyze` and `/checklist` for consistency and quality checks

Use only the steps required by the project state. Reuse existing files if already complete.

### Step 4: Folderized Artifact Generation

Create and populate planning artifacts in dedicated folders:

`user_stories/`
- Story files grouped by feature or epic
- Include priority (P1/P2/P3), acceptance criteria, and edge cases

`tasks/`
- Actionable task files mapped to stories
- Include dependencies and execution order

`sprints/`
- Sprint plans with goals, scope, risks, and capacity notes

`userflow/`
- Detailed flow documents for major user journeys
- Include happy path, error path, and alternate path

`docs/`
- Consolidated PRD and planning summaries
- Include links or references to `user_stories/`, `tasks/`, `sprints/`, and `userflow/`

### Step 5: Final Completeness Review

Perform a final audit of the current folder:
1. Verify required folders/files exist
2. Check cross-document consistency
3. Detect missing stories, tasks, dependencies, or acceptance criteria
4. Auto-generate straightforward missing artifacts
5. Ask targeted questions for ambiguous or high-impact missing data

### Step 6: Delivery Summary

Return a concise completion report with:
- Folders/files created
- Artifacts reused vs newly generated
- Missing inputs (if any)
- Recommended next commands (if needed)

## Guardrails

- Do not overwrite high-quality existing artifacts unless requested
- Prefer additive updates when files already exist
- Keep naming consistent with `user_stories`, `tasks`, `sprints`, `userflow`, `docs`
- If information is incomplete, ask focused questions before inventing critical details
