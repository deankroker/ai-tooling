// Journey wizard types and mappings

export type JobType =
  | 'build-agents'
  | 'integrate-ai'
  | 'extend-copilot'
  | 'automate-processes'
  | 'analyze-content'
  | 'conversational-ai'
  | 'intelligent-search'
  | 'accelerate-coding'
  | 'team-productivity'

export type ExperienceLevel = 'new' | 'some' | 'experienced'

export type ToolingType = 'code-sdk' | 'low-code' | 'azure' | 'github' | 'cli'

export interface JobDefinition {
  id: JobType
  icon: string
  label: string
  description: string
}

export interface ExperienceDefinition {
  id: ExperienceLevel
  label: string
  description: string
}

export interface ToolingDefinition {
  id: ToolingType
  icon: string
  label: string
}

export const jobDefinitions: JobDefinition[] = [
  {
    id: 'build-agents',
    icon: '🤖',
    label: 'Build autonomous agents',
    description: 'Agents that take actions',
  },
  {
    id: 'integrate-ai',
    icon: '🔌',
    label: 'Integrate AI into apps',
    description: 'Add AI to existing code',
  },
  {
    id: 'extend-copilot',
    icon: '🧩',
    label: 'Extend Copilot',
    description: 'Custom skills & extensions',
  },
  {
    id: 'automate-processes',
    icon: '⚡',
    label: 'Automate processes',
    description: 'AI-powered automation',
  },
  {
    id: 'analyze-content',
    icon: '📄',
    label: 'Analyze content',
    description: 'Documents, images, speech',
  },
  {
    id: 'conversational-ai',
    icon: '💬',
    label: 'Build conversational AI',
    description: 'Chatbots, voice, assistants',
  },
  {
    id: 'intelligent-search',
    icon: '🔍',
    label: 'Enable intelligent search',
    description: 'Semantic search, RAG',
  },
  {
    id: 'accelerate-coding',
    icon: '💻',
    label: 'Accelerate coding',
    description: 'Code completion, review',
  },
  {
    id: 'team-productivity',
    icon: '👥',
    label: 'Enhance team productivity',
    description: 'Collaboration tools',
  },
]

export const experienceDefinitions: ExperienceDefinition[] = [
  {
    id: 'new',
    label: 'New to AI development',
    description: 'Just getting started',
  },
  {
    id: 'some',
    label: 'Some experience with AI APIs',
    description: 'Used AI services before',
  },
  {
    id: 'experienced',
    label: 'Experienced',
    description: 'Built AI apps/agents before',
  },
]

export const toolingDefinitions: ToolingDefinition[] = [
  { id: 'code-sdk', icon: '📝', label: 'Code/SDKs' },
  { id: 'low-code', icon: '🧱', label: 'Low-code' },
  { id: 'azure', icon: '☁️', label: 'Azure' },
  { id: 'github', icon: '🐙', label: 'GitHub' },
  { id: 'cli', icon: '⌨️', label: 'CLI' },
]

// Product mappings for recommendations
export interface ProductMapping {
  productId: string
  jobs: JobType[]
  experienceLevels: ExperienceLevel[]
  tooling: ToolingType[]
}

