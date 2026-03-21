const path = require("node:path");
const { readJson, writeJson, writeTextFile } = require("./utils");

const SUPPORTED_AI = [
  "claude",
  "cursor",
  "windsurf",
  "antigravity",
  "copilot",
  "kiro",
  "codex"
];

const AI_LABELS = {
  claude: "Claude",
  cursor: "Cursor",
  windsurf: "Windsurf",
  antigravity: "Antigravity",
  copilot: "GitHub Copilot",
  kiro: "Kiro",
  codex: "Codex"
};

const AGENT_DIRS = {
  claude: path.join(".claude", ".aiskillforge"),
  cursor: path.join(".cursor", ".aiskillforge"),
  windsurf: path.join(".windsurf", ".aiskillforge"),
  antigravity: ".aiskillforge",
  copilot: path.join(".github", ".aiskillforge"),
  kiro: ".aiskillforge",
  codex: ".aiskillforge"
};

function claudeConfig(agentRelDir) {
  return [
    {
      path: path.join(".claude", "aiskillforge.md"),
      content: [
        "# Aiskillforge Configuration for Claude",
        "",
        `Claude can load specialist agents, skills, and workflows from your ${agentRelDir} directory.`,
        "",
        `- Agents: ${agentRelDir}/agents/`,
        `- Skills: ${agentRelDir}/skills/`,
        `- Workflows: ${agentRelDir}/workflows/`,
        "",
        "Try commands like /brainstorm, /prd, /specify, /clarify, /project-plan, /tasks, /analyze, /checklist, /doc, /enhance, /create, /implement, /debug, /test, /full, /pullrequest, and /ui-ux-pro-max.",
        ""
      ].join("\n")
    }
  ];
}

function cursorConfig(agentRelDir) {
  return [
    {
      path: path.join(".cursor", "rules", "aiskillforge.md"),
      content: [
        "# Aiskillforge Rules for Cursor",
        "",
        `Use the ${agentRelDir} folder as your source of specialist agents, skills, and workflows.`,
        "Load matching skill modules before generating implementation output.",
        ""
      ].join("\n")
    }
  ];
}

function windsurfConfig(agentRelDir) {
  return [
    {
      path: path.join(".windsurf", "aiskillforge.md"),
      content: [
        "# Aiskillforge Configuration for Windsurf",
        "",
        `Windsurf should prioritize ${agentRelDir} workflows and skills for task-specific execution.`,
        ""
      ].join("\n")
    }
  ];
}

function copilotConfig() {
  return [
    {
      path: path.join(".github", "copilot-instructions.md"),
      content: [
        "# Aiskillforge Instructions",
        "",
        "Use Aiskillforge templates as the primary source for specialist guidance:",
        "- custom agents in .github/agents/ (*.agent.md)",
        "- skills in .github/.aiskillforge/skills/",
        "- workflows in .github/.aiskillforge/workflows/",
        "",
        "If .github/agents files exist, prefer them for Copilot custom agent selection.",
        "When a matching skill exists, load SKILL.md before implementation.",
        ""
      ].join("\n")
    }
  ];
}

function kiroConfig(agentRelDir) {
  return [
    {
      path: "kiro.config.json",
      content: `${JSON.stringify(
        {
          aiskillforge: {
            enabled: true,
            agentsPath: `${agentRelDir}/agents`,
            skillsPath: `${agentRelDir}/skills`,
            workflowsPath: `${agentRelDir}/workflows`
          }
        },
        null,
        2
      )}\n`
    }
  ];
}

function codexConfig(agentRelDir) {
  return [
    {
      path: "codex.config.md",
      content: [
        "# Aiskillforge Configuration for Codex",
        "",
        `Use ${agentRelDir} as the knowledge root for specialist execution.`,
        "Match user intent to workflow first, then load related skills.",
        ""
      ].join("\n")
    }
  ];
}

function antigravityConfig(targetRoot, agentRelDir) {
  const configPath = path.join(targetRoot, agentRelDir, "mcp_config.json");
  const config = readJson(configPath);

  config.providers = config.providers || {};
  config.providers.antigravity = {
    enabled: true,
    source: "aiskillforge",
    updatedAt: new Date().toISOString()
  };

  writeJson(configPath, config);
  return [];
}

function buildConfigFiles(ai, targetRoot, agentRelDir) {
  if (ai === "antigravity") {
    return antigravityConfig(targetRoot, agentRelDir);
  }

  if (ai === "claude") return claudeConfig(agentRelDir);
  if (ai === "cursor") return cursorConfig(agentRelDir);
  if (ai === "windsurf") return windsurfConfig(agentRelDir);
  if (ai === "copilot") return copilotConfig();
  if (ai === "kiro") return kiroConfig(agentRelDir);
  if (ai === "codex") return codexConfig(agentRelDir);

  return [];
}

function writeAiConfigs(ai, targetRoot, agentRelDir) {
  const files = buildConfigFiles(ai, targetRoot, agentRelDir);
  const created = [];

  for (const file of files) {
    const targetPath = path.join(targetRoot, file.path);
    writeTextFile(targetPath, file.content);
    created.push(file.path);
  }

  return created;
}

module.exports = {
  SUPPORTED_AI,
  AI_LABELS,
  AGENT_DIRS,
  writeAiConfigs
};
