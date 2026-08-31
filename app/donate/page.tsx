import type { Metadata } from 'next'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = { title: 'Donate' }

const DONATE_URL = 'https://cafa.iphiview.com/cafa/OnlineDonation/tabid/542/dispatch/contribution_id$571767_hash$682bab14a99657484f736b0eba9b67eb3f207a84/Default.aspx'

const TIERS = [
  { amount: '$1', label: 'Our Love', desc: 'Subscribe to our newsletter and become a soccer trailblazer.' },
  { amount: '$15', label: 'Certificate', desc: 'Receive a personalised founding supporter certificate and a social media shout-out.' },
  { amount: '$45', label: 'Signed Photo', desc: 'A squad photo signed by our players and coaching staff.' },
  { amount: '$195', label: 'The Jersey', desc: 'The official first national team jersey.' },
  { amount: '$450', label: 'Personalised Jersey', desc: 'An official jersey customised with your name.' },
  { amount: '$1,000', label: 'Walk of Fame', desc: 'Your name displayed on a brick at Majuro stadium.' },
  { amount: '$2,500', label: 'VIP Ticket', desc: 'VIP access to our first home match with a player meet-and-greet.' },
  { amount: '$12,500', label: 'Coaching Staff', desc: 'Staff credentials and participation in the technical area at an international match.' },
  { amount: '$20,000', label: 'Play in League', desc: 'A contract to play in a domestic league match.' },
]

const FUND_AREAS = [
  { title: 'Equipment & Facilities', desc: 'Stadium upgrades, goal posts, and FIFA-standard pitch maintenance.', image: '/images/our-story-springdale.jpg' },
  { title: 'National Teams', desc: "High-level coaching for men's and women's squads; international training and competition.", image: '/images/our-story-national-team.jpg' },
  { title: 'Domestic League', desc: 'Marshall Islands Soccer League (MISL) with international player development pathways.', image: '/images/our-story-school.png' },
  { title: 'Community Outreach', desc: 'Local coach training and youth soccer accessibility across all atolls.', image: '/images/our-story-ebeye.jpg' },
]

export default function DonatePage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        eyebrow="Support MISF"
        title="Donate"
        subtitle="The last nation on Earth without a soccer team. Help us change that."
        image="/images/team-huddle.jpg"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-14">

        {/* Mission */}
        <div className="space-y-4 text-misf-gray-text leading-relaxed">
          <p>
            Before 2021, soccer in the Marshall Islands didn't exist. Inspired by his son, Shem Livai created the Marshall Islands Soccer Federation with the intention of giving young people on the islands the opportunity to play the sport in a safe and structured environment.
          </p>
          <p>
            We're not just starting a team — we're building a legacy. And what makes this story all the more impressive is that it has been funded solely by soccer fans like you.
          </p>
        </div>

        {/* What donations fund — with photos */}
        <div className="space-y-6">
          <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark">What Your Donation Funds</h2>
          <div className="grid grid-cols-2 gap-4">
            {FUND_AREAS.map(({ title, desc, image }) => (
              <div key={title} className="bg-misf-gray-light rounded-xl overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={image} alt={title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5 space-y-1.5">
                  <h3 className="font-display font-black text-sm uppercase text-misf-blue-dark">{title}</h3>
                  <p className="text-sm text-misf-gray-text leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Donation tiers */}
        <div className="space-y-6">
          <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark">Choose Your Tier</h2>
          <div className="space-y-3">
            {TIERS.map(({ amount, label, desc }) => (
              <div key={label} className="flex items-center justify-between gap-4 border border-gray-100 rounded-xl px-6 py-5">
                <div className="space-y-0.5">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display font-black text-2xl text-misf-blue-dark">{amount}</span>
                    <span className="font-display font-black text-xl uppercase tracking-widest text-misf-gold">{label}</span>
                  </div>
                  <p className="text-sm text-misf-gray-text leading-relaxed">{desc}</p>
                </div>
                <a
                  href={DONATE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 bg-misf-blue-dark text-white font-display font-black text-xs uppercase tracking-widest px-5 py-2.5 rounded-lg hover:bg-misf-blue transition-colors"
                >
                  Donate →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline image */}
        <div className="space-y-4">
          <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark">Our Journey</h2>
          <div className="rounded-xl overflow-hidden border border-gray-100">
            <img
              src="/images/rmi-timeline.webp"
              alt="MISF timeline from 2021 federation founding to 2030 FIFA World Cup"
              className="w-full"
            />
          </div>
        </div>

        {/* Goal statement */}
        <div className="text-center py-8 border-t border-gray-100">
          <p className="font-display font-black text-misf-blue-dark uppercase leading-tight"
             style={{ fontSize: 'clamp(24px, 5vw, 52px)' }}>
            Our goal: $500,000 USD per year to achieve FIFA membership by 2030.
          </p>
        </div>

      </div>
    </div>
  )
}
