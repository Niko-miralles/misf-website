import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/ui/PageHeader'
import DonateStrip from '@/components/home/DonateStrip'

export const metadata: Metadata = {
  title: 'About MISF',
  description: 'About the Marshall Islands Soccer Federation, our mission, story, programmes, team, and contact information.',
}

const INTRO_SECTIONS = [
  {
    eyebrow: 'Who We Are',
    title: 'The last nation on Earth to field national soccer teams',
    image: '/images/our-story-national-team.jpg',
    body: [
      'The Marshall Islands Soccer Federation provides opportunities for every Marshallese person, no matter where they are in the world, to represent their nation, connect with their community, and enact change.',
      'We are building something historic from the ground up. From the atolls of the South Pacific to the Marshallese diaspora in Northwest Arkansas and beyond, we are growing the game while raising the profile of the Marshall Islands on the global stage.',
    ],
  },
  {
    eyebrow: 'Our Mission',
    title: 'More than a sport',
    image: '/images/youth-soccer.webp',
    body: [
      'We provide opportunities for every Marshallese person, anywhere in the world, to play and coach soccer, represent their national team, and use the beautiful game to showcase our nation to the world.',
      'Soccer is a vehicle for cultural pride, youth empowerment, and global change. By building teams, hosting matches, and sharing Marshallese stories, we aim to inspire solidarity, drive support, and ensure that the Marshall Islands are never forgotten.',
    ],
  },
  {
    eyebrow: 'Our Story',
    title: 'A national movement from a personal spark',
    image: '/images/our-story-camp.png',
    body: [
      'The Marshall Islands Soccer Federation was founded in 2021 by Shem Livai in Majuro. The spark was personal: Shem’s son wanted to play soccer, but there was no infrastructure for the sport in the Marshall Islands.',
      'Since then, we have assembled a team of dedicated volunteers across the Marshall Islands, the United States, and the United Kingdom. We fielded our first international teams in 2025, and in July 2027 we plan to launch the Marshall Islands Soccer League, the country’s first organised club competition.',
    ],
  },
]

const WORK = [
  {
    title: 'We compete globally',
    image: '/images/outrigger-2025.png',
    body: 'Our men’s and women’s national teams represent the Marshall Islands in international competition, with the goal of joining the Asian Football Confederation and FIFA.',
  },
  {
    title: 'We develop the next generation',
    image: '/images/coaching-placements-school.jpg',
    body: 'We run youth development clinics in the Marshall Islands and Northwest Arkansas, provide coaching and equipment, and support soccer in schools.',
  },
  {
    title: 'We build community',
    image: '/images/team-huddle.jpg',
    body: 'We are creating a global community of fans and supporters while educating the world about Marshallese culture and the climate crisis facing the nation.',
  },
]

const INVOLVED = [
  {
    title: 'If you are Marshallese',
    body: 'This is your team. Whether you are on-island or in the diaspora, come play, coach, cheer, and help us show the world what it means to be Marshallese.',
  },
  {
    title: 'If you are a soccer fan',
    body: 'Support the last nation on Earth to start a national soccer team from the very beginning. Follow the journey, wear the kit, show up, and help us grow.',
  },
  {
    title: 'If you are a sponsor or funder',
    body: 'A partnership with MISF supports grassroots programmes, national teams, climate advocacy, and a roadmap toward FIFA membership by 2030.',
  },
  {
    title: 'If you are in Northwest Arkansas',
    body: 'We are your home team. Come to a clinic, support a match, and connect with Marshallese neighbours through the game.',
  },
]

const MILESTONES = [
  { year: '2021', title: 'Federation Founded', image: '/images/our-story-ebeye.jpg', body: 'MISF begins with Shem Livai’s idea to create opportunities for young Marshallese soccer players.' },
  { year: '2023', title: 'Youth Programme Begins', image: '/images/youth-soccer.webp', body: 'Coaches begin delivering school and community sessions for the first generation of players.' },
  { year: '2024', title: 'Women’s Camp', image: '/images/our-story-camp.png', body: 'Players gather for the first women’s national team training camp in the United States.' },
  { year: '2025', title: 'First International Matches', image: '/images/outrigger-2025.png', body: 'The Marshall Islands national team takes the field for the first time.' },
  { year: '2027', title: 'First Home Matches', image: '/images/outrigger-2027-placeholder.jpg', body: 'MISF plans to bring international soccer to the Marshall Islands for the first time.' },
  { year: '2030', title: 'FIFA Pathway', image: '/images/team-huddle.jpg', body: 'The federation continues its work toward confederation and FIFA recognition.' },
]

