'use client'

import { MicrosoftAIProduct, ServiceCategory } from '@/lib/data/microsoft-ai-catalog'

interface ProductColumnHeaderProps {
  product: MicrosoftAIProduct
  onRemove: () => void
}

const categoryColors: Record<ServiceCategory, string> = {
  GitHub: 'border-accent-green',
  Azure: 'border-accent-blue',
  M365: 'border-accent-purple',
  Consumer: 'border-accent-yellow',
  PowerPlatform: 'border-orange-500',
  Agentic: 'border-pink-500',
  Infrastructure: 'border-gray-500',
  Windows: 'border-cyan-500',
  Other: 'border-gray-500',
}

const statusColors: Record<string, string> = {
  GA: 'bg-accent-green/20 text-accent-green',
  Preview: 'bg-accent-yellow/20 text-accent-yellow',
  Deprecated: 'bg-accent-red/20 text-accent-red',
  Retired: 'bg-gray-500/20 text-gray-400',
}

export default function ProductColumnHeader({
  product,
  onRemove,
}: ProductColumnHeaderProps) {
  const pricingDisplay = product.pricingModel.price + (product.pricingModel.unit || '')

  return (
    <div
      className={`p-3 bg-bg-secondary border-b-2 ${categoryColors[product.category]} min-w-[180px] max-w-[220px]`}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-text-primary truncate" title={product.name}>
            {product.name}
          </h3>
          <p className="text-xs text-text-muted truncate" title={product.subcategory}>
            {product.subcategory}
          </p>
        </div>
        <button
          onClick={onRemove}
          className="text-text-muted hover:text-accent-red transition-colors shrink-0 cursor-pointer"
          aria-label={`Remove ${product.name}`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="flex items-center gap-2 mt-2">
        <span className={`px-2 py-0.5 text-xs rounded font-medium ${statusColors[product.status]}`}>
          {product.status}
        </span>
      </div>

      <div className="mt-2 text-xs">
        <span className="text-accent-green font-medium">{pricingDisplay}</span>
        {product.pricingModel.notes && (
          <span className="text-text-muted block truncate" title={product.pricingModel.notes}>
            {product.pricingModel.notes}
          </span>
        )}
      </div>
    </div>
  )
}
