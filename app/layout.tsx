import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Microsoft AI Services Comparison',
  description: 'Interactive comparison matrix for 150+ Microsoft AI products across GitHub Copilot, Azure AI, M365 Copilot, Power Platform, and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-bg-primary antialiased">
        {children}
      </body>
    </html>
  )
}
