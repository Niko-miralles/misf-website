import type { Metadata } from 'next'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = { title: 'Global Ambassadors' }

const AMBASSADORS = [
  {
    name: 'Ildefons Lima',
    role: 'Former Andorra National Team Captain',
    detail: 'Guinness World Record holder for longest international career',
    image: '/images/ambassador-ildefons-lima.jpg',
    quote: 'I love being involved with the MISF project. It\'s a challenge I enjoy and developing soccer in the Marshall Islands is very important for the people there.',
  },
  {
    name: 'Steve Darby',
    role: 'Former Thailand & Laos National Team Coach',
    detail: 'FIFA coaching instructor with over 40 years of international experience',
    image: '/images/ambassador-steve-darby.jpg',
    quote: 'Fantastic to see the great work being done by the MISF coaches. Professionally prepared sessions, and most importantly – the players look like they LOVE playing. Word will spread.',
  },
]

export default function GlobalAmbassadorsPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        eyebrow="About"
        title="Global Ambassadors"
        subtitle="Renowned football figures who volunteer their time to help build the game in the Marshall Islands."
        image="/images/global-ambassadors-hero.webp"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">

        {/* Intro */}
        <div className="text-misf-gray-text leading-relaxed space-y-4">
          <p>
            The Marshall Islands Soccer Federation has global ambassadors who are not paid and help raise awareness by sharing news and content to their networks. We seek ambassadors whose values align with our mission — to give the Marshallese people the opportunity to play soccer at every level.
          </p>
        </div>

        {/* Ambassador sections */}
        <div className="space-y-16">
          {AMBASSADORS.map(({ name, image, quote }, i) => (
            <div key={name} className={`flex flex-col sm:flex-row gap-0 ${i % 2 === 1 ? 'sm:flex-row-reverse' : ''}`}>
              <div className="w-full sm:w-1/2 aspect-[3/4] overflow-hidden shrink-0">
                <img src={image} alt={name} className="w-full h-full object-cover object-center" />
              </div>
              <div className={`w-full sm:w-1/2 flex flex-col justify-center px-8 py-10 sm:px-12 space-y-6 ${i % 2 === 1 ? 'items-center text-center' : ''}`}>
                <h2 className="font-display font-black text-3xl sm:text-4xl uppercase text-misf-blue-dark leading-none">{name}</h2>
                <blockquote className={`border-misf-gold text-misf-gray-text italic leading-relaxed text-lg ${i % 2 === 1 ? 'border-r-[3px] pr-6' : 'border-l-[3px] pl-6'}`}>
                  "{quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
