import {
  MicrosoftAIProduct,
  ServiceCategory,
  ServiceStatus,
  TargetAudience,
  getProductById,
  allProducts,
} from '@/lib/data/microsoft-ai-catalog'

export type RowCategory = 'status' | 'capability' | 'preview' | 'audience' | 'surface' | 'integration' | 'pricing'

export interface NormalizedRow {
  id: string
  name: string
  category: RowCategory
  values: Map<string, boolean | string>
}

export interface ComparisonSummary {
  sharedCapabilities: number
  totalCapabilities: number
  similarityScore: number
  uniqueByProduct: Map<string, string[]>
}

export interface ComparisonMatrix {
  products: MicrosoftAIProduct[]
  rows: NormalizedRow[]
  summary: ComparisonSummary
}

export function buildComparisonMatrix(productIds: string[]): ComparisonMatrix {
  const products = productIds
    .map(id => getProductById(id))
    .filter((p): p is MicrosoftAIProduct => p !== undefined)

  if (products.length === 0) {
    return {
      products: [],
      rows: [],
      summary: {
        sharedCapabilities: 0,
        totalCapabilities: 0,
        similarityScore: 0,
        uniqueByProduct: new Map(),
      },
    }
  }

  const rows: NormalizedRow[] = []

  // Status row
  const statusRow: NormalizedRow = {
    id: 'status',
    name: 'Status',
    category: 'status',
    values: new Map(),
  }
  products.forEach(p => statusRow.values.set(p.id, p.status))
  rows.push(statusRow)

  // Category row
  const categoryRow: NormalizedRow = {
    id: 'category',
    name: 'Category',
    category: 'status',
    values: new Map(),
  }
  products.forEach(p => categoryRow.values.set(p.id, p.category))
  rows.push(categoryRow)

  // Subcategory row
  const subcategoryRow: NormalizedRow = {
    id: 'subcategory',
    name: 'Subcategory',
    category: 'status',
    values: new Map(),
  }
  products.forEach(p => subcategoryRow.values.set(p.id, p.subcategory))
  rows.push(subcategoryRow)

  // Collect all unique capabilities
  const allCapabilities = new Set<string>()
  products.forEach(p => p.gaCapabilities.forEach(c => allCapabilities.add(c)))

  // Add capability rows
  allCapabilities.forEach(capability => {
    const row: NormalizedRow = {
      id: `cap-${capability.replace(/\s+/g, '-').toLowerCase()}`,
      name: capability,
      category: 'capability',
      values: new Map(),
    }
    products.forEach(p => {
      row.values.set(p.id, p.gaCapabilities.includes(capability))
    })
    rows.push(row)
  })

  // Collect all unique preview features
  const allPreviewFeatures = new Set<string>()
  products.forEach(p => p.previewFeatures?.forEach(f => allPreviewFeatures.add(f)))

  // Add preview feature rows
  allPreviewFeatures.forEach(feature => {
    const row: NormalizedRow = {
      id: `preview-${feature.replace(/\s+/g, '-').toLowerCase()}`,
      name: feature,
      category: 'preview',
      values: new Map(),
    }
    products.forEach(p => {
      row.values.set(p.id, p.previewFeatures?.includes(feature) ?? false)
    })
    rows.push(row)
  })

  // Collect all unique audiences
  const allAudiences = new Set<TargetAudience>()
  products.forEach(p => p.targetAudience.forEach(a => allAudiences.add(a)))

  // Add audience rows
  allAudiences.forEach(audience => {
    const row: NormalizedRow = {
      id: `audience-${audience.toLowerCase()}`,
      name: audience,
      category: 'audience',
      values: new Map(),
    }
    products.forEach(p => {
      row.values.set(p.id, p.targetAudience.includes(audience))
    })
    rows.push(row)
  })

  // Collect all unique surfaces
  const allSurfaces = new Set<string>()
  products.forEach(p => p.surfaces.forEach(s => allSurfaces.add(s)))

  // Add surface rows
  allSurfaces.forEach(surface => {
    const row: NormalizedRow = {
      id: `surface-${surface.replace(/\s+/g, '-').toLowerCase()}`,
      name: surface,
      category: 'surface',
      values: new Map(),
    }
    products.forEach(p => {
      row.values.set(p.id, p.surfaces.includes(surface))
    })
    rows.push(row)
  })

  // Collect all unique integrations
  const allIntegrations = new Set<string>()
  products.forEach(p => p.integrations.forEach(i => allIntegrations.add(i)))

  // Add integration rows
  allIntegrations.forEach(integration => {
    const row: NormalizedRow = {
      id: `integration-${integration.replace(/\s+/g, '-').toLowerCase()}`,
      name: integration,
      category: 'integration',
      values: new Map(),
    }
    products.forEach(p => {
      row.values.set(p.id, p.integrations.includes(integration))
    })
    rows.push(row)
  })

  // Add pricing rows
  const pricingTypeRow: NormalizedRow = {
    id: 'pricing-type',
    name: 'Pricing Type',
    category: 'pricing',
    values: new Map(),
  }
  products.forEach(p => pricingTypeRow.values.set(p.id, p.pricingModel.type))
  rows.push(pricingTypeRow)

  const priceRow: NormalizedRow = {
    id: 'price',
    name: 'Price',
    category: 'pricing',
    values: new Map(),
  }
  products.forEach(p => {
    const price = p.pricingModel.price + (p.pricingModel.unit || '')
    priceRow.values.set(p.id, price)
  })
  rows.push(priceRow)

  // Calculate summary
  const summary = calculateSummary(products, rows)

  return { products, rows, summary }
}