export const productMappings: ProductMapping[] = [
  // Agentic products
  {
    productId: 'agent-hq',
    jobs: ['build-agents', 'extend-copilot'],
    experienceLevels: ['some', 'experienced'],
    tooling: ['github', 'code-sdk'],
  },
  {
    productId: 'azure-ai-agent-service',
    jobs: ['build-agents', 'integrate-ai'],
    experienceLevels: ['some', 'experienced'],
    tooling: ['azure', 'code-sdk'],
  },
  {
    productId: 'copilot-studio',
    jobs: ['build-agents', 'conversational-ai', 'automate-processes'],
    experienceLevels: ['new', 'some', 'experienced'],
    tooling: ['low-code', 'azure'],
  },
  {
    productId: 'microsoft-agent-framework',
    jobs: ['build-agents'],
    experienceLevels: ['experienced'],
    tooling: ['code-sdk'],
  },
  {
    productId: 'semantic-kernel',
    jobs: ['build-agents', 'integrate-ai'],
    experienceLevels: ['some', 'experienced'],
    tooling: ['code-sdk'],
  },
  {
    productId: 'autogen',
    jobs: ['build-agents'],
    experienceLevels: ['experienced'],
    tooling: ['code-sdk'],
  },

  // GitHub products
  {
    productId: 'github-copilot-free',
    jobs: ['accelerate-coding'],
    experienceLevels: ['new', 'some', 'experienced'],
    tooling: ['github', 'code-sdk'],
  },
  {
    productId: 'github-copilot-pro',
    jobs: ['accelerate-coding', 'extend-copilot'],
    experienceLevels: ['new', 'some', 'experienced'],
    tooling: ['github', 'code-sdk'],
  },
  {
    productId: 'github-copilot-business',
    jobs: ['accelerate-coding', 'extend-copilot', 'team-productivity'],
    experienceLevels: ['some', 'experienced'],
    tooling: ['github', 'code-sdk'],
  },
  {
    productId: 'github-copilot-enterprise',
    jobs: ['accelerate-coding', 'extend-copilot', 'team-productivity', 'intelligent-search'],
    experienceLevels: ['experienced'],
    tooling: ['github', 'code-sdk'],
  },
  {
    productId: 'github-copilot-cli',
    jobs: ['accelerate-coding'],
    experienceLevels: ['some', 'experienced'],
    tooling: ['github', 'cli'],
  },
  {
    productId: 'github-copilot-sdk',
    jobs: ['extend-copilot', 'integrate-ai'],
    experienceLevels: ['some', 'experienced'],
    tooling: ['github', 'code-sdk'],
  },
  {
    productId: 'github-models',
    jobs: ['integrate-ai', 'build-agents'],
    experienceLevels: ['new', 'some', 'experienced'],
    tooling: ['github', 'code-sdk'],
  },
  {
    productId: 'github-copilot-coding-agent',
    jobs: ['accelerate-coding', 'build-agents'],
    experienceLevels: ['some', 'experienced'],
    tooling: ['github', 'code-sdk'],
  },

  // Azure AI products
  {
    productId: 'azure-openai',
    jobs: ['integrate-ai', 'build-agents', 'conversational-ai'],
    experienceLevels: ['some', 'experienced'],
    tooling: ['azure', 'code-sdk'],
  },
  {
    productId: 'azure-ai-search',
    jobs: ['intelligent-search', 'integrate-ai'],
    experienceLevels: ['some', 'experienced'],
    tooling: ['azure', 'code-sdk'],
  },
  {
    productId: 'azure-ai-speech',
    jobs: ['conversational-ai', 'analyze-content'],
    experienceLevels: ['some', 'experienced'],
    tooling: ['azure', 'code-sdk'],
  },
  {
    productId: 'azure-ai-vision',
    jobs: ['analyze-content', 'integrate-ai'],
    experienceLevels: ['some', 'experienced'],
    tooling: ['azure', 'code-sdk'],
  },
  {
    productId: 'azure-ai-language',
    jobs: ['analyze-content', 'conversational-ai', 'integrate-ai'],
    experienceLevels: ['some', 'experienced'],
    tooling: ['azure', 'code-sdk'],
  },
  {
    productId: 'azure-ai-document-intelligence',
    jobs: ['analyze-content'],
    experienceLevels: ['some', 'experienced'],
    tooling: ['azure', 'code-sdk'],
  },
  {
    productId: 'azure-ai-content-safety',
    jobs: ['integrate-ai'],
    experienceLevels: ['some', 'experienced'],
    tooling: ['azure', 'code-sdk'],
  },

  // Foundry products
  {
    productId: 'microsoft-foundry-portal',
    jobs: ['build-agents', 'integrate-ai'],
    experienceLevels: ['new', 'some', 'experienced'],
    tooling: ['azure', 'low-code'],
  },
  {
    productId: 'microsoft-foundry-sdk',
    jobs: ['build-agents', 'integrate-ai'],
    experienceLevels: ['some', 'experienced'],
    tooling: ['code-sdk'],
  },

  // Power Platform
  {
    productId: 'power-apps',
    jobs: ['automate-processes', 'integrate-ai'],
    experienceLevels: ['new', 'some'],
    tooling: ['low-code'],
  },
  {
    productId: 'power-automate',
    jobs: ['automate-processes'],
    experienceLevels: ['new', 'some'],
    tooling: ['low-code'],
  },
  {
    productId: 'power-bi',
    jobs: ['analyze-content', 'team-productivity'],
    experienceLevels: ['new', 'some'],
    tooling: ['low-code'],
  },
  {
    productId: 'ai-builder',
    jobs: ['automate-processes', 'analyze-content', 'integrate-ai'],
    experienceLevels: ['new', 'some'],
    tooling: ['low-code'],
  },

  // M365 Copilot
  {
    productId: 'm365-copilot-business',
    jobs: ['team-productivity', 'analyze-content'],
    experienceLevels: ['new', 'some', 'experienced'],
    tooling: ['low-code'],
  },
  {
    productId: 'm365-copilot-enterprise',
    jobs: ['team-productivity', 'analyze-content', 'intelligent-search'],
    experienceLevels: ['new', 'some', 'experienced'],
    tooling: ['low-code'],
  },
  {
    productId: 'copilot-chat-free',
    jobs: ['team-productivity'],
    experienceLevels: ['new', 'some', 'experienced'],
    tooling: ['low-code'],
  },

  // Domain Copilots
  {
    productId: 'security-copilot',
    jobs: ['team-productivity', 'analyze-content'],
    experienceLevels: ['some', 'experienced'],
    tooling: ['azure'],
  },
  {
    productId: 'copilot-azure',
    jobs: ['team-productivity'],
    experienceLevels: ['some', 'experienced'],
    tooling: ['azure', 'cli'],
  },

  // SRE Agent
  {
    productId: 'azure-sre-agent',
    jobs: ['build-agents', 'automate-processes'],
    experienceLevels: ['experienced'],
    tooling: ['azure', 'cli'],
  },
]

