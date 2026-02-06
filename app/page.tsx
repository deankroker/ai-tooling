'use client'

import { useState, useEffect } from 'react'
import { allProducts, getCategoryCounts, keyDates } from '@/lib/data/microsoft-ai-catalog'
import { RowCategory, exportToMarkdown } from '@/lib/utils/comparison'
import ProductSelector from './components/ProductSelector'
import ComparisonMatrix from './components/ComparisonMatrix'
import FilterControls from './components/FilterControls'

const defaultCategories: RowCategory[] = [
  'status',
  'capability',
  'preview',
  'audience',
  'pricing',
]

export default function Home() {
  const [selectedProductIds, setSelectedProductIds] = useState<string[]>([])
  const [visibleCategories, setVisibleCategories] = useState<RowCategory[]>(defaultCategories)
  const [showDifferencesOnly, setShowDifferencesOnly] = useState(false)
  const [highlightDifferences, setHighlightDifferences] = useState(false)
  const [showTimeline, setShowTimeline] = useState(false)

  // Load from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const products = params.get('products')
    if (products) {
      const ids = products.split(',').filter(id =>
        allProducts.some(p => p.id === id)
      )
      if (ids.length > 0) {
        setSelectedProductIds(ids)
      }
    }
  }, [])

  // Update URL when selection changes
  useEffect(() => {
    if (selectedProductIds.length > 0) {
      const url = new URL(window.location.href)
      url.searchParams.set('products', selectedProductIds.join(','))
      window.history.replaceState({}, '', url.toString())
    } else {
      const url = new URL(window.location.href)
      url.searchParams.delete('products')
      window.history.replaceState({}, '', url.toString())
    }
  }, [selectedProductIds])

  const handleRemoveProduct = (id: string) => {
    setSelectedProductIds(prev => prev.filter(p => p !== id))
  }

  const categoryCounts = getCategoryCounts()
  const totalProducts = allProducts.length
  const gaProducts = allProducts.filter(p => p.status === 'GA').length
  const previewProducts = allProducts.filter(p => p.status === 'Preview').length

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-bg-secondary border-b border-border">
        <div className="max-w-[1600px] mx-auto px-4 py-5">
          <h1 className="text-2xl font-bold text-text-primary">
            Microsoft AI Services Comparison
          </h1>
          <p className="text-text-secondary text-sm mt-1">
            Interactive comparison matrix for {totalProducts} products across {Object.keys(categoryCounts).length} categories
          </p>
        </div>
      </header>

      <main className="max-w-[1600px] mx-auto px-4 py-6 space-y-6">
        {/* Stats Bar */}
        <div className="flex flex-wrap gap-3">
          <div className="bg-bg-secondary border border-border rounded-lg px-4 py-3 min-w-[120px]">
            <div className="text-2xl font-bold text-accent-blue">{totalProducts}</div>
            <div className="text-xs text-text-muted">Total Products</div>
          </div>
          <div className="bg-bg-secondary border border-border rounded-lg px-4 py-3 min-w-[120px]">
            <div className="text-2xl font-bold text-accent-green">{gaProducts}</div>
            <div className="text-xs text-text-muted">GA</div>
          </div>
          <div className="bg-bg-secondary border border-border rounded-lg px-4 py-3 min-w-[120px]">
            <div className="text-2xl font-bold text-accent-yellow">{previewProducts}</div>
            <div className="text-xs text-text-muted">Preview</div>
          </div>
          {Object.entries(categoryCounts).slice(0, 5).map(([category, count]) => (
            <div
              key={category}
              className="bg-bg-secondary border border-border rounded-lg px-4 py-3 min-w-[120px]"
            >
              <div className="text-2xl font-bold text-text-primary">{count}</div>
              <div className="text-xs text-text-muted">{category}</div>
            </div>
          ))}
        </div>

        {/* Product Selector */}
        <section className="bg-bg-secondary border border-border rounded-lg p-4">
          <h2 className="text-sm font-semibold text-text-primary mb-3">
            Select Products to Compare
          </h2>
          <ProductSelector
            selectedProductIds={selectedProductIds}
            onSelectionChange={setSelectedProductIds}
            maxProducts={6}
          />
        </section>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
          {/* Sidebar - Filter Controls */}
          <aside className="lg:sticky lg:top-4 lg:self-start">
            <FilterControls
              visibleCategories={visibleCategories}
              onVisibleCategoriesChange={setVisibleCategories}
              showDifferencesOnly={showDifferencesOnly}
              onShowDifferencesOnlyChange={setShowDifferencesOnly}
              highlightDifferences={highlightDifferences}
              onHighlightDifferencesChange={setHighlightDifferences}
            />

            {/* Share & Export */}
            {selectedProductIds.length > 0 && (
              <div className="mt-4 bg-bg-secondary border border-border rounded-lg p-4 space-y-3">
                <h3 className="text-sm font-semibold text-text-primary">
                  Share & Export
                </h3>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href)
                  }}
                  className="w-full px-3 py-2 bg-bg-tertiary border border-border rounded-lg text-sm text-text-secondary hover:text-text-primary hover:border-accent-blue transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                  Copy Link
                </button>
                <button
                  onClick={() => {
                    const markdown = exportToMarkdown(selectedProductIds)
                    navigator.clipboard.writeText(markdown)
                  }}
                  className="w-full px-3 py-2 bg-bg-tertiary border border-border rounded-lg text-sm text-text-secondary hover:text-text-primary hover:border-accent-blue transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Copy as Markdown
                </button>
              </div>
            )}
          </aside>

          {/* Main Content - Comparison Matrix */}
          <section>
            <ComparisonMatrix
              productIds={selectedProductIds}
              onRemoveProduct={handleRemoveProduct}
              visibleCategories={visibleCategories}
              showDifferencesOnly={showDifferencesOnly}
              highlightDifferences={highlightDifferences}
              onSelectProducts={setSelectedProductIds}
            />
          </section>
        </div>

        {/* Timeline Section (Collapsible) */}
        <section className="bg-bg-secondary border border-border rounded-lg overflow-hidden">
          <button
            onClick={() => setShowTimeline(!showTimeline)}
            className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-bg-tertiary transition-colors cursor-pointer"
          >
            <h2 className="text-sm font-semibold text-text-primary">
              Key Dates & Timeline
            </h2>
            <svg
              className={`w-5 h-5 text-text-muted transition-transform ${showTimeline ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {showTimeline && (
            <div className="px-4 pb-4 space-y-3">
              {keyDates.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <span className="text-sm font-medium text-accent-blue min-w-[100px]">
                    {item.date}
                  </span>
                  <span className="text-sm text-text-secondary flex-1">
                    {item.event}
                  </span>
                  <span className="text-xs bg-bg-tertiary text-text-muted px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Footer */}
        <footer className="text-center text-xs text-text-muted py-4 border-t border-border">
          <p>
            Data last updated: February 2026 |
            Built with Next.js + Tailwind CSS
          </p>
        </footer>
      </main>
    </div>
  )
}
