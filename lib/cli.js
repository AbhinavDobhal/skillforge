import fs from 'fs/promises';
import fssSync from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { updateIDEConfigs } from './ide-configs.js';
import { copyTemplates, ensureDirectory, displaySuccess } from './utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(path.dirname(__filename));

export async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0 || args[0] === '--help' || args[0] === '-h') {
    displayHelp();
    process.exit(0);
  }

  if (args[0] === 'init') {
    await handleInit(args.slice(1));
  } else if (args[0] === '--version' || args[0] === '-v') {
    try {
      const pkg = JSON.parse(fssSync.readFileSync(path.join(__dirname, 'package.json'), 'utf-8'));
      console.log(`skillforge v${pkg.version}`);
    } catch {
      console.log('skillforge v0.1.0');
    }
  } else {
    console.error(`Unknown command: ${args[0]}`);
    console.error('Use `skillforge --help` for usage information');
    process.exit(1);
  }
}

async function handleInit(args) {
  let aiProvider = null;
  
  // Parse --ai flag
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--ai' && i + 1 < args.length) {
      aiProvider = args[i + 1].toLowerCase();
      break;
    }
  }

  const supportedProviders = ['claude', 'cursor', 'windsurf', 'antigravity', 'copilot', 'kiro', 'codex'];
  
  if (!aiProvider) {
    console.log('🚀 Skillforge Initialization');
    console.log('\nUsage: skillforge init --ai <provider>');
    console.log('\nSupported AI IDEs:');
    supportedProviders.forEach((p) => console.log(`  - ${p}`));
    console.log('\nExample: skillforge init --ai claude');
    process.exit(0);
  }

  if (!supportedProviders.includes(aiProvider)) {
    console.error(`❌ Unsupported AI provider: ${aiProvider}`);
    console.error(`Supported providers: ${supportedProviders.join(', ')}`);
    process.exit(1);
  }

  await initializeProject(aiProvider);
}

async function initializeProject(aiProvider) {
  const projectDir = process.cwd();
  const agentDir = path.join(projectDir, '.agent');

  console.log('\n🚀 Skillforge Initialization');
  console.log(`📌 AI Provider: ${aiProvider}`);
  console.log(`📂 Project directory: ${projectDir}`);

  try {
    // Step 1: Create .agent directory structure
    console.log('\n📦 Creating .agent/ directory structure...');
    await ensureDirectory(agentDir);
    await ensureDirectory(path.join(agentDir, 'agents'));
    await ensureDirectory(path.join(agentDir, 'skills'));
    await ensureDirectory(path.join(agentDir, 'workflows'));
    await ensureDirectory(path.join(agentDir, 'rules'));
    await ensureDirectory(path.join(agentDir, 'scripts'));

    // Step 2: Copy template files
    console.log('📋 Copying templates...');
    const templatesDir = path.join(__dirname, 'templates', '.agent');
    await copyTemplates(templatesDir, agentDir);

    // Step 3: Generate IDE-specific configs
    console.log('⚙️  Generating IDE-specific configurations...');
    await updateIDEConfigs(projectDir, aiProvider);

    // Step 4: Success message
    displaySuccess(aiProvider);

  } catch (err) {
    console.error('❌ Initialization failed:', err.message);
    process.exit(1);
  }
}

function displayHelp() {
  console.log(`
skillforge - AI-Powered Development Toolkit

USAGE:
  skillforge [COMMAND] [OPTIONS]

COMMANDS:
  init --ai <provider>    Initialize skillforge in the current project
  --version, -v          Show version number
  --help, -h             Show this help message

SUPPORTED AI PROVIDERS:
  - claude               Claude Code
  - cursor               Cursor Editor
  - windsurf             Windsurf
  - antigravity          Antigravity
  - copilot              GitHub Copilot
  - kiro                 Kiro
  - codex                Codex CLI

EXAMPLES:
  skillforge init --ai claude
  skillforge init --ai cursor
  skillforge init --ai windsurf

DOCUMENTATION:
  https://github.com/alvinabhinav/skillforge
`);
}
