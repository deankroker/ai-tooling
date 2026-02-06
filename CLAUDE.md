# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Microsoft AI Services Comparison - An interactive comparison matrix for 150+ Microsoft AI products across GitHub Copilot, Azure AI, M365 Copilot, Power Platform, and more. Select products to compare side-by-side with filtering, difference highlighting, and Markdown export.

## Commands

```bash
# Development server (http://localhost:3000)
npm run dev

# Production build (Next.js build → .next/)
npm run build

# Start production server
npm run start

# Type check only
npx tsc --noEmit
```

No test framework is configured.

## Architecture

**Stack:** Next.js 14 (App Router) + React 18 + TypeScript + Tailwind CSS

**Key Files:**
- `app/page.tsx` - Main page with product selector, comparison matrix, filters, and timeline
- `app/layout.tsx` - Root layout with metadata and dark theme
- `app/globals.css` - Tailwind imports + custom scrollbar/matrix styles
- `app/components/` - React components:
  - `ProductSelector.tsx` - Search/select products with presets and keyboard navigation
  - `ComparisonMatrix.tsx` - Side-by-side feature comparison table
  - `FilterControls.tsx` - Toggle sections, show/highlight differences
  - `FeatureRow.tsx` - Individual matrix rows
  - `ProductColumnHeader.tsx` - Column headers with product info
  - `MatrixLegend.tsx` - Legend for matrix symbols
- `lib/data/microsoft-ai-catalog.ts` - Product catalog with 150+ entries
- `lib/utils/comparison.ts` - Comparison matrix builder, filtering, markdown export

**Data Flow:**
1. All product data is static in `microsoft-ai-catalog.ts` (no backend/API)
2. `page.tsx` manages selected products in state, synced to URL params
3. `ComparisonMatrix` builds normalized rows from selected products using `buildComparisonMatrix()`
4. Filtering (by category, differences) is client-side with `useMemo`

**Type System:**
- `ServiceCategory`: GitHub | Azure | M365 | Consumer | PowerPlatform | Agentic | Infrastructure | Windows | Other
- `ServiceStatus`: GA | Preview | Deprecated | Retired
- `TargetAudience`: Developers | ITAdmins | EndUsers | LowCodeBuilders | DataScientists | Security
- `MicrosoftAIProduct`: Main interface with id, name, category, gaCapabilities[], previewFeatures[], pricingModel, surfaces[], etc.
- `RowCategory`: status | capability | preview | audience | surface | integration | pricing
- `NormalizedRow`: Row in comparison matrix with values per product

## Features

- **Product Selection**: Search, category filter tabs, popular presets, keyboard navigation (arrow keys + Enter)
- **Comparison Matrix**: Products as columns, features as rows, grouped by category
- **Filtering**: Toggle row categories, show differences only, highlight unique features
- **Sharing**: URL state sync, copy link, export as Markdown table
- **UI**: GitHub dark theme, sticky headers, responsive horizontal scroll

## TypeScript Configuration

Strict mode is enabled. All code must pass type checking before build.
