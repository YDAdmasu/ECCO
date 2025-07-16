import './globals.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Clothing Brand',
  description: 'Responsive Navbar with Tailwind and Next.js App Router',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light">
      <body>{children}</body>
    </html>
  )
}
