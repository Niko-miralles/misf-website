'use client'

import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import ScrollToTop from '@/components/ScrollToTop'

export default function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  // The CMS is an application within the site, not a public page. Giving it a
  // clean canvas prevents the public navigation from obscuring Studio controls.
  if (pathname.startsWith('/studio') || pathname === '/linktree') {
    return <main className="min-h-screen bg-white">{children}</main>
  }

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pt-16 bg-white">{children}</main>
      <Footer />
    </>
  )
}