export interface RecommendationResult {
  productId: string
  score: number
  matchedJobs: JobType[]
  matchedTooling: ToolingType[]
}

export function getRecommendations(
  selectedJobs: JobType[],
  experienceLevel: ExperienceLevel,
  selectedTooling: ToolingType[]
): { bestFit: RecommendationResult[]; alsoConsider: RecommendationResult[] } {
  const results: RecommendationResult[] = []

  for (const mapping of productMappings) {
    // Must match at least one job
    const matchedJobs = mapping.jobs.filter(j => selectedJobs.includes(j))
    if (matchedJobs.length === 0) continue

    // Must match experience level
    if (!mapping.experienceLevels.includes(experienceLevel)) continue

    // Calculate score
    let score = matchedJobs.length * 10 // Base score from job matches

    // Boost for tooling matches
    const matchedTooling = mapping.tooling.filter(t => selectedTooling.includes(t))
    score += matchedTooling.length * 5

    // Boost for more experience level flexibility (products that work for multiple levels)
    score += mapping.experienceLevels.length

    results.push({
      productId: mapping.productId,
      score,
      matchedJobs,
      matchedTooling,
    })
  }

  // Sort by score descending
  results.sort((a, b) => b.score - a.score)

  // Split into best fit (top 4) and also consider (rest)
  const bestFit = results.slice(0, 4)
  const alsoConsider = results.slice(4, 12) // Limit to 8 more

  return { bestFit, alsoConsider }
}
