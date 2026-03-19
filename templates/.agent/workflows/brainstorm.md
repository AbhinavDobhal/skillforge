---
description: Brainstorm ideas and explore options before implementation
---

# /brainstorm - Ideas & Options Exploration

## Overview

Use Socratic questioning to explore ideas, identify alternatives, and think through decisions before building. Great for planning, architecture, and feature design decisions.

## When to Use

- Need to decide between multiple approaches
- Feature design or implementation strategy
- Architecture decisions
- Problem-solving
- Avoiding premature design

## Brainstorming Process

### Step 1: Define the Challenge

**What specifically are we trying to solve?**

```
NOT: "We have a performance problem"
BUT: "The admin dashboard takes 12s to load. Users leave after 8s. We need <3s load time."

NOT: "Design authentication"
BUT: "Authenticate users for our SaaS with SSO support. 1000+ customers expected."
```

Be specific. Vague = bad brainstorm.

### Step 2: Gather Constraints

Ask about:
- **Timeline**: How soon do we need solution?
- **Team**: Who builds? What skills?
- **Budget**: Any cost constraints?
- **Technology**: What tech stack?
- **Users**: Who uses this? How?

```
Example constraints:
- Timeline: 2 weeks
- Team: 2 junior devs, no devops
- Budget: Open source only (no paid services)
- Tech: Next.js, React, Postgres
- Users: Non-technical founders
```

### Step 3: Generate Options

Brainstorm 3-5 fundamentally different approaches:

**Option A: Simple but Limited**
- Pros: Fast to build, low maintenance
- Cons: Won't scale, limited features

**Option B: Flexible Architecture**
- Pros: Scales, maintainable long-term
- Cons: More complex, longer to build

**Option C: Third-party Solution**
- Pros: Battle-tested, support included
- Cons: Less control, may be overkill

**Option D: Hybrid Approach**
- Pros: Best of multiple options
- Cons: Complex, harder to maintain

### Step 4: Evaluate Tradeoffs

For each option, analyze:

```
Evaluation Matrix:

         │ Speed │ Scale │ Maint │ Cost │ Team │ Score
Option A │ ★★★★★│ ★★   │ ★★★  │ ★★★★│ ★★★★│ 17/25
Option B │ ★★★  │ ★★★★★│ ★★★★│ ★★★ │ ★★★ │ 22/25 ✓
Option C │ ★★★★ │ ★★★★★│ ★★★★│ ★★  │ ★★★ │ 21/25
Option D │ ★★★  │ ★★★★ │ ★★★ │ ★★★ │ ★★  │ 17/25
```

### Step 5: Consider Hidden Factors

Ask:
- Will this decision lock us in or provide flexibility?
- Can we iterate/improve later?
- What if wrong? Can we pivot?
- Is there technical debt?
- Team learning opportunity or risk?

### Step 6: Make Decision

Based on:
- Constraints (timeline, budget, team) → favors Option X
- Scalability needs → favors Option Y
- Long-term vision → favors Option Z
- **Decision**: Option B because...

### Step 7: Define Hypothesis & Validation

```
Hypothesis: Option B will let us ship in 2 weeks while maintaining code quality.

How to validate:
- Build spike/prototype
- Prove key assumptions
- Get team feedback
- Reassess if blocked

Success criteria:
- MVP done in 2 weeks
- <20% technical debt
- Team comfortable maintaining
```

### Step 8: Plan Next Steps

```
Decision: Use approach B (flexible architecture)

Next:
1. Design system architecture (Tue)
2. Spike risky assumptions (Wed-Thu)
3. Team review & approval (Fri)
4. Start implementation (Mon)
```

## Brainstorming Template

```
# [Topic] Brainstorm

## Challenge
[What are we solving?]

## Constraints
- Timeline: 
- Team: 
- Budget: 
- Tech Stack: 
- Users:

## Options Considered

### Option A: [Name]
- Core idea: [Brief description]
- Pros: [3-5 benefits]
- Cons: [3-5 drawbacks]
- Effort: [Time to build]
- Risk: [What could go wrong?]

### Option B: [Name]
[Same structure]

### Option C: [Name]
[Same structure]

## Decision
[Which option and why?]

## Validation
- Risks to mitigate: [List]
- Success criteria: [Measureable outcomes]
- Timeline: [When to validate]

## Next Steps
1. [Action]
2. [Action]
3. [Action]
```

## Brainstorming Facilitation Tips

✅ Encourage wild ideas initially
✅ Defer judgment (no "that won't work" early)
✅ Look for hidden assumptions
✅ Ask "why?" repeatedly
✅ Challenge constraints ("Is that really a must?")
✅ Play devil's advocate
✅ Involve diverse perspectives

❌ Don't pick first idea (usually not best)
❌ Don't rank too early (creative phase first)
❌ Don't assume prior solutions are best
❌ Don't ignore dissenting opinions

## Outcomes

Deliver:
- [ ] 3-5 distinct options
- [ ] Tradeoff analysis
- [ ] Clear decision rationale
- [ ] Risk assessment
- [ ] Validation plan
- [ ] Team buy-in
