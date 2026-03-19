---
description: Create or update a feature specification from a natural language description
---

# /specify - Feature Specification

## Overview

Turn a plain-language feature description into a structured specification with user stories, acceptance criteria, requirements, and edge cases. Run this before `/clarify`, `/plan`, or `/tasks`.

## When to Use

- Starting a new feature
- Turning a vague idea into documented requirements
- Creating a shared source of truth before implementation
- Establishing acceptance criteria for review

## Workflow

### Step 1: Parse Feature Description

Extract from the user's message:
- **What:** The feature or capability being built
- **Who:** Target user or persona
- **Why:** Business goal or user value
- **Constraints:** Known limitations or technology choices

If any are missing, ask up to 3 targeted questions before proceeding.

### Step 2: Generate a Short Feature Name

Create a 2–4 word slug for the feature:
- Use action-noun format: `user-auth`, `payment-flow`, `analytics-dashboard`
- Preserve technical terms: `oauth2-integration`, `stripe-checkout`

### Step 3: Write the Feature Specification

Produce a spec document in this format (save as `specs/<feature-name>/spec.md`):

```markdown
# Feature Specification: <Feature Name>

**Created**: <DATE>
**Status**: Draft

## Summary
<One paragraph describing the feature and its primary goal.>

## User Stories

### Story 1 — <Title> (Priority: P1)
<Describe the user journey in plain language.>

**Acceptance Scenarios**:
1. **Given** <state>, **When** <action>, **Then** <outcome>
2. **Given** <state>, **When** <action>, **Then** <outcome>

---

### Story 2 — <Title> (Priority: P2)
<Describe the user journey.>

**Acceptance Scenarios**:
1. **Given** <state>, **When** <action>, **Then** <outcome>

## Requirements

### Functional
- [ ] <Requirement 1>
- [ ] <Requirement 2>

### Non-Functional
- **Performance**: <latency or throughput targets>
- **Security**: <auth, data protection needs>
- **Accessibility**: <WCAG level if UI>

## Edge Cases
- What happens when <boundary condition>?
- How does the system handle <error scenario>?

## Out of Scope
- <What is explicitly NOT included>
```

### Step 4: Confirm and Handoff

After writing the spec:
1. Summarize the feature in 2–3 sentences
2. List the user stories by priority
3. Suggest next step: `/clarify` to reduce ambiguity, or `/plan` to create the technical plan

## Tips

- Keep each user story independently testable — implementing it alone should deliver real value
- Assign P1 to the smallest slice that proves the core concept works
- Edge cases should cover: empty states, invalid input, auth failures, network errors
