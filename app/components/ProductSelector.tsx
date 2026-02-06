'use client'

import { useState, useRef, useEffect } from 'react'
import {
  MicrosoftAIProduct,
  ServiceCategory,
  allProducts,
  getProductById,
} from '@/lib/data/microsoft-ai-catalog'
import { comparisonPresets, ComparisonPreset } from '@/lib/utils/comparison'

interface ProductSelectorProps {
  selectedProductIds: string[]
  onSelectionChange: (ids: string[]) => void
  maxProducts?: number
}

const categoryColors: Record<ServiceCategory, string> = {
  GitHub: 'bg-accent-green/20 text-accent-green',
  Azure: 'bg-accent-blue/20 text-accent-blue',
  M365: 'bg-accent-purple/20 text-accent-purple',
  Consumer: 'bg-accent-yellow/20 text-accent-yellow',
  PowerPlatform: 'bg-orange-500/20 text-orange-400',
  Agentic: 'bg-pink-500/20 text-pink-400',
  Infrastructure: 'bg-gray-500/20 text-gray-400',
  Windows: 'bg-cyan-500/20 text-cyan-400',
  Other: 'bg-gray-500/20 text-gray-400',
}

const categories: ServiceCategory[] = [
  'GitHub',
  'Azure',
  'M365',
  'Agentic',
  'PowerPlatform',
  'Consumer',
  'Infrastructure',
  'Windows',
]

