import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yashitha Mishra | Quantitative Engineer & Developer',
  description: 'Portfolio of Yashitha Mishra - Quant Trader, Python Developer, and Open Source Contributor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Freckle+Face&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} overflow-x-hidden`} style={{ backgroundColor: '#3F5A62', color: '#FE8254' }}>
        {children}
      </body>
    </html>
  )
}
