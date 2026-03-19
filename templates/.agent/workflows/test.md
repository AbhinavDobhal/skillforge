---
description: Generate, improve, and run tests for critical behavior and regressions
---

# /test - Testing Workflow

## Overview

Use this workflow to decide what should be tested, generate high-value tests, and run the smallest useful validation loop for the change.

## When to Use

- Adding or changing logic
- Fixing a bug that needs regression coverage
- Improving coverage around critical flows
- Reviewing test gaps before merge

## Workflow

### Step 1: Identify Test Scope

- What behavior changed?
- What can fail silently?
- Which level fits best: unit, integration, or E2E?

### Step 2: Design Test Cases

- Happy path
- Error path
- Edge cases
- Regression for the reported bug

### Step 3: Implement the Minimum Useful Set

- Start with the highest-value test coverage
- Avoid testing framework internals or implementation noise
- Mock only where boundaries require it

### Step 4: Run Validation

- Run the nearest relevant tests first
- Expand outward only if needed
- Record any failures clearly with likely root cause

## Output

- [ ] Test scope selected correctly
- [ ] Critical paths covered
- [ ] Regression protection added where needed
- [ ] Relevant tests executed
