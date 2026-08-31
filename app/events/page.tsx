import type { Metadata } from 'next'
import Link from 'next/link'
import DonateStrip from '@/components/home/DonateStrip'
import { events } from '@/data/events'

export const metadata: Metadata = {
  title: 'Events',
  description: 'Upcoming MISF events, fixtures, fundraising events, domestic matches, and training sessions.',
}

const EVENT_AREAS = [
  {
    label: 'International Fixtures',
    description: 'National team matches, tournaments, and visiting delegations.',
    image: '/images/outrigger-2025.png',
  },
  {
    label: 'Fundraising Events',
    description: 'Supporter activity that helps fund MISF programmes.',
    image: '/images/team-huddle.jpg',
  },
  {
    label: 'Domestic Football',
    description: 'Futsal, soccer league, and inter-island matchdays.',
    image: '/images/futsal-2026.webp',
  },
  {
    label: 'Training Sessions',
    description: 'On-island coaching and player development activity.',
    image: '/images/youth-soccer.webp',
  },
]

export default function EventsPage() {
  return (
    <div className="bg-white min-h-screen">
      <div
        className="relative py-16 sm:py-20 px-4 overflow-hidden"
        style={{
          backgroundImage: 'url(/images/inter-island-futsal-match.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 58%',
        }}
      >
        <div className="absolute inset-0 bg-[#0E2D7A]/60" />
        <div className="relative max-w-7xl mx-auto">
          <p className="font-display font-black text-xs uppercase tracking-[0.25em] text-misf-gold mb-3">
            Marshall Islands Soccer Federation
          </p>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl uppercase text-white leading-none">
            Events
          </h1>
          <p className="mt-4 text-white/70 text-base sm:text-lg max-w-2xl">
            Fixtures, fundraisers, domestic matchdays, and training activity across the MISF calendar.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-3xl mx-auto text-center mb-14 text-misf-gray-text leading-relaxed">
          <p>
            This page brings together MISF events in one place: international fixtures, fundraising activity, domestic futsal and soccer league matches, and training sessions on-island. Confirmed events will link through to individual event pages with the latest details.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {EVENT_AREAS.map(({ label, description, image }) => (
            <div key={label} className="border border-gray-200 overflow-hidden">
              <div className="aspect-[16/10] overflow-hidden bg-misf-blue-dark">
                <img
                  src={image}
                  alt={label}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="font-display font-black text-base uppercase text-misf-blue-dark mb-3">
                  {label}
                </h2>
                <p className="text-sm text-misf-gray-text leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <p className="font-display font-black text-xs uppercase tracking-[0.25em] text-misf-gold mb-2">
              Calendar
            </p>
            <h2 className="font-display font-black text-3xl sm:text-4xl uppercase text-misf-blue-dark">
              Upcoming Events
            </h2>
          </div>
        </div>

        <div className="space-y-6">
          {events.map((event) => (
            <Link
              key={event.slug}
              href={`/events/${event.slug}`}
              className="group flex flex-col lg:flex-row overflow-hidden border border-gray-200 hover:border-misf-blue transition-colors"
            >
              <div className="lg:w-80 shrink-0 aspect-[16/9] lg:aspect-auto overflow-hidden bg-misf-blue-dark">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex-1 p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="font-display font-bold text-xs uppercase tracking-widest text-misf-gold">
                    {event.category}
                  </span>
                  <span className="font-display font-bold text-xs uppercase tracking-widest text-gray-400">
                    {event.status}
                  </span>
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl uppercase text-misf-blue-dark leading-tight mb-3 group-hover:text-misf-blue transition-colors">
                  {event.title}
                </h3>
                <p className="text-sm text-misf-gray-text leading-relaxed mb-5 max-w-3xl">
                  {event.summary}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-misf-gray-text">
                  <div>
                    <p className="font-display font-bold text-xs uppercase tracking-widest text-misf-blue-dark mb-1">
                      Date
                    </p>
                    <p>{event.dateLabel}</p>
                  </div>
                  <div>
                    <p className="font-display font-bold text-xs uppercase tracking-widest text-misf-blue-dark mb-1">
                      Location
                    </p>
                    <p>{event.location}</p>
                  </div>
                </div>
                <p className="font-display font-bold text-sm uppercase tracking-widest text-misf-blue mt-6">
                  Event Details →
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-misf-blue py-12 px-8 text-center">
          <h2 className="font-display font-black text-2xl sm:text-3xl uppercase text-white mb-4">
            Add an Event
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-6">
            Have a fixture, training session, fundraiser, or community event to share with MISF supporters?
          </p>
          <Link
            href="/contact"
            className="inline-block bg-misf-gold text-misf-blue-dark font-display font-black text-sm uppercase tracking-widest px-8 py-4 hover:bg-[#d4911c] transition-colors"
          >
            Contact MISF →
          </Link>
        </div>
      </div>

      <DonateStrip />
    </div>
  )
}
