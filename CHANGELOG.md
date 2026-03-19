# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-03-19

### Added
- Initial release of Skillforge
- CLI tool with support for 7 AI IDEs: Claude, Cursor, Windsurf, Antigravity, GitHub Copilot, Kiro, Codex
- `skillforge init --ai <provider>` command to bootstrap projects
- 20+ specialist agents (frontend, backend, database, security, testing, etc.)
- 25+ domain knowledge skills with modular structure
- 8+ workflow slash commands (/plan, /debug, /brainstorm, /create, etc.)
- IDE-specific configuration generators
- Template .agent/ folder structure
- MIT License
- Basic documentation and README

### Features
- Multi-IDE support with one-command initialization
- Progressive disclosure of skills based on task context
- Auto-invocation of specialist agents
- MCP (Model Context Protocol) configuration support
- Modular template system for easy extension
- Open-source foundation for community contributions

### Notes
- Web documentation site (Next.js) - planned for v0.2.0
- Advanced Python validation scripts - planned for v0.2.0
- Community marketplace for agents/skills - planned for v1.0.0
