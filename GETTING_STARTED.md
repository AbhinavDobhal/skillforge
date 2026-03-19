# Skillforge - Getting Started

## Installation

```bash
npm install -g @abhinavdobhal/skillforge
```

Or use with `npx`:

```bash
npx @abhinavdobhal/skillforge init --ai claude
```

## Quick Start

Initialize Skillforge in your project for your AI IDE:

```bash
skillforge init --ai <ide>
```

### Supported AI IDEs

| IDE | Command | Config File |
|-----|---------|-------------|
| Claude | `skillforge init --ai claude` | `.claude/skillforge.md` |
| Cursor | `skillforge init --ai cursor` | `.cursor/rules/skillforge.md` |
| Windsurf | `skillforge init --ai windsurf` | `.windsurf/skillforge.md` |
| Antigravity | `skillforge init --ai antigravity` | `.agent/mcp_config.json` |
| GitHub Copilot | `skillforge init --ai copilot` | `.github/copilot-instructions.md` |
| Kiro | `skillforge init --ai kiro` | `kiro.config.json` |
| Codex | `skillforge init --ai codex` | `codex.config.md` |

## What Gets Created

When you run `skillforge init --ai <ide>`, the following structure is created:

```
.agent/
├── agents/                      # 7 specialist personas
│   ├── frontend-specialist.md
│   ├── backend-specialist.md
│   ├── database-architect.md
│   ├── debugger.md
│   ├── security-auditor.md
│   ├── test-engineer.md
│   └── project-planner.md
├── skills/                      # 5 domain knowledge modules
│   ├── react-best-practices/
│   ├── api-patterns/
│   ├── database-design/
│   ├── testing-patterns/
│   └── ui-ux-pro-max/
├── workflows/                   # 4 slash commands
│   ├── plan.md
│   ├── debug.md
│   ├── brainstorm.md
│   └── create.md
├── rules/
│   └── GEMINI.md               # Global behavioral rules
├── scripts/                     # Validation helpers
├── ARCHITECTURE.md             # System documentation
└── mcp_config.json            # MCP server config
```

Plus IDE-specific configuration files for seamless integration.

## Using Your AI with Skillforge

### Example: Using Agents

Open your project in Claude/Cursor/Windsurf and mention your task. The system automatically invokes relevant agents:

```
You: "Create a new React dashboard component"
AI:  🤖 Invoking @frontend-specialist...
     Using skills: react-best-practices, ui-ux-pro-max
```

### Example: Using Workflows

Invoke workflows with slash commands:

```
/plan                # Create task breakdown
/debug               # Systematic debugging
/brainstorm          # Explore options
/create              # Create new features
```

### Example: Using Skills

Skills load automatically based on context. For instance, mention "database schema" and the system loads `database-design` skill with normalization patterns, query optimization tips, etc.

## Features Included

### 7 Specialist Agents

1. **frontend-specialist** - React, Next.js, CSS, animations, accessibility
2. **backend-specialist** - APIs, business logic, database operations
3. **database-architect** - Schema design, optimization, scaling
4. **debugger** - Root cause analysis, systematic debugging
5. **security-auditor** - Vulnerability scanning, best practices
6. **test-engineer** - Testing strategies, coverage, automation
7. **project-planner** - Task breakdown, timelines, resources

### 5 Domain Skills

1. **react-best-practices** - 57 React/Vercel rules and patterns
2. **api-patterns** - REST API design, error handling, security
3. **database-design** - Schema normalization, query optimization
4. **testing-patterns** - Unit, integration, E2E testing strategies
5. **ui-ux-pro-max** - Design system with 50+ styles and 95+ color palettes

### 4 Interactive Workflows

- **/plan** - Break down projects into tasks
- **/debug** - Systematic debugging methodology
- **/brainstorm** - Explore ideas and evaluate options
- **/create** - End-to-end feature creation

## Configuration

Each IDE gets a dedicated configuration file optimized for its AI capabilities:

### Claude (`.claude/skillforge.md`)
Auto-discovery of agents, skills, and workflows from `.agent/` folder.

### Cursor (`.cursor/rules/skillforge.md`)
Rules file for Cursor editor integration.

### Windsurf (`.windsurf/skillforge.md`)
Cascade configuration for Windsurf IDE.

### Antigravity (`.agent/mcp_config.json`)
MCP server configuration for Antigravity integration.

### GitHub Copilot (`.github/copilot-instructions.md`)
Instructions for GitHub Copilot integration.

### Kiro (`kiro.config.json`)
Kiro-specific configuration.

### Codex (`codex.config.md`)
Codex CLI configuration.

## Advanced Usage

### Customizing Agents

Edit `.agent/agents/*.md` files to customize agent behaviors for your team's needs.

### Adding Skills

Create new skill folders in `.agent/skills/` following the SKILL.md template format.

### Creating Custom Workflows

Add new `.md` files to `.agent/workflows/` for custom slash commands.

### Global Rules

Edit `.agent/rules/GEMINI.md` to set global behavioral guidelines for all agents.

## Architecture

For complete system overview, documentation, and architectural details, see:

```bash
cat .agent/ARCHITECTURE.md
```

## Support

For issues, questions, or contributions, visit:
- GitHub: https://github.com/alvinabhinav/skillforge
- Issues: https://github.com/alvinabhinav/skillforge/issues

## License

MIT License - See LICENSE file for details

## What's Next?

1. **Initialize** - Run `skillforge init --ai <your-ide>`
2. **Explore** - Open your project in your AI IDE
3. **Customize** - Edit agents and skills for your team
4. **Create** - Use workflows and agents to build faster
5. **Share** - Commit `.agent/` folder to your repository

Happy building! 🚀