function calculateSummary(products: MicrosoftAIProduct[], rows: NormalizedRow[]): ComparisonSummary {
  const capabilityRows = rows.filter(r => r.category === 'capability')

  let sharedCount = 0
  const uniqueByProduct = new Map<string, string[]>()

  products.forEach(p => uniqueByProduct.set(p.id, []))

  capabilityRows.forEach(row => {
    const hasCapability = products.filter(p => row.values.get(p.id) === true)

    if (hasCapability.length === products.length) {
      sharedCount++
    } else if (hasCapability.length === 1) {
      const productId = hasCapability[0].id
      uniqueByProduct.get(productId)?.push(row.name)
    }
  })

  const totalCapabilities = capabilityRows.length
  const similarityScore = totalCapabilities > 0
    ? Math.round((sharedCount / totalCapabilities) * 100)
    : 0

  return {
    sharedCapabilities: sharedCount,
    totalCapabilities,
    similarityScore,
    uniqueByProduct,
  }
}

export function getAllCapabilities(productIds: string[]): string[] {
  const capabilities = new Set<string>()

  productIds.forEach(id => {
    const product = getProductById(id)
    if (product) {
      product.gaCapabilities.forEach(c => capabilities.add(c))
    }
  })

  return Array.from(capabilities).sort()
}

export function productsWithCapability(capability: string): MicrosoftAIProduct[] {
  return allProducts.filter(p =>
    p.gaCapabilities.includes(capability) ||
    p.previewFeatures?.includes(capability)
  )
}

export function getComparisonSummary(productIds: string[]): ComparisonSummary {
  const matrix = buildComparisonMatrix(productIds)
  return matrix.summary
}

export function isRowShared(row: NormalizedRow, productIds: string[]): boolean {
  if (row.category === 'status' || row.category === 'pricing') {
    return false
  }

  const values = productIds.map(id => row.values.get(id))
  return values.every(v => v === true)
}

export function isRowUnique(row: NormalizedRow, productIds: string[]): boolean {
  if (row.category === 'status' || row.category === 'pricing') {
    return false
  }

  const trueCount = productIds.filter(id => row.values.get(id) === true).length
  return trueCount === 1
}

export function filterRowsByCategory(rows: NormalizedRow[], categories: RowCategory[]): NormalizedRow[] {
  return rows.filter(r => categories.includes(r.category))
}

export function filterRowsByDifferences(rows: NormalizedRow[], productIds: string[]): NormalizedRow[] {
  return rows.filter(row => {
    if (row.category === 'status' || row.category === 'pricing') {
      return true
    }

    const values = productIds.map(id => row.values.get(id))
    const allTrue = values.every(v => v === true)
    const allFalse = values.every(v => v === false)

    return !allTrue && !allFalse
  })
}

// Popular comparison presets
export interface ComparisonPreset {
  id: string
  name: string
  description: string
  productIds: string[]
}

