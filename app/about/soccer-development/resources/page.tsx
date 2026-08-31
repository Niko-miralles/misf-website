import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = {
  title: 'Resource Hub',
  description: 'Resources for referees, players, administrators, and coaches, including training guides, coaching documentation, and development tools.',
}

const RESOURCE_CATEGORIES = [
  {
    title: 'Players',
    eyebrow: 'Pathways and training',
    description: 'Player registration, national team pathway information, and development links for Marshallese players.',
    image: '/images/soccer-development-hero.jpg',
    resources: [
      { label: 'Register player interest', href: '/get-involved/player' },
      { label: 'National Team', href: '/national-teams' },
      { label: "Men's Soccer", href: '/teams/mens-soccer' },
    ],
  },
  {
    title: 'Coaches',
    eyebrow: 'Courses and placements',
    description: 'Coaching education routes, online courses, and placement information for coaches supporting MISF.',
    image: '/images/coaching-lloyd-presenting.jpg',
    resources: [
      { label: 'Coaching overview', href: '/get-involved/coaching' },
      { label: 'FAW coaching courses', href: '/get-involved/coaching/faw' },
      { label: 'OFC coaching courses', href: '/get-involved/coaching/ofc' },
      { label: 'Coaching placements', href: '/get-involved/coaching/placements' },
    ],
  },
  {
    title: 'Referees',
    eyebrow: 'Match officials',
    description: 'Rules, laws of the game, and future referee development resources for domestic competitions.',
    image: '/images/futsal-2026.webp',
    resources: [
      { label: 'IFAB Laws of the Game', href: 'https://www.theifab.com/laws-of-the-game/', external: true },
      { label: 'Domestic futsal', href: '/competitions/futsal' },
      { label: 'Marshall Islands Soccer League', href: '/competitions/misl' },
    ],
  },
  {
    title: 'Administrators',
    eyebrow: 'Clubs and competitions',
    description: 'Useful links for club contacts, competition planning, volunteers, and federation administration.',
    image: '/images/inter-island-commissioner.jpg',
    resources: [
      { label: 'Clubs overview', href: '/clubs' },
      { label: 'Competitions overview', href: '/competitions' },
      { label: 'Volunteer with MISF', href: '/get-involved/volunteer' },
      { label: 'Contact MISF', href: '/contact' },
    ],
  },
]

export default function ResourceHubPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        eyebrow="Soccer Development"
        title="Resource Hub"
        subtitle="Resources for referees, players, administrators, and coaches."
        image="/images/coaching-placements-school.jpg"
        imagePosition="center 42%"
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-2 font-display text-xs font-black uppercase tracking-[0.25em] text-misf-gold">
              Development tools
            </p>
            <h2 className="font-display text-3xl font-black uppercase leading-tight text-misf-blue-dark sm:text-4xl">
              One place for football resources.
            </h2>
          </div>
          <p className="max-w-3xl text-base leading-relaxed text-misf-gray-text sm:text-lg">
            This hub brings together links and documents for the people building the game: players, coaches, referees, clubs, volunteers, and administrators. It can grow over time with PDFs, guides, training documents, and competition packs.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {RESOURCE_CATEGORIES.map((category) => (
            <article key={category.title} className="overflow-hidden border border-gray-200 bg-white">
              <div className="relative h-56 bg-misf-blue-dark">
                <Image
                  src={category.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-misf-blue-dark/75 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="mb-2 font-display text-xs font-black uppercase tracking-[0.2em] text-misf-gold">
                    {category.eyebrow}
                  </p>
                  <h3 className="font-display text-3xl font-black uppercase text-white">
                    {category.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-5 text-sm leading-relaxed text-misf-gray-text">
                  {category.description}
                </p>
                <div className="grid gap-2">
                  {category.resources.map((resource) =>
                    resource.external ? (
                      <a
                        key={resource.label}
                        href={resource.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-misf-gray-light px-4 py-3 font-display text-sm font-black uppercase tracking-wide text-misf-blue-dark transition-colors hover:bg-misf-gold"
                      >
                        {resource.label} ↗
                      </a>
                    ) : (
                      <Link
                        key={resource.label}
                        href={resource.href}
                        className="bg-misf-gray-light px-4 py-3 font-display text-sm font-black uppercase tracking-wide text-misf-blue-dark transition-colors hover:bg-misf-gold"
                      >
                        {resource.label} →
                      </Link>
                    )
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

    </div>
  )
}
