import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = { title: '2026 Ratak Cup — Men\'s Futsal' }

export default function Futsal2026Page() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        eyebrow="Futsal"
        title="2026 Ratak Cup"
        subtitle="Majuro, Marshall Islands — March 28 – April 7, 2026"
        image="/images/futsal-2026.webp"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        {/* Overview */}
        <div className="space-y-4 text-misf-gray-text leading-relaxed">
          <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark">Tournament Overview</h2>
          <p>
            The 2026 Centennial 38 Ratak Cup was the centrepiece of the futsal calendar in the Marshall Islands, sponsored by Centennial 38 — a Colorado Rapids supporters group. A record six teams competed across three match days, with Boca Lagoon ultimately crowned champions via a golden goal in a tense final.
          </p>
        </div>

        {/* Teams */}
        <div className="space-y-5">
          <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark">Competing Teams</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: 'Real Majuro', image: '/images/futsal-2026-real-majuro.webp' },
              { name: 'Rairok Flamengo', image: '/images/futsal-2026-rairok-flamengo.webp' },
              { name: 'Ajeltake Arsenal', image: '/images/futsal-2026-ajeltake-arsenal.webp' },
              { name: 'Boca Lagoon', image: '/images/futsal-2026-boca-lagoon.webp' },
            ].map(({ name, image }) => (
              <div key={name} className="space-y-2">
                <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                  <img src={image} alt={name} className="w-full h-full object-cover object-top" />
                </div>
                <p className="font-display font-black text-sm uppercase text-misf-blue-dark text-center">{name}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400 italic">Rita Plate and Vasco da Laura also competed.</p>
        </div>

        {/* Results */}
        <div className="space-y-8">
          <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark">Results</h2>

          <div>
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-gray-400 mb-4">April 7 — Semi-Finals</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-misf-gold pl-5 space-y-1">
                <p className="font-display font-black text-misf-blue-dark">Boca Lagoon 9–2 Ajeltake Arsenal</p>
              </div>
              <div className="border-l-4 border-misf-gold pl-5 space-y-1">
                <p className="font-display font-black text-misf-blue-dark">Vasco da Laura 1–0 Rairok Flamengo</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-gray-400 mb-4">April 7 — 3rd Place Playoff</h3>
            <div className="border-l-4 border-gray-200 pl-5 space-y-1">
              <p className="font-display font-black text-misf-blue-dark">Rairok Flamengo 5–4 Ajeltake Arsenal</p>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-gray-400 mb-4">April 7 — Final</h3>
            <div className="border-l-4 border-misf-blue-dark pl-5 space-y-1">
              <p className="font-display font-black text-misf-blue-dark text-xl">Boca Lagoon 3–2 Vasco da Laura</p>
              <p className="text-sm text-gray-500 italic">Won via golden goal</p>
            </div>
          </div>
        </div>

        {/* Awards */}
        <div>
          <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark mb-5">Awards</h2>
          <div className="divide-y divide-gray-100 border border-gray-100 rounded-lg overflow-hidden">
            {[
              { label: 'Winner', value: 'Boca Lagoon' },
              { label: 'Runner-up', value: 'Vasco da Laura' },
              { label: '3rd Place', value: 'Rairok Flamengo' },
              { label: 'Player of the Tournament', value: 'Jack Muller (Vasco da Laura)' },
              { label: 'Golden Boot', value: 'Kairos Zinihite — 13 goals (Boca Lagoon)' },
              { label: 'Young Player', value: 'Kaboua Anterea, age 13 (Rairok Flamengo)' },
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
