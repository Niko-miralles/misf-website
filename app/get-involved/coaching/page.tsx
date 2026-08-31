import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = { title: 'Coaching' }

const PROGRAMMES = [
  {
    label: 'FAW Coaching Courses',
    image: '/images/coaching-team-prayer.jpg',
    href: '/get-involved/coaching/faw',
  },
  {
    label: 'OFC Coaching Courses',
    image: '/images/coaching-ofc-delivery.png',
    href: '/get-involved/coaching/ofc',
  },
  {
    label: 'Coaching Placements',
    image: '/images/coaching-placements-card.jpg',
    href: '/get-involved/coaching/placements',
  },
]

export default function CoachingPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        eyebrow="Get Involved"
        title="Coaching"
        image="/images/coaching-team-prayer.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-misf-gray-text leading-relaxed text-base sm:text-lg">
            MISF is building a network of qualified coaches to deliver Project 1,000 Players across the archipelago. Whether you are a qualified coach looking to contribute, or an aspiring coach who wants training and mentorship, we want to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {PROGRAMMES.map((prog) => (
            <div key={prog.label} className="flex flex-col">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                <img
                  src={prog.image}
                  alt={prog.label}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 flex flex-col items-center gap-3">
                <Link
                  href={prog.href}
                  className="bg-misf-blue-dark text-white font-display font-black text-sm uppercase tracking-widest px-8 py-3 rounded-full hover:bg-misf-blue transition-colors"
                >
                  {prog.label}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
