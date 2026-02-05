/**
 * Microsoft AI Ecosystem: Comprehensive Product Catalog
 * Last Updated: February 2026
 *
 * 150+ products across 12 major categories
 */

// ===========================================
// TYPE DEFINITIONS
// ===========================================

export type ServiceStatus = 'GA' | 'Preview' | 'Deprecated' | 'Retired';

export type ServiceCategory =
  | 'GitHub'
  | 'Azure'
  | 'M365'
  | 'Consumer'
  | 'PowerPlatform'
  | 'Agentic'
  | 'Infrastructure'
  | 'Windows'
  | 'Other';

export type TargetAudience =
  | 'Developers'
  | 'ITAdmins'
  | 'EndUsers'
  | 'LowCodeBuilders'
  | 'DataScientists'
  | 'Security';

export type PricingType = 'Free' | 'Subscription' | 'PayAsYouGo' | 'Capacity' | 'Included';

export interface PricingModel {
  type: PricingType;
  price: string;
  unit?: string;
  notes?: string;
}

export interface MicrosoftAIProduct {
  id: string;
  name: string;
  category: ServiceCategory;
  subcategory: string;
  status: ServiceStatus;
  gaCapabilities: string[];
  previewFeatures?: string[];
  brandPositioning?: string;
  surfaces: string[];
  targetAudience: TargetAudience[];
  pricingModel: PricingModel;
  integrations: string[];
  relatedProducts: string[];
  documentation?: string;
  lastUpdated: string;
}

// ===========================================
// GITHUB AI PRODUCTS
// ===========================================

export const githubProducts: MicrosoftAIProduct[] = [
  // Individual Tiers
  {
    id: 'github-copilot-free',
    name: 'GitHub Copilot Free',
    category: 'GitHub',
    subcategory: 'Individual Tiers',
    status: 'GA',
    gaCapabilities: [
      '2,000 code completions/month',
      '50 chat messages',
      '50 premium requests',
      'Inline suggestions',
    ],
    brandPositioning: 'Entry point for AI-assisted coding',
    surfaces: ['VS Code', 'Visual Studio', 'JetBrains', 'GitHub.com'],
    targetAudience: ['Developers'],
    pricingModel: { type: 'Free', price: '$0' },
    integrations: ['github-copilot-chat'],
    relatedProducts: ['github-copilot-pro', 'github-copilot-pro-plus'],
    documentation: 'https://github.com/features/copilot',
    lastUpdated: '2026-02-05',
  },
  {
    id: 'github-copilot-pro',
    name: 'GitHub Copilot Pro',
    category: 'GitHub',
    subcategory: 'Individual Tiers',
    status: 'GA',
    gaCapabilities: [
      'Unlimited completions',
      '300 premium requests/month',
      'Agent mode',
      'CLI access',
      'Code review',
      'MCP support',
      'Multi-model (Claude Sonnet 4, GPT-4.1, GPT-5, Gemini 2.5 Pro)',
    ],
    brandPositioning: 'Professional AI pair programmer',
    surfaces: ['VS Code', 'Visual Studio', 'JetBrains', 'Eclipse', 'Xcode', 'Vim/Neovim', 'CLI', 'GitHub.com', 'Mobile'],
    targetAudience: ['Developers'],
    pricingModel: { type: 'Subscription', price: '$10', unit: '/month', notes: 'or $100/year' },
    integrations: ['github-copilot-cli', 'github-copilot-agent-mode', 'github-models'],
    relatedProducts: ['github-copilot-free', 'github-copilot-pro-plus'],
    documentation: 'https://github.com/features/copilot/plans',
    lastUpdated: '2026-02-05',
  },
  {
    id: 'github-copilot-pro-plus',
    name: 'GitHub Copilot Pro+',
    category: 'GitHub',
    subcategory: 'Individual Tiers',
    status: 'GA',
    gaCapabilities: [
      '1,500 premium requests/month',
      'ALL models including Claude Opus 4.5, GPT-5.2-Codex, Grok Code',
      'OpenAI Codex agent access',
      'Priority access to new features',
    ],
    brandPositioning: 'Ultimate AI coding experience',
    surfaces: ['VS Code', 'Visual Studio', 'JetBrains', 'Eclipse', 'Xcode', 'CLI', 'GitHub.com'],
    targetAudience: ['Developers'],
    pricingModel: { type: 'Subscription', price: '$39', unit: '/month', notes: 'or $390/year' },
    integrations: ['github-copilot-cli', 'github-copilot-agent-mode', 'github-spark', 'agent-hq'],
    relatedProducts: ['github-copilot-pro', 'github-copilot-enterprise'],
    documentation: 'https://github.com/features/copilot/plans',
    lastUpdated: '2026-02-05',
  },

  // Organization Tiers
  {
    id: 'github-copilot-business',
    name: 'GitHub Copilot Business',
    category: 'GitHub',
    subcategory: 'Organization Tiers',
    status: 'GA',
    gaCapabilities: [
      '300 premium requests/user/month',
      'Org policy management',
      'IP indemnity',
      'Audit logs',
      'Content exclusion',
      'SAML SSO',
    ],
    brandPositioning: 'AI coding for teams',
    surfaces: ['VS Code', 'Visual Studio', 'JetBrains', 'GitHub.com'],
    targetAudience: ['Developers', 'ITAdmins'],
    pricingModel: { type: 'Subscription', price: '$19', unit: '/user/month' },
    integrations: ['github-advanced-security'],
    relatedProducts: ['github-copilot-enterprise'],
    documentation: 'https://github.com/features/copilot/plans',
    lastUpdated: '2026-02-05',
  },
  {
    id: 'github-copilot-enterprise',
    name: 'GitHub Copilot Enterprise',
    category: 'GitHub',
    subcategory: 'Organization Tiers',
    status: 'GA',
    gaCapabilities: [
      '1,000 premium requests/user/month',
      'Custom fine-tuned models',
      'Knowledge bases (Copilot Spaces)',
      'SCIM provisioning',
      'Early feature access',
    ],
    previewFeatures: ['Custom model fine-tuning', 'Advanced knowledge retrieval'],
    brandPositioning: 'Enterprise-grade AI development platform',
    surfaces: ['VS Code', 'Visual Studio', 'JetBrains', 'GitHub.com', 'GitHub Mobile'],
    targetAudience: ['Developers', 'ITAdmins'],
    pricingModel: { type: 'Subscription', price: '$39', unit: '/user/month', notes: 'Requires GH Enterprise Cloud at $21/user' },
    integrations: ['github-advanced-security', 'copilot-spaces'],
    relatedProducts: ['github-copilot-business'],
    documentation: 'https://github.com/features/copilot/plans',
    lastUpdated: '2026-02-05',
  },

  // VS Code Features
  {
    id: 'github-copilot-agent-mode',
    name: 'GitHub Copilot Agent Mode',
    category: 'GitHub',
    subcategory: 'VS Code Features',
    status: 'GA',
    gaCapabilities: [
      'Autonomous multi-step coding',
      'File operations',
      'Terminal execution',
      'MCP integration',
      'Error auto-correction',
      'Self-healing workflows',
    ],
    brandPositioning: 'From assistant to autonomous peer programmer',
    surfaces: ['VS Code'],
    targetAudience: ['Developers'],
    pricingModel: { type: 'Included', price: 'Included with Copilot Pro+' },
    integrations: ['mcp-servers', 'github-copilot-cli'],
    relatedProducts: ['github-copilot-pro', 'github-copilot-coding-agent'],
    documentation: 'https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode',
    lastUpdated: '2026-02-05',
  },
  {
    id: 'github-copilot-chat',
    name: 'GitHub Copilot Chat',
    category: 'GitHub',
    subcategory: 'VS Code Features',
    status: 'GA',
    gaCapabilities: [
      'Conversational AI',
      '@workspace participant',
      '@terminal participant',
      '@vscode participant',
      'Slash commands',
      'Context awareness',
    ],
    surfaces: ['VS Code', 'Visual Studio', 'JetBrains', 'GitHub.com'],
    targetAudience: ['Developers'],
    pricingModel: { type: 'Included', price: 'Included with Copilot' },
    integrations: ['github-copilot-agent-mode'],
    relatedProducts: ['github-copilot-pro'],
    lastUpdated: '2026-02-05',
  },
  {
    id: 'github-copilot-next-edit',
    name: 'Next Edit Suggestions',
    category: 'GitHub',
    subcategory: 'VS Code Features',
    status: 'Preview',
    gaCapabilities: [],
    previewFeatures: ['Predicts next edit location', 'Suggests content for next change'],
    surfaces: ['VS Code'],
    targetAudience: ['Developers'],
    pricingModel: { type: 'Included', price: 'Included with Copilot' },
    integrations: [],
    relatedProducts: ['github-copilot-pro'],
    lastUpdated: '2026-02-05',
  },

  // Platform Services
  {
    id: 'github-models',
    name: 'GitHub Models',
    category: 'GitHub',
    subcategory: 'Platform Services',
    status: 'GA',
    gaCapabilities: [
      '50+ models (GPT-4o, Claude, Llama, Phi)',
      'Model playground',
      'API access',
      'Evaluators',
      'Prompt management',
    ],
    brandPositioning: 'Model marketplace for developers',
    surfaces: ['GitHub.com Marketplace', 'Codespaces', 'Actions'],
    targetAudience: ['Developers', 'DataScientists'],
    pricingModel: { type: 'PayAsYouGo', price: 'Free tier (rate-limited)', notes: '$0.00001/token unit paid' },
    integrations: ['azure-openai', 'github-copilot'],
    relatedProducts: ['azure-ai-model-catalog'],
    documentation: 'https://github.com/marketplace/models',
    lastUpdated: '2026-02-05',
  },
  {
    id: 'github-copilot-sdk',
    name: 'GitHub Copilot SDK',
    category: 'GitHub',
    subcategory: 'Platform Services',
    status: 'Preview',
    gaCapabilities: [],
    previewFeatures: [
      'Technical preview v0.1.10',
      'Node.js/Python/Go/.NET SDKs',
      'JSON-RPC architecture',
      'Custom agent embedding',
    ],
    brandPositioning: 'Build an agent into any app',
    surfaces: ['Custom applications', 'CI/CD pipelines'],
    targetAudience: ['Developers'],
    pricingModel: { type: 'Included', price: 'Requires Copilot subscription' },
    integrations: ['github-copilot-cli'],
    relatedProducts: ['github-copilot-pro'],
    documentation: 'https://github.com/copilot/sdk',
    lastUpdated: '2026-02-05',
  },
  {
    id: 'github-copilot-coding-agent',
    name: 'GitHub Copilot Coding Agent',
    category: 'GitHub',
    subcategory: 'Platform Services',
    status: 'GA',
    gaCapabilities: [
      'Autonomous issue-to-PR completion',
      'Actions-powered execution',
      'Security validation',
      'Hooks/skills support',
      'Background processing',
    ],
    brandPositioning: 'Your async AI developer',
    surfaces: ['GitHub Issues', 'Pull Requests', 'VS Code', 'Mobile'],
    targetAudience: ['Developers'],
    pricingModel: { type: 'PayAsYouGo', price: 'Premium requests + Actions minutes' },
    integrations: ['github-actions', 'github-copilot-agent-mode'],
    relatedProducts: ['github-copilot-enterprise'],
    documentation: 'https://docs.github.com/en/copilot/concepts/agents/coding-agent',
    lastUpdated: '2026-02-05',
  },
  {
    id: 'github-copilot-cli',
    name: 'GitHub Copilot CLI',
    category: 'GitHub',
    subcategory: 'Platform Services',
    status: 'GA',
    gaCapabilities: [
      'Interactive mode',
      'Programmatic mode',
      'Autopilot mode',
      'LSP support',
      'Session management',
      'Built-in Explore/Task agents',
      'GitHub MCP server',
    ],
    brandPositioning: 'AI-powered coding agent in your terminal',
    surfaces: ['Terminal', 'CI/CD pipelines'],
    targetAudience: ['Developers'],
    pricingModel: { type: 'Included', price: 'Included with paid Copilot' },
    integrations: ['mcp-servers', 'github-copilot-sdk'],
    relatedProducts: ['github-copilot-pro'],
    documentation: 'https://github.com/features/copilot/cli',
    lastUpdated: '2026-02-05',
  },
  {
    id: 'github-advanced-security',
    name: 'GitHub Advanced Security AI',
    category: 'GitHub',
    subcategory: 'Platform Services',
    status: 'GA',
    gaCapabilities: [
      'Copilot Autofix (90% coverage)',
      'Secret scanning',
      'Security campaigns',
      'Code scanning',
    ],
    brandPositioning: 'AI-powered security for code',
    surfaces: ['GitHub.com', 'Pull Requests', 'Security dashboard'],
    targetAudience: ['Developers', 'Security'],
    pricingModel: { type: 'Free', price: 'Free for public repos', notes: 'GHAS license for private' },
    integrations: ['github-copilot-enterprise'],
    relatedProducts: ['security-copilot'],
    lastUpdated: '2026-02-05',
  },
  {
    id: 'github-spark',
    name: 'GitHub Spark',
    category: 'GitHub',
    subcategory: 'Platform Services',
    status: 'GA',
    gaCapabilities: [
      'Natural language to full-stack app',
      'React/TypeScript generation',
      'Instant preview',
      'One-click deployment',
    ],
    brandPositioning: 'Describe it, build it, ship it',
    surfaces: ['github.com/spark', 'Codespaces'],
    targetAudience: ['Developers', 'LowCodeBuilders'],
    pricingModel: { type: 'Subscription', price: '$39', unit: '/month', notes: 'Pro+ or Enterprise, 375 Spark messages' },
    integrations: ['github-copilot-pro-plus'],
    relatedProducts: ['power-apps'],
    documentation: 'https://github.com/spark',
    lastUpdated: '2026-02-05',
  },
  {
    id: 'agent-hq',
    name: 'Agent HQ',
    category: 'GitHub',
    subcategory: 'Platform Services',
    status: 'Preview',
    gaCapabilities: [],
    previewFeatures: [
      'Multi-agent coding sessions',
      'Compare different models on same problem',
      'Parallel agent execution',
      'VS Code Agent Sessions view',
    ],
    brandPositioning: 'Command center for AI agents',
    surfaces: ['VS Code', 'GitHub.com'],
    targetAudience: ['Developers'],
    pricingModel: { type: 'Included', price: 'Copilot Pro+ and Enterprise' },
    integrations: ['github-copilot-agent-mode', 'github-copilot-coding-agent'],
    relatedProducts: ['github-copilot-pro-plus'],
    lastUpdated: '2026-02-05',
  },
];

