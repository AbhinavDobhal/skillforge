# Implementation Plan: [FEATURE NAME]

**Created**: [DATE]
**Spec**: `specs/[feature-name]/spec.md`
**Status**: Draft

## Summary

[Extract from spec: primary requirement + chosen technical approach.]

---

## Technical Context

**Language/Runtime**: [e.g., TypeScript / Node 20, Python 3.11]
**Framework**: [e.g., Next.js 14, FastAPI, Rails 7]
**Database**: [e.g., PostgreSQL via Prisma, MongoDB, SQLite]
**Testing**: [e.g., Vitest, Jest, pytest]
**Key Dependencies**: [List third-party libraries central to this feature]
**Performance Goals**: [e.g., <200ms API response, 60fps animations]
**Constraints**: [e.g., must work offline, GDPR compliance, shared DB]

---

## Architecture

### Data Model

```
[Entity diagram or field list. Example:]

User
├── id: uuid (PK)
├── email: string (unique, required)
├── passwordHash: string
├── createdAt: datetime
└── updatedAt: datetime
```

### API Contracts

```
[Endpoint list. Example:]

POST /api/auth/register
  Body: { email, password }
  Response 201: { userId, token }
  Response 400: { error: "email_taken" | "weak_password" }

POST /api/auth/login
  Body: { email, password }
  Response 200: { token, expiresAt }
  Response 401: { error: "invalid_credentials" }
```

### Project Structure

```
[File tree showing new/modified paths for this feature]
src/
├── app/api/auth/
│   ├── register/route.ts
│   └── login/route.ts
├── lib/
│   ├── auth.ts
│   └── email.ts
└── components/auth/
    ├── LoginForm.tsx
    └── RegisterForm.tsx
```

---

## Implementation Phases

### Phase 0: Research
[List any open questions or unknowns that need resolving before coding.]

- [ ] [Unknown 1 — describe what needs to be decided]
- [ ] [Unknown 2]

### Phase 1: Foundation
[Shared infrastructure. Must complete before user-story phases.]

- [ ] Database schema
- [ ] Auth/session setup
- [ ] Base configuration

### Phase 2: Core Feature (User Story 1 — P1)
[Implement the minimum slice that delivers real user value.]

- [ ] [Backend task]
- [ ] [Frontend task]
- [ ] [Tests]

### Phase 3: Extended Feature (User Story 2 — P2)
[Second priority story.]

- [ ] [Task]

### Phase 4: Polish
- [ ] Error handling
- [ ] Accessibility audit
- [ ] Performance optimization
- [ ] Documentation update

---

## Decisions & Trade-offs

| Decision | Chosen | Rejected | Reason |
|----------|--------|----------|--------|
| [Topic] | [Option A] | [Option B] | [Why A was chosen] |

---

## Open Questions

- [ ] [Question that needs answering before or during implementation]
