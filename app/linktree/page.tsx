import type { Metadata, Viewport } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FileText, GraduationCap, Heart, Play, ShoppingBag, Trophy } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Links',
  description: 'Key links for the Marshall Islands Soccer Federation.',
}

export const viewport: Viewport = {
  themeColor: '#0E2D7A',
  colorScheme: 'dark',
  viewportFit: 'cover',
}

const links = [
  { label: 'Support Our Journey to the World Cup', href: '/donate', icon: Heart },
  { label: 'Store', href: '/store', icon: ShoppingBag },
  {
    label: 'Majol? National Team Eligibility Form',
    href: 'https://share-eu1.hsforms.com/1R10NsW3zSM-ipUz45Y5mKw2e4g4h',
    icon: FileText,
    external: true,
  },
  { label: 'Competitions', href: '/competitions/misl', icon: Trophy },
  {
    label: 'Coaching Placements',
    href: 'https://rmi.soccer/get-involved/coaching/placements',
    icon: GraduationCap,
    external: true,
  },
  {
    label: 'Video (Zealand Doc)',
    href: 'https://www.youtube.com/watch?v=j_3ZUonWA5A',
    icon: Play,
    external: true,
  },
]

export default function LinktreePage() {
  return (
    <div className="min-h-[100dvh] bg-misf-blue-dark px-5 pt-[calc(1.25rem+env(safe-area-inset-top))] pb-[calc(1.25rem+env(safe-area-inset-bottom))] sm:px-8 sm:py-10">
      <div className="mx-auto flex w-full max-w-xl flex-col items-center">
        <Link href="/" className="mb-3 rounded-full focus:outline-none focus:ring-4 focus:ring-misf-gold/50 sm:mb-5">
          <div className="relative h-16 w-16 overflow-hidden rounded-full border-[3px] border-white bg-white shadow-lg sm:h-24 sm:w-24 sm:border-4">
            <Image
              src="/images/logo.webp"
              alt="Marshall Islands Soccer Federation"
              fill
              sizes="(min-width: 640px) 96px, 64px"
              className="object-contain p-1"
              priority
            />
          </div>
        </Link>

        <h1 className="text-center font-display text-2xl font-black uppercase tracking-wide text-white sm:text-4xl">
          Marshall Islands Soccer Federation
        </h1>
        <p className="mt-1 text-center text-xs font-medium text-white/75 sm:mt-2 sm:text-sm">
          Building football across the Pacific islands.
        </p>

        <nav aria-label="Key links" className="mt-5 w-full space-y-2 sm:mt-9 sm:space-y-3">
          {links.map(({ label, href, icon: Icon, external }) => {
            const className =
              'group flex min-h-11 w-full items-center gap-3 rounded-xl bg-white px-4 py-2.5 text-left shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-misf-gold focus:outline-none focus:ring-4 focus:ring-misf-gold/50 sm:gap-4 sm:px-5 sm:py-4'
            const contents = (
              <>
                <Icon aria-hidden="true" size={19} strokeWidth={2.5} className="shrink-0 text-misf-blue sm:h-[22px] sm:w-[22px]" />
                <span className="flex-1 font-display text-base font-black uppercase leading-[1.05] tracking-wide text-misf-blue-dark sm:text-xl">
                  {label}
                </span>
                <span aria-hidden="true" className="text-xl font-bold text-misf-blue-dark transition-transform group-hover:translate-x-1">
                  →
                </span>
              </>
            )

            return external ? (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" className={className}>
                {contents}
              </a>
            ) : (
              <Link key={href} href={href} className={className}>
                {contents}
              </Link>
            )
          })}
        </nav>

        <Link href="/" className="mt-10 hidden text-xs font-bold uppercase tracking-widest text-white/65 transition hover:text-white sm:block">
          rmi.soccer
        </Link>
      </div>
    </div>
  )
}
