'use client'

import {
  ExperienceLevel,
  ToolingType,
  experienceDefinitions,
  toolingDefinitions,
} from '@/lib/data/journey-mappings'

interface ExperienceSelectorProps {
  experienceLevel: ExperienceLevel | null
  onExperienceChange: (level: ExperienceLevel) => void
  selectedTooling: ToolingType[]
  onToolingChange: (tooling: ToolingType[]) => void
}

export default function ExperienceSelector({
  experienceLevel,
  onExperienceChange,
  selectedTooling,
  onToolingChange,
}: ExperienceSelectorProps) {
  const toggleTooling = (toolingId: ToolingType) => {
    if (selectedTooling.includes(toolingId)) {
      onToolingChange(selectedTooling.filter(t => t !== toolingId))
    } else {
      onToolingChange([...selectedTooling, toolingId])
    }
  }

  return (
    <div className="space-y-6">
      {/* Experience Level */}
      <div className="space-y-3">
        <div>
          <h2 className="text-lg font-semibold text-text-primary">
            What's your experience with AI development?
          </h2>
        </div>

        <div className="space-y-2">
          {experienceDefinitions.map((exp) => {
            const isSelected = experienceLevel === exp.id
            return (
              <button
                key={exp.id}
                onClick={() => onExperienceChange(exp.id)}
                className={`
                  w-full p-3 rounded-lg border-2 transition-all cursor-pointer text-left
                  flex items-center gap-3
                  ${isSelected
                    ? 'border-accent-blue bg-accent-blue/10'
                    : 'border-border bg-bg-tertiary hover:border-text-muted'
                  }
                `}
              >
                <div
                  className={`
                    w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0
                    ${isSelected ? 'border-accent-blue' : 'border-text-muted'}
                  `}
                >
                  {isSelected && (
                    <div className="w-2.5 h-2.5 rounded-full bg-accent-blue" />
                  )}
                </div>
                <div>
                  <div className="font-medium text-text-primary text-sm">
                    {exp.label}
                  </div>
                  <div className="text-xs text-text-muted">
                    {exp.description}
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      <div className="border-t border-border" />

      {/* Tooling Comfort */}
      <div className="space-y-3">
        <div>
          <h2 className="text-lg font-semibold text-text-primary">
            What tooling are you comfortable with?
          </h2>
          <p className="text-sm text-text-secondary mt-1">
            Select all that apply
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {toolingDefinitions.map((tool) => {
            const isSelected = selectedTooling.includes(tool.id)
            return (
              <button
                key={tool.id}
                onClick={() => toggleTooling(tool.id)}
                className={`
                  px-4 py-2 rounded-lg border-2 transition-all cursor-pointer
                  flex items-center gap-2
                  ${isSelected
                    ? 'border-accent-blue bg-accent-blue/10'
                    : 'border-border bg-bg-tertiary hover:border-text-muted'
                  }
                `}
              >
                <span>{tool.icon}</span>
                <span className="font-medium text-text-primary text-sm">
                  {tool.label}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
