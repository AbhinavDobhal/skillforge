# Aiskillforge Architecture

> Comprehensive AI Agent Capability Expansion Toolkit for Modern Development

---

## 📋 Overview

Aiskillforge is a modular system consisting of:

- **7 Specialist Agents** — Role-based AI personas
- **22 Skills** — Domain-specific knowledge modules
- **17 Workflows** — Slash command procedures
- **5 Document Templates** — Spec, plan, tasks, checklist, constitution starters
- **Multi-IDE Support** — Claude, Cursor, Windsurf, Antigravity, GitHub Copilot, Kiro, Codex

---

## 🏗️ Directory Structure

```plaintext
.aiskillforge/
├── ARCHITECTURE.md          # This file
├── mcp_config.json          # MCP server configurations
├── agents/                  # Specialist Agents (7)
├── skills/                  # Domain Skills (22)
├── workflows/               # Slash Commands (17)
├── templates/               # Document Templates (5)
├── rules/                   # Global Rules
└── scripts/                 # Validation Scripts
```

---

## 🤖 Agents (7)

Specialist AI personas for different domains. Agents are **auto-invoked** based on task context.

| Agent | Focus | Primary Skills |
|-------|-------|---|
| `frontend-specialist` | Web UI/UX, React, Vue | react-best-practices, frontend-design, tailwind-patterns |
| `backend-specialist` | APIs, business logic | api-patterns, nodejs-best-practices, database-design |
| `database-architect` | Schema design, optimization | database-design, prisma-expert |
| `debugger` | Root cause analysis | systematic-debugging |
| `security-auditor` | Security compliance | vulnerability-scanner, red-team-tactics |
| `test-engineer` | Testing strategies | testing-patterns, tdd-workflow, webapp-testing |
| `project-planner` | Discovery, planning | brainstorming, plan-writing, architecture |

---

## 🧩 Skills (22)

Modular knowledge domains that agents load on-demand based on task context.

### Frontend & UI
- `react-best-practices` — React & Next.js patterns (57 rules from Vercel)
- `web-design-guidelines` — Web UI audit (100+ rules)
- `tailwind-patterns` — Tailwind CSS v4 utilities & components
- `frontend-design` — UI/UX patterns, design systems
- `ui-ux-pro-max` — 50 styles, 95+ color palettes, 57 font pairings

### Backend & API
- `api-patterns` — REST, GraphQL, tRPC
- `nodejs-best-practices` — Node.js async, modules, patterns

### Database
- `database-design` — Schema design, optimization
- `prisma-expert` — Prisma ORM, migrations, best practices

### Testing & Quality
- `testing-patterns` — Jest, Vitest, strategies
- `webapp-testing` — E2E, Playwright
- `tdd-workflow` — Test-driven development
- `code-review-checklist` — Code review standards
- `lint-and-validate` — Linting, validation

### Security
- `vulnerability-scanner` — Security auditing, OWASP
- `red-team-tactics` — Offensive security, penetration testing

### Architecture & Planning
- `architecture` — System design patterns
- `plan-writing` — Task planning, breakdown
- `brainstorming` — Socratic questioning
- `app-builder` — Full-stack app scaffolding

### Mobile & Games
- No dedicated mobile or game skills shipped in the current template set

### Infrastructure & DevOps
- Deployment is covered by workflow guidance, but no dedicated infrastructure skill is shipped in the current template set

### Other
- `systematic-debugging` — Troubleshooting methodology
- `performance-profiling` — Web Vitals, optimization
- The current template set intentionally focuses on frontend, backend, planning, testing, debugging, and security foundations

### Skill Structure
```
skill-name/
├── SKILL.md           # (Required) Metadata & instructions
├── scripts/           # (Optional) Python/Bash scripts
├── references/        # (Optional) Templates, docs
└── assets/            # (Optional) Images, logos
```

---

## 🔄 Workflows (17)

Slash command procedures for common development tasks.

