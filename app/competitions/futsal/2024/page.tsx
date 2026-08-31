import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = { title: '2024 Ratak Cup — Men\'s Futsal' }

export default function Futsal2024Page() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        eyebrow="Futsal"
        title="2024 Ratak Cup"
        subtitle="Majuro, Marshall Islands"
        image="/images/futsal-2024.jpg"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        {/* Overview */}
        <div className="space-y-4 text-misf-gray-text leading-relaxed">
          <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark">Tournament Overview</h2>
          <p>
            The 2024 Ratak Cup brought together 26 players from four local clubs representing ten nationalities — Marshall Islands, Solomon Islands, Fiji, Tuvalu, Kiribati, Taiwan, Japan, Canada/Pakistan, England, and Zimbabwe — reflecting the diverse international community that calls Majuro home.
          </p>
          <p>
            Rairok FC claimed the championship with a 2–0 win over Majuro FC in the final, with Kairos Zinihite earning Player of the Tournament honours for a second consecutive year.
          </p>
        </div>

        {/* Teams */}
        <div className="space-y-5">
          <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark">Competing Teams</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: 'Delap FC', image: '/images/futsal-2024-delap-fc.jpg' },
              { name: 'Rairok FC', image: '/images/futsal-2024-rairok-fc.jpg' },
              { name: 'Majuro All Stars', image: '/images/futsal-2024-majuro-all-stars.jpg' },
              { name: 'Majuro FC', image: '/images/futsal-2024-majuro-fc.jpg' },
            ].map(({ name, image }) => (
              <div key={name} className="space-y-2">
                <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                  <img src={image} alt={name} className="w-full h-full object-cover object-top" />
                </div>
                <p className="font-display font-black text-sm uppercase text-misf-blue-dark text-center">{name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="space-y-8">
          <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark">Results</h2>

          <div>
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-gray-400 mb-4">Round One</h3>
            <div className="space-y-3">
              {[
                'Rairok FC 1–0 Majuro FC',
                'Delap FC 2–1 Majuro All Stars',
                'Rairok FC 1–0 Delap FC',
                'Majuro FC 2–0 Majuro All Stars',
                'Delap FC 1–1 Majuro FC',
                'Majuro All Stars 1–0 Rairok FC',
              ].map(r => (
                <div key={r} className="border-l-4 border-misf-gold pl-5">
                  <p className="font-display font-black text-misf-blue-dark">{r}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-gray-400 mb-4">Round Two</h3>
            <div className="space-y-3">
              {[
                'Majuro All Stars 2–1 Delap FC',
                'Rairok FC 1–0 Majuro FC',
                'Majuro All Stars 1–1 Majuro FC',
                'Delap FC 3–2 Rairok FC',
                'Rairok FC 0–0 Majuro All Stars',
                'Majuro FC 3–1 Delap FC',
              ].map(r => (
                <div key={r} className="border-l-4 border-misf-gold pl-5">
                  <p className="font-display font-black text-misf-blue-dark">{r}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-gray-400 mb-4">Finals</h3>
            <div className="space-y-3">
              <div className="border-l-4 border-gray-200 pl-5 space-y-1">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">3rd Place</p>
                <p className="font-display font-black text-misf-blue-dark">Majuro All Stars 4–1 Delap FC</p>
              </div>
              <div className="border-l-4 border-misf-blue-dark pl-5 space-y-1">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Final</p>
                <p className="font-display font-black text-misf-blue-dark text-xl">Rairok FC 2–0 Majuro FC</p>
              </div>
            </div>
          </div>
        </div>

        {/* Top scorers */}
        <div>
          <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark mb-4">Top Scorers</h2>
          <div className="space-y-3">
            {[
              { goals: '7', player: 'Tuitena Tiitera (Majuro All Stars) — incl. only hat-trick of the tournament' },
              { goals: '6', player: 'John' },
              { goals: '5', player: 'Kairos Zinihite' },
            ].map(({ goals, player }) => (
              <div key={goals} className="flex gap-5 text-sm border-b border-gray-100 pb-3">
                <span className="font-display font-black text-misf-blue-dark text-lg w-6 shrink-0">{goals}</span>
                <span className="text-gray-600">{player}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div>
          <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark mb-5">Awards</h2>
          <div className="divide-y divide-gray-100 border border-gray-100 rounded-lg overflow-hidden">
            {[
              { label: 'Winner', value: 'Rairok FC' },
              { label: 'Runner-up', value: 'Majuro FC' },
              { label: '3rd Place', value: 'Majuro All Stars' },
              { label: 'Player of the Tournament', value: 'Kairos Zinihite' },
              { label: 'Golden Boot', value: 'Tuitena Tiitera — 7 goals (Majuro All Stars)' },
              { label: 'Young Player', value: 'Oscar Belamana, age 18 (Rairok FC)' },
            ].map(({ label, value }) => (
              <div key={label} className="flex gap-4 text-sm px-5 py-4">
                <span className="text-misf-gold font-bold w-52 shrink-0">{label}</span>
                <span className="text-gray-700">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <Link href="/competitions/futsal" className="inline-block text-misf-blue font-display font-bold text-sm uppercase tracking-widest hover:text-misf-blue-dark transition-colors">
          ← All Editions
        </Link>
      </div>
    </div>
  )
}
