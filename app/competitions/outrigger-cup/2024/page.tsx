import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = { title: '2024 Outrigger Challenge Cup — Majuro' }

const POOL_A = [
  { team: 'Kiribati A', w: 2, d: 0, l: 0, f: 23, a: 2, pts: 6 },
  { team: 'RMI A', w: 1, d: 0, l: 1, f: 8, a: 10, pts: 3 },
  { team: 'FSM A', w: 0, d: 0, l: 2, f: 4, a: 23, pts: 0 },
]
const POOL_B = [
  { team: 'Kiribati B', w: 2, d: 0, l: 0, f: 17, a: 2, pts: 6 },
  { team: 'RMI B', w: 1, d: 0, l: 1, f: 10, a: 12, pts: 3 },
  { team: 'FSM B', w: 0, d: 0, l: 2, f: 3, a: 16, pts: 0 },
]

function Table({ rows }: { rows: typeof POOL_A }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-100">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-xs uppercase tracking-widest text-gray-400">
          <tr>
            <th className="text-left px-4 py-3">Team</th>
            <th className="px-3 py-3">W</th><th className="px-3 py-3">D</th><th className="px-3 py-3">L</th>
            <th className="px-3 py-3">F</th><th className="px-3 py-3">A</th>
            <th className="px-3 py-3 text-misf-blue-dark font-bold">Pts</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {rows.map((r, i) => (
            <tr key={r.team} className={i === 0 ? 'bg-misf-gold/5' : ''}>
              <td className="px-4 py-3 font-medium text-misf-blue-dark">{r.team}</td>
              <td className="px-3 py-3 text-center text-gray-600">{r.w}</td>
              <td className="px-3 py-3 text-center text-gray-600">{r.d}</td>
              <td className="px-3 py-3 text-center text-gray-600">{r.l}</td>
              <td className="px-3 py-3 text-center text-gray-600">{r.f}</td>
              <td className="px-3 py-3 text-center text-gray-600">{r.a}</td>
              <td className="px-3 py-3 text-center font-bold text-misf-blue-dark">{r.pts}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function Outrigger2024Page() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        eyebrow="Outrigger Challenge Cup"
        title="2024 Majuro"
        subtitle="Majuro, Marshall Islands — July 22–24, 2024"
        image="/images/outrigger-2024.jpg"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        {/* Overview */}
        <div className="space-y-4 text-misf-gray-text leading-relaxed">
          <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark">Tournament Overview</h2>
          <p>
            The inaugural Outrigger Challenge Cup took place in Majuro in futsal format across three days — July 22–24, 2024. Three Pacific nations participated: Marshall Islands, Kiribati and Federated States of Micronesia, each fielding both an A and B squad. Pool matches were held at SDA School; knockout matches at Marshall Islands High School.
          </p>
          <p>
            Kiribati dominated throughout the competition, with striker Bangao Bakabane contributing an extraordinary 18 goals across the tournament to claim the Golden Boot.
          </p>
        </div>

        {/* Match reports */}
        <div className="space-y-8">
          <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark">Match Reports</h2>

          <div>
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-gray-400 mb-4">Monday, July 22 — Pool Stage</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-misf-gold pl-5 space-y-1">
                <p className="font-display font-black text-misf-blue-dark">RMI A 0–8 Kiribati A</p>
                <p className="text-sm text-gray-600">Bakabane 7, Tetabo 1 (Kiribati)</p>
              </div>
              <div className="border-l-4 border-misf-gold pl-5 space-y-1">
                <p className="font-display font-black text-misf-blue-dark">RMI B 2–9 Kiribati B</p>
                <p className="text-sm text-gray-600">Tsai, Webb (RMI) · Martin Jr 5, Beeni 2, Taramon, Kiteon (Kiribati B)</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-gray-400 mb-4">Tuesday, July 23 — Pool Stage</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-misf-gold pl-5 space-y-1">
                <p className="font-display font-black text-misf-blue-dark">FSM B 3–8 RMI B</p>
                <p className="text-sm text-gray-600">Henly 3 (FSM) · Villi 2, Peter 2, Webb 2, Turanga, Facer (RMI)</p>
              </div>
              <div className="border-l-4 border-misf-gold pl-5 space-y-1">
                <p className="font-display font-black text-misf-blue-dark">Kiribati A 15–2 FSM A</p>
                <p className="text-sm text-gray-600">Bakabane 8, Keakea 2, Tetabo 2, Selevale 2, Eeri (Kiribati) · Henly, Laurdine (FSM)</p>
              </div>
              <div className="border-l-4 border-misf-gold pl-5 space-y-1">
                <p className="font-display font-black text-misf-blue-dark">FSM A 2–8 RMI A</p>
                <p className="text-sm text-gray-600">Ruweday, OG (FSM) · Schutz 2, Turanga 2, Zinihite, Peter, Phelon, Tsai (RMI)</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-gray-400 mb-4">Wednesday, July 24 — Knockout Stage</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-misf-gold pl-5 space-y-1">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Semi-final</p>
                <p className="font-display font-black text-misf-blue-dark">FSM 3–8 Marshall Islands</p>
                <p className="text-sm text-gray-600">Henly 2, Ruweday (FSM) · Turanga 2, Zinihite 2, Tsai, Schutz, Tekawara, Phelon (RMI)</p>
              </div>
              <div className="border-l-4 border-misf-gold pl-5 space-y-1">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Semi-final</p>
                <p className="font-display font-black text-misf-blue-dark">Kiribati A 5–3 Kiribati B</p>
                <p className="text-sm text-gray-600">Tetabo 3, Riuteri, Bakabane · Toom 2, Taratiera</p>
              </div>
              <div className="border-l-4 border-gray-200 pl-5 space-y-1">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Bronze Medal</p>
                <p className="font-display font-black text-misf-blue-dark">Kiribati B 15–1 FSM</p>
                <p className="text-sm text-gray-600">Reebo 3, Kiteon 2, Martin Jr 5, Tetaua 5 · Pluhs</p>
              </div>
              <div className="border-l-4 border-misf-blue-dark pl-5 space-y-1">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Final</p>
                <p className="font-display font-black text-misf-blue-dark text-xl">Kiribati A 6–2 Marshall Islands</p>
                <p className="text-sm text-gray-600">Tetabo 4, Bakabane 2 (Kiribati) · Peter, Webb (RMI)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Standings */}
        <div className="space-y-6">
          <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark">Group Standings</h2>
          <div>
            <p className="font-display font-bold text-xs uppercase tracking-widest text-gray-400 mb-3">Pool A</p>
            <Table rows={POOL_A} />
          </div>
          <div>
            <p className="font-display font-bold text-xs uppercase tracking-widest text-gray-400 mb-3">Pool B</p>
            <Table rows={POOL_B} />
          </div>
        </div>

        {/* Awards */}
        <div>
          <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark mb-5">Awards</h2>
          <div className="divide-y divide-gray-100 border border-gray-100 rounded-lg overflow-hidden">
            {[
              { label: 'Winner', value: 'Kiribati' },
              { label: 'Runner-up', value: 'Marshall Islands' },
              { label: 'Player of the Tournament', value: 'Matakite Taea — Kiribati A (GK)' },
              { label: 'Golden Boot', value: 'Bangao Bakabane — 18 goals (Kiribati A)' },
              { label: 'Young Player', value: 'Yopi Laurdine, age 16 (FSM)' },
            ].map(({ label, value }) => (
              <div key={label} className="flex gap-4 text-sm px-5 py-4">
                <span className="text-misf-gold font-bold w-52 shrink-0">{label}</span>
                <span className="text-gray-700">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <Link href="/competitions/outrigger-cup" className="inline-block text-misf-blue font-display font-bold text-sm uppercase tracking-widest hover:text-misf-blue-dark transition-colors">
          ← All Editions
        </Link>
      </div>
    </div>
  )
}