export default function ProductSelector({
  selectedProductIds,
  onSelectionChange,
  maxProducts = 6,
}: ProductSelectorProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | null>(null)
  const [showPresets, setShowPresets] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
        setHighlightedIndex(-1)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Reset highlighted index when dropdown opens or filtered products change
  useEffect(() => {
    if (isDropdownOpen) {
      setHighlightedIndex(-1)
    }
  }, [isDropdownOpen, searchQuery, activeCategory])

  const filteredProducts = allProducts.filter(product => {
    // Exclude already selected products
    if (selectedProductIds.includes(product.id)) return false

    // Exclude deprecated/retired unless searching specifically
    if (
      (product.status === 'Deprecated' || product.status === 'Retired') &&
      !searchQuery.toLowerCase().includes('deprecated') &&
      !searchQuery.toLowerCase().includes('retired')
    ) {
      return false
    }

    // Filter by category if selected
    if (activeCategory && product.category !== activeCategory) return false

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return (
        product.name.toLowerCase().includes(query) ||
        product.subcategory.toLowerCase().includes(query) ||
        product.gaCapabilities.some(c => c.toLowerCase().includes(query))
      )
    }

    return true
  })

  const selectedProducts = selectedProductIds
    .map(id => getProductById(id))
    .filter((p): p is MicrosoftAIProduct => p !== undefined)

  const handleAddProduct = (productId: string) => {
    if (selectedProductIds.length < maxProducts) {
      onSelectionChange([...selectedProductIds, productId])
      setSearchQuery('')
      setIsDropdownOpen(false)
      setHighlightedIndex(-1)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const maxIndex = Math.min(filteredProducts.length - 1, 49) // Max 50 items shown

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setIsDropdownOpen(true)
        setHighlightedIndex(prev => (prev < maxIndex ? prev + 1 : 0))
        break
      case 'ArrowUp':
        e.preventDefault()
        setIsDropdownOpen(true)
        setHighlightedIndex(prev => (prev > 0 ? prev - 1 : maxIndex))
        break
      case 'Enter':
        e.preventDefault()
        if (highlightedIndex >= 0 && highlightedIndex <= maxIndex) {
          handleAddProduct(filteredProducts[highlightedIndex].id)
        }
        break
      case 'Escape':
        setIsDropdownOpen(false)
        setHighlightedIndex(-1)
        break
    }
  }

  const handleRemoveProduct = (productId: string) => {
    onSelectionChange(selectedProductIds.filter(id => id !== productId))
  }

  const handlePresetSelect = (preset: ComparisonPreset) => {
    onSelectionChange(preset.productIds.slice(0, maxProducts))
    setShowPresets(false)
  }

  const handleClearAll = () => {
    onSelectionChange([])
  }

  return (
    <div className="space-y-4">
      {/* Selected Products */}
      <div className="flex flex-wrap gap-2 min-h-[40px]">
        {selectedProducts.map(product => (
          <div
            key={product.id}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm ${categoryColors[product.category]}`}
          >
            <span className="font-medium">{product.name}</span>
            <button
              onClick={() => handleRemoveProduct(product.id)}
              className="hover:bg-white/20 rounded-full p-0.5 transition-colors"
              aria-label={`Remove ${product.name}`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        ))}
        {selectedProducts.length === 0 && (
          <span className="text-text-muted text-sm py-1.5">
            Select products to compare (max {maxProducts})
          </span>
        )}
      </div>

      {/* Search and Add */}
      <div className="flex gap-3 flex-wrap" ref={dropdownRef}>
        <div className="relative flex-1 min-w-[250px]">
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={e => {
              setSearchQuery(e.target.value)
              setIsDropdownOpen(true)
            }}
            onFocus={() => setIsDropdownOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder="Search products... (use arrow keys)"
            disabled={selectedProductIds.length >= maxProducts}
            aria-expanded={isDropdownOpen}
            aria-haspopup="listbox"
            aria-activedescendant={highlightedIndex >= 0 ? `product-${filteredProducts[highlightedIndex]?.id}` : undefined}
            className="w-full px-4 py-2 bg-bg-primary border border-border rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-blue disabled:opacity-50 disabled:cursor-not-allowed"
          />

          {/* Dropdown */}
          {isDropdownOpen && selectedProductIds.length < maxProducts && (
            <div className="absolute z-50 w-full mt-1 bg-bg-secondary border border-border rounded-lg shadow-xl max-h-[400px] overflow-hidden">
              {/* Category Filter Tabs */}
              <div className="flex flex-wrap gap-1 p-2 border-b border-border bg-bg-tertiary">
                <button
                  onClick={() => setActiveCategory(null)}
                  className={`px-2 py-1 text-xs rounded cursor-pointer transition-colors ${
                    activeCategory === null
                      ? 'bg-accent-blue text-white'
                      : 'bg-bg-primary text-text-secondary hover:text-text-primary'
                  }`}
                >
                  All
                </button>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-2 py-1 text-xs rounded cursor-pointer transition-colors ${
                      activeCategory === cat
                        ? 'bg-accent-blue text-white'
                        : 'bg-bg-primary text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Product List */}
              <div ref={listRef} role="listbox" className="overflow-y-auto max-h-[300px]">
                {filteredProducts.length > 0 ? (
                  filteredProducts.slice(0, 50).map((product, index) => (
                    <button
                      key={product.id}
                      id={`product-${product.id}`}
                      role="option"
                      aria-selected={index === highlightedIndex}
                      onClick={() => handleAddProduct(product.id)}
                      onMouseEnter={() => setHighlightedIndex(index)}
                      className={`w-full px-4 py-2 text-left transition-colors flex items-center justify-between cursor-pointer ${
                        index === highlightedIndex
                          ? 'bg-accent-blue/20 border-l-2 border-accent-blue'
                          : 'hover:bg-bg-tertiary border-l-2 border-transparent'
                      }`}
                    >
                      <div>
                        <div className="text-sm font-medium text-text-primary">
                          {product.name}
                        </div>
                        <div className="text-xs text-text-muted">
                          {product.subcategory}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2 py-0.5 text-xs rounded ${
                            product.status === 'GA'
                              ? 'bg-accent-green/20 text-accent-green'
                              : product.status === 'Preview'
                              ? 'bg-accent-yellow/20 text-accent-yellow'
                              : 'bg-accent-red/20 text-accent-red'
                          }`}
                        >
                          {product.status}
                        </span>
                        <span className={`px-2 py-0.5 text-xs rounded ${categoryColors[product.category]}`}>
                          {product.category}
                        </span>
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="px-4 py-8 text-center text-text-muted">
                    No products found
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Preset Button */}
        <div className="relative">
          <button
            onClick={() => setShowPresets(!showPresets)}
            className="px-4 py-2 bg-bg-tertiary border border-border rounded-lg text-text-secondary hover:text-text-primary hover:border-accent-blue transition-colors cursor-pointer flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Presets
          </button>

          {showPresets && (
            <div className="absolute z-50 right-0 mt-1 w-80 bg-bg-secondary border border-border rounded-lg shadow-xl">
              <div className="p-2 border-b border-border">
                <span className="text-xs text-text-muted uppercase tracking-wide">
                  Popular Comparisons
                </span>
              </div>
              <div className="max-h-[300px] overflow-y-auto">
                {comparisonPresets.map(preset => (
                  <button
                    key={preset.id}
                    onClick={() => handlePresetSelect(preset)}
                    className="w-full px-4 py-3 text-left hover:bg-bg-tertiary transition-colors cursor-pointer border-b border-border last:border-b-0"
                  >
                    <div className="text-sm font-medium text-text-primary">
                      {preset.name}
                    </div>
                    <div className="text-xs text-text-muted mt-0.5">
                      {preset.description}
                    </div>
                    <div className="text-xs text-accent-blue mt-1">
                      {preset.productIds.length} products
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Clear All Button */}
        {selectedProductIds.length > 0 && (
          <button
            onClick={handleClearAll}
            className="px-4 py-2 bg-accent-red/10 border border-accent-red/30 rounded-lg text-accent-red hover:bg-accent-red/20 transition-colors cursor-pointer"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Selection Info */}
      <div className="flex items-center justify-between text-xs text-text-muted">
        <span>
          {selectedProductIds.length} of {maxProducts} products selected
        </span>
        {selectedProductIds.length >= maxProducts && (
          <span className="text-accent-yellow">
            Maximum products selected. Remove one to add another.
          </span>
        )}
      </div>
    </div>
  )
}
