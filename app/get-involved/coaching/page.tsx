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

        <section id="coach-development" className="mb-14 overflow-hidden bg-misf-blue p-7 sm:p-10">
          <p className="font-display text-xs font-black uppercase tracking-[0.25em] text-misf-gold">Coach development</p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <h2 className="font-display text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
                Building a new generation of Marshallese coaches
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                Our target is to qualify and support 30 new coaches across on-island communities and the diaspora by 2030. Courses, mentoring, placements, and practical delivery opportunities all contribute to that pathway.
              </p>
            </div>
            <div className="border border-white/20 bg-white/10 p-6 text-center">
              <p className="font-display text-5xl font-black text-misf-gold">30</p>
              <p className="mt-2 font-display text-sm font-black uppercase tracking-widest text-white">New coaches by 2030</p>
            </div>
          </div>
        </section>

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
