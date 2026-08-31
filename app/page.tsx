import Image from 'next/image'
import Link from 'next/link'
import DocumentarySection from '@/components/home/DocumentarySection'
import NewsGrid from '@/components/home/NewsGrid'
import ShopSection from '@/components/home/ShopSection'
import SponsorsBar from '@/components/home/SponsorsBar'
import DonateStrip from '@/components/home/DonateStrip'
import { events } from '@/data/events'

const MILESTONES = [
  {
    year: '2021',
    title: 'Federation founded',
    image: '/images/our-story-camp.png',
  },
  {
    year: '2023',
    title: 'Youth programme begins',
    image: '/images/youth-soccer.webp',
  },
  {
    year: '2024',
    title: "Women's camp",
    image: '/images/our-story-springdale.jpg',
  },
  {
    year: '2025',
    title: 'First international matches',
    image: '/images/team-huddle.jpg',
  },
]

const KEY_LINKS = [
  {
    title: 'National Team',
    body: 'Records, milestones, goalscorers, and national team history.',
    href: '/national-teams',
    image: '/images/outrigger-2025.png',
  },
  {
    title: 'Soccer Development',
    body: 'How MISF is growing football on-island and across the diaspora.',
    href: '/about/soccer-development',
    image: '/images/soccer-development-hero.jpg',
  },
  {
    title: 'Events',
    body: 'Fixtures, fundraisers, domestic matchdays, and training activity.',
    href: '/events',
    image: '/images/inter-island-futsal-match.jpg',
  },
]

function MissionStatement() {
  return (
    <section className="bg-misf-blue py-12 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:items-center">
        <div className="relative min-h-[360px] overflow-hidden bg-misf-blue-dark">
          <Image
            src="/images/team-huddle.jpg"
            alt="Marshall Islands team huddle"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 42vw, 100vw"
          />
        </div>
        <div>
          <p className="mb-4 font-display text-xs font-black uppercase tracking-[0.25em] text-misf-gold">
            Mission Statement
          </p>
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
            We provide opportunities for Marshallese people everywhere to play, coach, represent their nation, and connect through soccer.
          </h2>
          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/about/mission"
              className="bg-misf-gold px-6 py-4 font-display text-sm font-black uppercase tracking-widest text-misf-blue-dark hover:bg-[#d4911c]"
            >
              Read the roadmap →
            </Link>
            <Link
              href="/about"
              className="bg-white px-6 py-4 font-display text-sm font-black uppercase tracking-widest text-misf-blue-dark hover:bg-misf-gray-light"
            >
              About MISF →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function UpcomingEvents() {
  const upcoming = events.slice(0, 3)

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 font-display text-xs font-black uppercase tracking-[0.25em] text-misf-gold">
              Calendar
            </p>
            <h2 className="font-display text-3xl font-black uppercase text-misf-blue-dark sm:text-4xl">
              Upcoming Events
            </h2>
          </div>
          <Link href="/events" className="font-display text-sm font-black uppercase tracking-widest text-misf-blue hover:text-misf-gold">
            All events →
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {upcoming.map((event) => (
            <Link key={event.slug} href={`/events/${event.slug}`} className="group border border-gray-200 bg-white">
              <div className="relative h-56 overflow-hidden bg-misf-blue-dark">
                <Image
                  src={event.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <div className="absolute left-4 top-4 bg-misf-gold px-3 py-1.5 font-display text-xs font-black uppercase tracking-widest text-misf-blue-dark">
                  {event.status}
                </div>
              </div>
              <div className="p-6">
                <p className="mb-2 font-display text-xs font-black uppercase tracking-[0.2em] text-misf-gold">
                  {event.dateLabel}
                </p>
                <h3 className="font-display text-xl font-black uppercase leading-tight text-misf-blue-dark group-hover:text-misf-blue">
                  {event.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-misf-gray-text">{event.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function FederationMilestones() {
  return (
    <section className="bg-misf-gray-light py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="mb-2 font-display text-xs font-black uppercase tracking-[0.25em] text-misf-gold">
            Federation Milestones
          </p>
          <h2 className="font-display text-3xl font-black uppercase text-misf-blue-dark sm:text-4xl">
            Building from the ground up
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {MILESTONES.map((item) => (
            <article key={item.year} className="bg-white">
              <div className="relative h-48 bg-misf-blue-dark">
                <Image src={item.image} alt="" fill className="object-cover" sizes="(min-width: 1024px) 25vw, 50vw" />
                <div className="absolute left-4 top-4 bg-misf-gold px-4 py-2 font-display text-2xl font-black text-misf-blue-dark">
                  {item.year}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-black uppercase text-misf-blue-dark">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function KeyPages() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="mb-2 font-display text-xs font-black uppercase tracking-[0.25em] text-misf-gold">
            Explore MISF
          </p>
          <h2 className="font-display text-3xl font-black uppercase text-misf-blue-dark sm:text-4xl">
            Key pages
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {KEY_LINKS.map((item) => (
            <Link key={item.title} href={item.href} className="group bg-misf-blue">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover opacity-80 transition-transform duration-300 group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-black uppercase text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{item.body}</p>
                <p className="mt-5 font-display text-xs font-black uppercase tracking-widest text-misf-gold">
                  View page →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <DocumentarySection />
      <MissionStatement />
      <UpcomingEvents />
      <FederationMilestones />
      <KeyPages />
      <NewsGrid />
      <ShopSection />
      <SponsorsBar />
      <DonateStrip />
    </>
  )
}
