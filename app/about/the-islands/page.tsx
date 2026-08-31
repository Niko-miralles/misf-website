import type { Metadata } from 'next'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = { title: 'The Marshall Islands' }


const RESOURCES = [
  { label: 'Last Breath — The Marshall Islands', type: 'Video', author: 'YouTube', href: 'https://www.youtube.com/watch?v=xDVND8mPaso' },
  { label: 'The Last Days of Majuro', type: 'Video', author: 'Wendover Productions', href: 'https://www.youtube.com/watch?v=3J06af5xHD0&t=166s' },
  { label: 'Marshall Islands: Projected Sea Level Rise', type: 'Video', author: 'World Bank', href: 'https://www.youtube.com/watch?v=MxWZBlDv6U0' },
  { label: 'Jo-Jikum', type: 'Organisation', author: 'Empowering Marshallese youth on environmental issues', href: 'https://jojikum.org/' },
  { label: 'Voices Rising', type: 'Organisation', author: 'Amplifying Marshallese voices', href: 'https://www.youtube.com/c/VoicesRising' },
  { label: 'Marshallese Arts Project', type: 'Organisation', author: 'University of Edinburgh', href: 'https://www.map.llc.ed.ac.uk/' },
  { label: 'What "Nuclear Justice" Means', type: 'Article', author: 'Benetick Kabua Maddison', href: 'https://medium.com/@benetickmaddison/what-nuclear-justice-means-1b249b6f77fa' },
]

export default function TheIslandsPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        eyebrow="About"
        title="The Marshall Islands"
        subtitle="29 atolls. 5 isolated islands. 180,000 square miles of Pacific Ocean. One nation."
        image="/images/islands-majuro-aerial.jpg"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">

        {/* Intro */}
        <div className="space-y-4 text-misf-gray-text leading-relaxed">
          <p>
            The Republic of the Marshall Islands is one of the world's most remote nations — a constellation of 29 atolls and 5 islands spread across approximately 180,000 square miles of the central Pacific Ocean, located midway between Hawaii and Australia. The capital is Majuro, home to around 30,000 of the nation's 40,000 inhabitants.
          </p>
          <p>
            The islands never exceed 20 feet above high tide and enjoy a tropical climate with a mean annual temperature of 82°F (28°C). Marshallese and English are the official languages, and the nation has been independent since 1986. Nearest neighbours include Wake Island, Kiribati, Nauru, and the Federated States of Micronesia. Kwajalein, the world's largest atoll by water area, hosts a U.S. Army base and is home to a thriving community MISF is proud to serve.
          </p>
          <p>
            A significant Marshallese diaspora lives in the United States — particularly in Springdale, Arkansas and Pasadena, California — communities connected to the islands by family, culture, and football.
          </p>
        </div>

        {/* Outrigger canoe photo */}
        <div className="rounded-xl overflow-hidden aspect-[16/9]">
          <img
            src="/images/islands-canoe.webp"
            alt="Traditional Marshallese outrigger canoe"
            className="w-full h-full object-cover"
          />
        </div>

        {/* History & culture */}
        <div className="space-y-4 text-misf-gray-text leading-relaxed">
          <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark">History & Culture</h2>
          <p>
            The Marshallese people have navigated the Pacific for thousands of years using traditional outrigger canoes and stick charts — intricate maps made from palm ribs and shells that encoded wave patterns and island positions. This deep seafaring tradition is the inspiration behind MISF's flagship tournament, the Outrigger Challenge Cup.
          </p>
          <p>
            Between 1946 and 1958, the United States conducted 67 nuclear weapons tests in the Marshall Islands, including the 1954 Castle Bravo test — 1,000 times more powerful than the atomic bombs dropped on Hiroshima. Residents of affected atolls, including Bikini and Rongelap, continue experiencing health and environmental consequences today.
          </p>
          <p>
            Today the Marshall Islands faces a second existential challenge: climate change. Rising sea levels, intensifying storms, and saltwater intrusion threaten the same land that survived nuclear testing. Projections suggest 96% of Majuro faces frequent flooding risk, and entire islands could disappear by 2030.
          </p>
        </div>

        {/* Resources */}
        <div className="space-y-4">
          <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark">Resources & Further Reading</h2>
          <div className="divide-y divide-gray-100 border border-gray-100 rounded-lg overflow-hidden">
            {RESOURCES.map((r) => (
              <a key={r.label} href={r.href} target="_blank" rel="noopener noreferrer"
                className="flex items-start gap-4 px-5 py-4 hover:bg-misf-gray-light transition-colors group">
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
