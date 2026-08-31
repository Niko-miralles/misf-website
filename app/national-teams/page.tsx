import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = {
  title: 'National Team',
  description: 'Marshall Islands national team records, milestones, top goalscorers, and legacy numbers.',
}

const TEAM_CARDS = [
  {
    title: "Men's Soccer Team",
    status: 'First fixtures played in 2025',
    image: '/images/outrigger-2025.png',
    href: '/teams/mens-soccer',
  },
  {
    title: "Men's Futsal Team",
    status: 'First competed in 2024',
    image: '/images/futsal-2024.jpg',
    href: '/teams/mens-futsal',
  },
  {
    title: "Women's Futsal Team",
    status: 'Training camps underway',
    image: '/images/team-huddle.jpg',
    href: '/teams/womens-futsal',
  },
]

const RECORD_GROUPS = [
  {
    title: "Men's Soccer Records",
    records: [
      {
        label: 'First Goalscorer',
        value: 'Josiah Blanton',
        detail: 'vs Turks & Caicos, 2025 Outrigger Cup, 16 August 2025',
      },
      {
        label: 'Oldest Player',
        value: 'Jonathan Koehler',
        detail: '43 years, 174 days vs Turks & Caicos, 16 August 2025',
      },
      {
        label: 'Youngest Player',
        value: 'Zach London',
        detail: '15 years, 81 days vs US Virgin Islands, 14 August 2025',
      },
      {
        label: 'Top Goalscorers',
        value: 'Josiah Blanton, Aaron Anitok-Brokken',
        detail: '1 goal each',
      },
    ],
  },
  {
    title: "Men's Futsal Records",
    records: [
      {
        label: 'First Goalscorer',
        value: 'Charles Facer',
        detail: 'vs Federated States of Micronesia, 2024 Outrigger Cup, 23 July 2024',
      },
      {
        label: 'Oldest Player',
        value: 'Jonathan Koehler',
        detail: '42 years, 152 days vs Kiribati, 24 July 2024',
      },
      {
        label: 'Youngest Player',
        value: 'Junior Villi',
        detail: '16 years, 80 days vs Federated States of Micronesia, 23 July 2024',
      },
      {
        label: 'Top Goalscorers',
        value: 'Cullen Turanga',
        detail: '5 goals',
      },
    ],
  },
]

const FUTSAL_SCORERS = [
  { name: 'Cullen Turanga', goals: 5 },
  { name: 'Gabino Gallegos', goals: 4 },
  { name: 'Matt Webb', goals: 4 },
  { name: 'Kairos Zinihite', goals: 3 },
  { name: 'Folliet Schutz', goals: 3 },
  { name: 'Pat Phelon', goals: 2 },
  { name: 'Ming-Che Tsai', goals: 2 },
  { name: 'Junior Villi', goals: 2 },
]

export default function NationalTeamsPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        eyebrow="National Teams"
        title="National Team"
        subtitle="Marshall Islands national team milestones, records, goalscorers, and legacy numbers."
        image="/images/team-huddle.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-4 text-misf-gray-text leading-relaxed">
          <p>
            The Marshall Islands were once known as the last nation on Earth without a football team. Since MISF was founded in 2021, the national team pathway has moved from an idea to competitive fixtures, training camps, and historic firsts.
          </p>
          <p>
            The men's futsal team first competed in 2024. The men's soccer team played its first fixtures in 2025, while the women's futsal programme continues to build through training camps.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {TEAM_CARDS.map((team) => (
            <Link
              key={team.title}
              href={team.href}
              className="group border border-gray-200 overflow-hidden hover:border-misf-blue transition-colors"
            >
              <div className="aspect-[16/10] overflow-hidden bg-misf-blue-dark">
                <img
                  src={team.image}
                  alt={team.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="font-display font-bold text-xs uppercase tracking-widest text-misf-gold mb-2">
                  {team.status}
                </p>
                <h2 className="font-display font-black text-xl uppercase text-misf-blue-dark group-hover:text-misf-blue transition-colors">
                  {team.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>

        <div className="space-y-10">
          {RECORD_GROUPS.map((group) => (
            <section key={group.title} className="overflow-hidden border border-misf-blue-dark/10 bg-misf-blue-dark">
              <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr]">
                <div className="relative min-h-[260px] p-7 sm:p-9 flex flex-col justify-between">
                  <div
                    className="absolute inset-0 opacity-25 bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/outrigger-2025.png')" }}
                  />
                  <div className="absolute inset-0 bg-misf-blue-dark/80" />
                  <div className="relative">
                    <p className="font-display font-black text-xs uppercase tracking-[0.25em] text-misf-gold mb-3">
                      Records
                    </p>
                    <h2 className="font-display font-black text-4xl sm:text-5xl uppercase text-white leading-none">
                      {group.title}
                    </h2>
                  </div>
                  <p className="relative mt-8 text-sm leading-relaxed text-white/75 max-w-xs">
                    Milestones from the Marshall Islands national team pathway.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 bg-white">
                  {group.records.map((record, index) => (
                    <div
                      key={`${group.title}-${record.label}`}
                      className="relative min-h-[210px] border-b border-r border-gray-200 p-6 sm:p-7"
                    >
                      <span className="absolute right-5 top-5 font-display font-black text-5xl leading-none text-misf-gray-light">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <p className="relative font-display font-bold text-xs uppercase tracking-widest text-misf-gold mb-4">
                        {record.label}
                      </p>
                      <h3 className="relative font-display font-black text-2xl uppercase text-misf-blue-dark mb-4 leading-tight max-w-[14rem]">
                        {record.value}
                      </h3>
                      <p className="relative text-sm text-misf-gray-text leading-relaxed max-w-sm">{record.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        <section className="mt-14 overflow-hidden border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr]">
            <div className="bg-misf-gray-light p-7 sm:p-9">
              <p className="font-display font-black text-xs uppercase tracking-[0.25em] text-misf-gold mb-2">
                Goals
              </p>
              <h2 className="font-display font-black text-4xl uppercase text-misf-blue-dark leading-none">
                Men's Futsal Top Scorers
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-misf-gray-text">
                The leading scorers from the men's futsal programme.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 bg-white">
              {FUTSAL_SCORERS.map((scorer, index) => (
                <div key={scorer.name} className="flex items-center gap-4 border-b border-r border-gray-200 p-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-misf-blue-dark text-white">
                    <span className="font-display font-black text-2xl">{scorer.goals}</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-[11px] uppercase tracking-widest text-misf-gold">
                      #{index + 1}
                    </p>
                    <p className="text-base text-misf-gray-text leading-tight">{scorer.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="legacy-numbers" className="mt-16 border border-gray-200 p-8 sm:p-10 text-center">
          <p className="font-display font-black text-xs uppercase tracking-[0.25em] text-misf-gold mb-2">
            Legacy Numbers
          </p>
          <h2 className="font-display font-black text-3xl sm:text-4xl uppercase text-misf-blue-dark mb-4">
            Every Cap Has a Place in History
          </h2>
          <p className="text-misf-gray-text max-w-2xl mx-auto leading-relaxed mb-6">
            Every player who represents the Marshall Islands national team is awarded a legacy number, recording their place in national team history.
          </p>
          <Link
            href="/teams/mens-soccer"
            className="inline-block bg-misf-blue-dark text-white font-display font-black text-sm uppercase tracking-widest px-8 py-3 hover:bg-misf-blue transition-colors"
          >
            View Teams →
          </Link>
        </section>
      </div>
    </div>
  )
}
