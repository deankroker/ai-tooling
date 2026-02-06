'use client'

import { useState, useEffect } from 'react'
import {
  JobType,
  ExperienceLevel,
  ToolingType,
  getRecommendations,
  RecommendationResult,
} from '@/lib/data/journey-mappings'
import JobSelector from './JobSelector'
import ExperienceSelector from './ExperienceSelector'
import RecommendationResults from './RecommendationResults'

interface JourneyWizardProps {
  onSelectProducts: (ids: string[]) => void
  onSkip: () => void
  selectedProductIds: string[]
}

type WizardStep = 1 | 2 | 3

export default function JourneyWizard({
  onSelectProducts,
  onSkip,
  selectedProductIds,
}: JourneyWizardProps) {
  const [step, setStep] = useState<WizardStep>(1)
  const [selectedJobs, setSelectedJobs] = useState<JobType[]>([])
  const [experienceLevel, setExperienceLevel] = useState<ExperienceLevel | null>(null)
  const [selectedTooling, setSelectedTooling] = useState<ToolingType[]>([])
  const [recommendations, setRecommendations] = useState<{
    bestFit: RecommendationResult[]
    alsoConsider: RecommendationResult[]
  } | null>(null)

  // When recommendations are calculated, auto-load best fit products
  useEffect(() => {
    if (recommendations && recommendations.bestFit.length > 0) {
      const bestFitIds = recommendations.bestFit.map(r => r.productId)
      onSelectProducts(bestFitIds)
    }
  }, [recommendations, onSelectProducts])

  const handleNext = () => {
    if (step === 1 && selectedJobs.length > 0) {
      setStep(2)
    } else if (step === 2 && experienceLevel && selectedTooling.length > 0) {
      // Calculate recommendations
      const results = getRecommendations(selectedJobs, experienceLevel, selectedTooling)
      setRecommendations(results)
      setStep(3)
    }
  }

  const handleBack = () => {
    if (step === 2) {
      setStep(1)
    } else if (step === 3) {
      setStep(2)
      setRecommendations(null)
      onSelectProducts([])
    }
  }

  const handleStartOver = () => {
    setStep(1)
    setSelectedJobs([])
    setExperienceLevel(null)
    setSelectedTooling([])
    setRecommendations(null)
    onSelectProducts([])
  }

  const handleAddProduct = (productId: string) => {
    if (!selectedProductIds.includes(productId)) {
      onSelectProducts([...selectedProductIds, productId])
    }
  }

  const canProceed = step === 1
    ? selectedJobs.length > 0
    : step === 2
      ? experienceLevel !== null && selectedTooling.length > 0
      : false

  return (
    <div className="bg-bg-secondary border border-border rounded-lg p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          {step > 1 && step < 3 && (
            <button
              onClick={handleBack}
              className="text-text-muted hover:text-text-primary transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          {step < 3 && (
            <span className="text-sm text-text-muted">
              Step {step} of 3
            </span>
          )}
          {step === 3 && (
            <span className="text-sm font-medium text-text-primary">
              Your Recommendations
            </span>
          )}
        </div>
        {step < 3 && (
          <button
            onClick={onSkip}
            className="text-sm text-text-muted hover:text-text-secondary transition-colors cursor-pointer"
          >
            Skip to browse
          </button>
        )}
      </div>

      {/* Step Content */}
      {step === 1 && (
        <JobSelector
          selectedJobs={selectedJobs}
          onSelectionChange={setSelectedJobs}
        />
      )}

      {step === 2 && (
        <ExperienceSelector
          experienceLevel={experienceLevel}
          onExperienceChange={setExperienceLevel}
          selectedTooling={selectedTooling}
          onToolingChange={setSelectedTooling}
        />
      )}

      {step === 3 && recommendations && experienceLevel && (
        <RecommendationResults
          selectedJobs={selectedJobs}
          experienceLevel={experienceLevel}
          selectedTooling={selectedTooling}
          bestFit={recommendations.bestFit}
          alsoConsider={recommendations.alsoConsider}
          onStartOver={handleStartOver}
          onAddProduct={handleAddProduct}
          selectedProductIds={selectedProductIds}
        />
      )}

      {/* Footer */}
      {step < 3 && (
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleNext}
            disabled={!canProceed}
            className={`
              px-6 py-2 rounded-lg font-medium transition-all
              ${canProceed
                ? 'bg-accent-blue text-white hover:bg-accent-blue/90 cursor-pointer'
                : 'bg-bg-tertiary text-text-muted cursor-not-allowed'
              }
            `}
          >
            {step === 2 ? 'See recommendations' : 'Next'}
            <svg className="w-4 h-4 inline ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}
