import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import PageHeader from '@/components/ui/PageHeader'
import DonateStrip from '@/components/home/DonateStrip'
import { events } from '@/data/events'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const event = events.find((item) => item.slug === slug)
  if (!event) return {}
  return {
    title: event.title,
    description: event.summary,
  }
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params
  const event = events.find((item) => item.slug === slug)
  if (!event) notFound()

  const otherEvents = events.filter((item) => item.slug !== event.slug).slice(0, 3)

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        eyebrow={event.category}
        title={event.title}
        subtitle={event.summary}
        image={event.image}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 lg:gap-16">
          <div>
            <div className="space-y-5 text-misf-gray-text leading-relaxed">
              {event.details.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {event.relatedHref && event.relatedLabel && (
                <Link
                  href={event.relatedHref}
                  className="inline-block bg-misf-blue-dark text-white font-display font-black text-sm uppercase tracking-widest px-8 py-3 hover:bg-misf-blue transition-colors"
                >
                  {event.relatedLabel} →
                </Link>
              )}
              <Link
                href="/events"
                className="inline-block bg-gray-100 text-misf-blue-dark font-display font-black text-sm uppercase tracking-widest px-8 py-3 hover:bg-gray-200 transition-colors"
              >
                All Events
              </Link>
            </div>
          </div>

          <aside className="border border-gray-200 p-6 h-fit">
            <p className="font-display font-black text-xs uppercase tracking-[0.25em] text-misf-gold mb-4">
              Event Info
            </p>
            <div className="space-y-5">
              <div>
                <p className="font-display font-bold text-xs uppercase tracking-widest text-misf-blue-dark mb-1">
                  Status
                </p>
                <p className="text-sm text-misf-gray-text">{event.status}</p>
              </div>
              <div>
                <p className="font-display font-bold text-xs uppercase tracking-widest text-misf-blue-dark mb-1">
                  Date
                </p>
                <p className="text-sm text-misf-gray-text">{event.dateLabel}</p>
              </div>
              <div>
                <p className="font-display font-bold text-xs uppercase tracking-widest text-misf-blue-dark mb-1">
                  Location
                </p>
                <p className="text-sm text-misf-gray-text">{event.location}</p>
              </div>
            </div>
          </aside>
        </div>

        {otherEvents.length > 0 && (
          <div className="mt-16 pt-10 border-t border-gray-200">
            <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark mb-6">
              More Events
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {otherEvents.map((item) => (
                <Link key={item.slug} href={`/events/${item.slug}`} className="group block">
                  <div className="aspect-[16/9] overflow-hidden bg-misf-blue-dark mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="font-display font-bold text-xs uppercase tracking-widest text-misf-gold mb-1">
                    {item.category}
                  </p>
                  <h3 className="font-display font-black text-lg uppercase text-misf-blue-dark group-hover:text-misf-blue transition-colors">
                    {item.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <DonateStrip />
    </div>
  )
}
