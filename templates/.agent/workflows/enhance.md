---
description: Improve or extend existing features in a controlled, low-regression way
---

# /enhance - Improve Existing Code

## Overview

Use this workflow when a project already exists and the goal is to improve, extend, or refactor behavior without breaking current functionality.

## When to Use

- Adding a feature to an existing screen or API
- Refactoring code that is getting hard to maintain
- Improving performance, accessibility, or UX
- Tightening validation, tests, or error handling

## Workflow

### Step 1: Understand the Current State

- Identify the entry points involved
- Read related agents, skills, and workflows
- Confirm current behavior before changing anything

### Step 2: Define the Enhancement Scope

- What changes for users?
- What must stay unchanged?
- What files or modules are likely affected?

### Step 3: Identify Risks

- Existing tests that may fail
- Shared components or APIs with multiple consumers
- Data shape, auth, or migration risks

### Step 4: Implement in Small Slices

- Make the smallest coherent change first
- Validate behavior after each slice
- Keep changes easy to review

### Step 5: Verify

- Re-check the original behavior
- Run relevant tests and static checks
- Confirm no regressions in adjacent flows

## Output

- [ ] Enhancement scope is clear
- [ ] Affected areas are identified
- [ ] Change is implemented incrementally
- [ ] Regressions are checked
