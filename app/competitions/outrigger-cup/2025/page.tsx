import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = { title: '2025 Outrigger Challenge Cup — Arkansas' }

export default function Outrigger2025Page() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        eyebrow="Outrigger Challenge Cup"
        title="2025 Arkansas"
        subtitle="Springdale, Arkansas, USA — August 13–16, 2025"
        image="/images/outrigger-2025.png"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        {/* Intro */}
        <div className="space-y-4 text-misf-gray-text leading-relaxed text-base">
          <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark">Historic Debut</h2>
          <p>
            The Marshall Islands made their historic debut in international soccer at the four-team Outrigger Challenge Cup held in Springdale, Arkansas from August 13–16, 2025. This tournament marked the moment "the last country in the world without a football team" finally arrived on the international stage.
          </p>
        </div>

        {/* Match by match */}
        <div className="space-y-8">
          <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark">Match Reports</h2>

          <div className="border-l-4 border-misf-gold pl-5 space-y-2">
            <p className="font-display font-bold text-misf-blue-dark uppercase text-xs tracking-widest">August 13 — US Virgin Islands vs Turks & Caicos Islands</p>
            <p className="font-display font-black text-xl text-misf-blue-dark">1–1 (USVI 5–4 on pens)</p>
            <p className="text-misf-gray-text leading-relaxed text-sm">
              The US Virgin Islands and Turks & Caicos Islands opened the tournament with a closely contested draw, settled by penalty shootout in favour of the Dashing Eagles.
            </p>
          </div>

          <div className="border-l-4 border-misf-gold pl-5 space-y-2">
            <p className="font-display font-bold text-misf-blue-dark uppercase text-xs tracking-widest">August 14 — Marshall Islands vs US Virgin Islands</p>
            <p className="font-display font-black text-xl text-misf-blue-dark">0–4</p>
            <p className="text-misf-gray-text leading-relaxed text-sm">
              The Marshall Islands faced the US Virgin Islands in their historic debut. The Dashing Eagles dominated, winning 4–0. Rakeem Joseph scored a hat-trick, becoming the USVI's all-time top scorer. Gabriel Catone-Highfield added the fourth goal with 10 minutes remaining. Despite the scoreline, the result was "largely immaterial" — the Marshall Islands had competed against an established FIFA nation for the first time in history.
            </p>
          </div>

          <div className="border-l-4 border-misf-gold pl-5 space-y-2">
            <p className="font-display font-bold text-misf-blue-dark uppercase text-xs tracking-widest">August 14 — Turks & Caicos Islands vs Ozark United U19</p>
            <p className="font-display font-black text-xl text-misf-blue-dark">3–3 (TCI 5–4 on pens)</p>
            <p className="text-misf-gray-text leading-relaxed text-sm">
              Ozark United led 2–0 at halftime through Aukele Paikuli-Campbell (penalty, 15') and Wyatt Marksberry (23'). Turks & Caicos mounted a second-half comeback — Junior Paul (65'), Keniel Clervil (75'), and Paul again before Paikuli-Campbell equalised at 90 minutes. TCI took the win on penalties.
            </p>
          </div>

          <div className="border-l-4 border-misf-gold pl-5 space-y-2">
            <p className="font-display font-bold text-misf-blue-dark uppercase text-xs tracking-widest">August 16 — Marshall Islands vs Turks & Caicos Islands</p>
            <p className="font-display font-black text-xl text-misf-blue-dark">2–3</p>
            <p className="text-misf-gray-text leading-relaxed text-sm">
              The Marshall Islands created history by scoring their first-ever international goal. After falling 2–0 down within 24 minutes, <strong>Josiah Blanton</strong> scored on 27 minutes following an <strong>Aaron Anitok-Brokken</strong> assist — a moment that "sparked bedlam amongst the Marshallese players, management, and supporters" and entered Marshallese folklore. Anitok-Brokken added a second from the penalty spot on 72 minutes, but the Marshall Islands fell 3–2. Clervil's 32nd-minute goal proved decisive.
            </p>
          </div>

          <div className="border-l-4 border-misf-gold pl-5 space-y-2">
            <p className="font-display font-bold text-misf-blue-dark uppercase text-xs tracking-widest">August 16 — Final: US Virgin Islands vs Ozark United U19</p>
            <p className="font-display font-black text-xl text-misf-blue-dark">4–2</p>
            <p className="text-misf-gray-text leading-relaxed text-sm">
              The US Virgin Islands lifted the trophy with a 4–2 win. Paikuli-Campbell opened from the spot (8'). Naquan Henry and Rakeem Joseph restored the lead before halftime. Paikuli-Campbell pulled one back (58') before Matthew Roth and Connor Bass sealed the victory.
            </p>
          </div>
        </div>

        {/* Awards */}
        <div>
          <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark mb-5">Awards</h2>
          <div className="divide-y divide-gray-100 border border-gray-100 rounded-lg overflow-hidden">
            {[
              { label: 'Winner', value: 'US Virgin Islands' },
              { label: 'Runner-up', value: 'Turks & Caicos Islands' },
              { label: 'Golden Boot', value: 'Rakeem Joseph — 4 goals (US Virgin Islands)' },
              { label: 'First RMI Goal', value: 'Josiah Blanton, 27\' vs Turks & Caicos (Aug 16)' },
            ].map(({ label, value }) => (
              <div key={label} className="flex gap-4 text-sm px-5 py-4">
                <span className="text-misf-gold font-bold w-44 shrink-0">{label}</span>
                <span className="text-gray-700">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top scorers */}
        <div>
          <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark mb-4">Top Scorers</h2>
          <div className="space-y-3">
            {[
              { goals: '4', players: 'Rakeem Joseph (USVI) · Aukele Paikuli-Campbell (Ozark U19) · Junior Paul (TCI)' },
              { goals: '3', players: 'Keniel Clervil (TCI)' },
              { goals: '1', players: 'Aaron Anitok-Brokken · Josiah Blanton (RMI) and others' },
            ].map(({ goals, players }) => (
              <div key={goals} className="flex gap-5 text-sm border-b border-gray-100 pb-3">
                <span className="font-display font-black text-misf-blue-dark text-lg w-6 shrink-0">{goals}</span>
                <span className="text-gray-600">{players}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Participating teams */}
        <div>
          <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark mb-4">Participating Nations</h2>
          <ul className="grid grid-cols-2 gap-3">
            {['US Virgin Islands', 'Turks & Caicos Islands', 'Marshall Islands', 'Ozark United U19'].map(t => (
              <li key={t} className="flex items-center gap-2 text-sm text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-misf-gold shrink-0" />{t}
              </li>
            ))}
          </ul>
        </div>

        {/* Legacy */}
        <div className="bg-misf-blue-dark text-white rounded-lg p-6 space-y-3">
          <h3 className="font-display font-black text-sm uppercase tracking-widest text-misf-gold">Looking Ahead</h3>
          <p className="text-white/80 text-sm leading-relaxed">
            The Marshall Islands Soccer Federation aims to achieve OFC or AFC membership, leading to FIFA acceptance for men's and women's teams by 2030. Ticket sales from this tournament generated nearly $4,000 for Springdale High School's soccer program.
          </p>
        </div>

        <Link href="/competitions/outrigger-cup" className="inline-block text-misf-blue font-display font-bold text-sm uppercase tracking-widest hover:text-misf-blue-dark transition-colors">
          ← All Editions
        </Link>
      </div>
    </div>
  )
}
