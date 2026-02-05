# Microsoft AI and Copilot Services - Comprehensive Guide

> **Last Updated:** February 2026
> **Purpose:** Reference guide for building a web interactive comparison of Microsoft's AI technologies

---

## Table of Contents

1. [Developer Tools - GitHub Copilot Ecosystem](#developer-tools---github-copilot-ecosystem)
2. [Cloud & IT Operations - Azure Copilot](#cloud--it-operations---azure-copilot)
3. [Productivity & Office - Microsoft 365 Copilot](#productivity--office---microsoft-365-copilot)
4. [Power Platform & Low-Code AI](#power-platform--low-code-ai)
5. [AI Development Platforms - Microsoft Foundry](#ai-development-platforms---microsoft-foundry)
6. [Core AI Services - Cognitive APIs and Azure OpenAI](#core-ai-services---cognitive-apis-and-azure-openai)
7. [Consumer and Hardware](#consumer-and-hardware)
8. [Deprecated/Retiring Services](#deprecatedretiring-services)
9. [Pricing Quick Reference](#pricing-quick-reference)
10. [Agentic Capabilities Comparison](#agentic-capabilities-comparison)

---

## Developer Tools - GitHub Copilot Ecosystem

### GitHub Copilot (Core Product)

| Attribute | Details |
|-----------|---------|
| **Status** | Generally Available |
| **Target Audience** | Individual developers, teams, enterprises |
| **URL** | https://github.com/features/copilot |

**Description:** AI-powered coding assistant used by over 20 million developers. Evolved from code completion to a comprehensive AI development platform with multiple agentic capabilities.

**Key Features:**
- Real-time code completion in your editor
- Copilot Chat for conversational coding assistance
- Multi-model support: Claude 3.5/3.7 Sonnet, Claude Opus 4, GPT-5, GPT-4.1, Gemini 2.0 Flash
- Premium requests system with metered billing (introduced June 2025)
- Agent Skills - portable skill definitions across surfaces (December 2025)
- Knowledge bases for enterprise (indexed codebase search)

**Pricing Tiers:**

| Plan | Price | Premium Requests | Key Features |
|------|-------|------------------|--------------|
| Free | $0/month | 50 | 2,000 code completions, limited chat |
| Pro | $10/user/month | 300 | Unlimited completions, coding agent |
| Pro+ | $39/user/month | 1,500 | All models (Claude Opus 4, o3) |
| Business | $19/user/month | 300 | IP indemnity, centralized management |
| Enterprise | $39/user/month | 1,000 | Knowledge bases, custom models, Bing |

**Premium Request Overage:** $0.04 per request after allocation exceeded.

---

### GitHub Copilot Agent Mode (VS Code)

| Attribute | Details |
|-----------|---------|
| **Status** | Generally Available |
| **Target Audience** | Developers wanting maximum AI assistance |
| **URL** | https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode |

**Description:** Autonomous "peer programmer" mode in VS Code that executes multi-step coding tasks independently, including file edits, terminal commands, and self-correction.

**Key Agentic Capabilities:**
- Autonomous task execution across multiple files
- Self-correction loop (monitors compile/lint errors, test output, auto-corrects)
- Terminal command execution (install packages, run tests)
- Automatic context analysis and file discovery
- MCP (Model Context Protocol) integration for external tools

**Modes of Operation:**
1. **Ask Mode** - Traditional Q&A for coding questions
2. **Edit Mode** - Multi-file editing with human approval
3. **Agent Mode** - Full autonomous execution with self-correction

**MCP Integration:**
- Described as a "USB port for intelligence"
- GA for JetBrains, Eclipse, and Xcode (August 2025)
- Connects to internal APIs, document stores, and operations tools

---

### GitHub Copilot CLI

| Attribute | Details |
|-----------|---------|
| **Status** | Generally Available (Major release September 25, 2025) |
| **Target Audience** | Terminal-centric developers, DevOps |
| **URL** | https://github.com/features/copilot/cli |

**Description:** Terminal-based AI agent that brings Copilot capabilities directly to the command line with interactive, programmatic, and autopilot modes.

**Key Features:**
- Interactive mode with multi-turn conversations
- Programmatic mode for single prompts
- **Autopilot mode** - agent continues until task completed (Shift+Tab to cycle)
- LSP support (go-to-definition, hover info, diagnostics)
- Session management with resume capability
- GitHub MCP server pre-configured

**Built-in Custom Agents (January 2026):**
| Agent | Purpose |
|-------|---------|
| **Explore** | Fast codebase analysis without cluttering main context |
| **Task** | Runs commands like tests and builds |

**Default Model:** Claude Sonnet 4.5 (switchable to Claude Sonnet 4, GPT-5, GPT-4.1)

**Availability:** Included with all paid Copilot subscriptions (no additional billing)

---

### GitHub Copilot SDK

| Attribute | Details |
|-----------|---------|
| **Status** | Technical Preview (Launched January 22, 2026) |
| **Target Audience** | Application developers, platform teams, ISVs |
| **URL** | https://github.com/copilot/sdk |

**Description:** Multi-platform SDK exposing the same execution loop used by Copilot CLI, allowing developers to embed AI agent capabilities into their applications.

**Architecture:**
```
Your Application → SDK Client → JSON-RPC → Copilot CLI (server mode)
```

**Key Features:**
- Custom agents, skills, and tools definition
- Multi-model support (same as Copilot CLI)
- MCP server integration
- Real-time streaming responses
- BYOK (Bring Your Own Key) - OpenAI, Azure AI Foundry, Anthropic

**Supported Languages:** Node.js, Python, Go, .NET

---

### GitHub Copilot Coding Agent

| Attribute | Details |
|-----------|---------|
| **Status** | Generally Available (Microsoft Build 2025) |
| **Target Audience** | Teams with large issue backlogs |
| **URL** | https://docs.github.com/en/copilot/concepts/agents/coding-agent |

**Description:** GitHub-hosted autonomous AI developer that works in the background to complete development tasks, creating draft PRs from assigned issues.

**Key Features:**
- Autonomous background execution
- Assign GitHub issues directly to "Copilot" as assignee
- Isolated GitHub Actions-powered secure environment
- Draft PR creation with commits
- Session logs for tracking progress
- Branch protection (only pushes to `copilot/` branches)

**How to Invoke:**
1. Assign a GitHub issue to "Copilot"
2. Delegate from Copilot Chat in VS Code
3. Use Agents Panel on GitHub.com (launched August 2025)

**Use Cases:**
- Low-to-medium complexity tasks in well-tested codebases
- Extending test coverage
- Refactoring and documentation
- Clearing backlog of "nice to have" issues

---

### Agent HQ - Multi-Agent Coding Sessions

| Attribute | Details |
|-----------|---------|
| **Status** | Public Preview |
| **Target Audience** | Copilot Pro+ and Enterprise users |

**Description:** Interface for running multiple AI coding agents side by side. Choose from GitHub's Copilot, OpenAI Codex, Anthropic Claude, or custom agents.

**Key Features:**
- Compare different models on same problem
- Parallel agent execution
- VS Code "Agent Sessions" view (since v1.109)
- Local agents (Copilot) and Cloud/Background agents
- Full logs and org-level controls

---

## Cloud & IT Operations - Azure Copilot

### Azure Copilot (Agentic Cloud Management)

| Attribute | Details |
|-----------|---------|
| **Status** | Gated Preview (Ignite 2025) |
| **Target Audience** | Cloud operations, IT teams |

**Description:** Agentic AI interface orchestrating specialized agents across the cloud management lifecycle.

**Six Domain-Specific Agents:**
1. **Migration Agent** - Assess and move on-prem workloads to Azure
2. **Deployment Agent** - Automate resource provisioning
3. **Optimization Agent** - Cost savings and performance recommendations
4. **Observability Agent** - Monitoring and alerting assistance
5. **Resiliency Agent** - High availability and disaster recovery
6. **Troubleshooting Agent** - Diagnose and resolve issues

**Key Features:**
- Integrates with Azure RBAC, Azure Policy, governance controls
- Full visibility and auditing of agent actions
- Works within Azure Portal/CLI

---

## Productivity & Office - Microsoft 365 Copilot

### Microsoft 365 Copilot

| Attribute | Details |
|-----------|---------|
| **Status** | Generally Available |
| **Target Audience** | Knowledge workers, enterprises |
| **URL** | https://www.microsoft.com/en-us/microsoft-365-copilot |

**Description:** AI assistant integrated into Microsoft 365 apps using Work IQ intelligence layer to connect context, workflows, and organizational data.

**Key Features:**
- Work IQ Intelligence Layer (Microsoft Graph + enterprise data)
- Copilot Memory - learns your style and preferences
- Deep integration: Word, Excel, PowerPoint, Outlook, Teams, OneNote, Loop
- Agent Mode rolling out (active document editing)
- Voice integration for spoken conversations (November 2025)
- File Explorer integration

**Pricing:**

| Plan | Price | Notes |
|------|-------|-------|
| Add-on | $30/user/month | Requires M365 base license |
| SMB (<300 employees) | $21/user/month | Since December 2025 |
| E3 | $36/user/month → $42 (July 2026) | +$30 for Copilot |
| E5 | $57/user/month → $65 (July 2026) | Includes Security Copilot |

---

### Microsoft Copilot Studio

| Attribute | Details |
|-----------|---------|
| **Status** | Generally Available (with preview features) |
| **Target Audience** | Citizen developers, pro developers, IT admins |
| **URL** | https://www.microsoft.com/en-us/microsoft-copilot/microsoft-copilot-studio |

**Description:** No-code to pro-code platform for building custom AI agents that can be published standalone or extend Microsoft 365 Copilot.

**Key Features:**
- Natural language or graphical agent authoring
- Generative answers from knowledge sources
- **Multi-Agent Orchestration** (Preview) - agents delegate to each other
- **Computer Use** (Public Preview, US) - agents operate apps/websites
- MCP Server integration
- Voice capabilities (speech/DTMF)
- WhatsApp and SharePoint channels

**Pricing:**

| Option | Price | Notes |
|--------|-------|-------|
| User License | Free | Required for makers |
| Prepaid Pack | $200/pack/month | 25,000 Copilot Credits |
| Pay-As-You-Go | $0.01/Copilot Credit | Azure billing |
| Premium AI | 100 Credits/10 responses | Reasoning models |

---

### Agent 365 / Copilot Agents

| Attribute | Details |
|-----------|---------|
| **Status** | Generally Available (with ongoing rollout) |
| **Target Audience** | IT admins, security teams, enterprises |

**Description:** Unified control plane for enterprise AI agents with first-class identities, governance, and audit capabilities.

**Key Features:**
- Agent IDs with full audit trails
- MCP Servers for business operations
- First-class organizational identities
- Security Copilot agents (12+ across Defender, Entra, Intune, Purview)
- Agent mode in M365 apps (Word, Excel, PowerPoint)

**The 6 Pillars for Agent Readiness (2026):**
1. Security and compliance foundation
2. Agent identity management
3. Audit and monitoring
4. Policy enforcement
5. Data protection
6. Responsible AI guardrails

---

### Microsoft Security Copilot

| Attribute | Details |
|-----------|---------|
| **Status** | Generally Available |
| **Target Audience** | Security teams, IT administrators |
| **URL** | https://www.microsoft.com/en-us/security/business/ai-machine-learning/microsoft-copilot-security |

**Description:** AI-powered security assistant integrated across Microsoft Defender, Entra, Intune, and Purview. Included with E5 licenses (November 2025).

**Security Agents:**
- **Microsoft Defender** - Threat detection, phishing triage, incident investigation
- **Microsoft Entra** - Conditional access analysis, identity risk, Zero Trust
- **Microsoft Intune** - Policy configuration, endpoint vulnerability
- **Microsoft Purview** - Data protection and compliance

**Pricing:**
- **E5 Allocation:** 400 SCU per 1,000 users/month (up to 10,000 SCUs)
- **Overflow:** $6/SCU pay-as-you-go

---

### Dynamics 365 Copilot

| Attribute | Details |
|-----------|---------|
| **Status** | Generally Available (various features) |
| **Target Audience** | Sales, service, finance, supply chain teams |

**Description:** AI features across Dynamics 365 CRM and ERP applications.

**By Application:**
- **Sales** - Email writing, meeting summaries, CRM data entry automation
- **Customer Service** - Response drafting, knowledge suggestions, case routing
- **Finance** - Data analysis, forecasting, compliance reporting
- **Supply Chain** - Demand planning, incident management
- **Marketing** - Customer segmentation, campaign orchestration

---

## Power Platform & Low-Code AI

### AI Builder

| Attribute | Details |
|-----------|---------|
| **Status** | Generally Available |
| **Target Audience** | Citizen developers, business users |
| **URL** | https://learn.microsoft.com/en-us/ai-builder/ |

**Description:** AI capabilities for Power Platform enabling document processing and custom AI models without coding.

**Key Features:**
- Document Processing with AI models
- Prompt Builder with enterprise data
- Document Processing Agent
- Prebuilt models (object detection, text recognition, sentiment)
- Custom model training without coding

**⚠️ Important Licensing Change:**
AI Builder credits seeded in Power Platform/Dynamics licenses will be **removed in November 2026**. New customers must purchase Copilot Credits.

---

### Copilot in Power Apps

| Attribute | Details |
|-----------|---------|
| **Status** | Generally Available (core), Preview (Plan Designer) |
| **Target Audience** | Citizen developers, business users |

**Description:** AI-assisted app creation using natural language.

**Key Features:**
- Natural language app creation
- Auto-generated data models (tables, columns, relationships)
- Plan Designer - enter business problem, AI builds solution
- Copilot-powered app experiences
- Form auto-suggestions

---

### Copilot in Power Automate

| Attribute | Details |
|-----------|---------|
| **Status** | Generally Available |
| **Target Audience** | Business process owners, citizen developers |

**Description:** AI-assisted workflow creation and automation.

**Key Features:**
- Natural language flow creation
- Generative Actions (dynamic, multimodal automations)
- Intelligent document processing
- Human-in-the-loop approvals
- Natural language expressions (GA December 2025)

**Preview Features:**
- Workflows Agent (Frontier program)
- Computer Use for UI automation (US only)
- Copilot Chat Agent Mode (Early 2026)

---

### Copilot in Power BI

| Attribute | Details |
|-----------|---------|
| **Status** | Generally Available |
| **Target Audience** | Business analysts, data professionals |
| **Requires** | Fabric capacity or Power BI Premium P1+ |

**Description:** AI-assisted data analysis with natural language.

**Key Features:**
- Natural language DAX query writing
- Measure suggestions for semantic models
- AI Instructions for business context
- Grounded References to reports/models (January 2026)
- Mobile standalone experience
- Verified Answers

**⚠️ Deprecation Notice:**
Legacy Q&A feature retiring **December 2026** - use Copilot instead.

---

## AI Development Platforms - Microsoft Foundry

### Microsoft Foundry (Azure AI Foundry)

| Attribute | Details |
|-----------|---------|
| **Status** | Generally Available |
| **Target Audience** | Enterprise developers, data scientists, platform engineers |
| **URL** | https://ai.azure.com |

**Description:** Unified platform for building, deploying, and scaling generative AI solutions. Rebranded from Azure AI Foundry at Ignite 2025.

**Key Features:**
- **1,800+ models** - OpenAI, Anthropic Claude, Meta Llama, Mistral, DeepSeek, xAI Grok
- **Model Router** - auto-selects best model (40% faster, 50% cost reduction)
- **Responses API** - maintains conversation state
- **MCP support** for tool integration
- **Developer Tier** - 24-hour free model hosting
- Deep Research Agent (preview)
- Computer-Using Agent (preview)

**Pricing:**
- Platform access: **Free**
- Model usage: Per 1K/1M tokens (varies by model)
- PTU (Provisioned Throughput): Starting ~$2,448/month

---

### Foundry Control Plane

| Attribute | Details |
|-----------|---------|
| **Status** | Public Preview (Ignite 2025) |
| **Target Audience** | Platform engineers, security teams |

**Description:** Unified management interface for AI agents, models, and tools across the enterprise.

**Key Features:**
- OpenTelemetry-based tracing
- Continuous evaluations (quality, safety, performance)
- AI Gateway for cost management
- Error rate monitoring and task adherence
- Direct action to block non-compliant agents
- Visual designer (portal and VS Code)

---

### Foundry Agent Service

| Attribute | Details |
|-----------|---------|
| **Status** | Generally Available (Build 2025) |
| **Target Audience** | Enterprise developers building production agents |
| **Customers** | 60,000+ building, 10,000+ using Agent Service |

**Description:** Managed platform for building and scaling intelligent AI agents.

**Key Features:**
- Multi-agent orchestration
- MCP support (GA)
- Connected Agents (Preview)
- OpenAPI integration
- Knowledge grounding (Azure AI Search, Bing)
- Content filters and network isolation

**Microsoft Agent Framework (Public Preview - October 2025):**
- Open-source SDK unifying Semantic Kernel with AutoGen
- Python and .NET support
- Agent2Agent (A2A) protocol

---

### Azure OpenAI Service

| Attribute | Details |
|-----------|---------|
| **Status** | Generally Available |
| **Target Audience** | Enterprise developers, data scientists |
| **URL** | https://azure.microsoft.com/en-us/products/ai-services/openai-service |

**Description:** Managed access to OpenAI models with enterprise features. Now integrated within Microsoft Foundry.

**Available Models (2026):**
| Model | Features |
|-------|----------|
| GPT-5 family | Latest flagship (requires registration) |
| GPT-4.1 series | 1M token context window |
| GPT-4o / GPT-4o mini | Optimized multimodal |
| o4-mini | Compact reasoning, 200K context |
| Sora | Video generation (up to 20s 1080p) |
| GPT-realtime | Low-latency voice |
| Computer-Using Agent | GUI automation (preview) |

**Pricing:**
| Model | Input | Output |
|-------|-------|--------|
| GPT-4o | $0.005/1K tokens | $0.015/1K tokens |
| GPT-4o mini | $0.00015/1K | $0.0006/1K |

---

### Foundry Tools (Azure AI Services)

| Attribute | Details |
|-----------|---------|
| **Status** | Generally Available |
| **Formerly** | Azure Cognitive Services |

**Description:** Consolidated traditional AI services for Vision, Speech, Language, and Documents.

**Service Rebranding:**
| Old Name | New Name |
|----------|----------|
| Azure Form Recognizer | Azure AI Document Intelligence |
| Cognitive Service for Speech | Azure AI Speech |
| Cognitive Service for Vision | Azure AI Vision |
| Cognitive Service for Language | Azure AI Language |

**Current Services:**
- **Vision** - Object detection, face recognition, OCR
- **Speech** - Speech-to-text, TTS, translation, speaker recognition
- **Language** - Summarization, NER, sentiment, Q&A
- **Document Intelligence** - Extract text/tables from documents
- **Translator** - 100+ languages
- **Content Safety** - Harmful content moderation

---

## Consumer and Hardware

### Microsoft Copilot (Consumer)

| Attribute | Details |
|-----------|---------|
| **Status** | Generally Available |
| **URL** | https://copilot.microsoft.com |

**Description:** Free and Pro consumer AI assistant with GPT access and image generation.

**Pricing:**
| Tier | Price | Features |
|------|-------|----------|
| Free | $0 | Basic GPT, limited image creation |
| Copilot Pro | $20/month | Priority models, 100 boosts/day, Office |
| M365 Personal | $9.99/month | Includes Copilot and Designer |
| M365 Family | $12.99/month | Up to 6 users |

**Surfaces:** Web, Edge sidebar, Windows, iOS/Android

**⚠️ Note:** No enterprise data protection - not for sensitive business data.

---

### Windows Copilot

| Attribute | Details |
|-----------|---------|
| **Status** | Generally Available |
| **Target Audience** | Windows 11 users |

**Description:** OS-level AI integration with dedicated Copilot key support.

**Key Features:**
- Dedicated Copilot key (short press: prompt, long press: voice)
- "Hey Copilot" wake word
- File Explorer hover assistance
- Ask Copilot search composer
- Agenda in Notifications

**2026 Roadmap:**
- **26H1** (Spring) - Platform branch for Snapdragon X2
- **26H2** (Fall) - Mainstream update with Copilot UX changes

---

### Copilot+ PCs

| Attribute | Details |
|-----------|---------|
| **Status** | Generally Available |
| **URL** | https://www.microsoft.com/en-us/windows/copilot-plus-pcs |

**Description:** Windows PCs with NPU (40+ TOPS) enabling on-device AI.

**Hardware Requirements:**
| Component | Requirement |
|-----------|-------------|
| NPU | 40+ TOPS (NPU only) |
| RAM | 16 GB DDR5/LPDDR5 |
| Storage | 256 GB SSD/UFS |
| OS | Windows 11 24H2+ |

**Compatible Processors:**
| Vendor | Processor | NPU TOPS |
|--------|-----------|----------|
| Qualcomm | Snapdragon X series | Up to 45 |
| Qualcomm | Snapdragon X2 (CES 2026) | 80 |
| AMD | Ryzen AI 300 series | Up to 50 |
| Intel | Core Ultra 200V series | 40-48 |

**Key NPU Features:**
- **Recall** - Searchable timeline of everything on PC
- **Live Captions** - Real-time translation/transcription
- **Phi Silica** - On-device SLM
- **Windows Studio Effects** - AI camera/audio
- Local AI processing (privacy-preserving)

---

## Deprecated/Retiring Services

| Service | Deprecation Date | Migration Path |
|---------|------------------|----------------|
| LUIS (Language Understanding) | October 1, 2025 | Conversational Language Understanding |
| Azure Language Studio | TBD | Microsoft Foundry |
| Computer Vision API v1.0-3.1 | September 13, 2026 | Computer Vision 3.2 or Image Analysis 4.0 |
| Cognitive Services in Power BI Dataflows | September 15, 2025 | Copilot in Power BI |
| Power BI Q&A | December 2026 | Copilot in Power BI |
| AI Builder Credits (seeded) | November 2026 | Copilot Credits |

---

## Pricing Quick Reference

### GitHub Copilot
| Plan | Monthly Price |
|------|---------------|
| Free | $0 |
| Pro | $10/user |
| Pro+ | $39/user |
| Business | $19/user |
| Enterprise | $39/user |

### Microsoft 365 Copilot
| Plan | Monthly Price |
|------|---------------|
| Add-on | $30/user |
| SMB | $21/user |
| E3 + Copilot | $66/user → $72 (July 2026) |
| E5 + Copilot | $87/user → $95 (July 2026) |

### Copilot Studio
| Option | Price |
|--------|-------|
| Prepaid Pack | $200/month (25K credits) |
| PAYG | $0.01/credit |

### Azure OpenAI
| Model | Input | Output |
|-------|-------|--------|
| GPT-4o | $0.005/1K | $0.015/1K |
| GPT-4o mini | $0.00015/1K | $0.0006/1K |
| PTU | ~$2,448/month | - |

---

## Agentic Capabilities Comparison

| Service | Autonomous Execution | Multi-File Editing | Terminal Commands | Background Tasks | Multi-Agent | Computer Use |
|---------|---------------------|-------------------|-------------------|------------------|-------------|--------------|
| GitHub Copilot Agent Mode | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| GitHub Copilot Coding Agent | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| GitHub Copilot CLI | ✅ | ✅ | ✅ | ❌ | ✅ (built-in) | ❌ |
| Microsoft Foundry | ✅ | ❌ | ❌ | ✅ | ✅ | ✅ (preview) |
| Copilot Studio | ✅ | ❌ | ❌ | ✅ | ✅ | ✅ (preview) |
| M365 Copilot | Limited | ❌ | ❌ | ❌ | ❌ | ❌ |
| Azure Copilot | ✅ | ❌ | ❌ | ✅ | ✅ | ❌ |

---

## Key Differentiators Summary

| Product | Primary Use | Data Access | Agentic | Best For |
|---------|-------------|-------------|---------|----------|
| GitHub Copilot | Code assistance | Codebase | Yes | Developers |
| M365 Copilot | Work productivity | Org data (Graph) | Limited | Knowledge workers |
| Copilot Studio | Build custom agents | Configurable | Yes | Low-code builders |
| Microsoft Foundry | Enterprise AI platform | Full control | Yes | Pro developers |
| Azure OpenAI | Direct model access | Your data | Basic | API consumers |
| Consumer Copilot | Personal assistant | Web only | No | General public |

---

## Sources

- [GitHub Copilot Plans & Pricing](https://github.com/features/copilot/plans)
- [GitHub Copilot CLI](https://github.com/features/copilot/cli)
- [Copilot SDK Technical Preview](https://github.blog/changelog/2026-01-14-copilot-sdk-in-technical-preview/)
- [GitHub Copilot Coding Agent Docs](https://docs.github.com/en/copilot/concepts/agents/coding-agent)
- [VS Code Agent Mode Blog](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode)
- [Microsoft 365 Copilot Pricing](https://www.microsoft.com/en-us/microsoft-365-copilot/pricing-new)
- [Copilot Studio Overview](https://www.microsoft.com/en-us/microsoft-copilot/microsoft-copilot-studio)
- [Microsoft Ignite 2025 Announcements](https://www.microsoft.com/en-us/microsoft-365/blog/2025/11/18/microsoft-ignite-2025-copilot-and-agents-built-to-power-the-frontier-firm/)
- [Microsoft Foundry Overview](https://ai.azure.com)
- [Foundry Control Plane Docs](https://learn.microsoft.com/en-us/azure/ai-foundry/control-plane/)
- [Azure OpenAI Service](https://azure.microsoft.com/en-us/products/ai-services/openai-service)
- [Power Platform 2025 Release Wave](https://learn.microsoft.com/en-us/power-platform/release-plan/2025wave2/)
- [Copilot+ PCs](https://www.microsoft.com/en-us/windows/copilot-plus-pcs)
