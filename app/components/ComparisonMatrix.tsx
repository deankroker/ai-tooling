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
}

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
      <div className="bg-bg-secondary border border-border rounded-lg p-12 text-center">
        <div className="text-text-muted mb-4">
          <svg className="w-16 h-16 mx-auto opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-text-primary mb-2">
          No products selected
        </h3>
        <p className="text-text-secondary">
          Use the search above to add products to compare, or select a preset comparison.
        </p>
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