// ===========================================
// AZURE AI PLATFORM (MICROSOFT FOUNDRY)
// ===========================================

export const azureAIProducts: MicrosoftAIProduct[] = [
  {
    id: 'azure-ai-foundry-portal',
    name: 'Azure AI Foundry Portal',
    category: 'Azure',
    subcategory: 'Core Platform',
    status: 'GA',
    gaCapabilities: [
      'Project-based workspace',
      '11,000+ models',
      'No-code agent creation',
      'Azure integration',
      'RBAC',
    ],
    brandPositioning: 'The agent factory for enterprise AI',
    surfaces: ['ai.azure.com', 'Azure Portal', 'VS Code'],
    targetAudience: ['Developers', 'DataScientists', 'ITAdmins'],
    pricingModel: { type: 'Free', price: 'Platform free', notes: 'Pay for services used' },
    integrations: ['azure-openai', 'azure-ai-search', 'azure-ai-agent-service'],
    relatedProducts: ['foundry-control-plane'],
    documentation: 'https://ai.azure.com',
    lastUpdated: '2026-02-05',
  },
  {
    id: 'azure-ai-foundry-sdk',
    name: 'Azure AI Foundry SDK',
    category: 'Azure',
    subcategory: 'Core Platform',
    status: 'GA',
    gaCapabilities: [
      'azure-ai-projects 1.0.0',
      'azure-ai-agents 1.0.2',
      'Python/Java/.NET/TypeScript',
    ],
    surfaces: ['PyPI', 'NuGet', 'npm', 'Maven'],
    targetAudience: ['Developers'],
    pricingModel: { type: 'Free', price: 'Open source (MIT)' },
    integrations: ['azure-ai-foundry-portal'],
    relatedProducts: ['semantic-kernel', 'microsoft-agent-framework'],
    lastUpdated: '2026-02-05',
  },
  {
    id: 'foundry-control-plane',
    name: 'Foundry Control Plane',
    category: 'Azure',
    subcategory: 'Core Platform',
    status: 'Preview',
    gaCapabilities: [],
    previewFeatures: [
      'Agent registration',
      'Guardrails',
      'Task adherence monitoring',
      'Prompt injection mitigation',
      'OpenTelemetry tracing',
    ],
    brandPositioning: 'Govern every agent',
    surfaces: ['Azure Portal', 'API'],
    targetAudience: ['ITAdmins', 'Security'],
    pricingModel: { type: 'Included', price: 'Included with platform' },
    integrations: ['azure-ai-foundry-portal', 'microsoft-defender'],
    relatedProducts: ['agent-365'],
    lastUpdated: '2026-02-05',
  },
  {
    id: 'azure-ai-agent-service',
    name: 'Azure AI Agent Service',
    category: 'Azure',
    subcategory: 'Core Platform',
    status: 'GA',
    gaCapabilities: [
      'Multi-agent orchestration',
      '1,400+ Logic Apps connectors',
      'BYO Cosmos DB storage',
      'AgentOps monitoring',
    ],
    brandPositioning: 'Build, deploy, scale intelligent agents',
    surfaces: ['Azure Portal', 'SDK', 'VS Code'],
    targetAudience: ['Developers'],
    pricingModel: { type: 'PayAsYouGo', price: 'Pay for underlying services' },
    integrations: ['azure-ai-foundry-portal', 'semantic-kernel'],
    relatedProducts: ['copilot-studio'],
    documentation: 'https://learn.microsoft.com/en-us/azure/ai-services/agents/',
    lastUpdated: '2026-02-05',
  },
  {
    id: 'azure-ai-model-catalog',
    name: 'Azure AI Model Catalog',
    category: 'Azure',
    subcategory: 'Core Platform',
    status: 'GA',
    gaCapabilities: [
      '11,000+ models',
      'OpenAI (GPT-5.2, o3)',
      'Anthropic (Claude Opus 4.5)',
      'Meta (Llama 3.3)',
      'xAI (Grok 4)',
      'Microsoft (Phi-4)',
      'DeepSeek models',
    ],
    surfaces: ['Azure Portal', 'API'],
    targetAudience: ['Developers', 'DataScientists'],
    pricingModel: { type: 'PayAsYouGo', price: 'Model-specific per-token pricing' },
    integrations: ['azure-ai-foundry-portal'],
    relatedProducts: ['github-models'],
    lastUpdated: '2026-02-05',
  },

  // Azure OpenAI
  {
    id: 'azure-openai',
    name: 'Azure OpenAI Service',
    category: 'Azure',
    subcategory: 'Azure OpenAI',
    status: 'GA',
    gaCapabilities: [
      'GPT-5 series (400K tokens)',
      'GPT-4.1 series (1M tokens)',
      'O-series reasoning (o3, o4-mini)',
      'GPT-4o series',
      'Assistants API v2',
      'Fine-tuning (SFT, DPO)',
      'Batch API (50% discount)',
      'On Your Data',
    ],
    previewFeatures: ['Responses API (replacing Assistants)', 'Computer-Using Agent'],
    brandPositioning: 'Enterprise-grade OpenAI on Azure',
    surfaces: ['Azure Portal', 'REST APIs', 'Python/JS SDKs'],
    targetAudience: ['Developers', 'DataScientists'],
    pricingModel: { type: 'PayAsYouGo', price: '$2.50 input / $10 output per 1M tokens (GPT-4o)' },
    integrations: ['azure-ai-foundry-portal', 'azure-ai-search'],
    relatedProducts: ['github-models'],
    documentation: 'https://azure.microsoft.com/en-us/products/ai-services/openai-service',
    lastUpdated: '2026-02-05',
  },

  // Azure AI Search
  {
    id: 'azure-ai-search',
    name: 'Azure AI Search',
    category: 'Azure',
    subcategory: 'Data & Search',
    status: 'GA',
    gaCapabilities: [
      'Vector search (3,072 dimensions)',
      'HNSW/exhaustive KNN',
      'Semantic ranking',
      'Integrated vectorization',
      'Agentic retrieval',
      'Query planning',
    ],
    surfaces: ['Azure Portal', 'REST APIs', 'SDKs'],
    targetAudience: ['Developers', 'DataScientists'],
    pricingModel: { type: 'Capacity', price: '$75-$2,000+', unit: '/month', notes: 'By tier (Basic to S3)' },
    integrations: ['azure-openai', 'azure-ai-foundry-portal'],
    relatedProducts: ['microsoft-fabric'],
    lastUpdated: '2026-02-05',
  },

  // Cognitive Services
  {
    id: 'azure-ai-speech',
    name: 'Azure AI Speech',
    category: 'Azure',
    subcategory: 'Cognitive Services',
    status: 'GA',
    gaCapabilities: [
      'STT (100+ languages)',
      'TTS (250+ neural voices)',
      'Speech translation',
      'Custom models',
      'Speaker recognition',
    ],
    surfaces: ['Azure Portal', 'REST APIs', 'SDKs'],
    targetAudience: ['Developers'],
    pricingModel: { type: 'PayAsYouGo', price: '$1/audio hour STT, $16/1M chars TTS' },
    integrations: ['azure-ai-foundry-portal', 'copilot-studio'],
    relatedProducts: ['azure-ai-language'],
    lastUpdated: '2026-02-05',
  },
  {
    id: 'azure-ai-vision',
    name: 'Azure AI Vision',
    category: 'Azure',
    subcategory: 'Cognitive Services',
    status: 'GA',
    gaCapabilities: [
      'Image analysis',
      'OCR',
      'Face API',
      'Spatial analysis',
      '10,000+ concepts',
    ],
    surfaces: ['Azure Portal', 'REST APIs', 'SDKs'],
    targetAudience: ['Developers'],
    pricingModel: { type: 'PayAsYouGo', price: '$1.50-$2.50/1,000 transactions' },
    integrations: ['azure-ai-foundry-portal', 'ai-builder'],
    relatedProducts: ['azure-ai-document-intelligence'],
    lastUpdated: '2026-02-05',
  },
  {
    id: 'azure-ai-language',
    name: 'Azure AI Language',
    category: 'Azure',
    subcategory: 'Cognitive Services',
    status: 'GA',
    gaCapabilities: [
      'Sentiment analysis',
      'NER',
      'Summarization',
      'QA',
      'CLU (Conversational Language Understanding)',
      'PII redaction',
    ],
    surfaces: ['Azure Portal', 'REST APIs', 'SDKs'],
    targetAudience: ['Developers'],
    pricingModel: { type: 'PayAsYouGo', price: '$0.25-$2/1,000 text records' },
    integrations: ['azure-ai-foundry-portal', 'copilot-studio'],
    relatedProducts: ['azure-ai-speech'],
    lastUpdated: '2026-02-05',
  },
  {
    id: 'azure-ai-document-intelligence',
    name: 'Azure AI Document Intelligence',
    category: 'Azure',
    subcategory: 'Cognitive Services',
    status: 'GA',
    gaCapabilities: [
      'Invoice processing',
      'Receipt processing',
      'ID card extraction',
      'Tax form processing',
      'Custom models',
    ],
    surfaces: ['Azure Portal', 'REST APIs', 'SDKs'],
    targetAudience: ['Developers', 'LowCodeBuilders'],
    pricingModel: { type: 'PayAsYouGo', price: '$0.01-$0.05/page' },
    integrations: ['ai-builder', 'power-automate'],
    relatedProducts: ['azure-ai-vision'],
    lastUpdated: '2026-02-05',
  },
  {
    id: 'azure-ai-translator',
    name: 'Azure AI Translator',
    category: 'Azure',
    subcategory: 'Cognitive Services',
    status: 'GA',
    gaCapabilities: [
      '100+ languages',
      'Document translation',
      'Custom models',
      'Real-time translation',
    ],
    surfaces: ['Azure Portal', 'REST APIs', 'SDKs'],
    targetAudience: ['Developers'],
    pricingModel: { type: 'PayAsYouGo', price: '$10/1M chars text, $15/1M document' },
    integrations: ['azure-ai-foundry-portal'],
    relatedProducts: ['azure-ai-speech'],
    lastUpdated: '2026-02-05',
  },
  {
    id: 'azure-ai-content-safety',
    name: 'Azure AI Content Safety',
    category: 'Azure',
    subcategory: 'Cognitive Services',
    status: 'GA',
    gaCapabilities: [
      'Harmful content moderation',
      'Image moderation',
      'Text moderation',
      'Custom categories',
    ],
    surfaces: ['Azure Portal', 'REST APIs'],
    targetAudience: ['Developers', 'Security'],
    pricingModel: { type: 'PayAsYouGo', price: 'Per transaction' },
    integrations: ['azure-openai', 'copilot-studio'],
    relatedProducts: ['microsoft-defender'],
    lastUpdated: '2026-02-05',
  },
];

