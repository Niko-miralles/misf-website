import type { Metadata } from 'next'
import PageHeader from '@/components/ui/PageHeader'
import DonateStrip from '@/components/home/DonateStrip'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Volunteer',
  description: 'Volunteer with the Marshall Islands Soccer Federation — help build football in one of the world\'s most remote nations.',
}

const ROLES = [
  {
    title: 'Event Volunteer',
    description: 'Help organise and run MISF events including the Outrigger Challenge Cup, training camps, and community football days. Roles include logistics, registration, photography, and hospitality.',
    commitment: 'Event-based',
    image: '/images/outrigger-2025.png',
  },
  {
    title: 'Coaching Support',
    description: 'Assist qualified coaches in delivering sessions on Majuro or the outer atolls. No coaching badge required for support roles — enthusiasm and reliability are what matter.',
    commitment: 'Ongoing or short-term',
    image: '/images/coaching-lloyd-presenting.jpg',
  },
  {
    title: 'Communications & Social Media',
    description: 'Help create content, write match reports, manage social media, or support media coverage. Ideal for journalism, marketing, or communications professionals.',
    commitment: 'Flexible / remote',
    image: '/images/documentary-poster.jpg',
  },
  {
    title: 'Administrative Support',
    description: 'Help with federation administration — data entry, correspondence, scheduling, and coordination. Remote-friendly.',
    commitment: 'Flexible / remote',
    image: '/images/inter-island-commissioner.jpg',
  },
  {
    title: 'Football Development',
    description: 'Support our grassroots development work — player registration, programme planning, and community outreach across the archipelago and diaspora communities.',
    commitment: 'Ongoing or project-based',
    image: '/images/youth-soccer.webp',
  },
  {
    title: 'Fundraising & Partnerships',
    description: 'Help secure funding, develop relationships with sponsors, and write grant applications that keep MISF\'s mission alive.',
    commitment: 'Flexible / remote',
    image: '/images/team-huddle.jpg',
  },
]

export default function VolunteerPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        eyebrow="Get Involved"
        title="Volunteer"
        subtitle="Marshall Islands Soccer Federation is a volunteer-led organisation. Join the team."
        image="/images/volunteer-hero.jpg"
        imagePosition="center 42%"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

        <div className="max-w-3xl mx-auto text-center mb-14 space-y-4 text-misf-gray-text leading-relaxed">
          <p>
            MISF is a volunteer-led organisation supported by a cast of trailblazers from around the world. Every role — from head coach to social media manager — is filled by people who believe in the mission: building football in one of the world's smallest, most remote, and most climate-threatened nations.
          </p>
          <p>
            Whether you can give one day or one year, on-island or from your home country, there is a role for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {ROLES.map(({ title, description, commitment, image }) => (
            <div key={title} className="overflow-hidden border border-gray-200 bg-white hover:border-misf-blue transition-colors">
              <div className="relative h-44 bg-misf-blue-dark">
                <img src={image} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <p className="font-display font-bold text-xs uppercase tracking-widest text-misf-gold mb-2">
                  {commitment}
                </p>
                <h3 className="font-display font-black text-lg uppercase text-misf-blue-dark mb-3">
                  {title}
                </h3>
                <p className="text-sm text-misf-gray-text leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-misf-blue py-12 px-8 text-center">
          <h2 className="font-display font-black text-2xl sm:text-3xl uppercase text-white mb-4">
            Ready to Get Involved?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-6">
            Send us a message telling us who you are, what skills you can bring, and how you'd like to help. We'd love to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-misf-gold text-misf-blue-dark font-display font-black text-sm uppercase tracking-widest px-8 py-4 hover:bg-[#d4911c] transition-colors"
          >
            Contact Us →
          </Link>
        </div>

      </div>

      <DonateStrip />
    </div>
  )
}
