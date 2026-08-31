import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = {
  title: 'Competitions',
  description: 'Overview of the domestic and international competitions managed by the Marshall Islands Soccer Federation.',
}

const FEATURED = [
  {
    name: 'Outrigger Challenge Cup',
    href: '/competitions/outrigger-cup',
    image: '/images/outrigger-cup-hero.jpg',
  },
  {
    name: 'Marshall Islands Soccer League',
    href: '/competitions/misl',
    image: '/images/misl-hero.jpg',
  },
  {
    name: 'Marshall Islands Futsal',
    href: '/competitions/futsal',
    image: '/images/futsal-hero.jpg',
  },
]

const COMPETITIONS = [
  {
    eyebrow: 'Annual Futsal Competition',
    title: 'Ratak Cup',
    description: 'Named after one of the two chains of islands that comprise the Marshall Islands, Ratak means sunrise in Marshallese. The Ratak Cup represents a new dawn in Marshallese sport and is an annual futsal competition in Majuro.',
    href: '/competitions/futsal',
    image: '/images/futsal-2024.jpg',
    linkText: 'About Futsal',
  },
  {
    eyebrow: 'Domestic 11v11',
    title: 'Marshall Islands Soccer League',
    description: 'Launching in 2027, the Marshall Islands Soccer League will be the first ever 11v11 competition in the Marshall Islands.',
    href: '/competitions/misl',
    image: '/images/misl-hero.jpg',
    linkText: 'About MISL',
  },
  {
    eyebrow: 'Kwajalein',
    title: 'Kwajalein Soccer League',
    description: 'Every summer, Kwajalein hosts a 7v7 soccer competition that helps keep football active across one of the country’s main population centres.',
    href: '/competitions/inter-island/kwajalein-2025',
    image: '/images/inter-island-hero.jpg',
    linkText: 'View Kwajalein',
  },
  {
    eyebrow: 'Inter-Island',
    title: 'Inter-Island Tournament',
    description: 'A competition between the main population centres of the Marshall Islands: Majuro, Ebeye, and Kwajalein.',
    href: '/competitions/inter-island',
    image: '/images/inter-island-futsal-match.jpg',
    linkText: 'About Inter-Island',
  },
  {
    eyebrow: 'International',
    title: 'Outrigger Challenge Cup',
    description: 'An international competition created to provide competitive match opportunities for under-represented nations and raise awareness for soccer in the Pacific region. The competition is designed to span formats including futsal and beach soccer, with both men’s and women’s competition.',
    href: '/competitions/outrigger-cup',
    image: '/images/outrigger-2025.png',
    linkText: 'About Outrigger Cup',
  },
]

export default function CompetitionsPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        eyebrow="Marshall Islands Soccer Federation"
        title="Competitions"
        subtitle="Domestic and international competitions managed by MISF."
        image="/images/outrigger-cup-hero.jpg"
        imagePosition="center 45%"
      />

      <section className="bg-misf-blue py-9 sm:py-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display font-black text-xl sm:text-2xl lg:text-3xl uppercase text-white leading-snug">
            MISF delivers domestic and international competitions that give Marshallese players regular opportunities to compete.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURED.map((item) => (
              <Link key={item.name} href={item.href} className="group relative min-h-[260px] overflow-hidden bg-misf-blue-dark">
                <img src={item.image} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-misf-blue-dark/55" />
                <div className="relative h-full p-6 flex flex-col justify-end">
                  <p className="font-display font-black text-xs uppercase tracking-[0.25em] text-misf-gold mb-3">
                    Competition
                  </p>
                  <h2 className="font-display font-black text-2xl uppercase text-white leading-none">
                    {item.name}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-misf-gray-light py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="font-display font-black text-xs uppercase tracking-[0.25em] text-misf-gold mb-3">
              Overview
            </p>
            <h2 className="font-display font-black text-3xl sm:text-4xl uppercase text-misf-blue-dark leading-none">
              Competitions MISF Manages
            </h2>
          </div>

          <div className="space-y-6">
            {COMPETITIONS.map((competition, index) => (
              <article key={competition.title} className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] overflow-hidden border border-gray-200 bg-white">
                <div className={`relative min-h-[260px] lg:min-h-[360px] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img src={competition.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-misf-blue-dark/15" />
                </div>
                <div className="p-7 sm:p-10 flex flex-col justify-center">
                  <p className="font-display font-black text-xs uppercase tracking-[0.25em] text-misf-gold mb-3">
                    {competition.eyebrow}
                  </p>
                  <h3 className="font-display font-black text-3xl uppercase text-misf-blue-dark leading-none mb-5">
                    {competition.title}
                  </h3>
                  <p className="text-misf-gray-text leading-relaxed mb-7">
                    {competition.description}
                  </p>
                  <Link href={competition.href} className="font-display font-black text-sm uppercase tracking-widest text-misf-blue hover:text-misf-gold transition-colors">
                    {competition.linkText} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
