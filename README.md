# Skillforge

Forge better code with AI skills.

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

## How to Use

1. Open your project folder in terminal.
2. Initialize Skillforge for your AI IDE:

```bash
skillforge init --ai claude
```

3. Open the same project in your IDE.
4. Check the generated `.agent/` folder:
	- `agents/` for specialist personas
	- `skills/` for domain knowledge modules
	- `workflows/` for slash-command playbooks
5. Start with a workflow in your chat:
	- `/brainstorm` to explore options before implementation
	- `/prd` to draft a Product Requirements Document
	- `/doc` to create or update project documentation
	- `/plan` for task breakdown
	- `/enhance` to improve existing code safely
	- `/create` to build a feature
	- `/debug` for root-cause troubleshooting
	- `/test` to generate and run tests

### Example First Session

```text
/brainstorm Compare JWT vs session auth for our app
/prd Create PRD for user authentication module
/doc Update README with auth setup and API examples
/plan Build user authentication with email + password
/enhance Improve existing login form validation
/create Implement login and signup pages
/test auth service and API handlers
/debug login returns 401 on valid credentials
```

The command creates:

- `.agent/agents/`
- `.agent/skills/`
- `.agent/workflows/`
- `.agent/rules/`
- `.agent/mcp_config.json`
- IDE-specific configuration files based on `--ai`
- Workflow commands include `/brainstorm`, `/prd`, `/doc`, `/plan`, `/enhance`, `/create`, `/debug`, `/test`, `/deploy`, `/ui-ux-pro-max`

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