const LEADERSHIP_SECTIONS = [
  {
    title: 'Board',
    intro: 'Marshall Islands Soccer Federation is a volunteer led organisation supported by a cast of trailblazers from around the world.',
    people: [
      { name: 'Shem Livai', role: 'President' },
      { name: 'Matt Webb', role: 'General Secretary' },
      { name: 'Martin Housanau', role: 'Treasurer' },
      { name: 'Divine Waiti', role: 'Vice President' },
      { name: 'Lloyd Owers', role: 'Technical Director', image: '/images/players/lloyd-owers.png' },
      { name: 'Scott Hill', role: 'Chairman' },
      { name: 'Tony Theomae', role: 'Board Member', image: '/images/players/tony-theomae.png' },
    ],
  },
  {
    title: 'Back Office',
    intro: 'Operations, communications, legal, events, administration, and global support.',
    people: [
      { name: 'Justin Walley', role: 'Communications Director', image: '/images/players/justin-walley.png' },
      { name: 'Woody Watson', role: 'VP of North American Ops' },
      { name: 'Jack Hutchinson', role: 'Head of Global Talent ID' },
      { name: 'Jason Roberts', role: 'Head of Legal & Compliance' },
      { name: 'Michael Hopwood', role: 'Australasian Operations Manager' },
      { name: 'Amir St. Clair', role: 'Outrigger Challenge Cup & Events Ops' },
      { name: 'Niko Miralles', role: 'Web Developer', image: '/images/players/niko-miralles.jpg' },
      { name: 'Sabina Massida', role: 'Admin Support' },
      { name: 'Max Houchin', role: 'Operations Assistant' },
      { name: 'Paul Smith', role: 'Australasian Operations' },
    ],
  },
  {
    title: 'Sporting',
    intro: 'The coaching, analysis, medical, coordination, and performance staff supporting our national team pathways.',
    people: [
      { name: 'Katie Smith', role: "Women's National Team Head Coach" },
      { name: 'Josie Matlick', role: "Women's National Team Assistant Coach" },
      { name: 'Lloyd Owers', role: "Men's National Team Head Coach", image: '/images/players/lloyd-owers.png' },
      { name: 'Dean Johnson', role: "Men's National Team Assistant Head Coach" },
      { name: 'Matt Perrella', role: "Men's National Team Assistant Coach" },
      { name: 'Ronan Manning', role: 'Analyst' },
      { name: 'Ross Mitchell', role: 'Analyst' },
      { name: 'Mike Wheeler', role: 'Analyst' },
      { name: 'Will Wilson', role: 'Futsal Coordinator' },
      { name: 'Dan Kiernan', role: 'Strength & Conditioning Coordinator' },
      { name: 'Rigo Resendez', role: 'Physio' },
      { name: 'Danielle Mihalko', role: "Women's National Team Coordinator" },
      { name: 'Danny Razook', role: "Men's National Team Coordinator" },
    ],
  },
]

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        eyebrow="Marshall Islands Soccer Federation"
        title="About MISF"
        subtitle="Who we are, why we exist, and how to get involved."
        image="/images/our-story-hero.avif"
        imagePosition="center 46%"
      />

      <div className="bg-misf-blue py-9 sm:py-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display font-black text-xl sm:text-2xl lg:text-3xl uppercase text-white leading-snug">
            We provide opportunities for Marshallese people everywhere to play, coach, represent their nation, and connect through soccer.
          </p>
          <Link
            href="/about/marshallese"
            className="inline-block mt-6 bg-misf-gold text-misf-blue-dark font-display font-black text-xs uppercase tracking-widest px-7 py-3 hover:bg-[#d4911c] transition-colors"
          >
            Read in Marshallese →
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-10">
        {INTRO_SECTIONS.map((section, index) => (
          <section key={section.title} className="grid grid-cols-1 lg:grid-cols-2 border border-gray-200 overflow-hidden bg-white">
            <div className={`relative min-h-[280px] lg:min-h-[430px] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <img src={section.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-misf-blue-dark/20" />
            </div>
            <div className="p-7 sm:p-10 lg:p-12 flex flex-col justify-center">
              <p className="font-display font-black text-xs uppercase tracking-[0.25em] text-misf-gold mb-3">{section.eyebrow}</p>
              <h2 className="font-display font-black text-3xl sm:text-4xl uppercase text-misf-blue-dark leading-none mb-6">{section.title}</h2>
              <div className="space-y-5 text-misf-gray-text leading-relaxed">
                {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="bg-misf-gray-light py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="font-display font-black text-xs uppercase tracking-[0.25em] text-misf-gold mb-2">What We Do</p>
            <h2 className="font-display font-black text-3xl sm:text-4xl uppercase text-misf-blue-dark">Teams, development, and community</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WORK.map((item) => (
              <div key={item.title} className="group bg-white border border-gray-200 overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden bg-misf-blue-dark">
                  <img src={item.image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-black text-lg uppercase text-misf-blue-dark mb-3">{item.title}</h3>
                  <p className="text-sm text-misf-gray-text leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] border border-gray-200 overflow-hidden">
            <div className="relative min-h-[380px] p-8 sm:p-10 flex flex-col justify-end">
              <img src="/images/inter-island-youth-camp.png" alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-misf-blue-dark/70" />
              <div className="relative">
                <p className="font-display font-black text-xs uppercase tracking-[0.25em] text-misf-gold mb-3">Get Involved</p>
                <h2 className="font-display font-black text-4xl sm:text-5xl uppercase text-white leading-none">Be part of the story we are writing</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 bg-white">
              {INVOLVED.map((item) => (
                <div key={item.title} className="border-b border-r border-gray-200 p-6 sm:p-7">
                  <h3 className="font-display font-black text-lg uppercase text-misf-blue-dark mb-2">{item.title}</h3>
                  <p className="text-sm text-misf-gray-text leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-misf-blue-dark py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-7">
            <p className="font-display font-black text-xs uppercase tracking-[0.25em] text-misf-gold mb-3">Key Milestones</p>
            <h2 className="font-display font-black text-3xl sm:text-4xl uppercase text-white leading-none">Building from the ground up</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {MILESTONES.map((milestone) => (
              <article key={`${milestone.year}-${milestone.title}`} className="group overflow-hidden bg-white">
                <div className="relative aspect-[16/8] overflow-hidden bg-misf-blue-dark">
                  <img src={milestone.image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute left-4 top-4 bg-misf-gold px-3 py-1.5">
                    <p className="font-display font-black text-xl text-misf-blue-dark leading-none">{milestone.year}</p>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-black text-lg uppercase text-misf-blue-dark mb-2">{milestone.title}</h3>
                  <p className="text-sm text-misf-gray-text leading-relaxed">{milestone.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <p className="font-display font-black text-xs uppercase tracking-[0.25em] text-misf-gold mb-2">Meet the Team</p>
            <h2 className="font-display font-black text-4xl uppercase text-misf-blue-dark leading-none">Leadership team</h2>
            <p className="mt-5 max-w-3xl text-sm sm:text-base text-misf-gray-text leading-relaxed">
              Marshall Islands Soccer Federation is a volunteer led organisation supported by a cast of trailblazers from around the world.
            </p>
          </div>

          <div className="mt-10 space-y-12">
            {LEADERSHIP_SECTIONS.map((section) => (
              <div key={section.title}>
                <div className="mb-5 border-l-4 border-misf-gold pl-5">
                  <h3 className="font-display font-black text-2xl uppercase text-misf-blue-dark">{section.title}</h3>
                  <p className="mt-1 text-sm text-misf-gray-text">{section.intro}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {section.people.map((person) => (
                    <div key={`${section.title}-${person.name}-${person.role}`} className="border border-gray-200 bg-white p-4">
                      <div className="mb-3 flex items-center gap-3">
                        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-misf-blue">
                          {person.image ? (
                            <img src={person.image} alt={person.name} className="h-full w-full object-cover" />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center">
                              <span className="font-display font-black text-sm text-white">
                                {person.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                              </span>
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="font-display font-black text-sm uppercase leading-tight text-misf-blue-dark">{person.name}</p>
                          <p className="mt-1 text-xs leading-snug text-misf-gray-text">{person.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-misf-gray-light py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] overflow-hidden border border-gray-200 bg-white">
            <div className="relative min-h-[320px] lg:min-h-[460px]">
              <img src="/images/islands-majuro-aerial.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-misf-blue-dark/25" />
            </div>
            <div className="p-7 sm:p-10 lg:p-12 flex flex-col justify-center">
              <p className="font-display font-black text-xs uppercase tracking-[0.25em] text-misf-gold mb-3">Contact</p>
              <h2 className="font-display font-black text-3xl sm:text-4xl uppercase text-misf-blue-dark leading-none mb-6">Volunteering, press enquiries, sponsorship, or general questions</h2>
              <p className="text-misf-gray-text leading-relaxed mb-8">
                We are happy to talk. Our media team is available for radio, TV, video, podcast, and written requests.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-misf-gold text-misf-blue-dark font-display font-black text-sm uppercase tracking-widest px-8 py-3 hover:bg-[#d4911c] transition-colors">Contact Form →</Link>
                <a href="mailto:marshallislandssf@gmail.com" className="bg-misf-blue-dark text-white font-display font-black text-sm uppercase tracking-widest px-8 py-3 hover:bg-misf-blue transition-colors">marshallislandssf@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DonateStrip />
    </div>
  )
}
