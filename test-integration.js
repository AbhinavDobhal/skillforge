#!/usr/bin/env node
/**
 * Integration Test for Skillforge
 * Validates CLI functionality and template generation
 */

import { main } from './lib/cli.js';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function runIntegrationTests() {
  console.log('🧪 Skillforge Integration Tests\n');
  
  const testDir = path.join('/tmp', 'skillforge-integration-test-' + Date.now());
  let passed = 0;
  let failed = 0;
  
  try {
    // Test 1: CLI Help
    console.log('Test 1: CLI Help Command');
    process.argv = ['node', 'skillforge.js', '--help'];
    try {
      await main();
      console.log('✓ Help command runs without error\n');
      passed++;
    } catch (e) {
      if (e.message !== 'exit(0)') {
        console.error('✗ Help command failed:', e.message, '\n');
        failed++;
      } else {
        console.log('✓ Help command runs without error\n');
        passed++;
      }
    }

    // Test 2: CLI Version
    console.log('Test 2: CLI Version Command');
    process.argv = ['node', 'skillforge.js', '--version'];
    try {
      await main();
      console.log('✓ Version command runs without error\n');
      passed++;
    } catch (e) {
      if (e.message !== 'exit(0)') {
        console.error('✗ Version command failed:', e.message, '\n');
        failed++;
      } else {
        console.log('✓ Version command runs without error\n');
        passed++;
      }
    }

    // Test 3: Project Initialization - Claude
    console.log('Test 3: Initialize Project for Claude');
    process.chdir(testDir);
    await fs.mkdir(testDir, { recursive: true });
    process.argv = ['node', 'skillforge.js', 'init', '--ai', 'claude'];
    try {
      await main();
    } catch (e) {
      // Expected to throw, just continue
    }
    
    const agentDir = path.join(testDir, '.agent');
    const claudeConfig = path.join(testDir, '.claude', 'skillforge.md');
    
    const agentDirExists = await checkFileExists(agentDir);
    const claudeConfigExists = await checkFileExists(claudeConfig);
    
    if (agentDirExists && claudeConfigExists) {
      console.log('✓ Claude project initialized successfully\n');
      passed++;
    } else {
      console.log('✗ Claude project initialization failed\n');
      failed++;
    }

    // Test 4: Verify Templates Copied
    console.log('Test 4: Verify Templates Structure');
    const agentsDir = path.join(agentDir, 'agents');
    const skillsDir = path.join(agentDir, 'skills');
    const workflowsDir = path.join(agentDir, 'workflows');
    
    const agents = await checkDir(agentsDir);
    const skills = await checkDir(skillsDir);
    const workflows = await checkDir(workflowsDir);
    
    if (agents && agents.length >= 7 && skills && skills.length >= 5 && workflows && workflows.length >= 4) {
      console.log(`✓ Template structure verified (${agents.length} agents, ${skills.length} skills, ${workflows.length} workflows)\n`);
      passed++;
    } else {
      console.log(`✗ Template structure incomplete (${agents?.length || 0} agents, ${skills?.length || 0} skills, ${workflows?.length || 0} workflows)\n`);
      failed++;
    }

    // Test 5: Verify Agent Content
    console.log('Test 5: Verify Agent Content Quality');
    const frontendAgentPath = path.join(agentsDir, 'frontend-specialist.md');
    const agentContent = await fs.readFile(frontendAgentPath, 'utf-8');
    
    if (agentContent.includes('---') && agentContent.includes('name:') && agentContent.length > 500) {
      console.log('✓ Agent template has proper structure and content\n');
      passed++;
    } else {
      console.log('✗ Agent template is malformed\n');
      failed++;
    }

    // Summary
    console.log('═══════════════════════════════════════');
    console.log(`Tests Passed: ${passed}`);
    console.log(`Tests Failed: ${failed}`);
    console.log(`Total: ${passed + failed}`);
    console.log('═══════════════════════════════════════\n');

    if (failed === 0) {
      console.log('✅ All tests passed! Skillforge is functional.\n');
      process.exit(0);
    } else {
      console.log('❌ Some tests failed.\n');
      process.exit(1);
    }
  } catch (err) {
    console.error('Test execution error:', err);
    process.exit(1);
  }
}

async function checkFileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function checkDir(dirPath) {
  try {
    return await fs.readdir(dirPath);
  } catch {
    return null;
  }
}

runIntegrationTests().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
