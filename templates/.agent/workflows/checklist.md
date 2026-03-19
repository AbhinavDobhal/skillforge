---
description: Generate a targeted quality checklist for requirements, specs, or feature areas
---

# /checklist - Quality Checklist

## Overview

Generate a custom checklist that validates the quality, clarity, and completeness of requirements — not whether the code works. Think of it as unit tests for your spec: each checklist item tests whether a requirement is well-written, unambiguous, and implementation-ready.

## When to Use

- After writing a spec with `/specify` to validate requirement quality
- Before a spec review or stakeholder handoff
- When requirements have been updated after `/clarify`
- Before `/implement` as a final quality gate

## What a Checklist Is (and Is Not)

**Checklists validate requirements writing quality:**
- ✅ "Are error state requirements defined for all form inputs?"
- ✅ "Is 'fast response' quantified with a specific latency target?"
- ✅ "Are authorization requirements consistent across all API endpoints?"
- ✅ "Does the spec define what happens when a network request fails?"

**Checklists are NOT implementation verification:**
- ❌ "Verify the button clicks correctly"
- ❌ "Test the API returns 200"
- ❌ "Confirm the form validates correctly"

## Workflow

### Step 1: Understand the Request

From the user's message, identify:
- **Domain focus**: auth, UI/UX, API design, data model, payments, etc.
- **Target audience**: author self-review, peer PR review, QA gate, release gate
- **Depth**: lightweight sanity check vs. formal release checklist
- **Scope boundaries**: what is explicitly in/out

Ask up to 3 questions if any of these are unclear.

### Step 2: Load Available Artifacts

Read `spec.md` (and `plan.md` if available) to:
- Extract feature domain keywords (e.g., auth, payments, real-time)
- Identify risk indicators ("must", "critical", "compliance")
- Find areas with partial or missing coverage

### Step 3: Generate the Checklist

Organize by category relevant to the feature domain. Number each item sequentially.

```markdown
# [Domain] Quality Checklist: [Feature Name]

**Purpose**: [One-line description of what this checklist validates]
**Created**: [DATE]

## Functional Completeness
- [ ] CHK001 Are all happy-path user journeys described with acceptance criteria?
- [ ] CHK002 Are error states defined for every user-facing action?
- [ ] CHK003 Is every "or" in the requirements resolved to a specific choice?

## Data & Validation
- [ ] CHK004 Are all entity fields listed with their types and constraints?
- [ ] CHK005 Are uniqueness rules defined for all identifiable entities?
- [ ] CHK006 Are input validation rules specified (max length, format, required)?

## Non-Functional Requirements
- [ ] CHK007 Is there a specific performance target (e.g., "<200ms p95")?
- [ ] CHK008 Are authentication and authorization requirements explicit?
- [ ] CHK009 Is the expected scale defined (users, requests/sec, data volume)?

## Edge Cases & Failure Modes
- [ ] CHK010 Are network failure scenarios addressed?
- [ ] CHK011 Are empty-state UX behaviors defined?
- [ ] CHK012 Are concurrent access or race conditions considered?

## Out of Scope
- [ ] CHK013 Are explicitly excluded items documented to prevent scope creep?
```

### Step 4: Save and Present

Save as `specs/<feature>/checklists/<domain>-checklist.md`. Present the checklist and invite the user to work through it or request fixes to the underlying spec.

## Domain-Specific Focus Areas

| Domain | Key checklist targets |
|--------|----------------------|
| Auth/Security | Token lifecycle, session expiry, permission boundaries, MFA |
| UI/UX | Responsive breakpoints, loading/error/empty states, accessibility |
| API Design | Versioning, pagination, error codes, rate limiting |
| Data Model | FK constraints, nullable fields, migration strategy |
| Payments | Failure handling, retry logic, idempotency, receipts |
| Real-time | Reconnect behavior, message ordering, offline handling |
