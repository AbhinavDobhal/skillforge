# Skillforge Configuration for Claude

Claude will automatically discover agents, skills, and workflows from the .agent/ folder.

## Quick Start

1. **Agents** are loaded from `.agent/agents/` - specialist personas for different domains
2. **Skills** are loaded from `.agent/skills/` - modular knowledge with bundled assets
3. **Workflows** are loaded from `.agent/workflows/` - slash commands (e.g., `/plan`, `/debug`)

## Using Agents

Agents are auto-invoked based on your request context. No need to mention them explicitly:

```
You: "Optimize the React component for performance"
Claude: 🤖 Using @frontend-specialist...
```

## Using Skills

Skills load on-demand when detected in your request. See `.agent/skills/` for available domains.

## Using Workflows

Invoke workflows with slash commands:

```
/plan                # Task breakdown
/debug               # Systematic debugging
/brainstorm          # Explore options
/create              # Create new features
/enhance             # Improve existing code
/test                # Generate and run tests
/deploy              # Deploy application
/ui-ux-pro-max       # Design with 50+ styles
```

## Documentation

See `.agent/ARCHITECTURE.md` for complete system overview.
