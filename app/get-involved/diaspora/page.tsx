import type { Metadata } from 'next'
import PageHeader from '@/components/ui/PageHeader'
import DonateStrip from '@/components/home/DonateStrip'

export const metadata: Metadata = { title: 'Diaspora' }

const COMMUNITIES = [
  { city: 'Springdale, AR', country: 'USA', note: "Largest Marshallese community outside RMI" },
  { city: 'Pasadena, CA', country: 'USA', note: "Active Marshallese diaspora community" },
  { city: 'Salem, OR', country: 'USA', note: "Growing Marshallese population" },
  { city: 'Honolulu, HI', country: 'USA', note: "Pacific gateway community" },
  { city: 'Auckland', country: 'New Zealand', note: "Pacific diaspora hub" },
  { city: 'Suva', country: 'Fiji', note: "OFC regional connections" },
]

export default function DiasporaPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        eyebrow="Get Involved"
        title="Marshallese Diaspora"
        subtitle="From Springdale to Pasadena to Majuro — you are part of this team."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="space-y-5 text-misf-gray-text leading-relaxed mb-10">
          <p>
            The Marshallese diaspora is estimated to number over 20,000 people — nearly half the population of the home islands. Communities in Springdale (Arkansas), Pasadena (California), and cities across the Pacific have built vibrant Marshallese cultural life far from the atolls.
          </p>
          <p>
            MISF sees the diaspora not as people who have left the Marshall Islands, but as Marshallese people who are part of the same nation — and the same team. Players with Marshallese heritage are eligible to represent the national team regardless of where they live.
          </p>
          <p>
            The diaspora is also vital to our mission in other ways: as donors, volunteers, advocates, and ambassadors who carry the Marshall Islands story to every corner of the world.
          </p>
        </div>

        <div className="bg-misf-gold p-8 mb-10">
          <h3 className="font-display font-black text-xl uppercase text-misf-blue-dark mb-3">
            Are you Marshallese? We want to hear from you.
          </h3>
          <p className="text-misf-blue-dark/70 mb-5">
            Whether you want to play, volunteer, sponsor, or simply connect — reach out. This is your federation too.
          </p>
          <a href="mailto:info@rmi.soccer" className="inline-block bg-misf-blue-dark text-white font-display font-black text-sm uppercase tracking-widest px-6 py-3 hover:bg-misf-blue transition-colors">
            Contact MISF
          </a>
        </div>

        <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark mb-6">
          Communities We Are Building With
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {COMMUNITIES.map(({ city, country, note }) => (
            <div key={city} className="flex items-center gap-4 p-4 bg-misf-gray-light border-l-4 border-misf-blue">
              <div>
                <p className="font-display font-black text-sm uppercase text-misf-blue-dark">{city}</p>
                <p className="text-xs text-misf-gold font-medium">{country}</p>
                <p className="text-xs text-misf-gray-text mt-0.5">{note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <DonateStrip />
    </div>
  )
}
