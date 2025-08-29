import type { Metadata } from 'next'
import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'La Casa del Alfarero (LCDA)',
  description: 'Iglesia Pentecostal Unida Latinoamérica en Scranton, PA',
  keywords: ['iglesia', 'pentecostal', 'scranton', 'pennsylvania', 'latinos'],
  authors: [{ name: 'La Casa del Alfarero' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
