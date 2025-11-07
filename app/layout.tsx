import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Perk Email Builder',
  description: 'GrapeJS-based email builder for loyalty platforms',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
