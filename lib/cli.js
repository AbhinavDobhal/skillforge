const fs = require("node:fs");
const path = require("node:path");
const { copyDir } = require("./utils");
const { SUPPORTED_AI, AI_LABELS, AGENT_DIRS, writeAiConfigs } = require("./ide-configs");

function usage() {
  return [
    "Aiskillforge CLI",
    "",
    "Usage:",
    "  aiskillforge init --ai <provider>",
    "",
    "Supported providers:",
    `  ${SUPPORTED_AI.join(", ")}`,
    "",
    "Examples:",
    "  aiskillforge init --ai claude",
    "  aiskillforge init --ai cursor",
    "  aiskillforge init --ai codex",
    ""
  ].join("\n");
}

function parseInitArgs(args) {
  let ai;

  for (let index = 0; index < args.length; index += 1) {
    const current = args[index];
    if (current === "--ai") {
      ai = args[index + 1];
      index += 1;
    }
  }

  return { ai };
}

function validateAi(ai) {
  if (!ai) {
    throw new Error("Missing --ai option. Example: aiskillforge init --ai claude");
  }

  if (!SUPPORTED_AI.includes(ai)) {
    throw new Error(
      `Unsupported AI provider: ${ai}. Use one of: ${SUPPORTED_AI.join(", ")}`
    );
  }
}

function syncCopilotAgents(cwd, sourceAgentDir) {
  const githubAgentsDir = path.join(cwd, ".github", "agents");

  if (!fs.existsSync(sourceAgentDir)) {
    return 0;
  }

  fs.mkdirSync(githubAgentsDir, { recursive: true });

  const files = fs
    .readdirSync(sourceAgentDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"));

  for (const file of files) {
    const sourcePath = path.join(sourceAgentDir, file.name);
    const baseName = file.name.replace(/\.md$/, "");
    const targetPath = path.join(githubAgentsDir, `${baseName}.agent.md`);
    const content = fs.readFileSync(sourcePath, "utf8");
    fs.writeFileSync(targetPath, content, "utf8");
  }

  return files.length;
}

function initProject(ai) {
  const cwd = process.cwd();
  const templateDir = path.join(__dirname, "..", "templates", ".agent");
  const agentRelDir = AGENT_DIRS[ai];
  const targetAgentDir = path.join(cwd, agentRelDir);

  if (!fs.existsSync(templateDir)) {
    throw new Error("Template directory not found. Reinstall aiskillforge package.");
  }

  copyDir(templateDir, targetAgentDir);
  let syncedCopilotAgents = 0;

  if (ai === "copilot") {
    syncedCopilotAgents = syncCopilotAgents(cwd, path.join(targetAgentDir, "agents"));
  }

  const configFiles = writeAiConfigs(ai, cwd, agentRelDir);

  console.log("\nAiskillforge initialized successfully.\n");
  console.log(`AI provider: ${AI_LABELS[ai]}`);
  console.log(`Created: ${agentRelDir}/`);

  if (configFiles.length > 0) {
    console.log("IDE files:");
    for (const file of configFiles) {
      console.log(`- ${file}`);
    }
  } else if (ai === "antigravity") {
    console.log("Updated: .agent/mcp_config.json");
  }

  if (ai === "copilot") {
    console.log(`Generated: .github/agents/ (${syncedCopilotAgents} custom agents)`);
  }

  console.log("\nNext steps:");
  console.log("1. Open your project in your AI IDE");
  console.log("2. Try a workflow such as /project-plan or /debug");
  console.log("3. Extend .agent/skills with project-specific modules\n");
}

function run(argv) {
  const command = argv[0];

  if (!command || command === "-h" || command === "--help") {
    console.log(usage());
    return;
  }

  if (command !== "init") {
    console.error(`Unknown command: ${command}\n`);
    console.error(usage());
    process.exitCode = 1;
    return;
  }

  try {
    const { ai } = parseInitArgs(argv.slice(1));
    validateAi(ai);
    initProject(ai);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exitCode = 1;
  }
}

module.exports = {
  run
};
