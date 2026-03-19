---
description: Identify and resolve ambiguity in a feature spec before planning or implementation
---

# /clarify - Spec Clarification

## Overview

Surface underspecified areas in the active feature specification by asking up to 5 targeted questions, then encode the answers directly back into the spec. Run this after `/specify` and before `/plan`.

## When to Use

- After writing a spec with `/specify`
- Before creating a technical plan
- When requirements feel vague or incomplete
- When edge cases or non-functional requirements are undefined

## Workflow

### Step 1: Load the Spec

Read `specs/<feature-name>/spec.md` (or ask the user to paste the spec if no file exists).

### Step 2: Scan for Ambiguity

Check these categories. Mark each as **Clear / Partial / Missing**:

**Functional Scope**
- Core user goals and success criteria
- Out-of-scope declarations
- User roles and personas

**Data & Domain Model**
- Entities, attributes, relationships
- Identity and uniqueness rules
- Data lifecycle and state transitions

**UX & Interaction**
- Critical user journeys
- Error, empty, and loading states
- Accessibility or localization notes

**Non-Functional Quality**
- Performance targets (latency, throughput)
- Security requirements (auth, data protection)
- Scalability and reliability expectations
- Observability (logging, metrics)

### Step 3: Ask Up to 5 Questions

Generate targeted questions based only on **Partial** or **Missing** items. Prioritize by impact on implementation.

Question archetypes:
- **Scope**: "Should X include Y, or is Y out of scope for this iteration?"
- **Behavior**: "What should happen when [edge case]?"
- **Constraint**: "Is there a specific performance target for [action]?"
- **Data model**: "Can a user have multiple [entity], or is it one-to-one?"
- **Error handling**: "Should [failure scenario] show an error or fail silently?"

Do NOT ask about things already clearly defined in the spec.

### Step 4: Encode Answers into the Spec

After the user responds:
1. Update `spec.md` with the clarified requirements
2. Add or refine acceptance scenarios for newly clarified stories
3. Move items from "Edge Cases" to "Requirements" if now well-defined
4. Add items to "Out of Scope" for anything explicitly excluded

### Step 5: Report Changes

List every section updated and why. Then suggest: `/plan` to build the technical plan.

## Example Questions

```
1. Can a user belong to multiple organizations, or just one?
2. What happens when the payment gateway is unreachable — retry, queue, or fail immediately?
3. Is real-time data required, or is a 30-second polling interval acceptable?
4. Should the feature work offline, or is network connectivity required?
5. Are there accessibility requirements beyond standard WCAG 2.1 AA?
```
