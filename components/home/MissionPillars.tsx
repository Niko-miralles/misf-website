import Link from 'next/link'

const PILLARS = [
  {
    icon: '⚽',
    title: 'Develop Players',
    description: 'Project 1,000 Players brings structured coaching to youth across every inhabited atoll, creating a sustainable pipeline for the national programme.',
    href: '/get-involved/coaching',
  },
  {
    icon: '🏆',
    title: 'Compete Internationally',
    description: 'Working towards OFC membership and the FIFA recognition pathway, with our first international fixture already in the history books.',
    href: '/competitions/outrigger-cup',
  },
  {
    icon: '🌊',
    title: 'Climate Advocacy',
    description: 'The Marshall Islands stands on the front line of climate change. Football gives us a global voice to demand action for our islands and our future.',
    href: '/about/climate',
  },
  {
    icon: '🤝',
    title: 'Unite the Diaspora',
    description: 'From Springdale to Pasadena to Majuro — every Marshallese person is part of this team. Football connects us across the Pacific and beyond.',
    href: '/get-involved/diaspora',
  },
]

export default function MissionPillars() {
  return (
    <section className="bg-misf-gray-light py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="font-display font-black text-xs uppercase tracking-[0.25em] text-misf-gold mb-2">
            What Drives Us
          </p>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase text-misf-blue-dark leading-none">
            Our Mission
          </h2>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, i) => (
            <Link
              key={pillar.title}
              href={pillar.href}
              className="group bg-white p-7 border-t-4 border-misf-blue hover:border-misf-gold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{pillar.icon}</div>
              <h3 className="font-display font-black text-xl uppercase text-misf-blue-dark mb-3 group-hover:text-misf-blue transition-colors">
                {pillar.title}
              </h3>
              <p className="text-misf-gray-text text-sm leading-relaxed">{pillar.description}</p>
              <div className="mt-5 text-xs font-display font-black uppercase tracking-widest text-misf-gold opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
