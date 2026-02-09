import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Your Name - Portfolio',
  description: 'Quantitative engineer building trading systems and AI applications',
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
