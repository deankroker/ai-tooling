'use client'

import { useMemo } from 'react'
import { MicrosoftAIProduct, getProductById } from '@/lib/data/microsoft-ai-catalog'
import {
  buildComparisonMatrix,
  RowCategory,
  filterRowsByCategory,
  filterRowsByDifferences,
} from '@/lib/utils/comparison'
import ProductColumnHeader from './ProductColumnHeader'
import FeatureRow, { SectionHeader } from './FeatureRow'
import MatrixLegend from './MatrixLegend'

interface ComparisonMatrixProps {
  productIds: string[]
  onRemoveProduct: (id: string) => void
  visibleCategories: RowCategory[]
  showDifferencesOnly: boolean
  highlightDifferences: boolean
  onSelectProducts?: (ids: string[]) => void
}

interface SuggestionCard {
  id: string
  icon: string
  title: string
  description: string
  productIds: string[]
}

const suggestionCards: SuggestionCard[] = [
  {
    id: 'agent-platforms',
    icon: '🤖',
    title: 'Agent Platforms',
    description: 'Which agent platform should I use?',
    productIds: ['azure-ai-agent-service', 'copilot-studio', 'microsoft-agent-framework'],
  },
  {
    id: 'preview-features',
    icon: '🔬',
    title: 'Preview Features',
    description: "What's coming in preview?",
    productIds: ['microsoft-foundry-portal', 'github-copilot-coding-agent', 'azure-sre-agent'],
  },
  {
    id: 'dev-lite',
    icon: '💻',
    title: 'Dev Lite Path',
    description: 'Quick start with AI - minimal infra',
    productIds: ['github-copilot-pro', 'copilot-studio', 'github-models'],
  },
  {
    id: 'dev-heavy',
    icon: '🏗️',
    title: 'Dev Heavy Path',
    description: 'Full control over AI stack',
    productIds: ['azure-openai', 'semantic-kernel', 'azure-ai-agent-service', 'azure-ai-search'],
  },
  {
    id: 'github-vs-azure',
    icon: '⚔️',
    title: 'GitHub vs Azure',
    description: 'GitHub developer vs Azure developer?',
    productIds: ['github-copilot-pro', 'github-models', 'azure-openai', 'azure-ai-agent-service'],
  },
]

const categoryOrder: RowCategory[] = [
  'status',
  'capability',
  'preview',
  'audience',
  'surface',
  'integration',
  'pricing',
]

export default function ComparisonMatrix({
  productIds,
  onRemoveProduct,
  visibleCategories,
  showDifferencesOnly,
  highlightDifferences,
  onSelectProducts,
}: ComparisonMatrixProps) {
  const matrix = useMemo(() => buildComparisonMatrix(productIds), [productIds])

  const filteredRows = useMemo(() => {
    let rows = filterRowsByCategory(matrix.rows, visibleCategories)

    if (showDifferencesOnly) {
      rows = filterRowsByDifferences(rows, productIds)
    }

    return rows
  }, [matrix.rows, visibleCategories, showDifferencesOnly, productIds])

  const products = useMemo(() =>
    productIds
      .map(id => getProductById(id))
      .filter((p): p is MicrosoftAIProduct => p !== undefined),
    [productIds]
  )

  // Group rows by category - must be before any early returns
  const groupedRows = useMemo(() => {
    const groups: { category: RowCategory; rows: typeof filteredRows }[] = []

    categoryOrder.forEach(category => {
      if (!visibleCategories.includes(category)) return

      const categoryRows = filteredRows.filter(r => r.category === category)
      if (categoryRows.length > 0) {
        groups.push({ category, rows: categoryRows })
      }
    })

    return groups
  }, [filteredRows, visibleCategories])

  if (products.length === 0) {
    return (
      <div className="bg-bg-secondary border border-border rounded-lg p-8">
        <div className="text-center mb-6">
          <div className="text-text-muted mb-2">
            <svg className="w-10 h-10 mx-auto opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-text-primary">
            Start Comparing
          </h3>
          <p className="text-sm text-text-secondary mt-1">
            Search above or click a suggestion to get started
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {suggestionCards.map((card) => (
            <button
              key={card.id}
              onClick={() => onSelectProducts?.(card.productIds)}
              className="text-left p-4 bg-bg-tertiary border border-border rounded-lg hover:border-accent-blue hover:bg-bg-tertiary/80 transition-all cursor-pointer group"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{card.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-medium text-text-primary group-hover:text-accent-blue transition-colors">
                      {card.title}
                    </h4>
                    <span className="text-xs bg-bg-secondary text-text-muted px-2 py-0.5 rounded-full shrink-0">
                      {card.productIds.length} products
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary mt-1">
                    {card.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Summary Stats */}
      <div className="flex flex-wrap gap-4">
        <div className="bg-bg-secondary border border-border rounded-lg px-4 py-3">
          <div className="text-2xl font-bold text-accent-blue">
            {matrix.summary.similarityScore}%
          </div>
          <div className="text-xs text-text-muted">Similarity Score</div>
        </div>
        <div className="bg-bg-secondary border border-border rounded-lg px-4 py-3">
          <div className="text-2xl font-bold text-accent-green">
            {matrix.summary.sharedCapabilities}
          </div>
          <div className="text-xs text-text-muted">Shared Capabilities</div>
        </div>
        <div className="bg-bg-secondary border border-border rounded-lg px-4 py-3">
          <div className="text-2xl font-bold text-text-primary">
            {matrix.summary.totalCapabilities}
          </div>
          <div className="text-xs text-text-muted">Total Capabilities</div>
        </div>
      </div>

      {/* Legend */}
      <MatrixLegend highlightDifferences={highlightDifferences} />

      {/* Matrix Table */}
      <div className={`matrix-container overflow-x-auto bg-bg-secondary border border-border rounded-lg ${highlightDifferences ? 'highlight-mode' : ''}`}>
        <table className="w-full border-collapse">
          <thead className="sticky-header">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold text-text-muted uppercase tracking-wide sticky left-0 bg-bg-secondary z-20 min-w-[200px] max-w-[300px] border-b border-border">
                Feature / Product
              </th>
              {products.map(product => (
                <th key={product.id} className="p-0 border-b border-border">
                  <ProductColumnHeader
                    product={product}
                    onRemove={() => onRemoveProduct(product.id)}
                  />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {groupedRows.map(({ category, rows }) => (
              <GroupSection
                key={category}
                category={category}
                rows={rows}
                productIds={productIds}
                highlightDifferences={highlightDifferences}
              />
            ))}
          </tbody>
        </table>
      </div>

      {filteredRows.length === 0 && (
        <div className="text-center py-8 text-text-muted">
          No rows match the current filter settings.
        </div>
      )}
    </div>
  )
}

// Group Section Component
function GroupSection({
  category,
  rows,
  productIds,
  highlightDifferences,
}: {
  category: RowCategory
  rows: ReturnType<typeof buildComparisonMatrix>['rows']
  productIds: string[]
  highlightDifferences: boolean
}) {
  return (
    <>
      <SectionHeader category={category} />
      {rows.map(row => (
        <FeatureRow
          key={row.id}
          row={row}
          productIds={productIds}
          highlightDifferences={highlightDifferences}
        />
      ))}
    </>
  )
}
