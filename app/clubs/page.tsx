import type { Metadata } from 'next'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = {
  title: 'Clubs',
  description: 'Club overview for teams competing in MISF futsal competitions and future soccer league competitions.',
}

const CLUBS = [
  {
    name: 'Boca Lagoon',
    location: 'Majuro',
    status: 'Current futsal club',
    founded: '2026',
    competition: 'Ratak Cup',
    image: '/images/futsal-2026-boca-lagoon.webp',
    logo: null,
    jersey: null,
    bio: 'Boca Lagoon became one of the breakout clubs of the 2026 Ratak Cup, lifting the title after a golden-goal final.',
    honours: ['2026 Ratak Cup winners'],
  },
  {
    name: 'Rairok Flamengo',
    location: 'Rairok, Majuro',
    status: 'Current futsal club',
    founded: '2026',
    competition: 'Ratak Cup',
    image: '/images/futsal-2026-rairok-flamengo.webp',
    logo: null,
    jersey: null,
    bio: 'Rairok Flamengo represents the Rairok community and has competed in the modern Ratak Cup era.',
    honours: ['2026 Ratak Cup third place'],
  },
  {
    name: 'Ajeltake Arsenal',
    location: 'Ajeltake, Majuro',
    status: 'Current futsal club',
    founded: '2026',
    competition: 'Ratak Cup',
    image: '/images/futsal-2026-ajeltake-arsenal.webp',
    logo: null,
    jersey: null,
    bio: 'Ajeltake Arsenal gives the Ajeltake area a club identity within MISF domestic futsal competition.',
    honours: ['2026 Ratak Cup participant'],
  },
  {
    name: 'Real Majuro',
    location: 'Majuro',
    status: 'Current futsal club',
    founded: '2026',
    competition: 'Ratak Cup',
    image: '/images/futsal-2026-real-majuro.webp',
    logo: null,
    jersey: null,
    bio: 'Real Majuro is part of the new wave of domestic clubs helping establish regular football competition in the capital.',
    honours: ['2026 Ratak Cup participant'],
  },
  {
    name: 'Iakwe Football Club',
    location: 'Majuro',
    status: 'Former futsal club',
    founded: '2023',
    competition: 'Marshall Islands Futsal League',
    image: '/images/futsal-2023-iakwe-fc.jpg',
    logo: null,
    jersey: null,
    bio: 'Iakwe Football Club were the first champions of organised domestic futsal in the Marshall Islands.',
    honours: ['2023 Marshall Islands Futsal League champions'],
  },
  {
    name: 'Jabro FC',
    location: 'Majuro',
    status: 'Former futsal club',
    founded: '2023',
    competition: 'Marshall Islands Futsal League',
    image: '/images/futsal-2023-jabro-fc.jpg',
    logo: null,
    jersey: null,
    bio: 'Jabro FC competed in the first organised futsal league and finished as runners-up in 2023.',
    honours: ['2023 Marshall Islands Futsal League runners-up'],
  },
  {
    name: 'Team Majuro',
    location: 'Majuro',
    status: 'Representative club',
    founded: '2025',
    competition: 'Inter-Island',
    image: '/images/inter-island-futsal-match.jpg',
    logo: '/images/team-majuro-logo.png',
    jersey: '/images/team-majuro-jersey.png',
    bio: 'Team Majuro represents the capital in inter-island competition and will help shape the pathway toward future soccer league clubs.',
    honours: ['2025 Inter-Island futsal winners'],
  },
  {
    name: 'Team Kwajalein',
    location: 'Kwajalein',
    status: 'Representative club',
    founded: '2025',
    competition: 'Inter-Island',
    image: '/images/inter-island-hero.jpg',
    logo: '/images/team-kwajalein-logo.png',
    jersey: '/images/team-kwajalein-jersey.png',
    bio: 'Team Kwajalein connects one of the country’s major population centres to the wider MISF domestic football pathway.',
    honours: ['2025 Inter-Island participant'],
  },
  {
    name: 'Team Ebeye',
    location: 'Ebeye',
    status: 'Representative club',
    founded: '2025',
    competition: 'Inter-Island',
    image: '/images/coaching-placements-ebeye.jpg',
    logo: '/images/team-ebeye-logo.png',
    jersey: '/images/team-ebeye-jersey.png',
    bio: 'Team Ebeye represents the Ebeye community and is part of MISF’s work to build football beyond Majuro.',
    honours: ['Inter-island pathway club'],
  },
]

function AssetBox({ label, src }: { label: string; src: string | null }) {
  return (
    <div className="border border-gray-200 bg-white p-4 min-h-[120px] flex items-center justify-center">
      {src ? (
        <img src={src} alt="" className="max-h-24 max-w-full object-contain" />
      ) : (
        <div className="text-center">
          <p className="font-display font-black text-xs uppercase tracking-[0.2em] text-misf-gold mb-2">{label}</p>
          <p className="text-xs text-misf-gray-text">To be added</p>
        </div>
      )}
    </div>
  )
}

export default function ClubsPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        eyebrow="Marshall Islands Soccer Federation"
        title="Clubs"
        subtitle="Club profiles for futsal teams, inter-island representatives, and future soccer league clubs."
        image="/images/futsal-2026.webp"
        imagePosition="center 45%"
      />

      <section className="bg-misf-blue py-9 sm:py-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display font-black text-xl sm:text-2xl lg:text-3xl uppercase text-white leading-snug">
            MISF clubs give communities a badge, colours, honours, and a pathway into future domestic soccer.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-misf-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {CLUBS.map((club) => (
              <article key={club.name} className="overflow-hidden border border-gray-200 bg-white">
                <div className="relative aspect-[16/8] bg-misf-blue-dark overflow-hidden">
                  <img src={club.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-misf-blue-dark/35" />
                  <div className="absolute left-5 bottom-5">
                    <p className="font-display font-black text-xs uppercase tracking-[0.25em] text-misf-gold mb-2">{club.status}</p>
                    <h2 className="font-display font-black text-3xl uppercase text-white leading-none">{club.name}</h2>
                  </div>
                </div>
                <div className="p-6 sm:p-7">
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <AssetBox label="Logo" src={club.logo} />
                    <AssetBox label="Jersey" src={club.jersey} />
                  </div>

                  <p className="text-sm text-misf-gray-text leading-relaxed mb-6">{club.bio}</p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-gray-200 mb-6">
                    {[
                      ['Location', club.location],
                      ['Founded', club.founded],
                      ['Competition', club.competition],
                      ['Status', club.status],
                    ].map(([label, value]) => (
                      <div key={`${club.name}-${label}`} className="bg-misf-gray-light p-3">
                        <p className="font-display font-black text-[10px] uppercase tracking-widest text-misf-gold mb-1">{label}</p>
                        <p className="text-sm text-misf-blue-dark font-semibold">{value}</p>
                      </div>
                    ))}
                  </div>

                  <div>
                    <p className="font-display font-black text-xs uppercase tracking-[0.25em] text-misf-gold mb-3">Honours</p>
                    <ul className="space-y-2">
                      {club.honours.map((honour) => (
                        <li key={honour} className="text-sm text-misf-gray-text flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-misf-gold" />
                          {honour}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
