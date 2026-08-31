import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHeader from '@/components/ui/PageHeader'
import DonateStrip from '@/components/home/DonateStrip'

export const metadata: Metadata = {
  title: 'Mission Statement & Strategy',
  description: 'MISF mission statement, strategic goals, and roadmap for developing football across the Marshall Islands.',
}

const GOALS = [
  {
    title: 'Create opportunity',
    body: 'Build clear routes for Marshallese players to play, coach, volunteer, and represent their nation.',
    image: '/images/youth-soccer.webp',
  },
  {
    title: 'Grow the game at home',
    body: 'Support school sessions, community coaching, futsal, soccer leagues, and island-based activity.',
    image: '/images/our-story-school.png',
  },
  {
    title: 'Represent internationally',
    body: 'Develop national teams, fixtures, records, and the foundations needed for future confederation recognition.',
    image: '/images/team-huddle.jpg',
  },
  {
    title: 'Tell the Marshallese story',
    body: 'Use football to share Marshallese identity, resilience, diaspora connection, and climate reality with the world.',
    image: '/images/islands-majuro-aerial.jpg',
  },
]

const ROADMAP = [
  {
    year: '2026',
    title: 'Build the base',
    body: 'Expand youth coaching, publish clear competition structures, and keep national team activity visible.',
    image: '/images/coaching-placements-school.jpg',
  },
  {
    year: '2027',
    title: 'Home matches',
    body: 'Work toward bringing organised international soccer activity to the Marshall Islands for the first time.',
    image: '/images/inter-island-futsal-match.jpg',
  },
  {
    year: '2028',
    title: 'Regional pathway',
    body: 'Strengthen partnerships, coaching education, and governance for future regional competition.',
    image: '/images/outrigger-2025.png',
  },
  {
    year: '2030',
    title: 'Recognition pathway',
    body: 'Continue the long-term route toward confederation and FIFA recognition for Marshall Islands football.',
    image: '/images/rmi-timeline.webp',
  },
]

const PILLARS = [
  'National team development',
  'Youth and school football',
  'Domestic futsal and soccer',
  'Coach education',
  'Partnerships and fundraising',
  'Climate and cultural advocacy',
]

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        eyebrow="About MISF"
        title="Mission Statement & Strategy"
        subtitle="Our ultimate goals, and the route we are building to reach them."
        image="/images/soccer-development-hero.jpg"
        imagePosition="center 42%"
      />

      <section className="bg-misf-blue py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="relative min-h-[280px] overflow-hidden bg-misf-blue-dark">
            <Image
              src="/images/team-huddle.jpg"
              alt="Marshall Islands players together"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="mb-4 font-display text-xs font-black uppercase tracking-[0.25em] text-misf-gold">
              Mission Statement
            </p>
            <h2 className="font-display text-3xl font-black uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
              We provide opportunities for Marshallese people everywhere to play, coach, represent their nation, and connect through soccer.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              MISF is building the game from the ground up: on-island, across the diaspora, and through the national team programme.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-8">
          <p className="mb-2 font-display text-xs font-black uppercase tracking-[0.25em] text-misf-gold">
            Strategy
          </p>
          <h2 className="font-display text-3xl font-black uppercase text-misf-blue-dark sm:text-4xl">
            What we are building
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {GOALS.map((goal) => (
            <article key={goal.title} className="border border-gray-200 bg-white">
              <div className="relative h-52 overflow-hidden bg-misf-blue-dark">
                <Image
                  src={goal.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-misf-blue-dark/20" />
              </div>
              <div className="p-6">
                <h3 className="mb-3 font-display text-xl font-black uppercase text-misf-blue-dark">
                  {goal.title}
                </h3>
                <p className="text-sm leading-relaxed text-misf-gray-text">{goal.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-misf-blue py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="mb-2 font-display text-xs font-black uppercase tracking-[0.25em] text-misf-gold">
                Roadmap
              </p>
              <h2 className="font-display text-3xl font-black uppercase text-white sm:text-4xl">
                A practical route forward
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
                The roadmap is designed to be simple enough to publish, update, and measure as the federation grows.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {ROADMAP.map((item) => (
                <article key={item.year} className="overflow-hidden bg-white">
                  <div className="relative h-44 bg-misf-blue-dark">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <div className="absolute left-5 top-5 bg-misf-gold px-4 py-2 font-display text-2xl font-black text-misf-blue-dark">
                      {item.year}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 font-display text-lg font-black uppercase text-misf-blue-dark">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-misf-gray-text">{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="relative min-h-[420px] overflow-hidden bg-misf-blue-dark">
            <Image
              src="/images/our-story-national-team.jpg"
              alt="Marshall Islands national team"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-misf-blue-dark/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 sm:p-8">
              <p className="mb-2 font-display text-xs font-black uppercase tracking-[0.25em] text-misf-gold">
                Long term goal
              </p>
              <h2 className="max-w-xl font-display text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
                Build a federation that lasts.
              </h2>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="mb-2 font-display text-xs font-black uppercase tracking-[0.25em] text-misf-gold">
              Focus areas
            </p>
            <h2 className="font-display text-3xl font-black uppercase text-misf-blue-dark sm:text-4xl">
              The work behind the goal
            </h2>
            <p className="mt-4 text-base leading-relaxed text-misf-gray-text">
              The strategy is not only about one national team. It is about creating regular activity, local leadership, visible competitions, and a stronger pathway for every player who wants to be part of the Marshall Islands football story.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {PILLARS.map((pillar) => (
                <div key={pillar} className="border-l-4 border-misf-gold bg-misf-gray-light px-5 py-4">
                  <p className="font-display text-sm font-black uppercase tracking-wide text-misf-blue-dark">
                    {pillar}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-4 border-t border-gray-200 pt-8">
          <Link
            href="/get-involved/sponsors"
            className="bg-misf-blue-dark px-7 py-4 font-display text-sm font-black uppercase tracking-widest text-white transition-colors hover:bg-misf-blue"
          >
            Support the roadmap →
          </Link>
          <Link
            href="/contact"
            className="bg-misf-gold px-7 py-4 font-display text-sm font-black uppercase tracking-widest text-misf-blue-dark transition-colors hover:bg-[#d4911c]"
          >
            Contact MISF →
          </Link>
        </div>
      </section>

      <DonateStrip />
    </div>
  )
}