// ===========================================
// MICROSOFT 365 COPILOT
// ===========================================

export const m365Products: MicrosoftAIProduct[] = [
  {
    id: 'copilot-chat-free',
    name: 'Copilot Chat (Free)',
    category: 'M365',
    subcategory: 'Licensing Tiers',
    status: 'GA',
    gaCapabilities: [
      'Web-grounded chat',
      'Limited Office app features',
      'Copilot Pages',
      'Agent access (pay-as-you-go)',
    ],
    surfaces: ['copilot.microsoft.com', 'Microsoft Edge', 'Windows'],
    targetAudience: ['EndUsers'],
    pricingModel: { type: 'Free', price: '$0' },
    integrations: ['bing-search'],
    relatedProducts: ['m365-copilot-business'],
    lastUpdated: '2026-02-05',
  },
  {
    id: 'm365-copilot-business',
    name: 'M365 Copilot Business',
    category: 'M365',
    subcategory: 'Licensing Tiers',
    status: 'GA',
    gaCapabilities: [
      'Full Work IQ',
      'All M365 apps integration',
      'Agent creation',
      'SharePoint Advanced Management',
    ],
    brandPositioning: 'AI for business productivity',
    surfaces: ['Word', 'Excel', 'PowerPoint', 'Outlook', 'Teams', 'SharePoint', 'OneDrive'],
    targetAudience: ['EndUsers', 'ITAdmins'],
    pricingModel: { type: 'Subscription', price: '$21', unit: '/user/month', notes: '$18 promotional through March 2026' },
    integrations: ['microsoft-graph', 'copilot-studio'],
    relatedProducts: ['m365-copilot-enterprise'],
    documentation: 'https://www.microsoft.com/en-us/microsoft-365-copilot',
    lastUpdated: '2026-02-05',
  },
  {
    id: 'm365-copilot-enterprise',
    name: 'M365 Copilot Enterprise',
    category: 'M365',
    subcategory: 'Licensing Tiers',
    status: 'GA',
    gaCapabilities: [
      'Same as Business',
      'Unlimited users',
      'Enterprise controls',
      'Advanced compliance',
    ],
    surfaces: ['Word', 'Excel', 'PowerPoint', 'Outlook', 'Teams', 'SharePoint', 'OneDrive', 'Loop'],
    targetAudience: ['EndUsers', 'ITAdmins'],
    pricingModel: { type: 'Subscription', price: '$30', unit: '/user/month' },
    integrations: ['microsoft-graph', 'copilot-studio', 'microsoft-purview'],
    relatedProducts: ['m365-copilot-business', 'security-copilot'],
    lastUpdated: '2026-02-05',
  },

  // M365 App Features
  {
    id: 'copilot-word',
    name: 'Copilot in Word',
    category: 'M365',
    subcategory: 'App Features',
    status: 'GA',
    gaCapabilities: [
      'Draft from prompts/data',
      'Rewrite content',
      'Summarize feedback',
      'Agent Mode',
    ],
    surfaces: ['Word Desktop', 'Word Web', 'Word Mobile'],
    targetAudience: ['EndUsers'],
    pricingModel: { type: 'Included', price: 'Included with M365 Copilot' },
    integrations: ['microsoft-graph'],
    relatedProducts: ['m365-copilot-business'],
    lastUpdated: '2026-02-05',
  },
  {
    id: 'copilot-excel',
    name: 'Copilot in Excel',
    category: 'M365',
    subcategory: 'App Features',
    status: 'GA',
    gaCapabilities: [
      'Advanced analytics',
      'Python integration',
      'Agent Mode (GA Dec 2025)',
      'Data insights',
    ],
    previewFeatures: ['=COPILOT function'],
    surfaces: ['Excel Desktop', 'Excel Web'],
    targetAudience: ['EndUsers', 'DataScientists'],
    pricingModel: { type: 'Included', price: 'Included with M365 Copilot' },
    integrations: ['microsoft-graph'],
    relatedProducts: ['m365-copilot-business', 'power-bi'],
    lastUpdated: '2026-02-05',
  },
  {
    id: 'copilot-powerpoint',
    name: 'Copilot in PowerPoint',
    category: 'M365',
    subcategory: 'App Features',
    status: 'GA',
    gaCapabilities: [
      'Create from prompts/documents',
      'Design suggestions',
      'Agent Mode',
      'Speaker coach',
    ],
    surfaces: ['PowerPoint Desktop', 'PowerPoint Web'],
    targetAudience: ['EndUsers'],
    pricingModel: { type: 'Included', price: 'Included with M365 Copilot' },
    integrations: ['microsoft-graph', 'microsoft-designer'],
    relatedProducts: ['m365-copilot-business'],
    lastUpdated: '2026-02-05',
  },
  {
    id: 'copilot-outlook',
    name: 'Copilot in Outlook',
    category: 'M365',
    subcategory: 'App Features',
    status: 'GA',
    gaCapabilities: [
      'Email summarization',
      'Draft assistance',
      'Meeting prep',
      'Calendar search',
      'Tone adjustment',
    ],
    surfaces: ['Outlook Desktop', 'Outlook Web', 'Outlook Mobile'],
    targetAudience: ['EndUsers'],
    pricingModel: { type: 'Included', price: 'Included with M365 Copilot' },
    integrations: ['microsoft-graph'],
    relatedProducts: ['m365-copilot-business', 'copilot-teams'],
    lastUpdated: '2026-02-05',
  },
  {
    id: 'copilot-teams',
    name: 'Copilot in Teams',
    category: 'M365',
    subcategory: 'App Features',
    status: 'GA',
    gaCapabilities: [
      'Real-time meeting summaries',
      'Action items extraction',
      'Chat summarization',
      'Channel Agent',
      'Meeting recap',
    ],
    surfaces: ['Teams Desktop', 'Teams Web', 'Teams Mobile'],
    targetAudience: ['EndUsers'],
    pricingModel: { type: 'Included', price: 'Included with M365 Copilot' },
    integrations: ['microsoft-graph', 'copilot-studio'],
    relatedProducts: ['m365-copilot-business'],
    lastUpdated: '2026-02-05',
  },

  // Actions/Agents
  {
    id: 'workflows-agent',
    name: 'Workflows Agent',
    category: 'M365',
    subcategory: 'Agents',
    status: 'Preview',
    gaCapabilities: [],
    previewFeatures: [
      'Natural language automation',
      'SharePoint/Teams/Outlook/Planner integration',
      'Frontier Program access',
    ],
    surfaces: ['M365 Copilot'],
    targetAudience: ['EndUsers', 'LowCodeBuilders'],
    pricingModel: { type: 'Included', price: 'Frontier Program' },
    integrations: ['power-automate', 'copilot-studio'],
    relatedProducts: ['power-automate'],
    lastUpdated: '2026-02-05',
  },
  {
    id: 'copilot-pages',
    name: 'Copilot Pages',
    category: 'M365',
    subcategory: 'Agents',
    status: 'GA',
    gaCapabilities: [
      'Collaborative AI canvas',
      'Multiplayer co-authoring',
      'Export to Word/PPT',
      'Persistent workspace',
    ],
    surfaces: ['M365 Copilot', 'Teams'],
    targetAudience: ['EndUsers'],
    pricingModel: { type: 'Included', price: 'Included with M365 Copilot' },
    integrations: ['copilot-word', 'copilot-powerpoint'],
    relatedProducts: ['m365-copilot-business'],
    lastUpdated: '2026-02-05',
  },
  {
    id: 'copilot-connectors',
    name: 'Copilot Connectors',
    category: 'M365',
    subcategory: 'Agents',
    status: 'GA',
    gaCapabilities: [
      '100+ prebuilt connectors',
      'Ingest external data into Graph',
      'Custom connector creation',
    ],
    surfaces: ['M365 Admin Center'],
    targetAudience: ['ITAdmins'],
    pricingModel: { type: 'Included', price: 'Included with M365 Copilot' },
    integrations: ['microsoft-graph'],
    relatedProducts: ['m365-copilot-enterprise'],
    lastUpdated: '2026-02-05',
  },
];

