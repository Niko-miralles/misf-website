import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = {
  title: 'Partners & Sponsors',
  description: 'Marshall Islands Soccer Federation partners, sponsors, and opportunities to support the federation.',
}

const FEATURED_PARTNERS = [
  {
    name: 'Experience Fayetteville',
    label: 'Host city partner',
    body: 'Supporting MISF activity in Fayetteville and helping connect the federation with the local sporting community.',
    logo: '/images/sponsors/experience-fayetteville.png',
  },
  {
    name: 'Walmart',
    label: 'Community supporter',
    body: 'Supporting community activity and the continued development of Marshallese soccer programmes.',
    logo: '/images/sponsors/walmart.png',
  },
]

const SUPPORTING_PARTNERS = [
  {
    name: 'Net World Sports',
    label: 'Equipment partner',
    image: '/images/sponsors/net-world-sports.webp',
  },
  {
    name: 'KitAid Australia',
    label: 'Kit donation partner',
    image: '/images/sponsors/kitaid-australia.png',
  },
  {
    name: 'Chewy Lin',
    label: 'Creative partner',
    image: '/images/sponsors/chewy-lin.png',
  },
  {
    name: 'PlayerLayer',
    label: 'Teamwear partner',
    image: '/images/sponsors/playerlayer.png',
  },
]

const OPPORTUNITIES = [
  {
    title: 'Youth and school football',
    image: '/images/youth-soccer.webp',
  },
  {
    title: 'Domestic futsal and soccer',
    image: '/images/futsal-2026.webp',
  },
  {
    title: 'National team activity',
    image: '/images/team-huddle.jpg',
  },
  {
    title: 'Coach education',
    image: '/images/coaching-lloyd-presenting.jpg',
  },
  {
    title: 'Events and fundraising',
    image: '/images/outrigger-2025.png',
  },
  {
    title: 'Equipment and kit support',
    image: '/images/shop/jersey-home.webp',
  },
]

export default function SponsorsPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        eyebrow="Get Involved"
        title="Partners & Sponsors"
        subtitle="Help grow football across the Marshall Islands, Fayetteville, and the Marshallese diaspora."
        image="/images/team-huddle.jpg"
        imagePosition="center 45%"
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <div className="relative min-h-[390px] overflow-hidden bg-misf-blue-dark">
            <Image
              src="/images/outrigger-2025.png"
              alt="Marshall Islands soccer match action"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-misf-blue-dark/85 via-misf-blue-dark/25 to-transparent" />
            <div className="absolute bottom-0 left-0 max-w-2xl p-6 sm:p-8">
              <p className="mb-3 font-display text-xs font-black uppercase tracking-[0.25em] text-misf-gold">
                Why partner with MISF
              </p>
              <h2 className="font-display text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
                Back one of world football's newest stories.
              </h2>
            </div>
          </div>
          <div className="flex flex-col justify-center bg-misf-gray-light p-7 sm:p-9">
            <p className="mb-2 font-display text-xs font-black uppercase tracking-[0.25em] text-misf-gold">
              Impact
            </p>
            <h2 className="font-display text-3xl font-black uppercase leading-tight text-misf-blue-dark sm:text-4xl">
              Support turns into real activity.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-misf-gray-text sm:text-lg">
              MISF is a volunteer-led federation creating football opportunities for Marshallese players, coaches, and communities. Partner support helps fund equipment, coaching, travel, events, youth activity, and national team development.
            </p>
            <div className="mt-7 grid grid-cols-3 gap-3">
              {['Players', 'Coaches', 'Events'].map((label) => (
                <div key={label} className="bg-white p-4 text-center">
                  <p className="font-display text-sm font-black uppercase tracking-wide text-misf-blue-dark">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-misf-blue py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="mb-2 font-display text-xs font-black uppercase tracking-[0.25em] text-misf-gold">
                Existing sponsors and partners
              </p>
              <h2 className="font-display text-3xl font-black uppercase text-white sm:text-4xl">
                Featured partners
              </h2>
            </div>
            <p className="max-w-3xl text-base leading-relaxed text-white/70">
              MISF partners help turn attention into opportunity: equipment, travel, match activity, youth sessions, and the infrastructure needed to keep building.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {FEATURED_PARTNERS.map((partner) => (
              <article key={partner.name} className="grid overflow-hidden bg-white lg:grid-cols-[0.95fr_1.05fr]">
                <div className="relative flex min-h-[220px] items-center justify-center bg-white p-8">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain p-8"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="flex flex-col justify-center border-t border-gray-200 p-7 lg:border-l lg:border-t-0">
                  <p className="mb-4 inline-block w-fit bg-misf-gold px-3 py-1.5 font-display text-xs font-black uppercase tracking-widest text-misf-blue-dark">
                    {partner.label}
                  </p>
                  <h3 className="font-display text-3xl font-black uppercase text-misf-blue-dark">
                    {partner.name}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-misf-gray-text">{partner.body}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SUPPORTING_PARTNERS.map((partner) => (
              <article key={partner.name} className="bg-white p-6">
                <div className="relative mb-5 flex h-28 items-center justify-center bg-misf-gray-light">
                  <Image
                    src={partner.image}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain p-4"
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                  />
                </div>
                <p className="font-display text-lg font-black uppercase text-misf-blue-dark">
                  {partner.name}
                </p>
                <p className="mt-1 text-sm text-misf-gray-text">{partner.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          <div>
            <p className="mb-2 font-display text-xs font-black uppercase tracking-[0.25em] text-misf-gold">
              Partnership opportunities
            </p>
            <h2 className="font-display text-3xl font-black uppercase text-misf-blue-dark sm:text-4xl">
              Where support can make an impact
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-misf-gray-text">
              Sponsors can support specific programmes or broader federation activity. The page can grow later with sponsor levels, benefits, and downloadable packs.
            </p>
          </div>
          <div className="grid gap-0 overflow-hidden border border-gray-200 sm:grid-cols-2">
            {OPPORTUNITIES.map((item, index) => (
              <div
                key={item.title}
                className="grid grid-cols-[96px_1fr] gap-5 border-b border-gray-200 bg-misf-gray-light p-5 last:border-b-0 sm:border-r sm:[&:nth-child(2n)]:border-r-0 sm:[&:nth-last-child(-n+2)]:border-b-0"
              >
                <div className="relative h-24 overflow-hidden bg-misf-blue-dark">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="mb-2 font-display text-3xl font-black text-misf-gold">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <p className="font-display text-base font-black uppercase tracking-wide text-misf-blue-dark">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-misf-blue px-6 py-8 sm:px-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div>
            <p className="font-display text-xs font-black uppercase tracking-[0.25em] text-misf-gold">
              Become a partner
            </p>
            <h2 className="mt-2 font-display text-2xl font-black uppercase text-white sm:text-3xl">
              Start a sponsorship conversation with MISF.
            </h2>
          </div>
          <Link
            href="/contact"
            className="mt-6 inline-block bg-misf-gold px-7 py-4 font-display text-sm font-black uppercase tracking-widest text-misf-blue-dark transition-colors hover:bg-[#d4911c] lg:mt-0"
          >
            Contact form →
          </Link>
        </div>
      </section>
    </div>
  )
}
