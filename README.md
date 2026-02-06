```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                                                                               ║
║   ███╗   ███╗██╗ ██████╗██████╗  ██████╗ ███████╗ ██████╗ ███████╗████████╗   ║
║   ████╗ ████║██║██╔════╝██╔══██╗██╔═══██╗██╔════╝██╔═══██╗██╔════╝╚══██╔══╝   ║
║   ██╔████╔██║██║██║     ██████╔╝██║   ██║███████╗██║   ██║█████╗     ██║      ║
║   ██║╚██╔╝██║██║██║     ██╔══██╗██║   ██║╚════██║██║   ██║██╔══╝     ██║      ║
║   ██║ ╚═╝ ██║██║╚██████╗██║  ██║╚██████╔╝███████║╚██████╔╝██║        ██║      ║
║   ╚═╝     ╚═╝╚═╝ ╚═════╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝ ╚═════╝ ╚═╝        ╚═╝      ║
║                                                                               ║
║                    █████╗ ██╗    ████████╗ ██████╗  ██████╗ ██╗     ███████╗  ║
║                   ██╔══██╗██║    ╚══██╔══╝██╔═══██╗██╔═══██╗██║     ██╔════╝  ║
║                   ███████║██║       ██║   ██║   ██║██║   ██║██║     ███████╗  ║
║                   ██╔══██║██║       ██║   ██║   ██║██║   ██║██║     ╚════██║  ║
║                   ██║  ██║██║       ██║   ╚██████╔╝╚██████╔╝███████╗███████║  ║
║                   ╚═╝  ╚═╝╚═╝       ╚═╝    ╚═════╝  ╚═════╝ ╚══════╝╚══════╝  ║
║                                                                               ║
╚═══════════════════════════════════════════════════════════════════════════════╝
```

<div align="center">

## **[>>> TRY IT LIVE <<<](https://deankroker.github.io/ai-tooling/)**

*No install needed - just click and compare!*

</div>

───────────────────────────────────────────────────────────────────────────────

## What is this?

An interactive comparison matrix for **150+ Microsoft AI products** - compare GitHub Copilot, Azure AI, M365 Copilot, Power Platform, and more side-by-side. Select products, filter features, highlight differences, and export to Markdown.

───────────────────────────────────────────────────────────────────────────────

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
open http://localhost:3000
```

That's it. You're done.

───────────────────────────────────────────────────────────────────────────────

## Features

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│  [✓] 150+ Products     Browse the full Microsoft AI catalog                  │
│                                                                              │
│  [✓] Side-by-Side      Compare any products in a clean matrix view          │
│                                                                              │
│  [✓] Smart Filters     Toggle categories, show only differences             │
│                                                                              │
│  [✓] Quick Presets     One-click comparisons for popular combos             │
│                                                                              │
│  [✓] Share Links       URL updates as you select - copy & share             │
│                                                                              │
│  [✓] Markdown Export   Export your comparison as a table                    │
│                                                                              │
│  [✓] Keyboard Nav      Arrow keys + Enter for power users                   │
│                                                                              │
│  [✓] Dark Theme        Easy on the eyes, GitHub-style                       │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

───────────────────────────────────────────────────────────────────────────────

## Project Structure

```
ai-tooling/
│
├── app/
│   ├── page.tsx                 # Main page - product selector + matrix
│   ├── layout.tsx               # Root layout + metadata
│   ├── globals.css              # Tailwind + custom styles
│   │
│   └── components/
│       ├── ProductSelector.tsx  # Search, filter tabs, presets
│       ├── ComparisonMatrix.tsx # The big comparison table
│       ├── FilterControls.tsx   # Toggle sections, diff highlights
│       ├── FeatureRow.tsx       # Individual matrix rows
│       ├── ProductColumnHeader.tsx
│       └── MatrixLegend.tsx
│
├── lib/
│   ├── data/
│   │   └── microsoft-ai-catalog.ts  # 150+ products defined here
│   │
│   └── utils/
│       └── comparison.ts            # Matrix builder, filtering, export
│
└── package.json
```

───────────────────────────────────────────────────────────────────────────────

## How It Works

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │     │                 │
│  Product Data   │────>│  Selection      │────>│  Comparison     │
│  (150+ items)   │     │  State          │     │  Matrix         │
│                 │     │                 │     │                 │
└─────────────────┘     └────────┬────────┘     └─────────────────┘
                                 │
                                 v
                        ┌─────────────────┐
                        │   URL Params    │
                        │   (shareable)   │
                        └─────────────────┘
```

All data is static - no backend, no API calls, no loading spinners. Just fast comparisons.

───────────────────────────────────────────────────────────────────────────────

## Deployment

**GitHub Pages** - Automatic deployment on push to main.

The live site at [deankroker.github.io/ai-tooling](https://deankroker.github.io/ai-tooling/) updates automatically when changes are merged.

───────────────────────────────────────────────────────────────────────────────

## Tech Stack

```
┌────────────────┬─────────────────────────────────────────┐
│ Next.js 14     │ App Router, static export               │
├────────────────┼─────────────────────────────────────────┤
│ React 18       │ Hooks, useMemo for filtering            │
├────────────────┼─────────────────────────────────────────┤
│ TypeScript     │ Strict mode, full type coverage         │
├────────────────┼─────────────────────────────────────────┤
│ Tailwind CSS   │ Dark theme, responsive design           │
└────────────────┴─────────────────────────────────────────┘
```

───────────────────────────────────────────────────────────────────────────────

## Commands

| Command | What it does |
|---------|--------------|
| `npm run dev` | Start dev server at localhost:3000 |
| `npm run build` | Build for production |
| `npm run start` | Run production build |
| `npx tsc --noEmit` | Type check without building |

───────────────────────────────────────────────────────────────────────────────

## Contributing

Found a missing product? Wrong info? PRs welcome!

The product catalog lives in `lib/data/microsoft-ai-catalog.ts` - it's just a big TypeScript array.

───────────────────────────────────────────────────────────────────────────────

<div align="center">

Made with coffee and curiosity

</div>