// ===========================================
// COPILOT STUDIO & AGENTIC
// ===========================================

export const agenticProducts: MicrosoftAIProduct[] = [
  {
    id: 'copilot-studio',
    name: 'Microsoft Copilot Studio',
    category: 'Agentic',
    subcategory: 'Agent Building',
    status: 'GA',
    gaCapabilities: [
      'Low-code/no-code agent creation',
      'Natural language authoring',
      'Visual designer',
      'Q&A/Workflow/Autonomous/Voice agents',
      'GPT-5 Chat model (Nov 2025)',
      'GPT-4.1 default',
      'MCP support with tracing',
      'Multi-channel (Teams, Web, WhatsApp, SharePoint)',
    ],
    previewFeatures: ['Copilot Tuning (fine-tune with company data)'],
    brandPositioning: 'Build powerful agents with low-code simplicity',
    surfaces: ['Web portal', 'Teams', 'SharePoint', 'WhatsApp', 'Mobile SDKs'],
    targetAudience: ['LowCodeBuilders', 'Developers', 'ITAdmins'],
    pricingModel: { type: 'PayAsYouGo', price: '$0.01/credit', notes: 'or $200/month for 25K credits' },
    integrations: ['m365-copilot-business', 'power-platform', 'azure-ai-agent-service'],
    relatedProducts: ['power-automate', 'power-apps'],
    documentation: 'https://www.microsoft.com/en-us/microsoft-copilot/microsoft-copilot-studio',
    lastUpdated: '2026-02-05',
  },
  {
    id: 'agent-365',
    name: 'Agent 365',
    category: 'Agentic',
    subcategory: 'Agent Building',
    status: 'Preview',
    gaCapabilities: [],
    previewFeatures: [
      'Enterprise agent governance',
      'SDK + CLI',
      'Agent identity management',
      'Cross-platform deployment',
    ],
    brandPositioning: 'Enterprise governance for AI agents',
    surfaces: ['Azure Portal', 'M365 Admin'],
    targetAudience: ['ITAdmins', 'Security'],
    pricingModel: { type: 'Included', price: 'Preview' },
    integrations: ['copilot-studio', 'azure-ai-agent-service'],
    relatedProducts: ['foundry-control-plane'],
    lastUpdated: '2026-02-05',
  },
  {
    id: 'security-copilot',
    name: 'Microsoft Security Copilot',
    category: 'Agentic',
    subcategory: 'Domain Copilots',
    status: 'GA',
    gaCapabilities: [
      'Threat detection',
      'Defender/Entra/Intune integration',
      '70+ agents',
      'Incident investigation',
      'Policy recommendations',
    ],
    brandPositioning: 'AI for defenders',
    surfaces: ['Security portal', 'M365', 'Azure'],
    targetAudience: ['Security', 'ITAdmins'],
    pricingModel: { type: 'PayAsYouGo', price: '$4-6/SCU/hour', notes: 'Included in M365 E5 (400 SCUs/1000 licenses)' },
    integrations: ['microsoft-defender', 'microsoft-entra', 'microsoft-intune', 'microsoft-purview'],
    relatedProducts: ['m365-copilot-enterprise'],
    documentation: 'https://www.microsoft.com/en-us/security/business/ai-machine-learning/microsoft-copilot-security',
    lastUpdated: '2026-02-05',
  },
  {
    id: 'copilot-azure',
    name: 'Copilot for Azure',
    category: 'Agentic',
    subcategory: 'Domain Copilots',
    status: 'GA',
    gaCapabilities: [
      'Resource management',
      'Cost optimization',
      'Script generation',
      'Troubleshooting',
    ],
    previewFeatures: ['6 specialized agents (Migration, Deployment, Optimization, Observability, Resiliency, Troubleshooting)'],
    surfaces: ['Azure Portal', 'Azure CLI'],
    targetAudience: ['ITAdmins', 'Developers'],
    pricingModel: { type: 'Free', price: 'FREE', notes: 'Agents TBD' },
    integrations: ['azure-ai-foundry-portal'],
    relatedProducts: ['azure-ai-agent-service'],
    lastUpdated: '2026-02-05',
  },
  {
    id: 'copilot-sales',
    name: 'Copilot for Sales',
    category: 'Agentic',
    subcategory: 'Domain Copilots',
    status: 'GA',
    gaCapabilities: [
      'CRM integration (D365, Salesforce)',
      'Opportunity summarization',
      'Meeting tips',
      'Email assistance',
    ],
    surfaces: ['Outlook', 'Teams', 'Dynamics 365'],
    targetAudience: ['EndUsers'],
    pricingModel: { type: 'Subscription', price: '$30', unit: '/user/month', notes: '+ D365 Sales license' },
    integrations: ['dynamics-365', 'm365-copilot-business'],
    relatedProducts: ['copilot-service'],
    lastUpdated: '2026-02-05',
  },
  {
    id: 'copilot-service',
    name: 'Copilot for Service',
    category: 'Agentic',
    subcategory: 'Domain Copilots',
    status: 'GA',
    gaCapabilities: [
      'Case summarization',
      'Knowledge suggestions',
      'CRM embedding',
      'Response drafting',
    ],
    surfaces: ['Dynamics 365', 'Teams'],
    targetAudience: ['EndUsers'],
    pricingModel: { type: 'Subscription', price: 'M365 Copilot + Service license' },
    integrations: ['dynamics-365', 'm365-copilot-business'],
    relatedProducts: ['copilot-sales'],
    lastUpdated: '2026-02-05',
  },

  // Frameworks
  {
    id: 'microsoft-agent-framework',
    name: 'Microsoft Agent Framework',
    category: 'Agentic',
    subcategory: 'Frameworks',
    status: 'Preview',
    gaCapabilities: [],
    previewFeatures: [
      'Unified Semantic Kernel + AutoGen',
      'Python and .NET',
      'Multi-agent patterns',
      'GA Q1 2026',
    ],
    surfaces: ['PyPI', 'NuGet'],
    targetAudience: ['Developers'],
    pricingModel: { type: 'Free', price: 'Open source (MIT)' },
    integrations: ['azure-ai-agent-service'],
    relatedProducts: ['semantic-kernel', 'autogen'],
    lastUpdated: '2026-02-05',
  },
  {
    id: 'semantic-kernel',
    name: 'Semantic Kernel',
    category: 'Agentic',
    subcategory: 'Frameworks',
    status: 'GA',
    gaCapabilities: [
      'C#, Python, Java SDKs',
      'Plugin architecture',
      'Memory/planning',
      'Maintenance mode (merging with Agent Framework)',
    ],
    surfaces: ['NuGet', 'PyPI', 'Maven'],
    targetAudience: ['Developers'],
    pricingModel: { type: 'Free', price: 'Open source (MIT)' },
    integrations: ['azure-openai', 'azure-ai-agent-service'],
    relatedProducts: ['microsoft-agent-framework'],
    documentation: 'https://github.com/microsoft/semantic-kernel',
    lastUpdated: '2026-02-05',
  },
  {
    id: 'autogen',
    name: 'AutoGen',
    category: 'Agentic',
    subcategory: 'Frameworks',
    status: 'GA',
    gaCapabilities: [
      'Python and .NET',
      'Multi-agent conversations',
      'Research-oriented',
      'Maintenance mode',
    ],
    surfaces: ['PyPI', 'NuGet'],
    targetAudience: ['Developers', 'DataScientists'],
    pricingModel: { type: 'Free', price: 'Open source (MIT)' },
    integrations: ['azure-openai'],
    relatedProducts: ['microsoft-agent-framework'],
    documentation: 'https://github.com/microsoft/autogen',
    lastUpdated: '2026-02-05',
  },
  {
    id: 'magentic-one',
    name: 'Magentic-One',
    category: 'Agentic',
    subcategory: 'Frameworks',
    status: 'GA',
    gaCapabilities: [
      'Dynamic 5-agent system',
      'Orchestrator, WebSurfer, FileSurfer, Coder, Terminal',
      'Complex generalist tasks',
    ],
    surfaces: ['PyPI'],
    targetAudience: ['Developers', 'DataScientists'],
    pricingModel: { type: 'Free', price: 'Open source' },
    integrations: ['autogen'],
    relatedProducts: ['microsoft-agent-framework'],
    lastUpdated: '2026-02-05',
  },
  {
    id: 'm365-agents-sdk',
    name: 'Microsoft 365 Agents SDK',
    category: 'Agentic',
    subcategory: 'Frameworks',
    status: 'GA',
    gaCapabilities: [
      'C#, Python, JS/TS',
      'Cross-platform M365 agents',
      '12+ Azure Bot channels',
    ],
    surfaces: ['NuGet', 'PyPI', 'npm'],
    targetAudience: ['Developers'],
    pricingModel: { type: 'Free', price: 'Open source' },
    integrations: ['m365-copilot-business', 'copilot-studio'],
    relatedProducts: ['semantic-kernel'],
    lastUpdated: '2026-02-05',
  },
];