| Command | Description | Primary Agents |
|---------|-------------|---|
| `/brainstorm` | Explore options before implementation | project-planner |
| `/prd` | Draft or update a Product Requirements Document | project-planner, backend-specialist |
| `/specify` | Create a structured feature spec with user stories | project-planner |
| `/clarify` | Reduce ambiguity in a spec with targeted questions | project-planner |
| `/doc` | Create or update project documentation | project-planner, backend-specialist |
| `/project-plan` | Create task breakdown and planning | project-planner |
| `/tasks` | Generate dependency-ordered task list from spec+plan | project-planner |
| `/analyze` | Cross-artifact consistency and quality audit | project-planner |
| `/checklist` | Generate quality checklist for requirements | project-planner |
| `/create` | Create new features or apps | frontend-specialist, backend-specialist |
| `/implement` | Execute an implementation plan phase by phase | frontend-specialist, backend-specialist |
| `/enhance` | Improve existing code | frontend-specialist, backend-specialist, debugger |
| `/debug` | Systematic debugging and root cause analysis | debugger |
| `/test` | Generate and run tests | test-engineer |
| `/full` | Run complete discovery, planning, and artifact generation flow | project-planner, backend-specialist |
| `/pullrequest` | Assess PR risk, assign reviewers, and approve by policy | security-auditor, project-planner |
| `/ui-ux-pro-max` | Design with 50+ styles and patterns | frontend-specialist |

---

## 📄 Templates (5)

Document starters for structured feature development. Use these with `/specify`, `/project-plan`, `/tasks`, `/checklist`, and `/constitution` workflows.

| Template | Use With | Description |
|----------|----------|-------------|
| `spec-template.md` | `/specify` | Feature spec with user stories and acceptance criteria |
| `plan-template.md` | `/project-plan` | Technical plan with architecture, data model, API contracts |
| `tasks-template.md` | `/tasks` | Phased, dependency-ordered task list |
| `checklist-template.md` | `/checklist` | Requirements quality checklist (20 items) |
| `constitution-template.md` | `/constitution` | Project principles and governance rules |

---

## ⚙️ Global Rules

See `rules/GEMINI.md` for system-wide behavioral guidelines.

---

## 🎯 How Agents & Skills Work Together

```plaintext
User Request → Skill Detection → Load Skills
                                   ↓
                          Skill SKILL.md & Assets
                                   ↓
                        Agent Auto-Invocation
                                   ↓
                        Specialist Response
```

### Example: "Optimize React component for performance"

1. **AI analyzes request** → detects "React", "performance", "optimize"
2. **Skills loaded**: react-best-practices, performance-profiling
3. **Agent selected**: @frontend-specialist + @debugger
4. **Response**: Specialist advice with code examples from skills

---

## 📚 Configuration

### mcp_config.json
Defines MCP (Model Context Protocol) servers that integrate external tools and data.

```json
{
  "mcpServers": {
    "aiskillforge": {
      "command": "...",
      "args": [...]
    }
  }
}
```

### IDE-Specific Configs
Each AI IDE has its own configuration file:
- **Claude** → `.claude/aiskillforge.md`
- **Cursor** → `.cursor/rules/aiskillforge.md`
- **Windsurf** → `.windsurf/aiskillforge.md`
- **GitHub Copilot** → `.github/copilot-instructions.md`
- **Kiro** → `kiro.config.json`
- **Codex** → `codex.config.md`
- **Antigravity** → Updated `.aiskillforge/mcp_config.json`

---

## 🚀 Quick Reference

| Need | Agent | Skills |
|------|-------|--------|
| **Build Web App** | frontend-specialist | react-best-practices, frontend-design, tailwind-patterns, ui-ux-pro-max |
| **Build API** | backend-specialist | api-patterns, nodejs-best-practices, database-design |
| **Debug Issue** | debugger | systematic-debugging, code-review-checklist |
| **Write Tests** | test-engineer | testing-patterns, tdd-workflow, webapp-testing |
| **Secure App** | security-auditor | vulnerability-scanner, red-team-tactics |
| **Plan Project** | project-planner | brainstorming, plan-writing, architecture |
| **Frontend UI** | frontend-specialist | react-best-practices, ui-ux-pro-max |
| **Security Review** | security-auditor | vulnerability-scanner, red-team-tactics |

---

## 📖 Learning Path

1. **Start Here** — Read this file (ARCHITECTURE.md)
2. **Browse Agents** → See `agents/` folder for specialist profiles
3. **Explore Skills** → See `skills/` folder for domain knowledge
4. **Try Workflows** → Use `/brainstorm`, `/full`, `/specify`, `/project-plan`, `/tasks`, `/implement`, `/debug` in your IDE
5. **Customize** → Add your own agents, skills, or workflows following the patterns

---

## 🛠️ Version

- **Aiskillforge**: v0.1.0
- **Shipped Template Set**: 7 agents, 22 skills, 17 workflows, 5 templates
- **Last Updated**: 2026-03-19
