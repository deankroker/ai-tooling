'use client'

import { JobType, jobDefinitions } from '@/lib/data/journey-mappings'

interface JobSelectorProps {
  selectedJobs: JobType[]
  onSelectionChange: (jobs: JobType[]) => void
}

export default function JobSelector({
  selectedJobs,
  onSelectionChange,
}: JobSelectorProps) {
  const toggleJob = (jobId: JobType) => {
    if (selectedJobs.includes(jobId)) {
      onSelectionChange(selectedJobs.filter(j => j !== jobId))
    } else {
      onSelectionChange([...selectedJobs, jobId])
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold text-text-primary">
          What are you trying to do?
        </h2>
        <p className="text-sm text-text-secondary mt-1">
          Select all that apply
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {jobDefinitions.map((job) => {
          const isSelected = selectedJobs.includes(job.id)
          return (
            <button
              key={job.id}
              onClick={() => toggleJob(job.id)}
              className={`
                p-4 rounded-lg border-2 transition-all cursor-pointer text-left
                ${isSelected
                  ? 'border-accent-blue bg-accent-blue/10'
                  : 'border-border bg-bg-tertiary hover:border-text-muted'
                }
              `}
            >
              <div className="text-2xl mb-2">{job.icon}</div>
              <div className="font-medium text-text-primary text-sm">
                {job.label}
              </div>
              <div className="text-xs text-text-muted mt-1">
                {job.description}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