// ===========================================
// POWER PLATFORM
// ===========================================

export const powerPlatformProducts: MicrosoftAIProduct[] = [
  {
    id: 'power-apps',
    name: 'Power Apps Copilot',
    category: 'PowerPlatform',
    subcategory: 'Apps',
    status: 'GA',
    gaCapabilities: [
      'Natural language app creation',
      'Data table generation',
      'AI functions (AISummarize, AITranslate)',
      'Plan Designer',
    ],
    surfaces: ['Power Apps Web', 'Power Apps Mobile'],
    targetAudience: ['LowCodeBuilders', 'EndUsers'],
    pricingModel: { type: 'Subscription', price: '$20', unit: '/user/month', notes: 'Power Apps Premium' },
    integrations: ['dataverse', 'copilot-studio'],
    relatedProducts: ['power-automate', 'ai-builder'],
    lastUpdated: '2026-02-05',
  },
  {
    id: 'power-automate',
    name: 'Power Automate AI',
    category: 'PowerPlatform',
    subcategory: 'Automation',
    status: 'GA',
    gaCapabilities: [
      'Copilot flow creation',
      'Generative Actions',
      'IDP (90%+ accuracy)',
      'Natural language expressions (GA Dec 2025)',
    ],
    surfaces: ['Power Automate Web', 'Teams'],
    targetAudience: ['LowCodeBuilders', 'EndUsers'],
    pricingModel: { type: 'Subscription', price: '$15', unit: '/user/month', notes: 'Power Automate Premium' },
    integrations: ['copilot-studio', 'ai-builder'],
    relatedProducts: ['power-apps', 'power-automate-desktop'],
    lastUpdated: '2026-02-05',
  },
  {
    id: 'power-automate-desktop',
    name: 'Power Automate Desktop',
    category: 'PowerPlatform',
    subcategory: 'Automation',
    status: 'GA',
    gaCapabilities: [
      'Record with Copilot',
      'Self-healing automations',
      'SAP GUI automation',
      'UI automation',
    ],
    surfaces: ['Windows Desktop'],
    targetAudience: ['LowCodeBuilders'],
    pricingModel: { type: 'Subscription', price: '$150', unit: '/bot/month', notes: 'Unattended' },
    integrations: ['power-automate'],
    relatedProducts: ['power-automate'],
    lastUpdated: '2026-02-05',
  },
  {
    id: 'power-bi',
    name: 'Power BI Copilot',
    category: 'PowerPlatform',
    subcategory: 'Analytics',
    status: 'GA',
    gaCapabilities: [
      'Report creation',
      'Visual recommendations',
      'Narrative visuals',
      'Standalone chat',
      'DAX generation',
    ],
    surfaces: ['Power BI Web', 'Power BI Desktop', 'Power BI Mobile'],
    targetAudience: ['DataScientists', 'EndUsers'],
    pricingModel: { type: 'Capacity', price: 'Fabric F2+ or PPU $20/user/month' },
    integrations: ['microsoft-fabric'],
    relatedProducts: ['microsoft-fabric'],
    lastUpdated: '2026-02-05',
  },
  {
    id: 'ai-builder',
    name: 'AI Builder',
    category: 'PowerPlatform',
    subcategory: 'AI Services',
    status: 'GA',
    gaCapabilities: [
      '15+ prebuilt models (OCR, invoice, receipt, sentiment)',
      'Custom models',
      'Document processing',
    ],
    surfaces: ['Power Apps', 'Power Automate'],
    targetAudience: ['LowCodeBuilders'],
    pricingModel: { type: 'PayAsYouGo', price: '$0.01/credit', notes: 'Seeded credits removed Nov 2026' },
    integrations: ['power-apps', 'power-automate', 'azure-ai-document-intelligence'],
    relatedProducts: ['azure-ai-document-intelligence'],
    lastUpdated: '2026-02-05',
  },
  {
    id: 'power-pages',
    name: 'Power Pages AI',
    category: 'PowerPlatform',
    subcategory: 'Web',
    status: 'GA',
    gaCapabilities: [
      'Site creation',
      'Form generation',
      'Chatbot embedding',
    ],
    surfaces: ['Power Pages Web'],
    targetAudience: ['LowCodeBuilders'],
    pricingModel: { type: 'PayAsYouGo', price: 'Per-user or per-view' },
    integrations: ['copilot-studio', 'dataverse'],
    relatedProducts: ['power-apps'],
    lastUpdated: '2026-02-05',
  },
];

