import type { Metadata } from 'next'
import { Inter, Barlow_Condensed } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/ScrollToTop'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-barlow',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://marshallislandssoccer.com'),
  title: {
    default: 'Marshall Islands Soccer Federation',
    template: '%s | MISF',
  },
  description:
    'The Marshall Islands Soccer Federation — building football across the Pacific islands, developing players, competing internationally, and advocating for climate action.',
  keywords: ['Marshall Islands', 'soccer', 'football', 'federation', 'RMI', 'Pacific', 'MISF'],
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/images/logo.webp', type: 'image/webp' },
    ],
    apple: '/icon.png',
  },
  openGraph: {
    title: 'Marshall Islands Soccer Federation',
    description:
      'The Marshall Islands Soccer Federation — building football across the Pacific islands, developing players, competing internationally, and advocating for climate action.',
    url: 'https://marshallislandssoccer.com',
    siteName: 'Marshall Islands Soccer Federation',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1130,
        height: 743,
        alt: 'Marshall Islands Soccer Federation players in action',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marshall Islands Soccer Federation',
    description:
      'Building football across the Pacific islands, developing players, competing internationally, and advocating for climate action.',
    images: ['/images/og-default.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${barlowCondensed.variable}`}>
      <body className="min-h-screen flex flex-col">
        <ScrollToTop />
        <Navbar />
        <main className="flex-1 pt-16 bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
