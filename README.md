# Skillforge

Skillforge is an npm package that scaffolds a complete `.agent` toolkit for AI-assisted development across major IDEs.

## Install

```bash
npm install -g skillforge
```

Or run directly with npx:

```bash
npx skillforge init --ai claude
```

## Usage

```bash
skillforge init --ai claude
skillforge init --ai cursor
skillforge init --ai windsurf
skillforge init --ai antigravity
skillforge init --ai copilot
skillforge init --ai kiro
skillforge init --ai codex
```

The command creates:

- `.agent/agents/`
- `.agent/skills/`
- `.agent/workflows/`
- `.agent/rules/`
- `.agent/mcp_config.json`
- IDE-specific configuration files based on `--ai`

## Supported IDEs

- Claude
- Cursor
- Windsurf
- Antigravity
- GitHub Copilot
- Kiro
- Codex

## Package Contents

- CLI source in `bin/` and `lib/`
- Reusable scaffold templates in `templates/.agent/`
- Starter example in `example-project/`

## License

MIT