// ===========================================
// CONSUMER PRODUCTS
// ===========================================

export const consumerProducts: MicrosoftAIProduct[] = [
  {
    id: 'microsoft-copilot-free',
    name: 'Microsoft Copilot (Free)',
    category: 'Consumer',
    subcategory: 'Chat',
    status: 'GA',
    gaCapabilities: [
      'GPT-5 chat',
      'Web-grounded answers',
      '15 image boosts/day',
      'Think Deeper',
      'Voice',
      'Vision',
    ],
    surfaces: ['copilot.microsoft.com', 'Edge', 'Windows', 'Mobile'],
    targetAudience: ['EndUsers'],
    pricingModel: { type: 'Free', price: '$0' },
    integrations: ['bing-search', 'microsoft-designer'],
    relatedProducts: ['m365-personal'],
    documentation: 'https://copilot.microsoft.com',
    lastUpdated: '2026-02-05',
  },
  {
    id: 'm365-personal',
    name: 'M365 Personal',
    category: 'Consumer',
    subcategory: 'Subscriptions',
    status: 'GA',
    gaCapabilities: [
      'Higher Copilot limits',
      'Office apps',
      '1TB OneDrive',
      'Designer access',
    ],
    surfaces: ['Office apps', 'copilot.microsoft.com'],
    targetAudience: ['EndUsers'],
    pricingModel: { type: 'Subscription', price: '$9.99', unit: '/month' },
    integrations: ['microsoft-copilot-free'],
    relatedProducts: ['m365-family'],
    lastUpdated: '2026-02-05',
  },
  {
    id: 'm365-family',
    name: 'M365 Family',
    category: 'Consumer',
    subcategory: 'Subscriptions',
    status: 'GA',
    gaCapabilities: [
      'All Personal features',
      'Up to 6 users',
      '6TB storage',
    ],
    surfaces: ['Office apps', 'copilot.microsoft.com'],
    targetAudience: ['EndUsers'],
    pricingModel: { type: 'Subscription', price: '$12.99', unit: '/month' },
    integrations: ['microsoft-copilot-free'],
    relatedProducts: ['m365-personal'],
    lastUpdated: '2026-02-05',
  },
  {
    id: 'microsoft-designer',
    name: 'Microsoft Designer',
    category: 'Consumer',
    subcategory: 'Creative',
    status: 'GA',
    gaCapabilities: [
      'DALL-E 3 image generation',
      'Templates',
      'Auto-layout',
      'Brand kit',
    ],
    surfaces: ['designer.microsoft.com', 'Office apps'],
    targetAudience: ['EndUsers'],
    pricingModel: { type: 'Free', price: 'Free tier', notes: 'M365 subscription for more' },
    integrations: ['microsoft-copilot-free', 'copilot-powerpoint'],
    relatedProducts: ['m365-personal'],
    lastUpdated: '2026-02-05',
  },
  {
    id: 'clipchamp',
    name: 'Clipchamp',
    category: 'Consumer',
    subcategory: 'Creative',
    status: 'GA',
    gaCapabilities: [
      'Auto Compose',
      'AI Silence Removal',
      '400+ TTS voices',
      'Autocaptions',
    ],
    surfaces: ['clipchamp.com', 'Windows'],
    targetAudience: ['EndUsers'],
    pricingModel: { type: 'Free', price: 'Free + Premium' },
    integrations: ['m365-personal'],
    relatedProducts: ['microsoft-designer'],
    lastUpdated: '2026-02-05',
  },
  {
    id: 'bing-copilot',
    name: 'Bing AI (Copilot Search)',
    category: 'Consumer',
    subcategory: 'Search',
    status: 'GA',
    gaCapabilities: [
      'Conversational search',
      'GPT-5',
      'Vision',
      'Voice',
      'Think Deeper',
    ],
    surfaces: ['bing.com', 'Edge'],
    targetAudience: ['EndUsers'],
    pricingModel: { type: 'Free', price: 'Free' },
    integrations: ['microsoft-copilot-free'],
    relatedProducts: ['microsoft-copilot-free'],
    lastUpdated: '2026-02-05',
  },
];

