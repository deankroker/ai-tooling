/**
 * Microsoft AI Services Comprehensive Comparison
 * Last Updated: February 2026
 *
 * This data structure contains all Microsoft AI-related services,
 * organized for building a web UI comparison tool.
 */

export type ServiceStatus = 'GA' | 'Preview' | 'Public Preview' | 'Private Preview' | 'Technical Preview' | 'Deprecated' | 'Retiring';

export type ServiceCategory =
  | 'GitHub Copilot Ecosystem'
  | 'Microsoft Foundry / Azure AI'
  | 'Microsoft 365 Copilot'
  | 'Power Platform AI'
  | 'Consumer Products'
  | 'Developer Tools'
  | 'Hardware';

export type TargetAudience =
  | 'Individual Developers'
  | 'Enterprise Developers'
  | 'Citizen Developers'
  | 'Business Users'
  | 'IT Administrators'
  | 'Data Scientists'
  | 'Security Teams'
  | 'Consumers'
  | 'Platform Engineers';

export interface PricingTier {
  name: string;
  price: string;
  unit?: string;
  notes?: string;
}

export interface RoadmapItem {
  feature: string;
  status: 'Announced' | 'Coming Soon' | 'In Preview' | 'Rolling Out';
  expectedDate?: string;
}

export interface Integration {
  service: string;
  description: string;
}

export interface MicrosoftAIService {
  id: string;
  name: string;
  shortName?: string;
  category: ServiceCategory;
  status: ServiceStatus;
  description: string;
  brandMessaging?: string;
  keyFeatures: string[];
  agenticCapabilities?: string[];
  targetAudience: TargetAudience[];
  pricing?: PricingTier[];
  integrations: Integration[];
  surfaces: string[];
  roadmap?: RoadmapItem[];
  deprecationDate?: string;
  migrationPath?: string;
  relatedServices: string[];
  url?: string;
  lastUpdated: string;
}

