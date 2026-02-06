'use client'

import { getProductById } from '@/lib/data/microsoft-ai-catalog'
import {
  JobType,
  ExperienceLevel,
  ToolingType,
  RecommendationResult,
  jobDefinitions,
  experienceDefinitions,
  toolingDefinitions,
} from '@/lib/data/journey-mappings'

interface RecommendationResultsProps {
  selectedJobs: JobType[]
  experienceLevel: ExperienceLevel
  selectedTooling: ToolingType[]
  bestFit: RecommendationResult[]
  alsoConsider: RecommendationResult[]
  onStartOver: () => void
  onAddProduct: (productId: string) => void
  selectedProductIds: string[]
}

export default function RecommendationResults({
  selectedJobs,
  experienceLevel,
  selectedTooling,
  bestFit,
  alsoConsider,
  onStartOver,
  onAddProduct,
  selectedProductIds,
}: RecommendationResultsProps) {
  const getJobLabel = (jobId: JobType) =>
    jobDefinitions.find(j => j.id === jobId)?.label || jobId

  const getExperienceLabel = (expId: ExperienceLevel) =>
    experienceDefinitions.find(e => e.id === expId)?.label || expId

  const getToolingLabel = (toolId: ToolingType) =>
    toolingDefinitions.find(t => t.id === toolId)?.label || toolId

  return (
    <div className="space-y-4">
      {/* Summary Banner */}
      <div className="bg-bg-tertiary border border-border rounded-lg p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2 text-sm">
            <div className="text-text-secondary">
              <span className="text-text-muted">Goals: </span>
              {selectedJobs.map(j => getJobLabel(j)).join(', ')}
            </div>
            <div className="text-text-secondary">
              <span className="text-text-muted">Experience: </span>
              {getExperienceLabel(experienceLevel)}
              <span className="text-text-muted"> | Tooling: </span>
              {selectedTooling.map(t => getToolingLabel(t)).join(', ')}
            </div>
          </div>
          <button
            onClick={onStartOver}
            className="text-sm text-accent-blue hover:text-accent-blue/80 transition-colors cursor-pointer flex items-center gap-1 shrink-0"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Start over
          </button>
        </div>
      </div>

      {/* Best Fit Section */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-text-primary flex items-center gap-2">
          <span className="text-accent-green">●</span>
          Best Fit
          <span className="text-text-muted font-normal">
            (auto-loaded into comparison)
          </span>
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {bestFit.map((result) => {
            const product = getProductById(result.productId)
            if (!product) return null

            const isSelected = selectedProductIds.includes(result.productId)

            return (
              <div
                key={result.productId}
                className={`
                  p-3 rounded-lg border-2 transition-all
                  ${isSelected
                    ? 'border-accent-green bg-accent-green/10'
                    : 'border-border bg-bg-tertiary'
                  }
                `}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <div className="font-medium text-text-primary text-sm truncate">
                      {product.name}
                    </div>
                    <div className="text-xs text-text-muted truncate">
                      {product.subcategory}
                    </div>
                  </div>
                  {isSelected && (
                    <svg className="w-5 h-5 text-accent-green shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <div className="mt-2 flex flex-wrap gap-1">
                  {result.matchedJobs.slice(0, 2).map(jobId => (
                    <span
                      key={jobId}
                      className="text-xs bg-bg-secondary text-text-muted px-1.5 py-0.5 rounded"
                    >
                      {jobDefinitions.find(j => j.id === jobId)?.icon}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Also Consider Section */}
      {alsoConsider.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-text-primary flex items-center gap-2">
            <span className="text-text-muted">●</span>
            Also Consider
            <span className="text-text-muted font-normal">
              (click to add)
            </span>
          </h3>

          <div className="flex flex-wrap gap-2">
            {alsoConsider.map((result) => {
              const product = getProductById(result.productId)
              if (!product) return null

              const isSelected = selectedProductIds.includes(result.productId)

              return (
                <button
                  key={result.productId}
                  onClick={() => onAddProduct(result.productId)}
                  disabled={isSelected}
                  className={`
                    px-3 py-1.5 rounded-full border transition-all text-sm
                    ${isSelected
                      ? 'border-accent-blue bg-accent-blue/10 text-accent-blue cursor-default'
                      : 'border-border bg-bg-tertiary text-text-secondary hover:border-accent-blue hover:text-text-primary cursor-pointer'
                    }
                  `}
                >
                  {isSelected && (
                    <svg className="w-3 h-3 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  {product.name}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
