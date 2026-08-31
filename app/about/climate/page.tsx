import type { Metadata } from 'next'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = { title: 'Climate Change' }

const RESOURCES = [
  { label: 'The Last Days of Majuro', type: 'Video', author: 'Wendover Productions', href: 'https://www.youtube.com/watch?v=3J06af5xHD0&t=166s' },
  { label: 'Marshall Islands: Projected Sea Level Rise', type: 'Video', author: 'World Bank', href: 'https://www.youtube.com/watch?v=MxWZBlDv6U0' },
  { label: 'Jo-Jikum', type: 'Organisation', author: 'Empowering Marshallese youth on environmental solutions', href: 'https://jojikum.org/' },
  { label: 'Voices Rising', type: 'Organisation', author: 'Amplifying Marshallese voices', href: 'https://www.youtube.com/c/VoicesRising' },
  { label: 'Marshallese Arts Project', type: 'Organisation', author: 'University of Edinburgh initiative', href: 'https://www.map.llc.ed.ac.uk/' },
]

export default function ClimatePage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        eyebrow="About"
        title="Climate Change in the Marshall Islands"
        subtitle="It's now or never."
        image="/images/climate-hero.webp"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-8 text-misf-gray-text leading-relaxed">

        {/* Why now */}
        <div className="space-y-4">
          <p>
            People ask, why now? Why after decades without soccer are we finally pushing ahead to create a team? Truthfully, it's now or never. The Marshall Islands faces an existential threat from climate change, and we believe the world needs to know — and football gives us a platform to make that happen.
          </p>
          <p>
            The Republic of the Marshall Islands comprises 29 atolls and five individual islands spread across approximately 180,000 square miles of the Pacific Ocean. The largest island spans only 6 square miles, with an average national altitude of just 7 feet above sea level.
          </p>
          <p>
            The economy relies heavily on agriculture and fisheries — sectors highly vulnerable to coastline erosion, storm surges, and unpredictable rainfall patterns. Between 2013 and 2016, the nation declared disaster states due to prolonged drought requiring international assistance.
          </p>
        </div>

        {/* Quote */}
        <blockquote className="border-l-4 border-misf-gold pl-6 space-y-2">
          <p className="text-misf-blue-dark italic leading-relaxed text-lg">
            "It's always been a dark future, but now that dark future is becoming more clear. The land that my daughter is named after — Jaluit — would be completely covered."
          </p>
          <footer className="font-display font-black text-xs uppercase tracking-widest text-misf-gold">
            Kathy Jetñil-Kijiner — Marshall Islands Climate Envoy
          </footer>
        </blockquote>

        {/* Resources */}
        <div className="space-y-4 pt-4">
          <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark">Resources & Further Reading</h2>
          <div className="divide-y divide-gray-100 border border-gray-100 rounded-lg overflow-hidden">
            {RESOURCES.map((r) => (
              <a key={r.label} href={r.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 px-5 py-4 hover:bg-misf-gray-light transition-colors group">
                <span className="font-display font-black text-xs uppercase tracking-widest text-misf-gold shrink-0 pt-0.5 w-24">{r.type}</span>
                <div>
                  <p className="text-sm font-medium text-misf-blue-dark group-hover:underline">{r.label}</p>
                  <p className="text-xs text-misf-gray-text mt-0.5">{r.author}</p>
                </div>
              </a>
            ))}
          </div>
        </div>


      </div>
    </div>
  )
}
