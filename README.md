# Skillforge

[![npm version](https://img.shields.io/npm/v/@abhinavdobhal/skillforge)](https://www.npmjs.com/package/@abhinavdobhal/skillforge)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Skillforge** is an AI-powered development toolkit that scaffolds modular agents, skills, and workflows for multiple AI IDEs. It works seamlessly with Claude, Cursor, Windsurf, Antigravity, GitHub Copilot, Kiro, and Codex.

---

## Features

✨ **20+ Specialist Agents** — Role-based AI personas for different domains (frontend, backend, database, security, testing, etc.)

📦 **25+ Domain Skills** — Modular knowledge packages that load on-demand based on your request context

🔄 **Workflows & Slash Commands** — Pre-built procedures for common tasks (`/plan`, `/debug`, `/brainstorm`, `/create`, etc.)

🔧 **Multi-IDE Support** — One-command initialization for all major AI editors

🎨 **Built-in Design System** — Includes ui-ux-pro-max skill with 50+ UI styles and design patterns

---

## Quick Start

### Installation

```bash
npm install -g @abhinavdobhal/skillforge
```

Or use directly:

```bash
npx @abhinavdobhal/skillforge init --ai claude
```

### Initialize for Your IDE

```bash
# Claude
skillforge init --ai claude

# Cursor
skillforge init --ai cursor

# Windsurf
skillforge init --ai windsurf

# Antigravity
skillforge init --ai antigravity

# GitHub Copilot
skillforge init --ai copilot

# Kiro
skillforge init --ai kiro

# Codex
skillforge init --ai codex
```

---

## What Gets Installed

After running `skillforge init --ai <provider>`, you'll have:

```
.agent/
├── ARCHITECTURE.md          # System overview & reference
├── mcp_config.json          # MCP server configurations
├── agents/                  # 20 specialist personas
│   ├── frontend-specialist.md
│   ├── backend-specialist.md
│   ├── database-architect.md
│   ├── debugger.md
│   └── ...
├── skills/                  # 25+ domain knowledge modules
│   ├── react-best-practices/
│   ├── api-patterns/
│   ├── database-design/
│   ├── ui-ux-pro-max/
│   └── ...
├── workflows/               # Slash command procedures
│   ├── plan.md
│   ├── debug.md
│   ├── brainstorm.md
│   ├── create.md
│   └── ...
├── rules/                   # Global behavioral rules
└── scripts/                 # Validation & helper scripts
```

Plus IDE-specific configuration files:
- **Claude** → `.claude/skillforge.md`
- **Cursor** → `.cursor/rules/skillforge.md`
- **Windsurf** → `.windsurf/skillforge.md`
- **GitHub Copilot** → `.github/copilot-instructions.md`
- **Antigravity** → `.agent/mcp_config.json` (updated)
- **Kiro** → `kiro.config.json`
- **Codex** → `codex.config.md`

---

## Usage

### Using Agents

Agents are **auto-invoked** based on your request. No need to mention them explicitly:

```
You: "Add JWT authentication to the API"
AI: 🤖 Using @security-auditor + @backend-specialist...

You: "Fix the dark mode toggle button"
AI: 🤖 Using @frontend-specialist...

You: "Why is the login endpoint returning 500?"
AI: 🤖 Using @debugger for systematic analysis...
```

### Using Skills

Skills load on-demand when your request matches their domain. Example domains:

- **Frontend** — react-best-practices, frontend-design, tailwind-patterns
- **Backend** — api-patterns, nodejs-best-practices, database-design
- **Testing** — testing-patterns, tdd-workflow, webapp-testing
- **Security** — vulnerability-scanner, red-team-tactics
- **Design** — ui-ux-pro-max (50+ styles, color palettes, font pairings)

### Using Workflows

Invoke workflows with slash commands:

```
/plan                  # Create task breakdown
/debug                 # Systematic debugging
/brainstorm            # Explore options before implementation
/create                # Create new features
/enhance               # Improve existing code
/test                  # Generate and run tests
/deploy                # Deploy application
/ui-ux-pro-max         # Design with 50+ styles & patterns
```

---

## Architecture

Skillforge is built on three core concepts:

1. **Agents** — Specialist personas with deep expertise in specific domains. Each agent knows which skills to load based on task context.

2. **Skills** — Modular knowledge packages containing instructions, code templates, design systems, or scripts. Skills are progressively disclosed — they load only when needed.

3. **Workflows** — Step-by-step procedures for common development tasks. Workflows coordinate multiple agents and skills.

For the complete system architecture, see [.agent/ARCHITECTURE.md](templates/.agent/ARCHITECTURE.md) after initialization.

---

## Supported IDEs & AI Providers

| IDE | Support | Config File |
|-----|---------|------------|
| Claude | ✅ | `.claude/skillforge.md` |
| Cursor | ✅ | `.cursor/rules/skillforge.md` |
| Windsurf | ✅ | `.windsurf/skillforge.md` |
| Antigravity | ✅ | `.agent/mcp_config.json` |
| GitHub Copilot | ✅ | `.github/copilot-instructions.md` |
| Kiro | ✅ | `kiro.config.json` |
| Codex | ✅ | `codex.config.md` |

---

## Project Structure

```
skillforge/
├── bin/
│   └── skillforge.js          # CLI entry point
├── lib/
│   ├── cli.js                 # Main CLI logic
│   ├── ide-configs.js         # IDE-specific config generators
│   └── utils.js               # Utility functions
├── templates/
│   └── .agent/                # Template folder structure
│       ├── agents/            # Agent templates
│       ├── skills/            # Skill templates
│       ├── workflows/         # Workflow templates
│       ├── rules/             # Rules templates
│       └── scripts/           # Script templates
├── docs/                      # Documentation
├── web/                       # Next.js documentation site
├── package.json
├── README.md
├── LICENSE
└── CHANGELOG.md
```

---

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## License

MIT © 2026 Abhinav Dobhal

---

## Resources

- **GitHub** — https://github.com/alvinabhinav/skillforge
- **npm Package** — https://www.npmjs.com/package/@abhinavdobhal/skillforge
- **Documentation** — See `.agent/ARCHITECTURE.md` after installation
- **Issues** — https://github.com/alvinabhinav/skillforge/issues

---

## Credits

Built with inspiration from [antigravity-kit](https://github.com/vudovn/antigravity-kit) and [ui-ux-pro-max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill).
