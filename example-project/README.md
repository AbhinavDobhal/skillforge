# Example Skillforge Project

This is an example project showing Skillforge in action. It was created by running:

```bash
skillforge init --ai claude
```

## What This Shows

This example demonstrates:
- ✅ CLI tool successfully initializes projects
- ✅ All 7 agents copied to `.agent/agents/`
- ✅ All 5 skills copied to `.agent/skills/`
- ✅ All 4 workflows copied to `.agent/workflows/`
- ✅ IDE-specific config generated (`.claude/skillforge.md`)
- ✅ Architecture documentation created
- ✅ Rules and scripts in place

## Next Steps

If this were a real project, you would:

1. Open this project in Claude Code
2. Claude automatically discovers agents, skills, and workflows
3. Use agents contextually (they auto-invoke based on task)
4. Use workflows with slash commands: `/plan`, `/debug`, `/brainstorm`, `/create`
5. Leverage skills for domain-specific knowledge

## Project Contents

```
.agent/
├── agents/             # 7 specialist personas
├── skills/             # 5 domain knowledge modules  
├── workflows/          # 4 slash commands
├── rules/              # Global behavioral guidelines
├── scripts/            # Validation helpers
├── ARCHITECTURE.md     # System overview
└── mcp_config.json     # MCP server config

.claude/
└── skillforge.md       # Claude-specific configuration
```

## How to Use

This example is self-contained. You can:

1. **Inspect agents** - See examples of how agents work
2. **Review skills** - Understand domain knowledge structure
3. **Study workflows** - Learn workflow design patterns
4. **Adapt for your needs** - Copy this structure to your projects

## Learn More

See the main skillforge repository for:
- Complete documentation
- Installation instructions
- Usage guide
- Support and contribution guidelines
