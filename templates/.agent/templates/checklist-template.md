# [DOMAIN] Quality Checklist: [FEATURE NAME]

**Purpose**: [One-line description of what this checklist validates]
**Created**: [DATE]
**Scope**: [e.g., spec review, pre-implementation gate, post-implementation audit]

---

<!--
  IMPORTANT: Checklist items validate REQUIREMENT QUALITY, not implementation correctness.
  
  ✅ "Is 'fast response' quantified with a specific latency target?"
  ✅ "Are error states defined for every user-facing action?"
  ❌ "Verify the button clicks correctly"
  ❌ "Confirm the API returns 200"
-->

## Functional Completeness

- [ ] CHK001 Are all user journeys described with acceptance criteria (Given/When/Then)?
- [ ] CHK002 Is every "or" in the requirements resolved to a specific choice?
- [ ] CHK003 Are out-of-scope items explicitly listed to prevent scope creep?
- [ ] CHK004 Are user roles/personas differentiated where behavior differs?

## Data & Validation

- [ ] CHK005 Are all entity fields listed with types and constraints?
- [ ] CHK006 Are uniqueness rules defined for all identifiable entities?
- [ ] CHK007 Are input validation rules specified (max length, format, required)?
- [ ] CHK008 Are state transitions and lifecycle rules defined?

## Non-Functional Requirements

- [ ] CHK009 Is there a specific, measurable performance target?
- [ ] CHK010 Are authentication and authorization requirements explicit for every endpoint or action?
- [ ] CHK011 Is the expected scale defined (users, requests/sec, data volume)?
- [ ] CHK012 Are observability requirements stated (logging, monitoring, alerts)?

## Edge Cases & Failure Modes

- [ ] CHK013 Are network/connectivity failure scenarios addressed?
- [ ] CHK014 Are empty-state and loading-state UX behaviors defined?
- [ ] CHK015 Are concurrent access or race conditions considered?
- [ ] CHK016 Are security threat scenarios covered (XSS, injection, unauthorized access)?

## User Experience

- [ ] CHK017 Are error messages user-friendly and distinguishable by error type?
- [ ] CHK018 Are accessibility requirements stated (WCAG level, keyboard nav)?
- [ ] CHK019 Are responsive breakpoints or device targets specified (if UI)?
- [ ] CHK020 Are all interactive elements' hover/focus/active states defined?

---

## Notes

[Add observations, findings, or links to updated spec sections here]
