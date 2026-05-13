import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Team Energy Pulse Tracker — Track team energy and burnout signals daily',
  description: 'Simple daily check-ins to track team energy levels, workload stress, and burnout indicators with trend analysis and early warning alerts.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ea7e0d99-44ba-4e34-b42d-f6973860ef6e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
