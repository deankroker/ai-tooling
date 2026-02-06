# Journey Wizard Design

## Overview

Transform the homepage into a guided journey that helps developers find the right Microsoft AI products based on their goals, experience, and tooling preferences. The wizard replaces the empty state and flows into the existing comparison matrix.

## Target Audience

**Primary:** GitHub CPO hackathon demo
**User persona:** Developer building apps and agents that consume Microsoft's AI platform

## Flow

```
[Landing] → [Step 1: Jobs] → [Step 2: Experience + Tooling] → [Recommendations + Comparison]
```

## Step 1: Jobs to be Done

9 bubbles, multi-select. User picks what they're trying to accomplish.

| Job | Description | Maps to |
|-----|-------------|---------|
| Build autonomous agents | Agents that take actions | Agent HQ, Copilot Studio, Azure AI Agent Service, frameworks |
| Integrate AI into apps | Add AI to existing code | Azure OpenAI, SDKs, Semantic Kernel |
| Extend Copilot | Custom skills & extensions | GitHub SDK, Copilot extensions |
| Automate processes | AI-powered automation | Power Automate, AI Builder |
| Analyze content | Documents, images, speech | Document Intelligence, Vision, Language, Speech |
| Build conversational AI | Chatbots, voice, assistants | Speech, Language, Copilot Studio |
| Enable intelligent search | Semantic search, RAG, KB | AI Search, knowledge bases |
| Accelerate coding | Code completion, review | GitHub Copilot, CLI |
| Enhance team productivity | Collaboration tools | M365 Copilot, Teams |

## Step 2: Experience & Tooling

Two questions on one screen.

**2a: Experience Level (single select)**
- New to AI development
- Some experience with AI APIs
- Experienced - built AI apps/agents before

**2b: Tooling Comfort (multi-select)**
- Comfortable with code/SDKs
- Prefer low-code/no-code
- Comfortable with Azure portal
- Comfortable with GitHub
- Prefer CLI tools

## Step 3: Recommendations

Tiered results:

**Best Fit (3-4 products)**
- Auto-loaded into comparison matrix
- Displayed as cards with checkmarks

**Also Consider (remaining matches)**
- Shown as clickable chips
- Click to add to comparison

**Summary banner**
- Shows selected jobs, experience, tooling
- "Start over" button to retake wizard

## UI Components

### New Components
- `JourneyWizard.tsx` - Main wizard container with step state
- `JobSelector.tsx` - 9-bubble grid for Step 1
- `ExperienceSelector.tsx` - Radio + chips for Step 2
- `RecommendationResults.tsx` - Tiered results display

### Modified Components
- `ComparisonMatrix.tsx` - Replace suggestion cards with wizard integration
- `page.tsx` - Add wizard state management

## Data Model

```typescript
interface JourneyState {
  step: 1 | 2 | 3
  selectedJobs: JobType[]
  experienceLevel: ExperienceLevel | null
  toolingComfort: ToolingType[]
}

type JobType =
  | 'build-agents'
  | 'integrate-ai'
  | 'extend-copilot'
  | 'automate-processes'
  | 'analyze-content'
  | 'conversational-ai'
  | 'intelligent-search'
  | 'accelerate-coding'
  | 'team-productivity'

type ExperienceLevel = 'new' | 'some' | 'experienced'

type ToolingType = 'code-sdk' | 'low-code' | 'azure' | 'github' | 'cli'
```

## Recommendation Logic

Products are tagged with:
- `jobs: JobType[]` - which jobs they support
- `experienceLevels: ExperienceLevel[]` - appropriate experience levels
- `tooling: ToolingType[]` - tooling alignment

Scoring:
1. Match on jobs (required - at least one overlap)
2. Match on experience level (boost score)
3. Match on tooling (boost score)

Sort by score, top 3-4 = "Best Fit", rest = "Also Consider"

## Files to Create/Modify

| File | Action |
|------|--------|
| `app/components/JourneyWizard.tsx` | Create - main wizard |
| `app/components/JobSelector.tsx` | Create - Step 1 |
| `app/components/ExperienceSelector.tsx` | Create - Step 2 |
| `app/components/RecommendationResults.tsx` | Create - Step 3 |
| `lib/data/journey-mappings.ts` | Create - product tags & scoring |
| `app/components/ComparisonMatrix.tsx` | Modify - integrate wizard |
| `app/page.tsx` | Modify - wizard state |

## Navigation

- "Skip to browse" on any step → existing comparison with suggestion cards
- "Start over" on results → back to Step 1
- "Back" on Step 2 → Step 1 (preserves selections)
- Browser back button → previous step
