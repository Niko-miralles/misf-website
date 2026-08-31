import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = { title: 'Outrigger Challenge Cup' }

const EDITIONS = [
  {
    year: 2027,
    label: '2027 Majuro',
    location: 'Majuro, Marshall Islands',
    image: '/images/outrigger-2027-placeholder.jpg',
    href: '/competitions/outrigger-cup/2027',
    upcoming: true,
  },
  {
    year: 2025,
    label: '2025 Arkansas',
    location: 'Springdale, Arkansas, USA',
    image: '/images/outrigger-2025.png',
    href: '/competitions/outrigger-cup/2025',
    upcoming: false,
  },
  {
    year: 2024,
    label: '2024 Majuro',
    location: 'Majuro, Marshall Islands',
    image: '/images/outrigger-2024.jpg',
    href: '/competitions/outrigger-cup/2024',
    upcoming: false,
  },
]

export default function OutriggerCupPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        eyebrow="Competition"
        title="Outrigger Challenge Cup"
        subtitle="The flagship international tournament of the Marshall Islands Soccer Federation."
        image="/images/outrigger-cup-hero.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

        {/* About */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4 text-misf-gray-text leading-relaxed">
          <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark">About the Tournament</h2>
          <p>
            The Outrigger Challenge Cup is the Marshall Islands Soccer Federation's premier international tournament. Named after the outrigger canoe — used by Micronesian people for thousands of years — the competition serves as a metaphor for how soccer brings together people and regions often overlooked on the global stage.
          </p>
          <p>
            The tournament spans multiple formats including 11v11 soccer, futsal, and beach soccer, welcoming Pacific and Caribbean island nations to compete on the world stage.
          </p>
        </div>

        {/* Edition cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {EDITIONS.map((ed) => (
            <div key={ed.year} className="flex flex-col">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                <img
                  src={ed.image}
                  alt={ed.label}
                  className="w-full h-full object-cover"
                />
                {ed.upcoming && (
                  <div className="absolute inset-0 bg-misf-blue-dark/40 flex items-center justify-center">
                    <span className="bg-misf-gold text-misf-blue-dark font-display font-black text-sm uppercase tracking-[0.2em] px-6 py-2.5 rounded-full shadow-lg">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>
              <div className="mt-4 flex flex-col items-center gap-3">
                <Link
                  href={ed.href}
                  className="bg-misf-blue-dark text-white font-display font-black text-sm uppercase tracking-widest px-8 py-3 rounded-full hover:bg-misf-blue transition-colors"
                >
                  {ed.label}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
