import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ada Rodrigues - Professional Counselor',
  description: 'Bilingual licensed professional counselor with 20+ years experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-inter antialiased">
        {children}
      </body>
    </html>
  )
}