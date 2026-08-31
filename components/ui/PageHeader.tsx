'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import type { CmsContentBlock } from '@/lib/sanity'

interface PageHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  gradient?: string
  image?: string
  imagePosition?: string
  tall?: boolean
}

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  gradient = 'from-[#0E2D7A] to-[#1A4BAE]',
  image,
  imagePosition = 'center',
  tall = false,
}: PageHeaderProps) {
  const pathname = usePathname()
  const [cmsPage, setCmsPage] = useState<{
    heroTitle?: string
    heroImage?: string
    content?: CmsContentBlock[]
  } | null>(null)

  useEffect(() => {
    let cancelled = false
    fetch(`/api/cms/page?path=${encodeURIComponent(pathname || '/')}`)
      .then((response) => response.ok ? response.json() : null)
      .then((page) => { if (!cancelled) setCmsPage(page) })
      .catch(() => { if (!cancelled) setCmsPage(null) })
    return () => { cancelled = true }
  }, [pathname])

  const displayTitle = cmsPage?.heroTitle || title
  const displayImage = cmsPage?.heroImage || image
  const displaySubtitle = cmsPage?.content
    ?.filter((block) => block._type === 'block')
    .flatMap((block) => block.children || [])
    .map((span) => span.text || '')
    .join(' ')
    || subtitle

  return (
    <div
      className={`relative ${tall ? 'py-32 sm:py-48' : 'py-16 sm:py-20'} px-4 ${!displayImage ? `bg-gradient-to-br ${gradient}` : ''}`}
      style={displayImage ? { backgroundImage: `url(${displayImage})`, backgroundSize: 'cover', backgroundPosition: imagePosition } : undefined}
    >
      <div className="absolute inset-0 bg-[#0E2D7A]/60" />
      <div className="relative max-w-7xl mx-auto">
        {eyebrow && (
          <p className="font-display font-black text-xs uppercase tracking-[0.25em] text-misf-gold mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl uppercase text-white leading-none">
          {displayTitle}
        </h1>
        {displaySubtitle && (
          <p className="mt-4 text-white/70 text-base sm:text-lg max-w-2xl">{displaySubtitle}</p>
        )}
      </div>
    </div>
  )
}
