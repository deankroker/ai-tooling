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
          {product.documentation ? (
            <a
              href={product.documentation}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-text-primary hover:text-accent-blue transition-colors flex items-center gap-1 group"
              title={product.name}
            >
              <span className="truncate">{product.name}</span>
              <svg
                className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ) : (
            <h3 className="text-sm font-semibold text-text-primary truncate" title={product.name}>
              {product.name}
            </h3>
          )}
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

      <div className="mt-2 text-xs relative group/pricing">
        <span className="text-accent-green font-medium cursor-help">{pricingDisplay}</span>
        {(product.pricingModel.type || product.pricingModel.notes) && (
          <div className="absolute left-0 top-full mt-1 hidden group-hover/pricing:block z-50 bg-bg-tertiary border border-border rounded-lg p-2 text-xs w-48 shadow-lg">
            {product.pricingModel.type && (
              <div className="font-medium text-text-primary">{product.pricingModel.type}</div>
            )}
            {product.pricingModel.notes && (
              <div className="text-text-secondary mt-1">{product.pricingModel.notes}</div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
