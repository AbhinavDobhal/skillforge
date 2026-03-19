---
name: react-best-practices
description: "React and Next.js engineering guidance for component architecture, rendering performance, state flow, and accessibility. Use when building React components, reviewing hooks usage, fixing rerender issues, or structuring Next.js UI code. Triggers on keywords like react, nextjs, hook, rerender, hydration, server component, client component, state, props, effect, suspense."
---

# React Best Practices

## Focus Areas

- Component boundaries and prop design
- Server and client component separation
- State placement and data flow
- Rendering performance and hydration safety
- Accessibility and semantic UI structure

## Core Guidance

- Keep state as local as possible and lift only when multiple consumers need it.
- Prefer derived values over duplicated state.
- Avoid effects for work that can be done during render from existing props and state.
- Split large components by responsibility instead of by arbitrary file size.
- Audit hydration-sensitive code when using browser-only APIs.

## Review Checklist

- [ ] Are component responsibilities clear?
- [ ] Is state colocated appropriately?
- [ ] Are effects necessary and safe?
- [ ] Are rerenders controlled by design rather than memo sprawl?
- [ ] Are loading, empty, and error states handled?
