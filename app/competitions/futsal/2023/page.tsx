import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = { title: '2023 Marshall Islands Futsal League' }

const STANDINGS = [
  { team: 'Iakwe Football Club', pld: 3, w: 3, d: 0, l: 0, gf: 14, ga: 4, pts: 9 },
  { team: 'Jabro FC', pld: 3, w: 2, d: 0, l: 1, gf: 18, ga: 7, pts: 6 },
  { team: 'Kajur United', pld: 3, w: 1, d: 0, l: 2, gf: 9, ga: 8, pts: 3 },
  { team: 'Majuro United', pld: 3, w: 0, d: 0, l: 3, gf: 5, ga: 27, pts: 0 },
]

export default function Futsal2023Page() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        eyebrow="Futsal"
        title="2023 MIFL"
        subtitle="Co-op School, Majuro — August 19 – September 9, 2023"
        image="/images/futsal-2023.webp"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        {/* Overview */}
        <div className="space-y-4 text-misf-gray-text leading-relaxed">
          <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark">Historic First</h2>
          <p>
            The 2023 Marshall Islands Futsal League was the first-ever organised futsal competition in the Marshall Islands. Held across three game weeks at Co-op School in Majuro, the league brought together four clubs competing in a round-robin format — 48 goals scored across six matches, an average of eight per game.
          </p>
          <p>
            Iakwe Football Club emerged as champions with a perfect record, winning all three matches and conceding just four goals throughout the competition.
          </p>
        </div>

        {/* Match results */}
        <div className="space-y-8">
          <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark">Match Results</h2>

          <div>
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-gray-400 mb-4">August 19, 2023</h3>
            <div className="space-y-3">
              <div className="border-l-4 border-misf-gold pl-5">
                <p className="font-display font-black text-misf-blue-dark">Majuro United 2–14 Jabro FC</p>
              </div>
              <div className="border-l-4 border-misf-gold pl-5">
                <p className="font-display font-black text-misf-blue-dark">Iakwe FC 5–0 Kajur United</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-gray-400 mb-4">August 26, 2023</h3>
            <div className="space-y-3">
              <div className="border-l-4 border-misf-gold pl-5">
                <p className="font-display font-black text-misf-blue-dark">Iakwe FC 4–2 Majuro United</p>
              </div>
              <div className="border-l-4 border-misf-gold pl-5">
                <p className="font-display font-black text-misf-blue-dark">Kajur United 0–2 Jabro FC</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-gray-400 mb-4">September 9, 2023</h3>
            <div className="space-y-3">
              <div className="border-l-4 border-misf-gold pl-5">
                <p className="font-display font-black text-misf-blue-dark">Jabro FC 2–5 Iakwe FC</p>
              </div>
              <div className="border-l-4 border-misf-gold pl-5">
                <p className="font-display font-black text-misf-blue-dark">Majuro United 3–9 Kajur United</p>
              </div>
            </div>
          </div>
        </div>

        {/* Standings */}
        <div>
          <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark mb-4">Final Standings</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-100">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-xs uppercase tracking-widest text-gray-400">
                <tr>
                  <th className="text-left px-4 py-3">Team</th>
                  <th className="px-3 py-3">Pld</th>
                  <th className="px-3 py-3">W</th>
                  <th className="px-3 py-3">D</th>
                  <th className="px-3 py-3">L</th>
                  <th className="px-3 py-3">GF</th>
                  <th className="px-3 py-3">GA</th>
                  <th className="px-3 py-3 text-misf-blue-dark font-bold">Pts</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {STANDINGS.map((r, i) => (
                  <tr key={r.team} className={i === 0 ? 'bg-misf-gold/5' : ''}>
                    <td className="px-4 py-3 font-medium text-misf-blue-dark">{r.team}</td>
                    <td className="px-3 py-3 text-center text-gray-600">{r.pld}</td>
                    <td className="px-3 py-3 text-center text-gray-600">{r.w}</td>
                    <td className="px-3 py-3 text-center text-gray-600">{r.d}</td>
                    <td className="px-3 py-3 text-center text-gray-600">{r.l}</td>
                    <td className="px-3 py-3 text-center text-gray-600">{r.gf}</td>
                    <td className="px-3 py-3 text-center text-gray-600">{r.ga}</td>
                    <td className="px-3 py-3 text-center font-bold text-misf-blue-dark">{r.pts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Teams */}
        <div className="space-y-5">
          <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark">Competing Teams</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: 'Kajur United', image: '/images/futsal-2023-kajur-fc.jpg' },
              { name: 'Majuro United', image: '/images/futsal-2023-majuro-united.jpg' },
              { name: 'Iakwe Football Club', image: '/images/futsal-2023-iakwe-fc.jpg' },
              { name: 'Jabro FC', image: '/images/futsal-2023-jabro-fc.jpg' },
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

        {/* Top scorers */}
        <div>
          <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark mb-4">Top Scorers</h2>
          <div className="space-y-3">
            {[
              { goals: '8', player: 'Cullen Turanga (Iakwe FC)' },
              { goals: '5', player: 'Junior Vili (Jabro FC)' },
              { goals: '4', player: 'Gabino Gallegos (Jabro FC) · Kornel (Majuro United) · Kairos Zinihite (Majuro United)' },
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
              { label: 'Champion', value: 'Iakwe Football Club' },
              { label: 'Runner-up', value: 'Jabro FC' },
              { label: 'Player of the Tournament', value: 'Kairos Zinihite (Majuro United)' },
              { label: 'Golden Boot', value: 'Cullen Turanga — 8 goals (Iakwe FC)' },
              { label: 'Young Player', value: 'Gabino Gallegos, age 16 (Jabro FC)' },
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
