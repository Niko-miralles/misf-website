import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = { title: 'Soccer Development' }

const PILLARS = [
  {
    title: 'Youth Development',
    body: 'Regular sessions at SDA, Co-op, and Rairok schools, with expansion into PSS schools underway. Youth camps across Majuro, Ebeye, and the outer atolls bring the game to the next generation wherever they live.',
    image: '/images/coaching-placements-school.jpg',
    href: '/get-involved/coaching/placements',
  },
  {
    title: 'National League',
    body: 'The Marshall Islands Soccer League (MISL) launches in 2027 — the first structured 11v11 domestic competition in the nation\'s history, providing players with regular competitive football year-round.',
    image: '/images/misl-hero.jpg',
    href: '/competitions/misl',
  },
  {
    title: 'Coach Education',
    body: 'OFC Grassroots, Youth and Senior coaching certifications are delivered in partnership with the Oceania Football Confederation. FAW coaching courses are available online through our partnership with the Football Association of Wales.',
    image: '/images/coaching-lloyd-presenting.jpg',
    href: '/get-involved/coaching',
  },
  {
    title: 'National Teams',
    body: "Men's and women's futsal teams compete in OFC pathways. The men's national soccer team played its first international fixture in 2025 at the Outrigger Challenge Cup in Arkansas.",
    image: '/images/outrigger-2025.png',
    href: '/teams/mens-soccer',
  },
  {
    title: 'Adult Soccer',
    body: 'Community sessions run across Delap, Rita/Uliga, Rairok, Laura, and TUR — open to all adults. The Ratak Cup and MIFL provide competitive outlets for club-level players in Majuro.',
    image: '/images/futsal-hero.jpg',
    href: '/competitions/futsal',
  },
  {
    title: 'Overseas Players',
    body: 'MISF actively engages Marshallese players in the diaspora — particularly in Springdale, Arkansas and Pasadena, California — connecting them with the national programme and creating pathways back.',
    image: '/images/coaching-ofc-delivery.png',
    href: '/get-involved/diaspora',
  },
]


export default function SoccerDevelopmentPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        eyebrow="About"
        title="Soccer Development"
        subtitle="How are we developing soccer in the Marshall Islands?"
        image="/images/soccer-development-hero.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">

        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center space-y-4 text-misf-gray-text leading-relaxed">
          <p>
            MISF's development strategy reaches beyond Majuro to every inhabited island in the archipelago. The ambition is clear: achieve OFC or AFC membership and FIFA recognition for men's and women's teams by 2030 — while ensuring the communities that make up the Marshall Islands have access to the game at every level.
          </p>
        </div>

        {/* 2030 Strategy pillars */}
        <div className="space-y-8">
          <div className="text-center">
            <p className="font-display font-black text-xs uppercase tracking-[0.25em] text-misf-gold mb-2">2030 Strategy</p>
            <h2 className="font-display font-black text-3xl sm:text-4xl uppercase text-misf-blue-dark">Six Focus Areas</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PILLARS.map(({ title, body, image, href }) => (
              <Link
                key={title}
                href={href}
                className="group bg-misf-gray-light rounded-xl overflow-hidden transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,45,122,0.12)]"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-display font-black text-base uppercase text-misf-blue-dark group-hover:text-misf-blue transition-colors">{title}</h3>
                  <p className="text-sm text-misf-gray-text leading-relaxed">{body}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Global Ambassadors — split layout */}
        <div className="bg-misf-gray-light rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col justify-center p-10 lg:p-14 space-y-6">
              <div className="space-y-4">
                <p className="font-display font-black text-xs uppercase tracking-[0.25em] text-misf-gold">About</p>
                <h2 className="font-display font-black text-4xl sm:text-5xl uppercase text-misf-blue-dark leading-none">Global Ambassadors</h2>
                <p className="text-misf-gray-text leading-relaxed">
                  To amplify our project we have enlisted the help of several renowned soccer players, coaches, and personalities. The global ambassadors are unpaid, and support our project as they are passionate about building the world's best-loved sport.
                </p>
              </div>
              <Link
                href="/about/global-ambassadors"
                className="self-start border-2 border-misf-blue-dark text-misf-blue-dark font-display font-black text-sm uppercase tracking-widest px-8 py-3 rounded-full hover:bg-misf-blue-dark hover:text-white transition-colors"
              >
                Learn More
              </Link>
            </div>
            <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
              <img
                src="/images/global-ambassadors-hero.webp"
                alt="Marshall Islands youth soccer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="bg-misf-blue p-8 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div>
            <p className="font-display font-black text-xs uppercase tracking-[0.25em] text-misf-gold mb-2">
              Resources
            </p>
            <h2 className="font-display font-black text-2xl sm:text-3xl uppercase text-white">
              Guides and links for players, coaches, referees, and administrators.
            </h2>
          </div>
          <Link
            href="/about/soccer-development/resources"
            className="mt-6 inline-block bg-misf-gold px-7 py-4 font-display text-sm font-black uppercase tracking-widest text-misf-blue-dark transition-colors hover:bg-[#d4911c] lg:mt-0"
          >
            Resource Hub →
          </Link>
        </div>


      </div>
    </div>
  )
}
