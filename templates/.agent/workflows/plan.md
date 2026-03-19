---
description: Create task breakdown and timeline planning
---

# /plan - Project Planning & Task Breakdown

## Overview

Create a detailed project plan, task breakdown, timeline, and resource allocation. Use this before starting complex features or projects.

## When to Use

- Planning a new feature or project
- Breaking down complex work
- Creating realistic timelines
- Identifying dependencies
- Team coordination

## Workflow

### Step 1: Clarify Project Scope

Ask and answer:
- **What are we building?** Clear description of deliverable
- **For whom?** Target users/audience
- **Why?** Business goals and success criteria
- **Key constraints?** Timeline, budget, team size, tech limitations

Example response:
```
Building an e-commerce admin dashboard
For: Shopify store owners (non-technical)
Goal: Reduce time spent managing inventory by 50%
Timeline: 4 weeks | Team: 2 developers, 1 designer
```

### Step 2: Identify Major Phases

Break project into phases:
1. **Planning & Setup** (1-2 days)
   - Requirements finalization
   - Architecture decisions
   - Design mockups
   - Tech stack validation

2. **Core Features** (70% of timeline)
   - Phase 2a: Essential features
   - Phase 2b: Nice-to-have features

3. **Polish & Testing** (15% of timeline)
   - Bug fixes
   - Performance optimization
   - Accessibility audit
   - Security review

4. **Launch Preparation** (10% of timeline)
   - Documentation
   - Training
   - Deployment
   - Monitoring setup

### Step 3: Break Into Tasks

For each phase, identify specific tasks:

```
Phase: Core Features - Inventory Management

Task 1.1: API for inventory CRUD
  - Create database schema (2 days)
  - Build REST endpoints (3 days)
  - Add error handling (1 day)
  Estimate: 6 days
  Owner: Backend specialist

Task 1.2: Inventory UI components
  - Design dashboard layout (2 days)
  - Build data table with pagination (3 days)
  - Add create/edit/delete forms (2 days)
  Estimate: 7 days
  Owner: Frontend specialist

Task 1.3: Testing
  - Unit tests (2 days)
  - Integration tests (2 days)
  Estimate: 4 days
  Owner: QA engineer
```

### Step 4: Identify Dependencies

```
Task 1.2 (UI) depends on Task 1.1 (API) ✓
Task 1.3 (Testing) depends on 1.1 & 1.2 ✓
Can Task X and Y run in parallel? Yes/No
```

### Step 5: Build Timeline

```
Week 1:    Phase 1 (Planning) + Task 1.1 (API) start
Week 2:    Task 1.1 (API) finish + Task 1.2 (UI) start
Week 3:    Task 1.2 (UI) finish + Task 1.3 (Testing) start
Week 4:    Polish & Launch Prep
```

### Step 6: Allocate Resources

- Who owns each task?
- Any blockers or risks?
- Do we have required skills?
- Need hiring or training?

### Step 7: Document & Review

Create a shared document with:
- Project goals & success criteria
- Timeline with milestones
- Task list with owners & dates
- Risk assessment
- Communication plan

## Output

Deliver:
- [ ] Clear project goals
- [ ] Phase breakdown (4-5 phases)
- [ ] Task list (20-40 tasks)
- [ ] Timeline with dates
- [ ] Resource allocation
- [ ] Risk assessment
- [ ] Success criteria

## Tips

✅ Break tasks to ~3-5 day effort max
✅ Build 20% buffer into timeline for unknowns
✅ Identify critical path early
✅ Have clear success metrics

❌ Over-detail (too many pages)
❌ Unrealistic timelines
❌ Ignoring dependencies
❌ No contingency planning
