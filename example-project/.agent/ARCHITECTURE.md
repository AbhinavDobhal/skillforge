# Aiskillforge Architecture

> Comprehensive AI Agent Capability Expansion Toolkit for Modern Development

---

## 📋 Overview

Aiskillforge is a modular system consisting of:

- **7 Specialist Agents** — Role-based AI personas
- **22 Skills** — Domain-specific knowledge modules
- **8 Workflows** — Slash command procedures
- **Multi-IDE Support** — Claude, Cursor, Windsurf, Antigravity, GitHub Copilot, Kiro, Codex

---

## 🏗️ Directory Structure

```plaintext
.agent/
├── ARCHITECTURE.md          # This file
├── mcp_config.json          # MCP server configurations
├── agents/                  # Specialist Agents (7)
├── skills/                  # Domain Skills (22)
├── workflows/               # Slash Commands (8)
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

## 🔄 Workflows (8)

Slash command procedures for common development tasks.

| Command | Description | Primary Agents |
|---------|-------------|---|
| `/brainstorm` | Explore options before implementation | project-planner |
| `/create` | Create new features or apps | frontend-specialist, backend-specialist |
| `/debug` | Systematic debugging and root cause analysis | debugger |
| `/deploy` | Deploy application to production | backend-specialist, security-auditor |
| `/enhance` | Improve existing code | frontend-specialist, backend-specialist, debugger |
| `/project-plan` | Create task breakdown and planning | project-planner |
| `/test` | Generate and run tests | test-engineer |
| `/ui-ux-pro-max` | Design with 50+ styles and patterns | frontend-specialist |

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
- **Antigravity** → Updated `.agent/mcp_config.json`

---

## 🚀 Quick Reference

| Need | Agent | Skills |
|------|-------|--------|
| **Build Web App** | frontend-specialist | react-best-practices, frontend-design, tailwind-patterns, ui-ux-pro-max |
| **Build API** | backend-specialist | api-patterns, nodejs-best-practices, database-design |
| **Debug Issue** | debugger | systematic-debugging, code-review-checklist |
| **Write Tests** | test-engineer | testing-patterns, tdd-workflow, webapp-testing |
| **Secure App** | security-auditor | vulnerability-scanner, red-team-tactics |
| **Deploy App** | backend-specialist | deploy workflow + security review |
| **Plan Project** | project-planner | brainstorming, plan-writing, architecture |
| **Frontend UI** | frontend-specialist | react-best-practices, ui-ux-pro-max |
| **Security Review** | security-auditor | vulnerability-scanner, red-team-tactics |

---

## 📖 Learning Path

1. **Start Here** — Read this file (ARCHITECTURE.md)
2. **Browse Agents** → See `agents/` folder for specialist profiles
3. **Explore Skills** → See `skills/` folder for domain knowledge
4. **Try Workflows** → Use `/project-plan`, `/debug`, `/brainstorm` in your IDE
5. **Customize** → Add your own agents, skills, or workflows following the patterns

---

## 🛠️ Version

- **Aiskillforge**: v0.1.0
- **Shipped Template Set**: 7 agents, 22 skills, 8 workflows
- **Last Updated**: 2026-03-19
