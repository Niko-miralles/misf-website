'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '@/sanity.config'

// Studio uses an optional catch-all route for its own client-side URLs.  Keep
// the route dynamic so Vercel serves both /studio and nested Studio paths.
export const dynamic = 'force-dynamic'

export default function StudioPage() {
  return <NextStudio config={config} />
}
