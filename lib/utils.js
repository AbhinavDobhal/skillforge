import fs from 'fs/promises';
import fssSync from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(path.dirname(__filename));

/**
 * Ensure directory exists
 */
export async function ensureDirectory(dir) {
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch (err) {
    if (err.code !== 'EEXIST') throw err;
  }
}

/**
 * Copy templates from source to destination recursively
 */
export async function copyTemplates(src, dest) {
  try {
    if (!fssSync.existsSync(src)) {
      console.warn(`Template directory not found: ${src}`);
      return;
    }

    // Recursively copy all files
    await copyDir(src, dest);
    console.log('✓ Templates copied successfully');
  } catch (err) {
    console.error('Error copying templates:', err.message);
    throw err;
  }
}

/**
 * Recursively copy directory
 */
async function copyDir(src, dest) {
  await ensureDirectory(dest);
  const entries = await fs.readdir(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      try {
        await fs.copyFile(srcPath, destPath);
      } catch (err) {
        // Skip if file already exists
        if (err.code !== 'EEXIST') throw err;
      }
    }
  }
}

/**
 * Display success message and next steps
 */
export function displaySuccess(aiProvider) {
  const providerNames = {
    claude: 'Claude',
    cursor: 'Cursor',
    windsurf: 'Windsurf',
    antigravity: 'Antigravity',
    copilot: 'GitHub Copilot',
    kiro: 'Kiro',
    codex: 'Codex'
  };

  const provider = providerNames[aiProvider] || aiProvider;

  console.log('\n✅ Skillforge initialized successfully!');
  console.log(`\n📝 Configuration for ${provider}:`);

  switch (aiProvider) {
    case 'claude':
      console.log('  Created: .claude/skillforge.md');
      break;
    case 'cursor':
      console.log('  Created: .cursor/rules/skillforge.md');
      break;
    case 'windsurf':
      console.log('  Created: .windsurf/skillforge.md');
      break;
    case 'antigravity':
      console.log('  Updated: .agent/mcp_config.json');
      break;
    case 'copilot':
      console.log('  Created: .github/copilot-instructions.md');
      break;
    case 'kiro':
      console.log('  Created: kiro.config.json');
      break;
    case 'codex':
      console.log('  Created: codex.config.md');
      break;
  }

  console.log('\n📂 Created .agent/ folder with:');
  console.log('  ├── agents/       - Specialist personas');
  console.log('  ├── skills/       - Domain knowledge modules');
  console.log('  ├── workflows/    - Slash command procedures');
  console.log('  ├── rules/        - Global behavioral rules');
  console.log('  ├── scripts/      - Validation and helper scripts');
  console.log('  ├── ARCHITECTURE.md');
  console.log('  └── mcp_config.json');

  console.log('\n🚀 Next Steps:');
  console.log(`  1. Open your project in ${provider}`);
  console.log('  2. Look for agents, skills, and workflows in your IDE');
  console.log('  3. Try a slash command: /plan, /debug, /brainstorm');
  console.log('  4. See .agent/ARCHITECTURE.md for complete documentation');

  console.log('\n📚 Learn More: https://github.com/alvinabhinav/skillforge');
  console.log('');
}

/**
 * Read package.json to get version
 */
export function getPackageVersion() {
  try {
    const pkg = JSON.parse(
      fssSync.readFileSync(path.join(__dirname, 'package.json'), 'utf-8')
    );
    return pkg.version;
  } catch {
    return '0.1.0';
  }
}

/**
 * Create a file with proper formatting
 */
export async function createFile(filePath, content) {
  await ensureDirectory(path.dirname(filePath));
  await fs.writeFile(filePath, content, 'utf-8');
}

/**
 * Read file with error handling
 */
export async function readFile(filePath) {
  try {
    return await fs.readFile(filePath, 'utf-8');
  } catch (err) {
    console.error(`Error reading file: ${filePath}`);
    throw err;
  }
}

/**
 * Check if file exists
 */
export async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}