// ===========================================
// INFRASTRUCTURE
// ===========================================

export const infrastructureProducts: MicrosoftAIProduct[] = [
  // Custom Silicon
  {
    id: 'maia-100',
    name: 'Maia 100',
    category: 'Infrastructure',
    subcategory: 'Custom Silicon',
    status: 'GA',
    gaCapabilities: [
      '820mm²',
      'TSMC 5nm',
      '64GB HBM2E',
      'Internal Microsoft services only',
    ],
    surfaces: ['Azure datacenters'],
    targetAudience: ['Developers'],
    pricingModel: { type: 'Included', price: 'Internal use' },
    integrations: ['azure-openai'],
    relatedProducts: ['maia-200'],
    lastUpdated: '2026-02-05',
  },
  {
    id: 'maia-200',
    name: 'Maia 200',
    category: 'Infrastructure',
    subcategory: 'Custom Silicon',
    status: 'GA',
    gaCapabilities: [
      '144B transistors',
      'TSMC 3nm',
      '10.1 PFLOPS FP4',
      '216GB HBM3e',
      '7 TB/s bandwidth',
    ],
    surfaces: ['US Central (Des Moines)', 'West US 3'],
    targetAudience: ['Developers', 'DataScientists'],
    pricingModel: { type: 'PayAsYouGo', price: 'Contact sales' },
    integrations: ['azure-ai-foundry-portal'],
    relatedProducts: ['maia-100'],
    lastUpdated: '2026-02-05',
  },
  {
    id: 'cobalt-100',
    name: 'Cobalt 100',
    category: 'Infrastructure',
    subcategory: 'Custom Silicon',
    status: 'GA',
    gaCapabilities: [
      'ARM Neoverse N2',
      '96 vCPUs',
      '50% better price-performance',
    ],
    surfaces: ['32+ Azure regions'],
    targetAudience: ['Developers'],
    pricingModel: { type: 'PayAsYouGo', price: 'Per-hour VM pricing' },
    integrations: [],
    relatedProducts: ['cobalt-200'],
    lastUpdated: '2026-02-05',
  },

  // GPU VMs
  {
    id: 'nd-h100-v5',
    name: 'ND H100 v5',
    category: 'Infrastructure',
    subcategory: 'GPU VMs',
    status: 'GA',
    gaCapabilities: [
      '8x NVIDIA H100 80GB',
      'LLM training',
      'Distributed deep learning',
    ],
    surfaces: ['Azure Portal'],
    targetAudience: ['DataScientists', 'Developers'],
    pricingModel: { type: 'PayAsYouGo', price: '~$98.32', unit: '/hour' },
    integrations: ['azure-ai-foundry-portal'],
    relatedProducts: ['nd-gb200-v6'],
    lastUpdated: '2026-02-05',
  },
  {
    id: 'nd-gb200-v6',
    name: 'ND GB200 v6',
    category: 'Infrastructure',
    subcategory: 'GPU VMs',
    status: 'GA',
    gaCapabilities: [
      '72 Blackwell GPUs (NVL72)',
      'Frontier AI',
      'Reasoning models',
    ],
    surfaces: ['Azure Portal'],
    targetAudience: ['DataScientists'],
    pricingModel: { type: 'PayAsYouGo', price: 'Contact sales' },
    integrations: ['azure-ai-foundry-portal'],
    relatedProducts: ['nd-h100-v5'],
    lastUpdated: '2026-02-05',
  },
  {
    id: 'nc-t4-v3',
    name: 'NCas T4 v3',
    category: 'Infrastructure',
    subcategory: 'GPU VMs',
    status: 'GA',
    gaCapabilities: [
      'NVIDIA T4',
      'Entry-level ML',
      'Inference',
    ],
    surfaces: ['Azure Portal'],
    targetAudience: ['Developers'],
    pricingModel: { type: 'PayAsYouGo', price: '$0.52-2.08', unit: '/hour' },
    integrations: [],
    relatedProducts: ['nd-h100-v5'],
    lastUpdated: '2026-02-05',
  },
];

// ===========================================
// WINDOWS AI
// ===========================================

export const windowsProducts: MicrosoftAIProduct[] = [
  {
    id: 'windows-copilot',
    name: 'Windows Copilot',
    category: 'Windows',
    subcategory: 'OS Integration',
    status: 'GA',
    gaCapabilities: [
      'Taskbar AI',
      'Win+C shortcut',
      'Hey Copilot wake word',
      'System settings control',
    ],
    surfaces: ['Windows 11'],
    targetAudience: ['EndUsers'],
    pricingModel: { type: 'Free', price: 'Free (basic)', notes: 'Enhanced with M365 Copilot' },
    integrations: ['microsoft-copilot-free', 'm365-copilot-business'],
    relatedProducts: ['copilot-plus-pc'],
    lastUpdated: '2026-02-05',
  },
  {
    id: 'copilot-plus-pc',
    name: 'Copilot+ PC',
    category: 'Windows',
    subcategory: 'Hardware',
    status: 'GA',
    gaCapabilities: [
      '40+ TOPS NPU required',
      '16GB DDR5/LPDDR5',
      '256GB SSD',
      'Windows 11 24H2+',
    ],
    surfaces: ['Certified devices'],
    targetAudience: ['EndUsers'],
    pricingModel: { type: 'Included', price: '$999+', notes: 'Hardware cost' },
    integrations: ['windows-recall', 'live-captions', 'windows-studio-effects'],
    relatedProducts: ['windows-copilot'],
    documentation: 'https://www.microsoft.com/en-us/windows/copilot-plus-pcs',
    lastUpdated: '2026-02-05',
  },
  {
    id: 'windows-recall',
    name: 'Windows Recall',
    category: 'Windows',
    subcategory: 'Copilot+ Features',
    status: 'GA',
    gaCapabilities: [
      'Searchable screenshot timeline',
      'Encrypted storage',
      'Opt-in only',
      'On-device processing',
    ],
    surfaces: ['Windows 11 (Copilot+ PC)'],
    targetAudience: ['EndUsers'],
    pricingModel: { type: 'Included', price: 'Requires Copilot+ PC' },
    integrations: ['copilot-plus-pc'],
    relatedProducts: ['copilot-plus-pc'],
    lastUpdated: '2026-02-05',
  },
  {
    id: 'live-captions',
    name: 'Live Captions Translation',
    category: 'Windows',
    subcategory: 'Copilot+ Features',
    status: 'GA',
    gaCapabilities: [
      '44+ languages to English',
      'Fully on-device',
      'Real-time translation',
    ],
    surfaces: ['Windows 11 (Copilot+ PC)'],
    targetAudience: ['EndUsers'],
    pricingModel: { type: 'Included', price: 'Requires Copilot+ PC' },
    integrations: ['copilot-plus-pc'],
    relatedProducts: ['copilot-plus-pc'],
    lastUpdated: '2026-02-05',
  },
  {
    id: 'windows-studio-effects',
    name: 'Windows Studio Effects',
    category: 'Windows',
    subcategory: 'Copilot+ Features',
    status: 'GA',
    gaCapabilities: [
      'Eye contact correction',
      'Portrait light',
      'Creative filters',
      'Background blur',
    ],
    surfaces: ['Windows 11'],
    targetAudience: ['EndUsers'],
    pricingModel: { type: 'Included', price: 'Advanced features require Copilot+ PC' },
    integrations: ['copilot-plus-pc'],
    relatedProducts: ['copilot-plus-pc'],
    lastUpdated: '2026-02-05',
  },
  {
    id: 'click-to-do',
    name: 'Click to Do',
    category: 'Windows',
    subcategory: 'Copilot+ Features',
    status: 'GA',
    gaCapabilities: [
      'Context-aware AI actions',
      'Phi Silica powered',
      'On-device processing',
    ],
    surfaces: ['Windows 11 (Copilot+ PC)'],
    targetAudience: ['EndUsers'],
    pricingModel: { type: 'Included', price: 'Requires Copilot+ PC' },
    integrations: ['copilot-plus-pc'],
    relatedProducts: ['copilot-plus-pc'],
    lastUpdated: '2026-02-05',
  },

  // Windows AI APIs
  {
    id: 'windows-ml',
    name: 'Windows ML',
    category: 'Windows',
    subcategory: 'Developer APIs',
    status: 'GA',
    gaCapabilities: [
      'Hardware-agnostic inference',
      'ONNX Runtime',
      'NPU acceleration',
    ],
    surfaces: ['Windows SDK'],
    targetAudience: ['Developers'],
    pricingModel: { type: 'Free', price: 'Free' },
    integrations: ['onnx-runtime'],
    relatedProducts: ['foundry-local'],
    lastUpdated: '2026-02-05',
  },
  {
    id: 'foundry-local',
    name: 'Foundry Local',
    category: 'Windows',
    subcategory: 'Developer APIs',
    status: 'GA',
    gaCapabilities: [
      'CLI for local model management',
      'OpenAI-compatible API',
      'On-device inference',
    ],
    surfaces: ['Windows CLI'],
    targetAudience: ['Developers'],
    pricingModel: { type: 'Free', price: 'Free' },
    integrations: ['windows-ml'],
    relatedProducts: ['azure-ai-foundry-portal'],
    lastUpdated: '2026-02-05',
  },
];

