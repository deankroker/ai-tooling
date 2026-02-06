'use client'

import { NormalizedRow, RowCategory, isRowShared, isRowUnique } from '@/lib/utils/comparison'

interface FeatureRowProps {
  row: NormalizedRow
  productIds: string[]
  highlightDifferences: boolean
}

const categoryLabels: Record<RowCategory, string> = {
  status: 'Status',
  capability: 'Capabilities',
  preview: 'Preview Features',
  audience: 'Target Audience',
  surface: 'Surfaces',
  integration: 'Integrations',
  pricing: 'Pricing',
}

export default function FeatureRow({
  row,
  productIds,
  highlightDifferences,
}: FeatureRowProps) {
  const isShared = isRowShared(row, productIds)
  const isUnique = isRowUnique(row, productIds)

  const getCellContent = (productId: string) => {
    const value = row.values.get(productId)

    if (typeof value === 'boolean') {
      if (value) {
        return (
          <span className="text-accent-green">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </span>
        )
      }
      return (
        <span className="text-text-muted">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        </span>
      )
    }

    if (typeof value === 'string') {
      return (
        <span className="text-xs text-text-secondary truncate block max-w-[150px]" title={value}>
          {value}
        </span>
      )
    }

    return <span className="text-text-muted">-</span>
  }

  const getCellClass = (productId: string) => {
    const value = row.values.get(productId)
    const hasValue = value === true

    if (!highlightDifferences) {
      return 'matrix-cell'
    }

    if (row.category === 'status' || row.category === 'pricing') {
      return 'matrix-cell'
    }

    if (isShared) {
      return 'matrix-cell cell-shared'
    }

    if (hasValue && isUnique) {
      return 'matrix-cell cell-unique'
    }

    return 'matrix-cell'
  }

  return (
    <tr className="matrix-row border-b border-border hover:bg-bg-tertiary/30 transition-colors">
      <td className="px-4 py-2 text-sm text-text-secondary sticky left-0 bg-bg-secondary z-10 min-w-[200px] max-w-[300px]">
        <span className="truncate block" title={row.name}>
          {row.name}
        </span>
      </td>
      {productIds.map(productId => (
        <td
          key={productId}
          className={`px-4 py-2 text-center min-w-[180px] max-w-[220px] ${getCellClass(productId)}`}
        >
          {getCellContent(productId)}
        </td>
      ))}
    </tr>
  )
}

// Section Header Component
export function SectionHeader({ category }: { category: RowCategory }) {
  return (
    <tr className="bg-bg-tertiary">
      <td
        colSpan={100}
        className="px-4 py-2 text-xs font-semibold text-text-muted uppercase tracking-wide sticky left-0"
      >
        {categoryLabels[category]}
      </td>
    </tr>
  )
}