export const comparisonPresets: ComparisonPreset[] = [
  {
    id: 'github-copilot-tiers',
    name: 'GitHub Copilot Tiers',
    description: 'Compare Free, Pro, Pro+, Business, and Enterprise',
    productIds: ['github-copilot-free', 'github-copilot-pro', 'github-copilot-pro-plus', 'github-copilot-business', 'github-copilot-enterprise'],
  },
  {
    id: 'agent-platforms',
    name: 'Agent Building Platforms',
    description: 'Compare Copilot Studio, Azure AI Agent Service, and frameworks',
    productIds: ['copilot-studio', 'azure-ai-agent-service', 'semantic-kernel', 'microsoft-agent-framework'],
  },
  {
    id: 'm365-copilot-tiers',
    name: 'M365 Copilot Tiers',
    description: 'Compare Free, Business, and Enterprise',
    productIds: ['copilot-chat-free', 'm365-copilot-business', 'm365-copilot-enterprise'],
  },
  {
    id: 'cognitive-services',
    name: 'Azure Cognitive Services',
    description: 'Compare Speech, Vision, Language, and Document Intelligence',
    productIds: ['azure-ai-speech', 'azure-ai-vision', 'azure-ai-language', 'azure-ai-document-intelligence'],
  },
  {
    id: 'power-platform-ai',
    name: 'Power Platform AI',
    description: 'Compare AI features across Power Apps, Automate, and BI',
    productIds: ['power-apps', 'power-automate', 'power-bi', 'ai-builder'],
  },
  {
    id: 'domain-copilots',
    name: 'Domain-Specific Copilots',
    description: 'Compare Security, Azure, Sales, and Service Copilots',
    productIds: ['security-copilot', 'copilot-azure', 'copilot-sales', 'copilot-service'],
  },
  {
    id: 'dev-lite-path',
    name: 'Dev Lite Path',
    description: 'Quick start with AI - minimal infrastructure',
    productIds: ['github-copilot-pro', 'copilot-studio', 'github-models'],
  },
  {
    id: 'dev-heavy-path',
    name: 'Dev Heavy Path',
    description: 'Full control over AI stack for enterprise',
    productIds: ['azure-openai', 'semantic-kernel', 'azure-ai-agent-service', 'azure-ai-search'],
  },
]

// Export comparison as Markdown table
export function exportToMarkdown(productIds: string[]): string {
  const matrix = buildComparisonMatrix(productIds)
  const products = matrix.products

  if (products.length === 0) {
    return '# No products selected'
  }

  const lines: string[] = []

  // Title
  lines.push('# Microsoft AI Services Comparison')
  lines.push('')
  lines.push(`Comparing: ${products.map(p => p.name).join(', ')}`)
  lines.push('')

  // Summary stats
  lines.push('## Summary')
  lines.push(`- Similarity Score: ${matrix.summary.similarityScore}%`)
  lines.push(`- Shared Capabilities: ${matrix.summary.sharedCapabilities}`)
  lines.push(`- Total Capabilities: ${matrix.summary.totalCapabilities}`)
  lines.push('')

  // Table header
  const header = ['Feature', ...products.map(p => p.name)]
  lines.push('| ' + header.join(' | ') + ' |')
  lines.push('| ' + header.map(() => '---').join(' | ') + ' |')

  // Group rows by category
  const categoryOrder: RowCategory[] = ['status', 'capability', 'preview', 'audience', 'surface', 'integration', 'pricing']
  const categoryLabels: Record<RowCategory, string> = {
    status: 'Status',
    capability: 'Capabilities',
    preview: 'Preview Features',
    audience: 'Target Audience',
    surface: 'Surfaces',
    integration: 'Integrations',
    pricing: 'Pricing',
  }

  categoryOrder.forEach(category => {
    const categoryRows = matrix.rows.filter(r => r.category === category)
    if (categoryRows.length === 0) return

    lines.push(`| **${categoryLabels[category]}** | ${products.map(() => '').join(' | ')} |`)

    categoryRows.forEach(row => {
      const values = products.map(p => {
        const val = row.values.get(p.id)
        if (typeof val === 'boolean') return val ? '✓' : '-'
        if (typeof val === 'string') return val
        return '-'
      })
      lines.push(`| ${row.name} | ${values.join(' | ')} |`)
    })
  })

  lines.push('')
  lines.push('---')
  lines.push(`*Generated from Microsoft AI Services Comparison*`)

  return lines.join('\n')
}

// Get products by filters
export function getFilteredProducts(options: {
  categories?: ServiceCategory[]
  statuses?: ServiceStatus[]
  audiences?: TargetAudience[]
  searchQuery?: string
}): MicrosoftAIProduct[] {
  let filtered = [...allProducts]

  if (options.categories && options.categories.length > 0) {
    filtered = filtered.filter(p => options.categories!.includes(p.category))
  }

  if (options.statuses && options.statuses.length > 0) {
    filtered = filtered.filter(p => options.statuses!.includes(p.status))
  }

  if (options.audiences && options.audiences.length > 0) {
    filtered = filtered.filter(p =>
      p.targetAudience.some(a => options.audiences!.includes(a))
    )
  }

  if (options.searchQuery) {
    const query = options.searchQuery.toLowerCase()
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.subcategory.toLowerCase().includes(query) ||
      p.gaCapabilities.some(c => c.toLowerCase().includes(query))
    )
  }

  return filtered
}