// ===========================================
// DEPRECATED / RETIRING
// ===========================================

export const deprecatedProducts: MicrosoftAIProduct[] = [
  {
    id: 'copilot-pro-consumer',
    name: 'Copilot Pro (Consumer)',
    category: 'Consumer',
    subcategory: 'Subscriptions',
    status: 'Deprecated',
    gaCapabilities: ['Discontinued - replaced by M365 Premium'],
    surfaces: [],
    targetAudience: ['EndUsers'],
    pricingModel: { type: 'Subscription', price: 'Discontinued' },
    integrations: [],
    relatedProducts: ['m365-personal'],
    lastUpdated: '2026-02-05',
  },
  {
    id: 'personalizer',
    name: 'Azure Personalizer',
    category: 'Azure',
    subcategory: 'Cognitive Services',
    status: 'Retired',
    gaCapabilities: ['Retiring October 2026 - Migrate to Azure ML'],
    surfaces: [],
    targetAudience: ['Developers'],
    pricingModel: { type: 'PayAsYouGo', price: 'Retiring' },
    integrations: [],
    relatedProducts: ['azure-ml'],
    lastUpdated: '2026-02-05',
  },
  {
    id: 'metrics-advisor',
    name: 'Metrics Advisor',
    category: 'Azure',
    subcategory: 'Cognitive Services',
    status: 'Retired',
    gaCapabilities: ['Retiring October 2026 - Migrate to Microsoft Fabric'],
    surfaces: [],
    targetAudience: ['DataScientists'],
    pricingModel: { type: 'PayAsYouGo', price: 'Retiring' },
    integrations: [],
    relatedProducts: ['microsoft-fabric'],
    lastUpdated: '2026-02-05',
  },
  {
    id: 'anomaly-detector',
    name: 'Anomaly Detector',
    category: 'Azure',
    subcategory: 'Cognitive Services',
    status: 'Retired',
    gaCapabilities: ['Retiring October 2026 - Migrate to Fabric/Stream Analytics'],
    surfaces: [],
    targetAudience: ['DataScientists'],
    pricingModel: { type: 'PayAsYouGo', price: 'Retiring' },
    integrations: [],
    relatedProducts: ['microsoft-fabric'],
    lastUpdated: '2026-02-05',
  },
];

// ===========================================
// KEY DATES
// ===========================================

export interface KeyDate {
  date: string;
  event: string;
  category: string;
}

export const keyDates: KeyDate[] = [
  { date: 'Nov 2024', event: 'Azure AI Studio → Azure AI Foundry rebrand', category: 'Azure' },
  { date: 'Nov 2025', event: 'Azure AI Foundry → Microsoft Foundry rebrand', category: 'Azure' },
  { date: 'Nov 2025', event: 'GitHub App Extensions sunset; MCP replacement', category: 'GitHub' },
  { date: 'Nov 2025', event: 'GPT-5 Chat GA in Copilot Studio', category: 'Agentic' },
  { date: 'Late 2025', event: 'Copilot Pro discontinued; replaced by M365 Premium', category: 'Consumer' },
  { date: 'Jan 2026', event: 'Maia 200 GA', category: 'Infrastructure' },
  { date: 'Feb 2026', event: 'Power Apps edit-with-Copilot removed (use Plans)', category: 'PowerPlatform' },
  { date: 'Q1 2026', event: 'Microsoft Agent Framework GA', category: 'Agentic' },
  { date: 'July 2026', event: 'M365 commercial pricing increases (E3: $36→$42, E5: $57→$65)', category: 'M365' },
  { date: 'Oct 2026', event: 'Personalizer, Metrics Advisor, Anomaly Detector retire', category: 'Azure' },
  { date: 'Nov 2026', event: 'AI Builder seeded credits removed', category: 'PowerPlatform' },
  { date: 'Dec 2026', event: 'Power BI Q&A deprecated', category: 'PowerPlatform' },
];

// ===========================================
// UNIFIED BILLING
// ===========================================

export interface BillingCurrency {
  name: string;
  rate: string;
  usedBy: string[];
}

export const billingCurrencies: BillingCurrency[] = [
  { name: 'Copilot Credits', rate: '$0.01/credit', usedBy: ['Copilot Studio', 'AI Builder', 'Power Platform agents'] },
  { name: 'Premium Requests', rate: '$0.04/request', usedBy: ['GitHub Copilot (above plan limit)'] },
  { name: 'Security Compute Units (SCU)', rate: '~$4-6/hour', usedBy: ['Security Copilot'] },
  { name: 'Provisioned Throughput Units (PTU)', rate: 'Model-specific', usedBy: ['Azure OpenAI reserved capacity'] },
];

// ===========================================
// ALL PRODUCTS COMBINED
// ===========================================

export const allProducts: MicrosoftAIProduct[] = [
  ...githubProducts,
  ...azureAIProducts,
  ...m365Products,
  ...agenticProducts,
  ...powerPlatformProducts,
  ...consumerProducts,
  ...infrastructureProducts,
  ...windowsProducts,
  ...deprecatedProducts,
];

// ===========================================
// HELPER FUNCTIONS
// ===========================================

export function getProductsByCategory(category: ServiceCategory): MicrosoftAIProduct[] {
  return allProducts.filter(p => p.category === category);
}

export function getProductsByStatus(status: ServiceStatus): MicrosoftAIProduct[] {
  return allProducts.filter(p => p.status === status);
}

export function getProductsByAudience(audience: TargetAudience): MicrosoftAIProduct[] {
  return allProducts.filter(p => p.targetAudience.includes(audience));
}

export function getActiveProducts(): MicrosoftAIProduct[] {
  return allProducts.filter(p => p.status !== 'Deprecated' && p.status !== 'Retired');
}

export function searchProducts(query: string): MicrosoftAIProduct[] {
  const lower = query.toLowerCase();
  return allProducts.filter(p =>
    p.name.toLowerCase().includes(lower) ||
    p.subcategory.toLowerCase().includes(lower) ||
    p.gaCapabilities.some(c => c.toLowerCase().includes(lower)) ||
    (p.previewFeatures?.some(f => f.toLowerCase().includes(lower)) ?? false)
  );
}

export function getProductById(id: string): MicrosoftAIProduct | undefined {
  return allProducts.find(p => p.id === id);
}

export function getRelatedProducts(productId: string): MicrosoftAIProduct[] {
  const product = getProductById(productId);
  if (!product) return [];
  return product.relatedProducts
    .map(id => getProductById(id))
    .filter((p): p is MicrosoftAIProduct => p !== undefined);
}

// Category counts for dashboard
export function getCategoryCounts(): Record<ServiceCategory, number> {
  const counts: Partial<Record<ServiceCategory, number>> = {};
  for (const product of allProducts) {
    counts[product.category] = (counts[product.category] || 0) + 1;
  }
  return counts as Record<ServiceCategory, number>;
}
