'use client'

import { RowCategory } from '@/lib/utils/comparison'

interface FilterControlsProps {
  visibleCategories: RowCategory[]
  onVisibleCategoriesChange: (categories: RowCategory[]) => void
  showDifferencesOnly: boolean
  onShowDifferencesOnlyChange: (show: boolean) => void
  highlightDifferences: boolean
  onHighlightDifferencesChange: (highlight: boolean) => void
}

const allCategories: { id: RowCategory; label: string }[] = [
  { id: 'status', label: 'Status & Category' },
  { id: 'capability', label: 'Capabilities' },
  { id: 'preview', label: 'Preview Features' },
  { id: 'audience', label: 'Target Audience' },
  { id: 'surface', label: 'Surfaces' },
  { id: 'integration', label: 'Integrations' },
  { id: 'pricing', label: 'Pricing' },
]

export default function FilterControls({
  visibleCategories,
  onVisibleCategoriesChange,
  showDifferencesOnly,
  onShowDifferencesOnlyChange,
  highlightDifferences,
  onHighlightDifferencesChange,
}: FilterControlsProps) {
  const toggleCategory = (category: RowCategory) => {
    if (visibleCategories.includes(category)) {
      onVisibleCategoriesChange(visibleCategories.filter(c => c !== category))
    } else {
      onVisibleCategoriesChange([...visibleCategories, category])
    }
  }

  const selectAll = () => {
    onVisibleCategoriesChange(allCategories.map(c => c.id))
  }

  const selectNone = () => {
    onVisibleCategoriesChange(['status', 'pricing']) // Always keep status and pricing visible
  }

  return (
    <div className="bg-bg-secondary border border-border rounded-lg p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-text-primary">Filter Options</h3>
        <div className="flex gap-2">
          <button
            onClick={selectAll}
            className="text-xs text-accent-blue hover:underline cursor-pointer"
          >
            Show All
          </button>
          <span className="text-text-muted">|</span>
          <button
            onClick={selectNone}
            className="text-xs text-accent-blue hover:underline cursor-pointer"
          >
            Minimal
          </button>
        </div>
      </div>

      {/* Row Category Toggles */}
      <div className="space-y-2">
        <label className="text-xs text-text-muted uppercase tracking-wide">
          Show Sections
        </label>
        <div className="flex flex-wrap gap-2">
          {allCategories.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => toggleCategory(id)}
              className={`px-3 py-1.5 text-xs rounded-full border transition-colors cursor-pointer ${
                visibleCategories.includes(id)
                  ? 'bg-accent-blue/20 border-accent-blue text-accent-blue'
                  : 'bg-bg-tertiary border-border text-text-secondary hover:border-text-muted'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Difference Options */}
      <div className="space-y-3 pt-2 border-t border-border">
        <label className="text-xs text-text-muted uppercase tracking-wide">
          Difference View
        </label>

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={showDifferencesOnly}
            onChange={e => onShowDifferencesOnlyChange(e.target.checked)}
            className="w-4 h-4 rounded border-border bg-bg-primary text-accent-blue focus:ring-accent-blue focus:ring-offset-bg-primary cursor-pointer"
          />
          <div>
            <span className="text-sm text-text-primary">Show differences only</span>
            <p className="text-xs text-text-muted">Hide rows where all products are the same</p>
          </div>
        </label>

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={highlightDifferences}
            onChange={e => onHighlightDifferencesChange(e.target.checked)}
            className="w-4 h-4 rounded border-border bg-bg-primary text-accent-blue focus:ring-accent-blue focus:ring-offset-bg-primary cursor-pointer"
          />
          <div>
            <span className="text-sm text-text-primary">Highlight differences</span>
            <p className="text-xs text-text-muted">Fade shared features, highlight unique ones</p>
          </div>
        </label>
      </div>
    </div>
  )
}
