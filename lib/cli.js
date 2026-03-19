const fs = require("node:fs");
const path = require("node:path");
const { copyDir } = require("./utils");
const { SUPPORTED_AI, AI_LABELS, writeAiConfigs } = require("./ide-configs");

function usage() {
  return [
    "Skillforge CLI",
    "",
    "Usage:",
    "  skillforge init --ai <provider>",
    "",
    "Supported providers:",
    `  ${SUPPORTED_AI.join(", ")}`,
    "",
    "Examples:",
    "  skillforge init --ai claude",
    "  skillforge init --ai cursor",
    "  skillforge init --ai codex",
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
    throw new Error("Missing --ai option. Example: skillforge init --ai claude");
  }

  if (!SUPPORTED_AI.includes(ai)) {
    throw new Error(
      `Unsupported AI provider: ${ai}. Use one of: ${SUPPORTED_AI.join(", ")}`
    );
  }
}

function initProject(ai) {
  const cwd = process.cwd();
  const templateDir = path.join(__dirname, "..", "templates", ".agent");
  const targetAgentDir = path.join(cwd, ".agent");

  if (!fs.existsSync(templateDir)) {
    throw new Error("Template directory not found. Reinstall skillforge package.");
  }

  copyDir(templateDir, targetAgentDir);
  const configFiles = writeAiConfigs(ai, cwd);

  console.log("\nSkillforge initialized successfully.\n");
  console.log(`AI provider: ${AI_LABELS[ai]}`);
  console.log("Created: .agent/");

  if (configFiles.length > 0) {
    console.log("IDE files:");
    for (const file of configFiles) {
      console.log(`- ${file}`);
    }
  } else if (ai === "antigravity") {
    console.log("Updated: .agent/mcp_config.json");
  }

  console.log("\nNext steps:");
  console.log("1. Open your project in your AI IDE");
  console.log("2. Try a workflow such as /plan or /debug");
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
