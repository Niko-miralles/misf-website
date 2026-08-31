import type { Metadata } from 'next'
import PageHeader from '@/components/ui/PageHeader'
import CoachingForm from '@/components/ui/CoachingForm'

export const metadata: Metadata = { title: 'OFC Coaching Courses' }

const CERTIFICATES = [
  {
    name: 'OFC Grassroots Certificate',
    desc: 'Aims to support coaches working predominantly in the grassroots environment with players up to the age of 13.',
    price: '$250 USD',
    dates: 'June 23 & 24, 2025',
    location: 'Springdale, Arkansas, US',
  },
  {
    name: 'OFC Youth Certificate',
    desc: 'Aims to support coaches working predominantly with players aged 13 to 17.',
    price: '$250 USD',
    dates: 'June 25 & 26, 2025',
    location: 'Springdale, Arkansas, US',
  },
  {
    name: 'OFC Senior Certificate',
    desc: 'Aims to support coaches working predominantly in senior football with players aged 17 and over.',
    price: '$250 USD',
    dates: 'June 27 & 28, 2025',
    location: 'Springdale, Arkansas, US',
  },
]

export default function OFCCoachingPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        eyebrow="Coaching"
        title="OFC Coaching Courses"
        subtitle="Three-day coaching education courses delivered by an OFC-licensed educator, recognised by CONCACAF, OFC, and AFC."
        image="/images/coaching-ofc-delivery.png"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">

        {/* About */}
        <div className="space-y-4 text-misf-gray-text leading-relaxed">
          <p>
            MISF offers OFC coaching qualifications delivered by Lloyd Owers, MISF Technical Director and OFC-licensed coach educator. Courses run over three days in various locations across the US, Australia, OFC member nations, and beyond.
          </p>
          <p>
            All OFC Certificate courses are recognised by CONCACAF, OFC, and AFC. Group discounts are available for organisations sending 14 or more candidates.
          </p>
        </div>

        {/* OFC pathway graphic */}
        <div className="rounded-xl overflow-hidden border border-gray-100">
          <img
            src="/images/coaching-ofc-graphic.png"
            alt="OFC coaching levels graphic"
            className="w-full object-contain"
          />
        </div>

        {/* Certificate courses */}
        <div className="space-y-6">
          <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark">Certificate Courses</h2>
          <div className="space-y-3">
            {CERTIFICATES.map((c) => (
              <div key={c.name} className="bg-misf-gray-light rounded-xl px-6 py-5 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display font-black text-lg uppercase text-misf-blue-dark leading-tight">{c.name}</h3>
                  <span className="font-display font-black text-2xl text-misf-blue-dark shrink-0">{c.price}</span>
                </div>
                <p className="text-sm text-misf-gray-text leading-relaxed">{c.desc}</p>
                <div className="flex items-center gap-4 pt-1 border-t border-gray-200">
                  <span className="text-xs font-display font-black uppercase tracking-widest text-misf-gold">{c.dates}</span>
                  <span className="text-xs text-misf-gray-text">{c.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lloyd photo */}
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl overflow-hidden aspect-square">
            <img
              src="/images/coaching-lloyd-educator.png"
              alt="Lloyd Owers OFC licensed educator"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden aspect-square">
            <img
              src="/images/coaching-lloyd-presenting.jpg"
              alt="OFC coach education session"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <a
            href="https://marshall-islands-soccer-federation.square.site/product/ofc-coaching-certifications/G57SVLYLU7W3RE5BTGDKWBBK?cp=true&sa=true&sbp=false&q=false"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white font-display font-black text-base uppercase tracking-widest px-12 py-5 rounded-full hover:bg-gray-800 transition-colors"
          >
            Book Your Space Now
          </a>
        </div>

        {/* Register interest */}
        <div id="register" className="space-y-5 pt-4 border-t border-gray-100">
          <div>
            <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark">Register Interest</h2>
            <p className="mt-2 text-misf-gray-text text-sm leading-relaxed">
              Fill in the form and we'll be in touch about upcoming OFC course dates and locations.
            </p>
          </div>
          <CoachingForm />
        </div>

      </div>
    </div>
  )
}
