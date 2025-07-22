import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Smile Dental',
  description: 'Make your teeth shine',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
