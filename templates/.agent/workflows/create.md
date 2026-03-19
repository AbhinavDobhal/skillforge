---
description: Create new features or applications from scratch
---

# /create - Feature & Application Creation

## Overview

End-to-end workflow for creating new features or applications from initial concept through first working prototype.

## When to Use

- Building new feature
- Creating new application
- Implementing user story
- POC/prototype development

## Creation Workflow

### Step 1: Understand Requirements

Gather:
- **What**: Feature/app description
- **Why**: Business goal/problem solved
- **Who**: Target users
- **When**: Timeline expectations
- **Success**: How to measure success?

Example:
```
What: Admin dashboard to manage user accounts
Why: Dashboard doesn't exist yet; admins use spreadsheets
Who: 5 internal admins, non-technical
When: Needed by end of sprint (2 weeks)
Success: Reduce admin time by 50%, <3s page load
```

### Step 2: Design Architecture

Define:
- **Frontend**: Technology stack (React/Vue/etc.)
- **Backend**: API design (REST/GraphQL)
- **Database**: Schema design
- **Infrastructure**: Hosting, deployment

```
Architecture Decision:
- Frontend: Next.js 14 (SSR + API routes)
- Backend: Node.js with Express
- Database: PostgreSQL
- Deployment: Vercel + Railway
```

### Step 3: Build Data Model

Design database schema:
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR UNIQUE NOT NULL,
  role VARCHAR,
  created_at TIMESTAMP
);

CREATE TABLE accounts (
  id SERIAL PRIMARY KEY,
  user_id REFERENCES users(id),
  name VARCHAR,
  status VARCHAR,
  created_at TIMESTAMP
);
```

### Step 4: Define API Specification

List all endpoints needed:
```
Endpoint         │ Method │ Purpose
─────────────────┼────────┼────────────────────
/api/users       │ GET    │ List all users
/api/users       │ POST   │ Create new user
/api/users/{id}  │ GET    │ Get user details
/api/users/{id}  │ PUT    │ Update user
/api/users/{id}  │ DELETE │ Delete user
/api/accounts    │ GET    │ List accounts
```

### Step 5: Design UI/UX

Create mockups/wireframes showing:
- [ ] Main views/pages
- [ ] Key user workflows
- [ ] States (loading, empty, error)
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Accessibility considerations

### Step 6: Break Into Development Tasks

```
Phase 1: Backend API (3 days)
Task 1.1: Database setup & migrations
Task 1.2: User authentication API
Task 1.3: Account CRUD endpoints
Task 1.4: Testing

Phase 2: Frontend (4 days)
Task 2.1: Project setup & styling
Task 2.2: User list page
Task 2.3: User detail page
Task 2.4: Form components (create/edit)

Phase 3: Integration & Testing (2 days)
Task 3.1: End-to-end testing
Task 3.2: Performance optimization
Task 3.3: Bug fixes
```

### Step 7: Implement

Build in small, testable chunks:
- [ ] Backend endpoint
- [ ] Frontend component
- [ ] Integration test
- [ ] Code review
- [ ] Deploy to staging

### Step 8: Test

- [ ] Unit tests for logic
- [ ] Integration tests for API
- [ ] E2E tests for workflows
- [ ] Manual testing across browsers
- [ ] Accessibility audit
- [ ] Performance check

### Step 9: Review & Refine

Feedback cycle:
- [ ] Code review (peers)
- [ ] Design review (designer)
- [ ] User testing (if applicable)
- [ ] Security review
- [ ] Accessibility audit

### Step 10: Deploy

- [ ] Deploy to staging
- [ ] QA sign-off
- [ ] Deploy to production
- [ ] Monitor for issues
- [ ] Gather feedback

## Creation Checklist

Design Phase:
- [ ] Requirements clear?
- [ ] Architecture decided?
- [ ] Data model designed?
- [ ] API spec defined?
- [ ] UI mocked?

Implementation Phase:
- [ ] Code follows standards?
- [ ] Tests passing?
- [ ] Performance acceptable?
- [ ] Accessibility met?
- [ ] Security reviewed?

Launch Phase:
- [ ] Feature works in production?
- [ ] No regressions?
- [ ] Users can access?
- [ ] Monitoring in place?
- [ ] Documentation complete?

## Tips

✅ Start with clear requirements
✅ Design before coding
✅ Break into small tasks
✅ Test early and often
✅ Deploy incrementally

❌ Skip design phase
❌ Code first, design later
❌ Build everything before testing
❌ Ignore accessibility
❌ Big bang deployment
