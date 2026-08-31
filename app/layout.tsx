import type { Metadata } from 'next'
import { Inter, Barlow_Condensed } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import AppShell from '@/components/layout/AppShell'

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
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${barlowCondensed.variable}`}>
      <body className="min-h-screen flex flex-col">
        <GoogleAnalytics />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}
