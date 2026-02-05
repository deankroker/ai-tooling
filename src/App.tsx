import { useState, useMemo } from 'react'
import {
  allProducts,
  keyDates,
  getCategoryCounts,
  type MicrosoftAIProduct,
  type ServiceCategory,
  type ServiceStatus,
  type TargetAudience,
} from './data/microsoft-ai-catalog'

const CATEGORY_LABELS: Record<ServiceCategory, string> = {
  GitHub: 'GitHub Copilot',
  Azure: 'Azure AI / Foundry',
  M365: 'Microsoft 365',
  Consumer: 'Consumer',
  PowerPlatform: 'Power Platform',
  Agentic: 'Agentic / Frameworks',
  Infrastructure: 'Infrastructure',
  Windows: 'Windows AI',
  Other: 'Other',
}

const STATUS_LABELS: Record<ServiceStatus, string> = {
  GA: 'GA',
  Preview: 'Preview',
  Deprecated: 'Deprecated',
  Retired: 'Retired',
}

const AUDIENCE_LABELS: Record<TargetAudience, string> = {
  Developers: 'Developers',
  ITAdmins: 'IT Admins',
  EndUsers: 'End Users',
  LowCodeBuilders: 'Low-Code',
  DataScientists: 'Data Scientists',
  Security: 'Security',
}

function StatusBadge({ status }: { status: ServiceStatus }) {
  return (
    <span className={`status-badge ${status.toLowerCase()}`}>
      {STATUS_LABELS[status]}
    </span>
  )
}

function ProductCard({ product }: { product: MicrosoftAIProduct }) {
  const capabilities = product.gaCapabilities.slice(0, 4)
  const hasMore = product.gaCapabilities.length > 4

  return (
    <div className="product-card">
      <div className="product-card-header">
        <div>
          <div className="product-card-title">{product.name}</div>
          <div className="product-card-subtitle">{product.subcategory}</div>
        </div>
        <StatusBadge status={product.status} />
      </div>

      <div className="product-card-pricing">
        <span className="price">{product.pricingModel.price}</span>
        {product.pricingModel.unit && <span> {product.pricingModel.unit}</span>}
        {product.pricingModel.notes && (
          <div className="note">{product.pricingModel.notes}</div>
        )}
      </div>

      {capabilities.length > 0 && (
        <div className="product-card-capabilities">
          <h4>Capabilities</h4>
          <div className="capabilities-list">
            {capabilities.map((cap, i) => (
              <span key={i} className="capability-tag">
                {cap.length > 40 ? cap.substring(0, 40) + '...' : cap}
              </span>
            ))}
            {hasMore && (
              <span className="capability-tag">+{product.gaCapabilities.length - 4} more</span>
            )}
          </div>
        </div>
      )}

      {product.previewFeatures && product.previewFeatures.length > 0 && (
        <div className="product-card-capabilities">
          <h4>Preview Features</h4>
          <div className="capabilities-list">
            {product.previewFeatures.slice(0, 2).map((feat, i) => (
              <span key={i} className="capability-tag" style={{ background: 'rgba(210, 153, 34, 0.15)', color: '#d29922' }}>
                {feat.length > 35 ? feat.substring(0, 35) + '...' : feat}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="product-card-footer">
        {product.targetAudience.slice(0, 3).map((aud) => (
          <span key={aud} className="audience-tag">{AUDIENCE_LABELS[aud]}</span>
        ))}
        {product.surfaces.slice(0, 2).map((surface, i) => (
          <span key={i} className="surface-tag">{surface}</span>
        ))}
      </div>
    </div>
  )
}

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | 'all'>('all')
  const [selectedStatus, setSelectedStatus] = useState<ServiceStatus | 'all'>('all')
  const [selectedAudience, setSelectedAudience] = useState<TargetAudience | 'all'>('all')

  const categoryCounts = useMemo(() => getCategoryCounts(), [])

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const matchesSearch =
          product.name.toLowerCase().includes(query) ||
          product.subcategory.toLowerCase().includes(query) ||
          product.gaCapabilities.some((c) => c.toLowerCase().includes(query)) ||
          (product.previewFeatures?.some((f) => f.toLowerCase().includes(query)) ?? false) ||
          (product.brandPositioning?.toLowerCase().includes(query) ?? false)
        if (!matchesSearch) return false
      }

      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false
      }

      // Status filter
      if (selectedStatus !== 'all' && product.status !== selectedStatus) {
        return false
      }

      // Audience filter
      if (selectedAudience !== 'all' && !product.targetAudience.includes(selectedAudience)) {
        return false
      }

      return true
    })
  }, [searchQuery, selectedCategory, selectedStatus, selectedAudience])

  const activeProducts = allProducts.filter(p => p.status === 'GA' || p.status === 'Preview')
  const previewProducts = allProducts.filter(p => p.status === 'Preview')

  return (
    <div>
      <header className="header">
        <div className="container">
          <h1>Microsoft AI Services Comparison</h1>
          <p>Comprehensive catalog of {allProducts.length}+ AI products across the Microsoft ecosystem (February 2026)</p>
        </div>
      </header>

      <main className="container">
        {/* Stats */}
        <div className="stats-bar">
          <div className="stat-card">
            <div className="number">{allProducts.length}</div>
            <div className="label">Total Products</div>
          </div>
          <div className="stat-card">
            <div className="number">{activeProducts.length}</div>
            <div className="label">Active (GA + Preview)</div>
          </div>
          <div className="stat-card">
            <div className="number">{previewProducts.length}</div>
            <div className="label">In Preview</div>
          </div>
          <div className="stat-card">
            <div className="number">{Object.keys(categoryCounts).length}</div>
            <div className="label">Categories</div>
          </div>
        </div>

        {/* Filters */}
        <div className="filters">
          <div className="filter-row">
            <input
              type="text"
              className="search-input"
              placeholder="Search products, capabilities, features..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select
              className="filter-select"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value as ServiceStatus | 'all')}
            >
              <option value="all">All Status</option>
              <option value="GA">GA</option>
              <option value="Preview">Preview</option>
              <option value="Deprecated">Deprecated</option>
              <option value="Retired">Retired</option>
            </select>
            <select
              className="filter-select"
              value={selectedAudience}
              onChange={(e) => setSelectedAudience(e.target.value as TargetAudience | 'all')}
            >
              <option value="all">All Audiences</option>
              {Object.entries(AUDIENCE_LABELS).map(([key, label]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="category-tabs">
          <button
            className={`category-tab ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All<span className="count">({allProducts.length})</span>
          </button>
          {(Object.keys(CATEGORY_LABELS) as ServiceCategory[]).map((cat) => (
            <button
              key={cat}
              className={`category-tab ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {CATEGORY_LABELS[cat]}
              <span className="count">({categoryCounts[cat] || 0})</span>
            </button>
          ))}
        </div>

        {/* Results Count */}
        <p style={{ marginBottom: 16, color: 'var(--text-secondary)', fontSize: 14 }}>
          Showing {filteredProducts.length} of {allProducts.length} products
        </p>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>No products found</h3>
            <p>Try adjusting your search or filters</p>
          </div>
        )}

        {/* Key Dates Timeline */}
        <div className="timeline-section">
          <h2>Key Dates & Changes</h2>
          <div className="timeline">
            {keyDates.map((item, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-event">
                  {item.event}
                  <span className="timeline-category">{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
