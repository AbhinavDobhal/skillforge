# Aiskillforge

Forge better code with AI skills.

Aiskillforge is an npm package that scaffolds a complete `.agent` toolkit for AI-assisted development across major IDEs.

## Install

NPM package: https://www.npmjs.com/package/aiskillforge

```bash
npm install -g aiskillforge
```

Or run directly with npx:

```bash
npx aiskillforge init --ai claude
```

## Usage

```bash
aiskillforge init --ai claude
aiskillforge init --ai cursor
aiskillforge init --ai windsurf
aiskillforge init --ai antigravity
aiskillforge init --ai copilot
aiskillforge init --ai kiro
aiskillforge init --ai codex
```

## How to Use

1. Open your project folder in terminal.
2. Initialize Aiskillforge for your AI IDE:

```bash
aiskillforge init --ai claude
```

3. Open the same project in your IDE.
4. Check the generated `.agent/` folder:
	- `agents/` for specialist personas
	- `skills/` for domain knowledge modules
	- `workflows/` for slash-command playbooks
5. Start with a workflow in your chat:
	- `/brainstorm` to explore options before implementation
	- `/prd` to draft a Product Requirements Document
	- `/specify` to write a structured feature spec with user stories
	- `/clarify` to reduce ambiguity in a spec before planning
	- `/doc` to create or update project documentation
	- `/project-plan` for task breakdown and technical planning
	- `/tasks` to generate a dependency-ordered task list
	- `/analyze` to audit consistency across spec, plan, and tasks
	- `/checklist` to validate requirement quality
	- `/enhance` to improve existing code safely
	- `/create` to build a feature from scratch
	- `/implement` to execute a plan phase by phase
	- `/debug` for root-cause troubleshooting
	- `/test` to generate and run tests
	- `/full` to run end-to-end planning and artifact generation in one flow
	- `/pullrequest` to assess PR risk, reviewers, and approval
	- `/ui-ux-pro-max` for design-first features

### Example First Session

```text
/brainstorm Compare JWT vs session auth for our app
/prd Create PRD for user authentication module
/specify Write feature spec for user registration and login
/clarify Clarify the registration spec requirements
/doc Update README with auth setup and API examples
/project-plan Build user authentication with email + password
/tasks Generate task list for the auth feature
/analyze Check spec, plan, and tasks for consistency
/checklist Validate auth feature spec quality
/enhance Improve existing login form validation
/create Implement login and signup pages
/implement Execute the auth implementation plan
/test auth service and API handlers
/debug login returns 401 on valid credentials
/full run complete planning flow and generate project artifacts
/pullrequest evaluate PR #42 for risk and reviewer assignment
```

The command creates:

- `.agent/agents/`
- `.agent/skills/`
- `.agent/workflows/`
- `.agent/templates/`
- `.agent/rules/`
- `.agent/mcp_config.json`
- IDE-specific configuration files based on `--ai`
- Workflow commands include `/brainstorm`, `/prd`, `/specify`, `/clarify`, `/doc`, `/project-plan`, `/tasks`, `/analyze`, `/checklist`, `/enhance`, `/create`, `/implement`, `/debug`, `/test`, `/full`, `/pullrequest`, `/ui-ux-pro-max`

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

## Why It Is Useful In Development

- Creates a consistent AI workflow across teams and IDEs
- Reduces prompt drift by using reusable agents, skills, and slash-command workflows
- Speeds up feature delivery with a spec -> clarify -> plan -> tasks -> implement flow
- Improves quality with built-in debugging, testing, review, and checklist workflows
- Works as project scaffolding so every new repo starts with the same AI operating model

## License

MIT
