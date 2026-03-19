import fs from 'fs/promises';
import fssSync from 'fs';
import path from 'path';

/**
 * Ensure directory exists
 */
async function ensureDir(dir) {
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch (err) {
    if (err.code !== 'EEXIST') throw err;
  }
}

/**
 * Write JSON file
 */
async function writeJson(filePath, data) {
  await ensureDir(path.dirname(filePath));
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

/**
 * Generate IDE-specific configuration files and snippets
 */
export async function updateIDEConfigs(projectDir, aiProvider) {
  try {
    switch (aiProvider) {
      case 'claude':
        await generateClaudeConfig(projectDir);
        break;
      case 'cursor':
        await generateCursorConfig(projectDir);
        break;
      case 'windsurf':
        await generateWindsurfConfig(projectDir);
        break;
      case 'antigravity':
        await generateAntigravityConfig(projectDir);
        break;
      case 'copilot':
        await generateCopilotConfig(projectDir);
        break;
      case 'kiro':
        await generateKiroConfig(projectDir);
        break;
      case 'codex':
        await generateCodexConfig(projectDir);
        break;
    }
  } catch (err) {
    console.error(`Failed to generate ${aiProvider} config:`, err.message);
    throw err;
  }
}

async function generateClaudeConfig(projectDir) {
  const claudeDir = path.join(projectDir, '.claude');
  await ensureDir(claudeDir);

  const skillforgeConfig = `# Skillforge Configuration for Claude

Claude will automatically discover agents, skills, and workflows from the .agent/ folder.

## Quick Start

1. **Agents** are loaded from \`.agent/agents/\` - specialist personas for different domains
2. **Skills** are loaded from \`.agent/skills/\` - modular knowledge with bundled assets
3. **Workflows** are loaded from \`.agent/workflows/\` - slash commands (e.g., \`/plan\`, \`/debug\`)

## Using Agents

Agents are auto-invoked based on your request context. No need to mention them explicitly:

\`\`\`
You: "Optimize the React component for performance"
Claude: 🤖 Using @frontend-specialist...
\`\`\`

## Using Skills

Skills load on-demand when detected in your request. See \`.agent/skills/\` for available domains.

## Using Workflows

Invoke workflows with slash commands:

\`\`\`
/plan                # Task breakdown
/debug               # Systematic debugging
/brainstorm          # Explore options
/create              # Create new features
/enhance             # Improve existing code
/test                # Generate and run tests
/deploy              # Deploy application
/ui-ux-pro-max       # Design with 50+ styles
\`\`\`

## Documentation

See \`.agent/ARCHITECTURE.md\` for complete system overview.
`;

  await fs.writeFile(path.join(claudeDir, 'skillforge.md'), skillforgeConfig);
}

async function generateCursorConfig(projectDir) {
  const cursorDir = path.join(projectDir, '.cursor');
  const rulesDir = path.join(cursorDir, 'rules');
  await ensureDir(rulesDir);

  const skillforgeRules = `# Skillforge Rules for Cursor

Cursor will load agents, skills, and workflows from the .agent/ folder.

## System Configuration

- **Agents**: \`.agent/agents/\` → Loaded automatically
- **Skills**: \`.agent/skills/\` → On-demand loading
- **Workflows**: \`.agent/workflows/\` → Slash commands

## Agent Auto-Invocation

Agents detect context and apply expertise automatically:

\`\`\`
"Add JWT authentication"        → @security-auditor + @backend-specialist
"Fix dark mode button"          → @frontend-specialist
"Login returns 500"             → @debugger
\`\`\`

## Available Workflows

- \`/plan\` - Create task breakdown
- \`/debug\` - Systematic debugging  
- \`/brainstorm\` - Explore options
- \`/create\` - Create new features
- \`/enhance\` - Improve existing code
- \`/test\` - Generate and run tests
- \`/deploy\` - Deploy application
- \`/ui-ux-pro-max\` - Design with 50+ styles

## Learn More

See \`.agent/ARCHITECTURE.md\` for complete documentation.
`;

  await fs.writeFile(path.join(rulesDir, 'skillforge.md'), skillforgeRules);
}

async function generateWindsurfConfig(projectDir) {
  const windsurfDir = path.join(projectDir, '.windsurf');
  await ensureDir(windsurfDir);

  const skillforgeConfig = `# Skillforge Cascade for Windsurf

Load agents, skills, and workflows from .agent/ folder.

## Configuration

**Agents** → \`.agent/agents/\`
- Auto-invoked based on request context

**Skills** → \`.agent/skills/\`
- On-demand domain knowledge loading

**Workflows** → \`.agent/workflows/\`
- Slash commands for common tasks

## Workflows

- \`/plan\` - Task planning
- \`/debug\` - Root cause analysis
- \`/brainstorm\` - Option exploration
- \`/create\` - Create new features
- \`/enhance\` - Improve code
- \`/test\` - Testing
- \`/deploy\` - Deployment
- \`/ui-ux-pro-max\` - Design system

See \`.agent/ARCHITECTURE.md\` for more.
`;

  await fs.writeFile(path.join(windsurfDir, 'skillforge.md'), skillforgeConfig);
}

async function generateAntigravityConfig(projectDir) {
  const agentDir = path.join(projectDir, '.agent');
  
  const mcpConfig = {
    mcpServers: {
      skillforge: {
        command: "echo",
        args: ["Skillforge MCP server configured"]
      }
    }
  };

  const configPath = path.join(agentDir, 'mcp_config.json');
  let existing = {};
  
  try {
    if (fssSync.existsSync(configPath)) {
      const content = await fs.readFile(configPath, 'utf-8');
      existing = JSON.parse(content);
    }
  } catch {
    existing = {};
  }
  
  const merged = { ...existing, ...mcpConfig };
  await writeJson(configPath, merged);
}

async function generateCopilotConfig(projectDir) {
  const githubDir = path.join(projectDir, '.github');
  await ensureDir(githubDir);

  const copilotInstructions = `# Skillforge for GitHub Copilot

This project uses Skillforge agents, skills, and workflows.

## Agents

Detected automatically from \`.agent/agents/\`:

- @frontend-specialist - Web UI/UX
- @backend-specialist - APIs and business logic
- @database-architect - Database schema and optimization
- @debugger - Root cause analysis
- @security-auditor - Security compliance
- @test-engineer - Testing strategies
- @project-planner - Task planning

## Skills

Domain-specific knowledge from \`.agent/skills/\`:

- react-best-practices, frontend-design, tailwind-patterns
- api-patterns, nodejs-best-practices, database-design
- testing-patterns, tdd-workflow, webapp-testing
- vulnerability-scanner, red-team-tactics
- systematic-debugging, performance-profiling

## Workflows

Slash commands from \`.agent/workflows/\`:

- \`/plan\` - Task breakdown
- \`/debug\` - Debugging
- \`/brainstorm\` - Explore options
- \`/create\` - Create features
- \`/enhance\` - Improve code
- \`/test\` - Testing
- \`/deploy\` - Deployment

See \`.agent/ARCHITECTURE.md\` for full documentation.
`;

  await fs.writeFile(
    path.join(githubDir, 'copilot-instructions.md'),
    copilotInstructions
  );
}

async function generateKiroConfig(projectDir) {
  const kiroConfigPath = path.join(projectDir, 'kiro.config.json');
  
  const config = {
    skillforge: {
      agents: ".agent/agents",
      skills: ".agent/skills",
      workflows: ".agent/workflows",
      provider: "kiro"
    }
  };

  await writeJson(kiroConfigPath, config);
}

async function generateCodexConfig(projectDir) {
  const codexConfigPath = path.join(projectDir, 'codex.config.md');
  
  const config = `# Skillforge Configuration for Codex CLI

## Setup

Skillforge agents, skills, and workflows are configured in the \`.agent/\` folder.

## Directories

- **Agents**: \`.agent/agents/\` - Specialist personas
- **Skills**: \`.agent/skills/\` - Domain knowledge modules
- **Workflows**: \`.agent/workflows/\` - Command procedures

## Usage

Agents auto-invoke based on request context. Skills load on-demand.

Workflows (slash commands):
- \`/plan\`, \`/debug\`, \`/brainstorm\`, \`/create\`, \`/enhance\`, \`/test\`, \`/deploy\`, \`/ui-ux-pro-max\`

See \`.agent/ARCHITECTURE.md\` for complete documentation.
`;

  await fs.writeFile(codexConfigPath, config);
}
