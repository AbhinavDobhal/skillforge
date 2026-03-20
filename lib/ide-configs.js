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

function claudeConfig() {
  return [
    {
      path: path.join(".claude", "aiskillforge.md"),
      content: [
        "# Aiskillforge Configuration for Claude",
        "",
        "Claude can load specialist agents, skills, and workflows from your .agent directory.",
        "",
        "- Agents: .agent/agents/",
        "- Skills: .agent/skills/",
        "- Workflows: .agent/workflows/",
        "",
        "Try commands like /brainstorm, /prd, /specify, /clarify, /project-plan, /tasks, /analyze, /checklist, /doc, /enhance, /create, /implement, /debug, /test, /deploy, and /ui-ux-pro-max.",
        ""
      ].join("\n")
    }
  ];
}

function cursorConfig() {
  return [
    {
      path: path.join(".cursor", "rules", "aiskillforge.md"),
      content: [
        "# Aiskillforge Rules for Cursor",
        "",
        "Use the .agent folder as your source of specialist agents, skills, and workflows.",
        "Load matching skill modules before generating implementation output.",
        ""
      ].join("\n")
    }
  ];
}

function windsurfConfig() {
  return [
    {
      path: path.join(".windsurf", "aiskillforge.md"),
      content: [
        "# Aiskillforge Configuration for Windsurf",
        "",
        "Windsurf should prioritize .agent workflows and skills for task-specific execution.",
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
        "Use .agent templates as the primary source for specialist guidance:",
        "- agents in .agent/agents/",
        "- skills in .agent/skills/",
        "- workflows in .agent/workflows/",
        "",
        "When a matching skill exists, load SKILL.md before implementation.",
        ""
      ].join("\n")
    }
  ];
}

function kiroConfig() {
  return [
    {
      path: "kiro.config.json",
      content: `${JSON.stringify(
        {
          aiskillforge: {
            enabled: true,
            agentsPath: ".agent/agents",
            skillsPath: ".agent/skills",
            workflowsPath: ".agent/workflows"
          }
        },
        null,
        2
      )}\n`
    }
  ];
}

function codexConfig() {
  return [
    {
      path: "codex.config.md",
      content: [
        "# Aiskillforge Configuration for Codex",
        "",
        "Use .agent as the knowledge root for specialist execution.",
        "Match user intent to workflow first, then load related skills.",
        ""
      ].join("\n")
    }
  ];
}

function antigravityConfig(targetRoot) {
  const configPath = path.join(targetRoot, ".agent", "mcp_config.json");
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

function buildConfigFiles(ai, targetRoot) {
  if (ai === "antigravity") {
    return antigravityConfig(targetRoot);
  }

  if (ai === "claude") return claudeConfig();
  if (ai === "cursor") return cursorConfig();
  if (ai === "windsurf") return windsurfConfig();
  if (ai === "copilot") return copilotConfig();
  if (ai === "kiro") return kiroConfig();
  if (ai === "codex") return codexConfig();

  return [];
}

function writeAiConfigs(ai, targetRoot) {
  const files = buildConfigFiles(ai, targetRoot);
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
  writeAiConfigs
};
