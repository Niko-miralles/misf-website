import type { Metadata } from 'next'
import PageHeader from '@/components/ui/PageHeader'
import CoachingForm from '@/components/ui/CoachingForm'

export const metadata: Metadata = { title: 'Coaching Placements' }

const DURATIONS = [
  { period: '2 Months', monthly: '$2,500 / month', total: '$5,000' },
  { period: '3 Months', monthly: '$2,250 / month', total: '$6,750' },
  { period: '6 Months', monthly: '$2,000 / month', total: '$12,000' },
]

const INCLUDED = [
  'Accommodation and meals',
  'Airport transfer and local SIM card',
  'On-island transport',
  'Full Soccer Federation kit',
  '24/7 support and welfare oversight',
  'OFC coaching certification (guaranteed)',
]

export default function CoachingPlacementsPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        eyebrow="Coaching"
        title="Coaching Placements"
        subtitle="Gain international coaching experience in one of the world's most unique football environments."
        image="/images/coaching-placements-card.jpg"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">

        {/* About */}
        <div className="space-y-4 text-misf-gray-text leading-relaxed">
          <p>
            MISF coaching placements offer international soccer coaching experience in the Marshall Islands — the last country on Earth to have not played an international fixture until MISF's founding. Work directly with MISF Technical Director Lloyd Owers, an OFC-licensed coach educator, while contributing to real grassroots development across the islands.
          </p>
          <p>
            Placements are based in Majuro, the capital atoll, with community sessions reaching islands across the archipelago. Every placement includes a guaranteed OFC coaching certification.
          </p>
        </div>

        {/* Photos */}
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl overflow-hidden aspect-[4/3]">
            <img
              src="/images/coaching-placements-ebeye.jpg"
              alt="Soccer clinic in Ebeye"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden aspect-[4/3]">
            <img
              src="/images/coaching-placements-school.jpg"
              alt="School coaching session in Majuro"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* What you'll do */}
        <div className="space-y-4">
          <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark">What You'll Do</h2>
          <ul className="space-y-2">
            {[
              'Deliver community outreach programmes across Majuro and outer islands',
              'Run after-school clubs and free community sessions',
              'Provide technical development assistance to local coaches',
              'Support tournament organisation and team development',
              'Integrate soccer sessions into school curriculums',
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-misf-gray-text leading-relaxed">
                <span className="text-misf-gold font-bold mt-0.5">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing */}
        <div className="space-y-4">
          <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark">Placement Fees</h2>
          <div className="space-y-3">
            {DURATIONS.map((d) => (
              <div key={d.period} className="bg-misf-gray-light rounded-xl px-6 py-5 flex items-center justify-between gap-4">
                <div>
                  <p className="font-display font-black text-lg uppercase text-misf-blue-dark leading-tight">{d.period}</p>
                  <p className="text-sm text-misf-gray-text mt-0.5">{d.monthly}</p>
                </div>
                <span className="font-display font-black text-2xl text-misf-blue-dark shrink-0">{d.total}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Included */}
        <div className="space-y-4">
          <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark">What's Included</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {INCLUDED.map((item) => (
              <div key={item} className="flex gap-3 items-start bg-misf-gray-light rounded-lg px-4 py-3">
                <span className="text-misf-gold font-black mt-0.5">✓</span>
                <span className="text-sm text-misf-gray-text leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-misf-gray-text/70 mt-2">International flights and travel insurance not included.</p>
        </div>

        {/* Register interest */}
        <div className="space-y-5 pt-4 border-t border-gray-100">
          <div>
            <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark">Register Interest</h2>
            <p className="mt-2 text-misf-gray-text text-sm leading-relaxed">
              Fill in the form and we'll be in touch about available placement dates and next steps.
            </p>
          </div>
          <CoachingForm />
        </div>

      </div>
    </div>
  )
}
