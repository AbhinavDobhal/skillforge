---
description: Deployment readiness checks and release execution workflow
---

# /deploy - Deployment Workflow

## Overview

Use this workflow before shipping to preview or production. It focuses on readiness, rollback awareness, and post-release verification.

## When to Use

- Releasing a feature branch or milestone
- Promoting from staging to production
- Running a pre-deploy readiness check

## Workflow

### Step 1: Readiness Review

- Confirm build passes
- Confirm tests relevant to the release pass
- Confirm configuration and environment variables are ready

### Step 2: Risk Review

- Database or schema changes
- Auth or permission changes
- Backward compatibility concerns
- Rollback strategy

### Step 3: Execute Deployment

- Use the platform-appropriate release command
- Capture the deployed version and target environment

### Step 4: Post-Deploy Verification

- Health check the app
- Verify critical user flows
- Watch logs or error reporting for regressions

## Output

- [ ] Release readiness confirmed
- [ ] Risks and rollback path documented
- [ ] Deployment executed
- [ ] Post-deploy checks completed
