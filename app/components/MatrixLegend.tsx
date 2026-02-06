'use client'

interface MatrixLegendProps {
  highlightDifferences: boolean
}

export default function MatrixLegend({ highlightDifferences }: MatrixLegendProps) {
  return (
    <div className="flex flex-wrap items-center gap-4 text-xs text-text-secondary">
      <div className="flex items-center gap-2">
        <span className="text-accent-green">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span>Has feature</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-text-muted">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        </span>
        <span>Missing feature</span>
      </div>
      {highlightDifferences && (
        <>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded ring-2 ring-accent-yellow ring-offset-1 ring-offset-bg-primary" />
            <span>Unique to one product</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded bg-bg-tertiary opacity-40" />
            <span>Shared by all</span>
          </div>
        </>
      )}
    </div>
  )
}
