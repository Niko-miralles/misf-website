import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = { title: 'Kwajalein & Ebeye 2025 — Inter-Island' }

export default function KwajaleIn2025Page() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        eyebrow="Inter-Island Tournaments"
        title="Kwajalein & Ebeye 2025"
        subtitle="February 2025 — A milestone trip across the archipelago."
        image="/images/inter-island-hero.jpg"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        {/* Intro */}
        <div className="space-y-4 text-misf-gray-text leading-relaxed">
          <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark">A Milestone Journey</h2>
          <p>
            In February 2025, MISF Technical Director Lloyd Owers led a delegation from Majuro to Kwajalein and Ebeye — the first time Majuro players had ever travelled to Kwajalein for inter-island competition. The trip combined competitive football, youth coaching, community outreach, and diplomatic engagement across the Marshall Islands archipelago.
          </p>
          <blockquote className="border-l-4 border-misf-gold pl-5 italic text-misf-blue-dark font-display font-bold text-lg leading-snug">
            "Soccer is more than just a game; it's a tool for building unity, fostering community spirit, and empowering young people."
          </blockquote>
        </div>

        {/* Match photo */}
        <div className="overflow-hidden rounded-lg">
          <img
            src="/images/inter-island-futsal-match.jpg"
            alt="Futsal match, Ebeye 2025"
            className="w-full object-cover"
          />
          <p className="text-xs text-gray-400 mt-2 italic">Futsal action, Ebeye, February 2025</p>
        </div>

        {/* Results */}
        <div className="space-y-4">
          <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark">Match Results</h2>
          <div className="space-y-3">
            <div className="border-l-4 border-misf-gold pl-5 space-y-1">
              <p className="font-display font-bold text-xs uppercase tracking-widest text-gray-400">Futsal</p>
              <p className="font-display font-black text-xl text-misf-blue-dark">Team Majuro 7–4 Team Kwajalein</p>
            </div>
            <div className="border-l-4 border-misf-gold pl-5 space-y-1">
              <p className="font-display font-bold text-xs uppercase tracking-widest text-gray-400">9v9 Soccer</p>
              <p className="font-display font-black text-xl text-misf-blue-dark">Team Majuro 2–2 Kwajalein Spartans (High School)</p>
            </div>
          </div>
        </div>

        {/* Commissioner meeting */}
        <div className="space-y-4 text-misf-gray-text leading-relaxed">
          <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark">Diplomatic Engagement</h2>
          <p>
            The delegation met with Dr. Brian Jones and Andrew Heseltine, British diplomats based in Fiji, alongside MISF board member Scott Hill — who also serves as Kwajalein Sports Commissioner — and Stacy Peralta of MALGOV and Terry Sasser of the Marshall Islands National Olympic Committee.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-[3/4] overflow-hidden rounded-lg">
            <img src="/images/inter-island-commissioner.jpg" alt="Meeting with British Commissioner" className="w-full h-full object-cover object-top" />
          </div>
          <div className="aspect-[3/4] overflow-hidden rounded-lg">
            <img src="/images/inter-island-lloyd-scott.webp" alt="Lloyd Owers and Scott Hill" className="w-full h-full object-cover object-top" />
          </div>
        </div>

        {/* Community */}
        <div className="space-y-4 text-misf-gray-text leading-relaxed">
          <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark">Community & Youth</h2>
          <p>
            On Ebeye, 35 children participated in soccer sessions at the Jabro Complex with resident coach Bangao Bakabane — on a three-month coaching placement from Kiribati. The sessions have since become a regular Saturday fixture. OFC Coach Education courses were delivered to coaches in both Majuro and Kwajalein.
          </p>
          <p>
            Soccer has now been officially recognised by Special Olympics Marshall Islands, with four annual sessions planned. School programmes are running at SDA, Co-op, and Rairok schools, with expansion into PSS schools planned. A new community session in the TUR area was added to the schedule (Fridays, 3:30–5:00 PM), joining existing sites at Delap, Rita/Uliga, Rairok, and Laura.
          </p>
        </div>

        <div className="overflow-hidden rounded-lg">
          <img
            src="/images/inter-island-youth-camp.png"
            alt="Youth soccer camp, Ebeye"
            className="w-full object-cover"
          />
          <p className="text-xs text-gray-400 mt-2 italic">Youth session at SDA School with coach Bangao Bakabane</p>
        </div>

        {/* People */}
        <div>
          <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark mb-5">Delegation</h2>
          <div className="divide-y divide-gray-100 border border-gray-100 rounded-lg overflow-hidden">
            {[
              { name: 'Lloyd Owers', role: 'Technical Director, MISF' },
              { name: 'Divine Waiti', role: 'Vice President, MISF' },
              { name: 'Scott Hill', role: 'MISF Board Member · Kwajalein Sports Commissioner' },
              { name: 'Bangao Bakabane', role: 'Resident Coach (OFC placement from Kiribati)' },
              { name: 'Stacy Peralta', role: 'MALGOV' },
              { name: 'Terry Sasser', role: 'Marshall Islands National Olympic Committee' },
              { name: 'Yasta', role: 'Power FM' },
            ].map(({ name, role }) => (
              <div key={name} className="flex gap-4 text-sm px-5 py-4">
                <span className="font-bold text-misf-blue-dark w-44 shrink-0">{name}</span>
                <span className="text-gray-500">{role}</span>
              </div>
            ))}
          </div>
        </div>

        <Link href="/competitions/inter-island" className="inline-block text-misf-blue font-display font-bold text-sm uppercase tracking-widest hover:text-misf-blue-dark transition-colors">
          ← Inter-Island Tournaments
        </Link>
      </div>
    </div>
  )
}
