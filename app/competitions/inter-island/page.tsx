import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = { title: 'Inter-Island Tournaments' }

const TEAMS = [
  {
    name: 'Team Majuro',
    logo: '/images/team-majuro-logo.png',
    jersey: '/images/team-majuro-jersey.png',
  },
  {
    name: 'Team Kwajalein',
    logo: '/images/team-kwajalein-logo.png',
    jersey: '/images/team-kwajalein-jersey.png',
  },
  {
    name: 'Team Ebeye',
    logo: '/images/team-ebeye-logo.png',
    jersey: '/images/team-ebeye-jersey.png',
  },
]

export default function InterIslandPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        eyebrow="Competition"
        title="Inter-Island Tournaments"
        subtitle="Connecting the atolls through football."
        image="/images/inter-island-hero.jpg"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        {/* Overview */}
        <div className="space-y-4 text-misf-gray-text leading-relaxed">
          <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark">About</h2>
          <p>
            The Marshall Islands Soccer Federation is committed to providing soccer opportunities across all islands — Majuro, Kwajalein, and Ebeye — regardless of where Marshallese citizens live. The inter-island competition brings together representative teams from across the archipelago in futsal and 9v9 soccer formats, forging connections between communities separated by hundreds of miles of open Pacific Ocean.
          </p>
          <p>
            In January 2025, MISF hosted the inaugural inter-island competition. Team Majuro defeated Team Kwajalein 7–4 in futsal, and the 9v9 match ended 2–2 between Team Majuro and the Kwajalein Spartans. Ebeye withdrew their team but welcomed a youth soccer camp with 35 children participating.
          </p>
        </div>

        {/* Read More button */}
        <div>
          <Link
            href="/competitions/inter-island/kwajalein-2025"
            className="inline-block bg-misf-blue-dark text-white font-display font-black text-sm uppercase tracking-widest px-8 py-3 rounded-full hover:bg-misf-blue transition-colors"
          >
            Read More — Kwajalein & Ebeye 2025
          </Link>
        </div>

        {/* Sunset photo */}
        <div className="overflow-hidden rounded-lg">
          <img
            src="/images/inter-island-sunset.jpg"
            alt="Inter-island match at sunset, Kwajalein 2025"
            className="w-full object-cover"
          />
          <p className="text-xs text-gray-400 mt-2 italic">Kwajalein, January 2025</p>
        </div>

        {/* Representative Teams */}
        <div className="space-y-8">
          <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark">Marshall Islands Representative Teams</h2>
          <div className="grid grid-cols-3 gap-x-6 gap-y-3">
            {/* Names */}
            {TEAMS.map(({ name }) => (
              <p key={name} className="font-display font-black text-sm uppercase text-misf-blue-dark tracking-wide text-center">{name}</p>
            ))}
            {/* Logos */}
            {TEAMS.map(({ name, logo }) => (
              <div key={name} className="border border-gray-100 rounded-xl bg-white flex items-center justify-center p-6 aspect-square">
                <img src={logo} alt={`${name} crest`} className="w-full h-full object-contain" />
              </div>
            ))}
            {/* Jerseys */}
            {TEAMS.map(({ name, jersey }) => (
              <div key={name} className="border border-gray-100 rounded-xl bg-white flex items-center justify-center p-4 aspect-[3/4]">
                <img src={jersey} alt={`${name} jersey`} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
        </div>

        <Link href="/competitions/outrigger-cup" className="inline-block text-misf-blue font-display font-bold text-sm uppercase tracking-widest hover:text-misf-blue-dark transition-colors">
          ← All Competitions
        </Link>
      </div>
    </div>
  )
}
