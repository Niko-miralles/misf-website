import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = { title: 'Futsal Competitions' }

const EDITIONS = [
  {
    label: '2026 Ratak Cup',
    image: '/images/futsal-2026.webp',
    href: '/competitions/futsal/2026',
    upcoming: false,
  },
  {
    label: '2024 Ratak Cup',
    image: '/images/futsal-2024.jpg',
    href: '/competitions/futsal/2024',
    upcoming: false,
  },
  {
    label: '2023 MIFL',
    image: '/images/futsal-2023.webp',
    href: '/competitions/futsal/2023',
    upcoming: false,
  },
]

export default function FutsalCompetitionsPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        eyebrow="Competitions"
        title="Futsal"
        subtitle="The development engine of Marshallese football."
        image="/images/futsal-hero.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

        {/* About */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4 text-misf-gray-text leading-relaxed">
          <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark">About Futsal</h2>
          <p>
            Futsal sits at the heart of MISF's development model. The five-a-side indoor format is perfectly suited to the Marshall Islands' geography — requiring no grass pitch and playable on any hard court surface, it can reach communities on remote atolls where full-size football infrastructure doesn't yet exist.
          </p>
          <p>
            With basketball courts in virtually every village across the archipelago, futsal provides the ideal platform for grassroots player development.
          </p>
        </div>

        {/* Edition cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {EDITIONS.map((ed) => (
            <div key={ed.label} className="flex flex-col">
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
