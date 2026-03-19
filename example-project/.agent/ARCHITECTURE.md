# Skillforge Architecture

> Comprehensive AI Agent Capability Expansion Toolkit for Modern Development

---

## 📋 Overview

Skillforge is a modular system consisting of:

- **20+ Specialist Agents** — Role-based AI personas
- **25+ Skills** — Domain-specific knowledge modules
- **8+ Workflows** — Slash command procedures
- **Multi-IDE Support** — Claude, Cursor, Windsurf, Antigravity, GitHub Copilot, Kiro, Codex

---

## 🏗️ Directory Structure

```plaintext
.agent/
├── ARCHITECTURE.md          # This file
├── mcp_config.json          # MCP server configurations
├── agents/                  # Specialist Agents (20+)
├── skills/                  # Domain Skills (25+)
├── workflows/               # Slash Commands (8+)
├── rules/                   # Global Rules
└── scripts/                 # Validation Scripts
```

---

## 🤖 Agents (20+)

Specialist AI personas for different domains. Agents are **auto-invoked** based on task context.

| Agent | Focus | Primary Skills |
|-------|-------|---|
| `frontend-specialist` | Web UI/UX, React, Vue | react-best-practices, frontend-design, tailwind-patterns |
| `backend-specialist` | APIs, business logic | api-patterns, nodejs-best-practices, database-design |
| `database-architect` | Schema design, optimization | database-design, prisma-expert |
| `debugger` | Root cause analysis | systematic-debugging |
| `security-auditor` | Security compliance | vulnerability-scanner, red-team-tactics |
| `test-engineer` | Testing strategies | testing-patterns, tdd-workflow, webapp-testing |
| `performance-optimizer` | Speed, Web Vitals | performance-profiling |
| `project-planner` | Discovery, planning | brainstorming, plan-writing, architecture |
| `devops-engineer` | CI/CD, Docker | deployment-procedures, docker-expert |
| `mobile-developer` | iOS, Android, RN | mobile-design |
| `game-developer` | Game logic | game-development |
| `seo-specialist` | Ranking, visibility | seo-fundamentals, geo-fundamentals |
| `documentation-writer` | Manuals, docs | documentation-templates |
| `product-manager` | Requirements, stories | plan-writing, brainstorming |
| `penetration-tester` | Offensive security | red-team-tactics |
| `qa-automation-engineer` | E2E testing | webapp-testing, testing-patterns |
| `code-archaeologist` | Legacy code, refactoring | clean-code, code-review-checklist |
| `explorer-agent` | Codebase analysis | — |
| `orchestrator` | Multi-agent coordination | parallel-agents, behavioral-modes |
| `product-owner` | Strategy, backlog | plan-writing, brainstorming |

---

## 🧩 Skills (25+)

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
- `python-patterns` — Python standards, FastAPI

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
- `mobile-design` — Mobile UI/UX patterns
- `game-development` — Game logic, mechanics

### Infrastructure & DevOps
- `deployment-procedures` — CI/CD, deploy workflows
- `docker-expert` — Containerization, Docker Compose
- `server-management` — Infrastructure management

### Other
- `clean-code` — Global coding standards
- `systematic-debugging` — Troubleshooting methodology
- `performance-profiling` — Web Vitals, optimization
- `i18n-localization` — Internationalization
- `mcp-builder` — Model Context Protocol
- `documentation-templates` — Doc formats
- `behavioral-modes` — Agent personas
- `parallel-agents` — Multi-agent patterns
- `geo-fundamentals` — GenAI optimization
- `seo-fundamentals` — SEO, E-E-A-T, Core Web Vitals
- `bash-linux` — Linux commands, scripting
- `powershell-windows` — Windows PowerShell

### Skill Structure
```
skill-name/
├── SKILL.md           # (Required) Metadata & instructions
├── scripts/           # (Optional) Python/Bash scripts
├── references/        # (Optional) Templates, docs
└── assets/            # (Optional) Images, logos
```

---

## 🔄 Workflows (8+)

Slash command procedures for common development tasks.

| Command | Description | Primary Agents |
|---------|-------------|---|
| `/brainstorm` | Explore options before implementation | project-planner, orchestrator |
| `/create` | Create new features or apps | frontend-specialist, backend-specialist |
| `/debug` | Systematic debugging and root cause analysis | debugger, code-archaeologist |
| `/deploy` | Deploy application to production | devops-engineer, security-auditor |
| `/enhance` | Improve existing code | frontend-specialist, backend-specialist, performance-optimizer |
| `/plan` | Create task breakdown and planning | project-planner, orchestrator |
| `/test` | Generate and run tests | test-engineer, qa-automation-engineer |
| `/ui-ux-pro-max` | Design with 50+ styles and patterns | frontend-specialist, design-specialist |

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
3. **Agent selected**: @frontend-specialist + @performance-optimizer
4. **Response**: Specialist advice with code examples from skills

---

## 📚 Configuration

### mcp_config.json
Defines MCP (Model Context Protocol) servers that integrate external tools and data.

```json
{
  "mcpServers": {
    "skillforge": {
      "command": "...",
      "args": [...]
    }
  }
}
```

### IDE-Specific Configs
Each AI IDE has its own configuration file:
- **Claude** → `.claude/skillforge.md`
- **Cursor** → `.cursor/rules/skillforge.md`
- **Windsurf** → `.windsurf/skillforge.md`
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
| **Deploy App** | devops-engineer | deployment-procedures, docker-expert |
| **Plan Project** | project-planner | brainstorming, plan-writing, architecture |
| **Mobile App** | mobile-developer | mobile-design |
| **Game Dev** | game-developer | game-development |

---

## 📖 Learning Path

1. **Start Here** — Read this file (ARCHITECTURE.md)
2. **Browse Agents** → See `agents/` folder for specialist profiles
3. **Explore Skills** → See `skills/` folder for domain knowledge
4. **Try Workflows** → Use `/plan`, `/debug`, `/brainstorm` in your IDE
5. **Customize** → Add your own agents, skills, or workflows following the patterns

---

## 🛠️ Version

- **Skillforge**: v0.1.0
- **Foundation**: antigravity-kit + ui-ux-pro-max concepts
- **Last Updated**: 2026-03-19
