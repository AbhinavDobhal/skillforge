---
name: red-team-tactics
description: "Adversarial review mindset for identifying abuse paths, privilege escalation opportunities, and weak assumptions in application logic. Use when stress-testing designs or reviewing risky surfaces from an attacker perspective. Triggers on keywords like abuse case, attacker, escalation, exploit path, adversarial review, threat."
---

# Red Team Tactics

## Core Guidance

- Look for trust boundaries the implementation assumes but does not enforce.
- Test misuse flows, not only intended flows.
- Identify the cheapest path from untrusted input to sensitive action.
- Prefer actionable mitigations tied to specific abuse scenarios.