export const microsoftAIServices: MicrosoftAIService[] = [
  // ==========================================
  // GITHUB COPILOT ECOSYSTEM
  // ==========================================
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    shortName: 'Copilot',
    category: 'GitHub Copilot Ecosystem',
    status: 'GA',
    description: 'AI-powered coding assistant used by over 20 million developers. Provides real-time code suggestions, chat-based assistance, and access to multiple AI models.',
    brandMessaging: 'Your AI pair programmer',
    keyFeatures: [
      'Real-time code completion in your editor',
      'Copilot Chat for conversational coding assistance',
      'Multi-model support (Claude 3.5/3.7, GPT-5, GPT-4.1, Gemini 2.0)',
      'Premium requests system with metered billing',
      'Agent Skills - portable skill definitions across surfaces',
      'Knowledge bases for enterprise (indexed codebase search)',
    ],
    agenticCapabilities: [
      'Agent mode in VS Code (autonomous multi-file editing)',
      'Coding Agent (async background task execution)',
      'Self-correction loop for iterative fixes',
      'Terminal command execution',
    ],
    targetAudience: ['Individual Developers', 'Enterprise Developers'],
    pricing: [
      { name: 'Free', price: '$0', unit: '/month', notes: '50 premium requests, 2000 completions' },
      { name: 'Pro', price: '$10', unit: '/user/month', notes: '300 premium requests, coding agent access' },
      { name: 'Pro+', price: '$39', unit: '/user/month', notes: '1500 premium requests, all models' },
      { name: 'Business', price: '$19', unit: '/user/month', notes: '300 premium requests, IP indemnity' },
      { name: 'Enterprise', price: '$39', unit: '/user/month', notes: '1000 premium requests, knowledge bases' },
    ],
    integrations: [
      { service: 'VS Code', description: 'Full IDE integration with agent mode' },
      { service: 'Visual Studio', description: 'Native integration' },
      { service: 'JetBrains IDEs', description: 'Plugin support with MCP' },
      { service: 'Vim/Neovim', description: 'Terminal-based integration' },
      { service: 'Xcode', description: 'macOS development support' },
      { service: 'GitHub.com', description: 'Web-based chat and PR assistance' },
    ],
    surfaces: ['IDEs', 'GitHub.com', 'GitHub Mobile', 'CLI', 'GitHub Actions'],
    roadmap: [
      { feature: 'Organization-level Agent Skills', status: 'Coming Soon' },
      { feature: 'Additional partner-built custom agents', status: 'Rolling Out' },
      { feature: 'Enhanced Copilot Spaces integration', status: 'In Preview' },
    ],
    relatedServices: ['github-copilot-cli', 'github-copilot-sdk', 'github-copilot-coding-agent'],
    url: 'https://github.com/features/copilot',
    lastUpdated: '2026-02-05',
  },

  {
    id: 'github-copilot-agent-mode',
    name: 'GitHub Copilot Agent Mode (VS Code)',
    shortName: 'Agent Mode',
    category: 'GitHub Copilot Ecosystem',
    status: 'GA',
    description: 'Autonomous "peer programmer" mode in VS Code that can execute multi-step coding tasks independently, including file edits, terminal commands, and self-correction.',
    brandMessaging: 'From assistant to autonomous peer programmer',
    keyFeatures: [
      'Autonomous task execution across multiple files',
      'Self-correction loop (monitors compile/lint/test errors)',
      'Terminal command execution (install packages, run tests)',
      'Automatic context analysis and file discovery',
      'MCP (Model Context Protocol) integration for external tools',
    ],
    agenticCapabilities: [
      'Multi-file refactoring without human intervention',
      'Iterative bug fixing until tests pass',
      'Dependency installation and environment setup',
      'Integration with external APIs via MCP',
    ],
    targetAudience: ['Individual Developers', 'Enterprise Developers'],
    integrations: [
      { service: 'VS Code', description: 'Native integration' },
      { service: 'MCP Servers', description: 'External tool and data access' },
      { service: 'Terminal', description: 'Shell command execution' },
    ],
    surfaces: ['VS Code'],
    relatedServices: ['github-copilot', 'github-copilot-cli'],
    url: 'https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode',
    lastUpdated: '2026-02-05',
  },

  {
    id: 'github-copilot-cli',
    name: 'GitHub Copilot CLI',
    shortName: 'Copilot CLI',
    category: 'GitHub Copilot Ecosystem',
    status: 'GA',
    description: 'Terminal-based AI agent that brings Copilot capabilities directly to the command line with interactive, programmatic, and autopilot modes.',
    brandMessaging: 'AI-powered coding agent in your terminal',
    keyFeatures: [
      'Interactive mode with multi-turn conversations',
      'Programmatic mode for single prompts',
      'Autopilot mode - agent continues until task complete',
      'LSP support (go-to-definition, hover info, diagnostics)',
      'Session management with resume capability',
      'Built-in agents: Explore, Task',
      'GitHub MCP server pre-configured',
    ],
    agenticCapabilities: [
      'Autopilot mode for autonomous task completion',
      'Explore agent for codebase analysis',
      'Task agent for running tests and builds',
      'GitHub operations via MCP (PRs, issues)',
    ],
    targetAudience: ['Individual Developers', 'Enterprise Developers'],
    integrations: [
      { service: 'Terminal', description: 'Native shell integration' },
      { service: 'GitHub MCP', description: 'GitHub.com resource access' },
      { service: 'Copilot Spaces', description: 'MCP tools integration' },
    ],
    surfaces: ['Terminal', 'CI/CD pipelines'],
    relatedServices: ['github-copilot', 'github-copilot-sdk'],
    url: 'https://github.com/features/copilot/cli',
    lastUpdated: '2026-02-05',
  },

  {
    id: 'github-copilot-sdk',
    name: 'GitHub Copilot SDK',
    shortName: 'Copilot SDK',
    category: 'GitHub Copilot Ecosystem',
    status: 'Technical Preview',
    description: 'Multi-platform SDK that exposes the Copilot CLI execution loop, allowing developers to embed AI agent capabilities into their own applications.',
    brandMessaging: 'Build an agent into any app',
    keyFeatures: [
      'Custom agents, skills, and tools definition',
      'Multi-model support (same as Copilot CLI)',
      'MCP server integration',
      'Real-time streaming responses',
      'BYOK - Bring Your Own Key support',
      'Node.js, Python, Go, .NET SDKs',
    ],
    agenticCapabilities: [
      'Full agent execution loop embedding',
      'Custom tool and skill creation',
      'Multi-model orchestration',
    ],
    targetAudience: ['Enterprise Developers', 'Platform Engineers'],
    integrations: [
      { service: 'Copilot CLI', description: 'Uses CLI in server mode' },
      { service: 'Azure AI Foundry', description: 'BYOK support' },
      { service: 'OpenAI', description: 'BYOK support' },
      { service: 'Anthropic', description: 'BYOK support' },
    ],
    surfaces: ['Custom applications', 'Internal tooling', 'ISV products'],
    relatedServices: ['github-copilot-cli', 'github-copilot'],
    url: 'https://github.com/copilot/sdk',
    lastUpdated: '2026-02-05',
  },

  {
    id: 'github-copilot-coding-agent',
    name: 'GitHub Copilot Coding Agent',
    shortName: 'Coding Agent',
    category: 'GitHub Copilot Ecosystem',
    status: 'GA',
    description: 'GitHub-hosted autonomous AI developer that works in the background to complete development tasks, creating draft PRs from assigned issues.',
    brandMessaging: 'Your async AI developer',
    keyFeatures: [
      'Autonomous background execution',
      'Assign GitHub issues directly to Copilot',
      'Isolated GitHub Actions environment',
      'Draft PR creation with commits',
      'Session logs for tracking progress',
      'Branch protection (copilot/ branches only)',
    ],
    agenticCapabilities: [
      'Full issue-to-PR workflow automation',
      'Test writing and extension',
      'Refactoring and documentation',
      'Parallel task handling',
    ],
    targetAudience: ['Individual Developers', 'Enterprise Developers'],
    pricing: [
      { name: 'Included', price: 'Uses premium requests from subscription', notes: 'Also uses GitHub Actions minutes' },
    ],
    integrations: [
      { service: 'GitHub Issues', description: 'Assign issues to Copilot' },
      { service: 'GitHub Actions', description: 'Execution environment' },
      { service: 'VS Code', description: 'Delegate tasks from chat' },
    ],
    surfaces: ['GitHub.com', 'VS Code', 'Agents Panel'],
    relatedServices: ['github-copilot', 'github-copilot-agent-mode'],
    url: 'https://docs.github.com/en/copilot/concepts/agents/coding-agent',
    lastUpdated: '2026-02-05',
  },

  // ==========================================
  // MICROSOFT FOUNDRY / AZURE AI
  // ==========================================
  {
    id: 'microsoft-foundry',
    name: 'Microsoft Foundry (Azure AI Foundry)',
    shortName: 'Foundry',
    category: 'Microsoft Foundry / Azure AI',
    status: 'GA',
    description: 'Unified platform for building, deploying, and scaling generative AI solutions. Rebranded from Azure AI Foundry at Ignite 2025 to represent expanded capabilities.',
    brandMessaging: 'The agent factory for enterprise AI',
    keyFeatures: [
      '1,800+ models including OpenAI, Anthropic Claude, Meta Llama, Mistral, DeepSeek, xAI Grok',
      'Model Router - automatically selects best-fit model (40% faster, 50% cost reduction)',
      'Responses API - maintains conversation state',
      'MCP support for tool integration',
      'Developer Tier - 24-hour free model hosting',
      'Deep Research Agent (preview)',
      'Computer-Using Agent for GUI automation (preview)',
    ],
    agenticCapabilities: [
      'Multi-agent orchestration',
      'Connected Agents for point-to-point interactions',
      'Multi-Agent Workflows for stateful orchestration',
      'Visual designer for agent workflows',
      'Computer-Using Agent for autonomous GUI interaction',
    ],
    targetAudience: ['Enterprise Developers', 'Data Scientists', 'Platform Engineers'],
    pricing: [
      { name: 'Platform', price: 'Free', notes: 'No platform fee' },
      { name: 'Pay-as-you-go', price: 'Per 1K/1M tokens', notes: 'Varies by model' },
      { name: 'PTU', price: 'Starting ~$2,448', unit: '/month', notes: 'Provisioned throughput' },
    ],
    integrations: [
      { service: 'Azure OpenAI', description: 'Embedded component' },
      { service: 'Azure AI Search', description: 'Knowledge grounding' },
      { service: 'Azure Functions', description: 'Custom actions' },
      { service: 'Microsoft Defender', description: 'Security integration' },
      { service: 'Microsoft Purview', description: 'Compliance' },
      { service: 'VS Code Extension', description: 'Development tooling' },
    ],
    surfaces: ['Azure Portal (ai.azure.com)', 'VS Code', 'APIs', 'SDKs'],
    roadmap: [
      { feature: 'Azure Copilot agents (6 agents)', status: 'In Preview', expectedDate: 'Gated preview' },
      { feature: 'Managed hosting billing', status: 'Coming Soon', expectedDate: 'February 2026' },
      { feature: 'Enhanced MCP ecosystem', status: 'Rolling Out' },
    ],
    relatedServices: ['foundry-control-plane', 'foundry-agent-service', 'azure-openai'],
    url: 'https://ai.azure.com',
    lastUpdated: '2026-02-05',
  },

  {
    id: 'foundry-control-plane',
    name: 'Microsoft Foundry Control Plane',
    shortName: 'Control Plane',
    category: 'Microsoft Foundry / Azure AI',
    status: 'Public Preview',
    description: 'Unified management interface providing visibility, governance, and control for AI agents, models, and tools across the enterprise.',
    brandMessaging: 'Where developers build, operate, and govern every agent',
    keyFeatures: [
      'OpenTelemetry-based tracing for full observability',
      'Continuous evaluations for quality, safety, performance',
      'AI Gateway for cost management and usage control',
      'Error rate monitoring and task adherence',
      'Direct action to block non-compliant agents',
      'Visual designer in portal and VS Code',
    ],
    agenticCapabilities: [
      'Connected Agents orchestration',
      'Multi-Agent Workflows',
      'Persistent state and error recovery',
      'Policy enforcement across all agents',
    ],
    targetAudience: ['Platform Engineers', 'IT Administrators', 'Security Teams'],
    integrations: [
      { service: 'Microsoft Defender', description: 'AI security posture' },
      { service: 'Azure Policy', description: 'Enterprise policy enforcement' },
      { service: 'Microsoft Purview', description: 'Data governance' },
      { service: 'Azure Monitor', description: 'Telemetry' },
      { service: 'Microsoft Entra', description: 'Identity management' },
    ],
    surfaces: ['Azure Portal', 'VS Code', 'APIs'],
    relatedServices: ['microsoft-foundry', 'foundry-agent-service'],
    url: 'https://learn.microsoft.com/en-us/azure/ai-foundry/control-plane/',
    lastUpdated: '2026-02-05',
  },

  {
    id: 'foundry-agent-service',
    name: 'Microsoft Foundry Agent Service',
    shortName: 'Agent Service',
    category: 'Microsoft Foundry / Azure AI',
    status: 'GA',
    description: 'Managed platform for building, deploying, and scaling intelligent AI agents with enterprise-grade security and governance. Over 60,000 customers building with this service.',
    brandMessaging: 'Simple to build, powerful to deploy, trusted to operate',
    keyFeatures: [
      'Multi-agent orchestration',
      'Model Context Protocol (MCP) support',
      'Connected Agents for point-to-point interactions',
      'OpenAPI integration for any API',
      'Knowledge grounding with Azure AI Search and Bing',
      'Content filters and safety controls',
      'Network isolation via managed VNET',
    ],
    agenticCapabilities: [
      'Multi-Agent Workflows',
      'Deep Research (multi-step web research)',
      'Agent2Agent (A2A) protocol',
      'LLM-driven reasoning orchestration',
      'Workflow orchestration (deterministic logic)',
    ],
    targetAudience: ['Enterprise Developers', 'Platform Engineers'],
    pricing: [
      { name: 'Model consumption', price: 'Per token', notes: 'Based on model used' },
      { name: 'Managed hosting', price: 'TBD', notes: 'Billing starts February 2026' },
    ],
    integrations: [
      { service: 'Microsoft Agent Framework', description: 'SDK and runtime' },
      { service: 'Semantic Kernel', description: 'Unified with AutoGen' },
      { service: 'Azure Container Apps', description: 'Self-hosted option' },
      { service: 'Azure Functions', description: 'Self-hosted option' },
    ],
    surfaces: ['Azure Portal', 'APIs', 'SDKs (Python, .NET)'],
    roadmap: [
      { feature: 'Managed hosting billing', status: 'Coming Soon', expectedDate: 'February 2026' },
    ],
    relatedServices: ['microsoft-foundry', 'foundry-control-plane'],
    url: 'https://learn.microsoft.com/en-us/azure/ai-services/agents/',
    lastUpdated: '2026-02-05',
  },

  {
    id: 'azure-openai',
    name: 'Azure OpenAI Service',
    shortName: 'Azure OpenAI',
    category: 'Microsoft Foundry / Azure AI',
    status: 'GA',
    description: 'Managed access to OpenAI models (GPT-5 series, GPT-4o, GPT-4.1, embeddings) on Azure infrastructure with enterprise features. Now integrated as a component within Microsoft Foundry.',
    brandMessaging: 'Enterprise-grade OpenAI on Azure',
    keyFeatures: [
      'GPT-5 family (latest flagship models)',
      'GPT-4.1 series with 1M token context',
      'GPT-4o / GPT-4o mini (optimized multimodal)',
      'o4-mini reasoning model',
      'Sora video generation (up to 20s 1080p)',
      'GPT-realtime for low-latency voice',
      'Computer-Using Agent (preview)',
    ],
    agenticCapabilities: [
      'Computer-Using Agent for GUI automation',
      'Function calling for tool use',
      'Assistants API for stateful conversations',
    ],
    targetAudience: ['Enterprise Developers', 'Data Scientists'],
    pricing: [
      { name: 'GPT-4o', price: '$0.005 input / $0.015 output', unit: 'per 1K tokens' },
      { name: 'GPT-4o mini', price: '$0.00015 input / $0.0006 output', unit: 'per 1K tokens' },
      { name: 'PTU', price: 'Starting ~$2,448', unit: '/month' },
    ],
    integrations: [
      { service: 'Microsoft Foundry', description: 'Embedded component' },
      { service: 'Microsoft Entra ID', description: 'Authentication' },
      { service: 'Microsoft Fabric', description: 'Data platform' },
      { service: 'Azure AI Search', description: 'RAG scenarios' },
    ],
    surfaces: ['Azure Portal', 'REST APIs', 'Python/JS SDKs'],
    relatedServices: ['microsoft-foundry', 'foundry-agent-service'],
    url: 'https://azure.microsoft.com/en-us/products/ai-services/openai-service',
    lastUpdated: '2026-02-05',
  },

  {
    id: 'foundry-tools',
    name: 'Foundry Tools (Azure AI Services)',
    shortName: 'Foundry Tools',
    category: 'Microsoft Foundry / Azure AI',
    status: 'GA',
    description: 'Consolidated platform for traditional AI services (Vision, Speech, Language, Document Intelligence). Formerly Azure Cognitive Services, rebranded as part of Microsoft Foundry.',
    brandMessaging: 'Production-ready AI services',
    keyFeatures: [
      'Vision: Object detection, face recognition, OCR',
      'Speech: Speech-to-text, text-to-speech, translation',
      'Language: Summarization, NER, sentiment, Q&A',
      'Document Intelligence: Extract text/tables from documents',
      'Translator: 100+ languages',
      'Content Safety: Harmful content moderation',
      'Content Understanding: Multimodal processing',
    ],
    targetAudience: ['Enterprise Developers', 'Data Scientists'],
    integrations: [
      { service: 'Microsoft Foundry', description: 'Unified platform' },
      { service: 'AI Builder', description: 'Power Platform integration' },
      { service: 'Copilot Studio', description: 'Agent building' },
    ],
    surfaces: ['Azure Portal', 'REST APIs', 'SDKs'],
    relatedServices: ['microsoft-foundry', 'ai-builder'],
    url: 'https://azure.microsoft.com/en-us/products/ai-foundry/tools',
    lastUpdated: '2026-02-05',
  },

  // ==========================================
  // MICROSOFT 365 COPILOT ECOSYSTEM
  // ==========================================
  {
    id: 'm365-copilot',
    name: 'Microsoft 365 Copilot',
    shortName: 'M365 Copilot',
    category: 'Microsoft 365 Copilot',
    status: 'GA',
    description: 'AI assistant deeply integrated into Microsoft 365 productivity apps (Word, Excel, PowerPoint, Outlook, Teams). Uses Work IQ intelligence layer to connect context, workflows, and organizational data.',
    brandMessaging: 'Your everyday AI companion at work',
    keyFeatures: [
      'Work IQ Intelligence Layer for organizational context',
      'Copilot Memory - learns your style and preferences',
      'Deep integration in Word, Excel, PowerPoint, Outlook, Teams',
      'Agent Mode rolling out (active document editing)',
      'Voice integration for spoken conversations',
      'File Explorer integration for on-demand assistance',
    ],
    agenticCapabilities: [
      'Agent Mode in Word/Excel/PowerPoint',
      'Multi-step workflow execution',
      'Autonomous document editing with reasoning',
    ],
    targetAudience: ['Business Users'],
    pricing: [
      { name: 'Add-on', price: '$30', unit: '/user/month', notes: 'Requires M365 base license' },
      { name: 'SMB (under 300 users)', price: '$21', unit: '/user/month', notes: 'Since December 2025' },
    ],
    integrations: [
      { service: 'Microsoft Graph', description: 'Organizational data access' },
      { service: 'SharePoint/OneDrive', description: 'Document access' },
      { service: 'Teams', description: 'Collaboration features' },
      { service: 'Power Platform', description: 'Workflow triggers' },
    ],
    surfaces: ['Word', 'Excel', 'PowerPoint', 'Outlook', 'Teams', 'OneNote', 'Loop', 'Windows'],
    relatedServices: ['copilot-studio', 'agent-365', 'windows-copilot'],
    url: 'https://www.microsoft.com/en-us/microsoft-365-copilot',
    lastUpdated: '2026-02-05',
  },

  {
    id: 'copilot-studio',
    name: 'Microsoft Copilot Studio',
    shortName: 'Copilot Studio',
    category: 'Microsoft 365 Copilot',
    status: 'GA',
    description: 'No-code to pro-code platform for building custom AI agents that can be published standalone or extend Microsoft 365 Copilot.',
    brandMessaging: 'Build powerful agents with low-code simplicity',
    keyFeatures: [
      'Natural language or graphical agent authoring',
      'Generative answers from knowledge sources',
      'Multi-agent orchestration (preview)',
      'Computer Use - agents operate apps/websites (preview)',
      'MCP Server integration',
      'Voice capabilities (speech/DTMF)',
      'WhatsApp and SharePoint channels',
    ],
    agenticCapabilities: [
      'Multi-agent delegation and orchestration',
      'Computer Use for GUI automation',
      'Autonomous workflow execution',
      'Integration with Azure AI Agents Service',
    ],
    targetAudience: ['Citizen Developers', 'Enterprise Developers', 'IT Administrators'],
    pricing: [
      { name: 'User License', price: 'Free', notes: 'Required for makers' },
      { name: 'Prepaid Pack', price: '$200', unit: '/pack/month', notes: '25,000 Copilot Credits' },
      { name: 'Pay-As-You-Go', price: '$0.01', unit: '/Copilot Credit', notes: 'Azure billing' },
    ],
    integrations: [
      { service: 'Microsoft 365 Copilot', description: 'Extend as plugins' },
      { service: 'Power Platform', description: 'Full integration' },
      { service: 'Azure AI', description: 'Model and tool access' },
      { service: 'Teams', description: 'Channel deployment' },
    ],
    surfaces: ['Web portal', 'Teams', 'SharePoint', 'Custom websites', 'WhatsApp', 'Telephony'],
    roadmap: [
      { feature: 'Work IQ for Custom Agents', status: 'Rolling Out' },
      { feature: 'Copilot Tuning (fine-tuning)', status: 'In Preview' },
      { feature: 'OpenAI and Anthropic models', status: 'In Preview' },
    ],
    relatedServices: ['m365-copilot', 'power-automate-copilot', 'foundry-agent-service'],
    url: 'https://www.microsoft.com/en-us/microsoft-copilot/microsoft-copilot-studio',
    lastUpdated: '2026-02-05',
  },

  {
    id: 'agent-365',
    name: 'Microsoft Agent 365 / Copilot Agents',
    shortName: 'Agent 365',
    category: 'Microsoft 365 Copilot',
    status: 'GA',
    description: 'Unified control plane for enterprise AI agents with first-class identities, governance, and audit capabilities. Agents are treated like organizational identities.',
    brandMessaging: 'AI agents as first-class organizational citizens',
    keyFeatures: [
      'Unified Control Plane for agent governance',
      'Agent IDs with full audit trails',
      'MCP Servers for business operations',
      'First-class organizational identities',
      'Security Copilot agents for defenders',
      'Agent mode in M365 apps',
    ],
    agenticCapabilities: [
      'Autonomous task execution without constant oversight',
      'Multi-step business process automation',
      'Cross-application workflow orchestration',
      'Human-in-the-loop checkpoints',
    ],
    targetAudience: ['IT Administrators', 'Security Teams', 'Business Users'],
    integrations: [
      { service: 'Microsoft Defender', description: 'Security agents' },
      { service: 'Microsoft Entra', description: 'Identity agents' },
      { service: 'Microsoft Intune', description: 'Endpoint agents' },
      { service: 'Microsoft Purview', description: 'Compliance agents' },
    ],
    surfaces: ['Microsoft 365 apps', 'Security products', 'Azure'],
    relatedServices: ['m365-copilot', 'copilot-studio', 'security-copilot'],
    url: 'https://www.microsoft.com/en-us/microsoft-365/blog/2025/11/18/microsoft-ignite-2025-copilot-and-agents-built-to-power-the-frontier-firm/',
    lastUpdated: '2026-02-05',
  },

  {
    id: 'security-copilot',
    name: 'Microsoft Security Copilot',
    shortName: 'Security Copilot',
    category: 'Microsoft 365 Copilot',
    status: 'GA',
    description: 'AI-powered security assistant integrated across Microsoft Defender, Entra, Intune, and Purview. Included with E5 licenses as of November 2025.',
    brandMessaging: 'AI for defenders',
    keyFeatures: [
      'Threat detection and investigation',
      'Phishing triage automation',
      'Incident investigation assistance',
      'Conditional access analysis',
      'Identity risk investigation',
      'Zero Trust posture assessment',
      'Policy configuration help',
    ],
    agenticCapabilities: [
      '12+ autonomous security agents',
      'Automated threat response',
      'Policy remediation',
      'Vulnerability assessment',
    ],
    targetAudience: ['Security Teams', 'IT Administrators'],
    pricing: [
      { name: 'E5 Allocation', price: 'Included', notes: '400 SCU per 1000 users/month' },
      { name: 'Pay-as-you-go', price: '$6', unit: '/SCU', notes: 'Overflow usage' },
    ],
    integrations: [
      { service: 'Microsoft Defender', description: 'Threat detection agents' },
      { service: 'Microsoft Entra', description: 'Identity agents' },
      { service: 'Microsoft Intune', description: 'Endpoint agents' },
      { service: 'Microsoft Purview', description: 'Compliance agents' },
    ],
    surfaces: ['Security portal', 'Microsoft 365', 'Azure'],
    relatedServices: ['m365-copilot', 'agent-365'],
    url: 'https://www.microsoft.com/en-us/security/business/ai-machine-learning/microsoft-copilot-security',
    lastUpdated: '2026-02-05',
  },

  {
    id: 'windows-copilot',
    name: 'Windows Copilot',
    shortName: 'Windows Copilot',
    category: 'Microsoft 365 Copilot',
    status: 'GA',
    description: 'OS-level AI integration in Windows 11 with Copilot key support, voice activation, and File Explorer integration.',
    brandMessaging: 'AI built into your PC',
    keyFeatures: [
      'Dedicated Copilot key on new keyboards',
      'Short press: Quick prompt box',
      'Long press: Voice controller',
      '"Hey Copilot" wake word activation',
      'File Explorer hover assistance',
      'Ask Copilot search composer',
      'Agenda in Notifications',
    ],
    targetAudience: ['Business Users', 'Consumers'],
    integrations: [
      { service: 'Microsoft 365 Copilot', description: 'Full work data grounding (with license)' },
      { service: 'Microsoft Edge', description: 'Browser integration' },
      { service: 'File Explorer', description: 'On-demand assistance' },
    ],
    surfaces: ['Windows 11', 'Microsoft Edge', 'File Explorer', 'System tray'],
    roadmap: [
      { feature: '26H1 Platform branch', status: 'Coming Soon', expectedDate: 'Spring 2026' },
      { feature: '26H2 Copilot UX changes', status: 'Announced', expectedDate: 'Fall 2026' },
    ],
    relatedServices: ['m365-copilot', 'copilot-consumer', 'copilot-plus-pcs'],
    url: 'https://www.microsoft.com/en-us/windows/copilot-ai-features',
    lastUpdated: '2026-02-05',
  },

  // ==========================================
  // POWER PLATFORM AI
  // ==========================================
  {
    id: 'ai-builder',
    name: 'AI Builder',
    shortName: 'AI Builder',
    category: 'Power Platform AI',
    status: 'GA',
    description: 'AI capabilities for Power Platform enabling document processing, prompt building, and custom AI models without coding.',
    brandMessaging: 'AI for citizen developers',
    keyFeatures: [
      'Document Processing with AI models',
      'Prompt Builder with enterprise data',
      'Document Processing Agent',
      'Prebuilt AI models (object detection, text recognition, sentiment)',
      'Custom model training without coding',
    ],
    agenticCapabilities: [
      'Document Processing Agent for workflow automation',
      'AI-powered data validation',
    ],
    targetAudience: ['Citizen Developers', 'Business Users'],
    pricing: [
      { name: 'Copilot Credits', price: 'Required', notes: 'AI Builder credits removed November 2026' },
    ],
    integrations: [
      { service: 'Power Apps', description: 'App integration' },
      { service: 'Power Automate', description: 'Workflow integration' },
      { service: 'Azure AI Document Intelligence', description: 'Backend service' },
      { service: 'Azure OpenAI', description: 'GPT models' },
    ],
    surfaces: ['Power Apps', 'Power Automate', 'Dataverse'],
    deprecationDate: '2026-11-01',
    migrationPath: 'Copilot Credits replace AI Builder credits',
    relatedServices: ['power-apps-copilot', 'power-automate-copilot'],
    url: 'https://learn.microsoft.com/en-us/ai-builder/',
    lastUpdated: '2026-02-05',
  },

  {
    id: 'power-apps-copilot',
    name: 'Copilot in Power Apps',
    shortName: 'Power Apps Copilot',
    category: 'Power Platform AI',
    status: 'GA',
    description: 'AI-assisted app creation using natural language to build apps, data models, and Copilot-powered experiences.',
    brandMessaging: 'Describe what you need, AI builds the app',
    keyFeatures: [
      'Natural language app creation',
      'Auto-generated data models (tables, columns, relationships)',
      'Plan Designer for business problem solving',
      'Copilot-powered app experiences',
      'Form auto-suggestions',
      'Natural language data navigation',
    ],
    agenticCapabilities: [
      'Plan Designer with AI agents',
      'Agent creation from existing apps',
      'Autonomous data model generation',
    ],
    targetAudience: ['Citizen Developers', 'Business Users'],
    integrations: [
      { service: 'Microsoft Dataverse', description: 'Data platform' },
      { service: 'Copilot Studio', description: 'Agent building' },
      { service: 'Power Automate', description: 'Workflow triggers' },
    ],
    surfaces: ['Power Apps web', 'Power Apps mobile'],
    roadmap: [
      { feature: 'Dataverse MCP Server', status: 'In Preview' },
      { feature: 'Dataverse for Agents', status: 'Rolling Out' },
    ],
    relatedServices: ['copilot-studio', 'ai-builder', 'power-automate-copilot'],
    url: 'https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/ai-overview',
    lastUpdated: '2026-02-05',
  },

  {
    id: 'power-automate-copilot',
    name: 'Copilot in Power Automate',
    shortName: 'Power Automate Copilot',
    category: 'Power Platform AI',
    status: 'GA',
    description: 'AI-assisted workflow creation and automation using natural language descriptions.',
    brandMessaging: 'Describe your workflow, AI builds it',
    keyFeatures: [
      'Natural language flow creation',
      'Generative Actions (dynamic, multimodal automations)',
      'Intelligent document processing',
      'Advanced approvals with human-in-the-loop',
      'Natural language expressions',
      'Multi-app integration',
    ],
    agenticCapabilities: [
      'Workflows Agent for scheduled/event-driven automation',
      'Computer Use for UI automation (preview)',
      'Multi-agent orchestration',
    ],
    targetAudience: ['Citizen Developers', 'Business Users'],
    integrations: [
      { service: 'Power Apps', description: 'App triggers' },
      { service: 'Copilot Studio', description: 'Agent workflows' },
      { service: 'Microsoft 365', description: 'Productivity apps' },
      { service: 'Dynamics 365', description: 'Business apps' },
    ],
    surfaces: ['Power Automate web', 'Teams', 'Microsoft 365'],
    roadmap: [
      { feature: 'Workflows Agent', status: 'In Preview', expectedDate: 'Frontier program' },
      { feature: 'Computer Use', status: 'In Preview', expectedDate: 'US only' },
      { feature: 'Copilot Chat Agent Mode', status: 'Coming Soon', expectedDate: 'Early 2026' },
    ],
    relatedServices: ['copilot-studio', 'ai-builder', 'power-apps-copilot'],
    url: 'https://learn.microsoft.com/en-us/power-automate/copilot-overview',
    lastUpdated: '2026-02-05',
  },

  {
    id: 'power-bi-copilot',
    name: 'Copilot in Power BI',
    shortName: 'Power BI Copilot',
    category: 'Power Platform AI',
    status: 'GA',
    description: 'AI-assisted data analysis with natural language DAX queries, measure suggestions, and report insights.',
    brandMessaging: 'Ask questions, get insights',
    keyFeatures: [
      'Natural language DAX query writing',
      'Measure suggestions for semantic models',
      'AI Instructions for business context',
      'Grounded References to reports/models',
      'Mobile standalone experience',
      'Verified Answers for trusted responses',
    ],
    targetAudience: ['Business Users', 'Data Scientists'],
    pricing: [
      { name: 'Requires', price: 'Fabric capacity or Power BI Premium P1+' },
    ],
    integrations: [
      { service: 'Microsoft Fabric', description: 'Data platform' },
      { service: 'Fabric IQ', description: 'Natural language exploration' },
      { service: 'Dataverse', description: 'Data source' },
    ],
    surfaces: ['Power BI web', 'Power BI mobile', 'Power BI Desktop'],
    roadmap: [
      { feature: 'Q&A Deprecation', status: 'Announced', expectedDate: 'December 2026' },
      { feature: 'Fabric IQ as first-class citizen', status: 'Coming Soon' },
    ],
    relatedServices: ['microsoft-fabric'],
    url: 'https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-introduction',
    lastUpdated: '2026-02-05',
  },

  // ==========================================
  // CONSUMER PRODUCTS
  // ==========================================
  {
    id: 'copilot-consumer',
    name: 'Microsoft Copilot (Consumer)',
    shortName: 'Copilot',
    category: 'Consumer Products',
    status: 'GA',
    description: 'Free and Pro consumer AI assistant at copilot.microsoft.com with GPT access, image generation, and optional Office integration.',
    brandMessaging: 'Your everyday AI companion',
    keyFeatures: [
      'GPT model access for chat and content creation',
      'Bing search integration',
      'AI image creation with Designer',
      'Microsoft Edge sidebar integration',
      'Mobile apps (iOS, Android)',
    ],
    targetAudience: ['Consumers'],
    pricing: [
      { name: 'Free', price: '$0', notes: 'Basic GPT, limited image creation' },
      { name: 'Copilot Pro', price: '$20', unit: '/month', notes: 'Priority models, 100 boosts/day' },
      { name: 'M365 Personal', price: '$9.99', unit: '/month', notes: 'Includes Copilot and Designer' },
      { name: 'M365 Family', price: '$12.99', unit: '/month', notes: 'Up to 6 users' },
    ],
    integrations: [
      { service: 'Bing', description: 'Web search grounding' },
      { service: 'Microsoft Edge', description: 'Browser sidebar' },
      { service: 'Office apps', description: 'With M365 subscription' },
    ],
    surfaces: ['Web (copilot.microsoft.com)', 'Edge sidebar', 'Mobile apps', 'Windows'],
    relatedServices: ['windows-copilot', 'm365-copilot'],
    url: 'https://copilot.microsoft.com',
    lastUpdated: '2026-02-05',
  },

  {
    id: 'copilot-plus-pcs',
    name: 'Copilot+ PCs',
    shortName: 'Copilot+ PC',
    category: 'Hardware',
    status: 'GA',
    description: 'Windows PCs with NPU (40+ TOPS) enabling on-device AI features like Recall, Live Captions, and local AI processing.',
    brandMessaging: 'The fastest, most intelligent Windows PCs ever built',
    keyFeatures: [
      'Recall: Searchable timeline of everything on PC',
      'Live Captions: Real-time translation and transcription',
      'Phi Silica: On-device SLM for text generation',
      'Windows Studio Effects: AI camera/audio',
      'Local AI processing (privacy-preserving)',
      'Power-efficient NPU offloading',
    ],
    targetAudience: ['Business Users', 'Consumers'],
    pricing: [
      { name: 'Hardware cost only', price: '~$999+', notes: 'Premium pricing for certified devices' },
    ],
    integrations: [
      { service: 'Windows 11', description: 'Native features' },
      { service: 'Microsoft 365', description: 'App integration' },
      { service: 'ONNX Runtime', description: 'Developer framework' },
    ],
    surfaces: ['Windows 11 native features', 'Third-party apps'],
    roadmap: [
      { feature: 'Snapdragon X2 devices (80 TOPS)', status: 'Coming Soon', expectedDate: 'Early 2026' },
      { feature: 'Expanded on-device AI capabilities', status: 'Rolling Out' },
    ],
    relatedServices: ['windows-copilot'],
    url: 'https://www.microsoft.com/en-us/windows/copilot-plus-pcs',
    lastUpdated: '2026-02-05',
  },

  // ==========================================
  // DEPRECATED / RETIRING SERVICES
  // ==========================================
  {
    id: 'luis',
    name: 'LUIS (Language Understanding)',
    shortName: 'LUIS',
    category: 'Microsoft Foundry / Azure AI',
    status: 'Deprecated',
    description: 'Legacy natural language understanding service for intent recognition and entity extraction.',
    keyFeatures: [
      'Intent classification',
      'Entity extraction',
      'Custom language models',
    ],
    targetAudience: ['Enterprise Developers'],
    integrations: [],
    surfaces: ['Azure Portal', 'REST APIs'],
    deprecationDate: '2025-10-01',
    migrationPath: 'Conversational Language Understanding (CLU)',
    relatedServices: ['foundry-tools'],
    url: 'https://learn.microsoft.com/en-us/azure/ai-services/luis/',
    lastUpdated: '2026-02-05',
  },

  {
    id: 'cognitive-services-power-bi',
    name: 'Cognitive Services in Power BI Dataflows',
    category: 'Power Platform AI',
    status: 'Deprecated',
    description: 'Legacy integration of Azure Cognitive Services within Power BI dataflows.',
    keyFeatures: [
      'Text analytics in dataflows',
      'Vision APIs in dataflows',
    ],
    targetAudience: ['Business Users', 'Data Scientists'],
    integrations: [],
    surfaces: ['Power BI Dataflows'],
    deprecationDate: '2025-09-15',
    migrationPath: 'Use Copilot in Power BI or direct Azure AI integration',
    relatedServices: ['power-bi-copilot'],
    lastUpdated: '2026-02-05',
  },

  {
    id: 'computer-vision-legacy',
    name: 'Computer Vision API v1.0-3.1',
    category: 'Microsoft Foundry / Azure AI',
    status: 'Retiring',
    description: 'Legacy versions of the Computer Vision API being retired.',
    keyFeatures: [
      'Image analysis',
      'OCR',
      'Object detection',
    ],
    targetAudience: ['Enterprise Developers'],
    integrations: [],
    surfaces: ['REST APIs'],
    deprecationDate: '2026-09-13',
    migrationPath: 'Computer Vision 3.2 or Image Analysis 4.0 GA',
    relatedServices: ['foundry-tools'],
    lastUpdated: '2026-02-05',
  },
];

