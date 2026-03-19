#!/usr/bin/env node
/**
 * Skillforge System Verification
 * Validates that the entire Skillforge system is operational
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function verify() {
  console.log('\n🔍 Skillforge System Verification\n');
  
  const checks = [];
  
  // Check 1: bin/skillforge.js exists
  try {
    await fs.access(path.join(__dirname, 'bin', 'skillforge.js'));
    console.log('✅ bin/skillforge.js exists');
    checks.push(true);
  } catch {
    console.log('❌ bin/skillforge.js missing');
    checks.push(false);
  }
  
  // Check 2: lib files exist
  try {
    await fs.access(path.join(__dirname, 'lib', 'cli.js'));
    await fs.access(path.join(__dirname, 'lib', 'ide-configs.js'));
    await fs.access(path.join(__dirname, 'lib', 'utils.js'));
    console.log('✅ All lib files present');
    checks.push(true);
  } catch {
    console.log('❌ Missing lib files');
    checks.push(false);
  }
  
  // Check 3: Templates exist
  try {
    const agentsDir = path.join(__dirname, 'templates', '.agent', 'agents');
    const skillsDir = path.join(__dirname, 'templates', '.agent', 'skills');
    const workflowsDir = path.join(__dirname, 'templates', '.agent', 'workflows');
    
    const agents = await fs.readdir(agentsDir);
    const skills = await fs.readdir(skillsDir);
    const workflows = await fs.readdir(workflowsDir);
    
    if (agents.length >= 7 && skills.length >= 5 && workflows.length >= 4) {
      console.log(`✅ Templates complete (${agents.length} agents, ${skills.length} skills, ${workflows.length} workflows)`);
      checks.push(true);
    } else {
      console.log('❌ Templates incomplete');
      checks.push(false);
    }
  } catch (e) {
    console.log('❌ Template directories missing:', e.message);
    checks.push(false);
  }
  
  // Check 4: Documentation
  try {
    await fs.access(path.join(__dirname, 'README.md'));
    await fs.access(path.join(__dirname, 'GETTING_STARTED.md'));
    await fs.access(path.join(__dirname, 'CHANGELOG.md'));
    console.log('✅ Documentation complete');
    checks.push(true);
  } catch {
    console.log('❌ Documentation missing');
    checks.push(false);
  }
  
  // Check 5: Configuration
  try {
    await fs.access(path.join(__dirname, 'package.json'));
    const pkg = JSON.parse(await fs.readFile(path.join(__dirname, 'package.json'), 'utf-8'));
    if (pkg.name === '@abhinavdobhal/skillforge' && pkg.version === '0.1.0') {
      console.log('✅ package.json correct');
      checks.push(true);
    } else {
      console.log('❌ package.json incorrect');
      checks.push(false);
    }
  } catch (e) {
    console.log('❌ package.json error:', e.message);
    checks.push(false);
  }
  
  // Check 6: Git repository
  try {
    await fs.access(path.join(__dirname, '.git'));
    console.log('✅ Git repository initialized');
    checks.push(true);
  } catch {
    console.log('❌ Git repository missing');
    checks.push(false);
  }
  
  // Summary
  console.log('\n' + '='.repeat(40));
  const passed = checks.filter(c => c).length;
  const total = checks.length;
  console.log(`Verification: ${passed}/${total} checks passed`);
  console.log('='.repeat(40) + '\n');
  
  if (passed === total) {
    console.log('✨ Skillforge is fully operational and ready for npm publishing!\n');
    process.exit(0);
  } else {
    console.log('⚠️  Some checks failed. Please review.\n');
    process.exit(1);
  }
}

verify().catch(err => {
  console.error('Verification error:', err);
  process.exit(1);
});