// ==========================================
// HELPER TYPES AND UTILITIES
// ==========================================

export interface ServicesByCategory {
  category: ServiceCategory;
  services: MicrosoftAIService[];
}

export function getServicesByCategory(): ServicesByCategory[] {
  const categories = [...new Set(microsoftAIServices.map(s => s.category))];
  return categories.map(category => ({
    category,
    services: microsoftAIServices.filter(s => s.category === category),
  }));
}

export function getActiveServices(): MicrosoftAIService[] {
  return microsoftAIServices.filter(s =>
    s.status !== 'Deprecated' && s.status !== 'Retiring'
  );
}

export function getAgenticServices(): MicrosoftAIService[] {
  return microsoftAIServices.filter(s =>
    s.agenticCapabilities && s.agenticCapabilities.length > 0
  );
}

export function getServiceById(id: string): MicrosoftAIService | undefined {
  return microsoftAIServices.find(s => s.id === id);
}

export function getRelatedServices(serviceId: string): MicrosoftAIService[] {
  const service = getServiceById(serviceId);
  if (!service) return [];
  return service.relatedServices
    .map(id => getServiceById(id))
    .filter((s): s is MicrosoftAIService => s !== undefined);
}

// ==========================================
// COMPARISON MATRICES
// ==========================================

export const agenticCapabilityMatrix = {
  'github-copilot': {
    'Autonomous Code Editing': true,
    'Multi-File Refactoring': true,
    'Terminal Command Execution': true,
    'Background Task Execution': true,
    'Issue-to-PR Automation': true,
    'MCP Integration': true,
    'Multi-Agent Orchestration': false,
    'Computer/GUI Use': false,
  },
  'microsoft-foundry': {
    'Autonomous Code Editing': false,
    'Multi-File Refactoring': false,
    'Terminal Command Execution': false,
    'Background Task Execution': true,
    'Issue-to-PR Automation': false,
    'MCP Integration': true,
    'Multi-Agent Orchestration': true,
    'Computer/GUI Use': true,
  },
  'copilot-studio': {
    'Autonomous Code Editing': false,
    'Multi-File Refactoring': false,
    'Terminal Command Execution': false,
    'Background Task Execution': true,
    'Issue-to-PR Automation': false,
    'MCP Integration': true,
    'Multi-Agent Orchestration': true,
    'Computer/GUI Use': true,
  },
  'm365-copilot': {
    'Autonomous Code Editing': false,
    'Multi-File Refactoring': false,
    'Terminal Command Execution': false,
    'Background Task Execution': false,
    'Issue-to-PR Automation': false,
    'MCP Integration': false,
    'Multi-Agent Orchestration': false,
    'Computer/GUI Use': false,
  },
} as const;

export const pricingComparisonMatrix = [
  {
    service: 'GitHub Copilot Pro',
    monthlyPrice: 10,
    unit: 'user',
    enterprise: false,
  },
  {
    service: 'GitHub Copilot Business',
    monthlyPrice: 19,
    unit: 'user',
    enterprise: true,
  },
  {
    service: 'GitHub Copilot Enterprise',
    monthlyPrice: 39,
    unit: 'user',
    enterprise: true,
  },
  {
    service: 'Microsoft 365 Copilot',
    monthlyPrice: 30,
    unit: 'user',
    enterprise: true,
  },
  {
    service: 'Copilot Pro (Consumer)',
    monthlyPrice: 20,
    unit: 'user',
    enterprise: false,
  },
  {
    service: 'Copilot Studio (Prepaid)',
    monthlyPrice: 200,
    unit: 'pack',
    enterprise: true,
  },
];
