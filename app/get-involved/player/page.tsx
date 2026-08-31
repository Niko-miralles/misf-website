'use client'

import PageHeader from '@/components/ui/PageHeader'
import DonateStrip from '@/components/home/DonateStrip'
import { useState } from 'react'

const TEAM_STAFF = [
  {
    name: 'Lloyd Owers',
    role: "Men's National Team Head Coach",
    section: 'coaching',
    image: '/images/players/lloyd-owers.png',
  },
  {
    name: 'Katie Smith',
    role: "Women's National Team Head Coach",
    section: 'coaching',
  },
  {
    name: 'Jack Hutchinson',
    role: 'Talent ID Manager',
    section: 'pathways',
  },
  {
    name: 'Wyatt Burrows',
    role: 'Player Pathways',
    section: 'pathways',
  },
  {
    name: 'Dylan Boggiss',
    role: 'Player Pathways',
    section: 'pathways',
  },
  {
    name: 'Danny Razook',
    role: "Men's National Team Coordinator",
    section: 'coordination',
  },
  {
    name: 'Danielle Mihalko',
    role: "Women's National Team Coordinator",
    section: 'coordination',
  },
]

const TIMELINE_STEPS = [
  {
    step: 1,
    title: 'Submit Your Interest',
    description: 'Fill in the form below with your details, playing history, and any video footage of you in action.',
  },
  {
    step: 2,
    title: 'Acknowledged by Talent ID Team',
    description: 'Our Talent ID team will review your submission and get back to you to confirm receipt and next steps.',
  },
  {
    step: 3,
    title: 'Provide Video or Playing History',
    description: 'Share match footage, highlight reels, or a summary of your playing career to help us assess your level.',
  },
  {
    step: 4,
    title: 'Tracked by Player Pathways',
    description: 'You\'ll be added to our player database and monitored by our Player Pathways team.',
  },
  {
    step: 5,
    title: 'Invited to National Team Camps',
    description: 'Eligible players are invited to future national team training camps and selection events.',
  },
]

const PLAYER_GROUPS = [
  {
    title: 'Diaspora players',
    body: 'Marshallese players living in the United States, Australia, New Zealand, the Pacific, or anywhere else in the world.',
    image: '/images/our-story-springdale.jpg',
  },
  {
    title: 'On-island players',
    body: 'Players based in Majuro, Ebeye, Kwajalein, and across the outer atolls who want to be part of the pathway.',
    image: '/images/youth-soccer.webp',
  },
  {
    title: 'Youth to adult',
    body: 'From youth players taking first steps in the game to adult players already competing at club or college level.',
    image: '/images/news/misl-players.jpg',
  },
]

export default function PlayerPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [location, setLocation] = useState('')
  const [age, setAge] = useState('')
  const [position, setPosition] = useState('')
  const [history, setHistory] = useState('')
  const [video, setVideo] = useState('')

  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nLocation: ${location}\nAge: ${age}\nPosition: ${position}\n\nPlaying History:\n${history}\n\nVideo / Links:\n${video}`
  )
  const mailtoHref = `mailto:marshallislandssf@gmail.com?subject=${encodeURIComponent(`Player Registration – ${name}`)}&body=${body}`

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        eyebrow="Get Involved"
        title="New Player Interest"
        subtitle="Are you Marshallese? From the islands or the diaspora, submit your interest in being identified by the national team."
        image="/images/outrigger-2025.png"
        imagePosition="center 48%"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <section className="mb-14 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-0 border border-gray-200 bg-white">
          <div className="relative min-h-[260px] lg:min-h-[360px] bg-misf-blue-dark">
            <img
              src="/images/team-huddle.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-misf-blue-dark/15" />
          </div>
          <div className="p-7 sm:p-10 lg:p-12 flex flex-col justify-center">
            <p className="font-display font-black text-xs uppercase tracking-[0.25em] text-misf-gold mb-3">
              Player Pathway
            </p>
            <h2 className="font-display font-black text-3xl sm:text-4xl uppercase text-misf-blue-dark mb-4">
              Are you Marshallese?
            </h2>
            <div className="space-y-4 text-misf-gray-text leading-relaxed">
              <p>
                Whether you grew up on Majuro, were raised in Springdale, Arkansas, or have Marshallese heritage from anywhere in the world, the Marshall Islands national team wants to find you.
              </p>
              <p>
                We are building our player database and identifying talent from youth to adult, men and women. If you are Marshallese and love football, take the first step.
              </p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {PLAYER_GROUPS.map((group) => (
            <article key={group.title} className="overflow-hidden border border-gray-200 bg-white">
              <div className="relative h-48 bg-misf-blue-dark">
                <img src={group.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-misf-blue-dark/20" />
              </div>
              <div className="p-6">
                <h2 className="font-display font-black text-xl uppercase text-misf-blue-dark mb-3">
                  {group.title}
                </h2>
                <p className="text-sm text-misf-gray-text leading-relaxed">{group.body}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Pathway Timeline */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <p className="font-display font-black text-xs uppercase tracking-[0.25em] text-misf-gold mb-2">Your Journey</p>
            <h2 className="font-display font-black text-3xl sm:text-4xl uppercase text-misf-blue-dark">The Pathway</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-misf-blue/20 hidden sm:block" />
              <div className="space-y-8">
                {TIMELINE_STEPS.map(({ step, title, description }) => (
                  <div key={step} className="flex gap-6">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-misf-gold flex items-center justify-center font-display font-black text-misf-blue-dark text-sm z-10">
                      {step}
                    </div>
                    <div className="flex-1 pb-6 border-b border-gray-100 last:border-0">
                      <h3 className="font-display font-black text-base uppercase text-misf-blue-dark mb-1.5">
                        {title}
                      </h3>
                      <p className="text-sm text-misf-gray-text leading-relaxed">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Meet the Team */}
        <div className="mb-16 bg-misf-gray-light p-6 sm:p-8 lg:p-10">
          <div className="mb-8 max-w-2xl">
            <p className="font-display font-black text-xs uppercase tracking-[0.25em] text-misf-gold mb-2">Talent ID & Player Pathways</p>
            <h2 className="font-display font-black text-3xl sm:text-4xl uppercase text-misf-blue-dark mb-3">Meet the Team</h2>
            <p className="text-sm text-misf-gray-text leading-relaxed">
              The staff helping Marshallese players connect with national team pathways, coaching groups, and player identification.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {TEAM_STAFF.map(({ name: staffName, role, image }) => (
              <div key={staffName} className="flex items-center gap-4 border border-gray-200 bg-white p-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-misf-blue">
                  {image ? (
                    <img src={image} alt={staffName} className="h-full w-full object-cover" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <span className="font-display font-black text-lg text-white">
                        {staffName.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                  )}
                </div>
                <div>
                  <p className="font-display font-black text-sm uppercase text-misf-blue-dark">{staffName}</p>
                  <p className="text-xs text-misf-gray-text mt-1 leading-snug">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interest Form */}
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <p className="font-display font-black text-xs uppercase tracking-[0.25em] text-misf-gold mb-2">Take the First Step</p>
            <h2 className="font-display font-black text-3xl uppercase text-misf-blue-dark">Submit Your Interest</h2>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              window.location.href = mailtoHref
            }}
            className="space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block font-bold text-misf-blue-dark mb-1.5 text-sm">Full Name *</label>
                <input
                  type="text" required value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 focus:border-misf-blue outline-none px-3 py-2.5 text-sm"
                />
              </div>
              <div>
                <label className="block font-bold text-misf-blue-dark mb-1.5 text-sm">Email *</label>
                <input
                  type="email" required value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 focus:border-misf-blue outline-none px-3 py-2.5 text-sm"
                />
              </div>
              <div>
                <label className="block font-bold text-misf-blue-dark mb-1.5 text-sm">Current Location *</label>
                <input
                  type="text" required value={location} placeholder="City, Country"
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full border border-gray-300 focus:border-misf-blue outline-none px-3 py-2.5 text-sm"
                />
              </div>
              <div>
                <label className="block font-bold text-misf-blue-dark mb-1.5 text-sm">Age</label>
                <input
                  type="number" min="10" max="50" value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full border border-gray-300 focus:border-misf-blue outline-none px-3 py-2.5 text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block font-bold text-misf-blue-dark mb-1.5 text-sm">Position(s)</label>
              <input
                type="text" value={position} placeholder="e.g. Striker, Central Midfielder"
                onChange={(e) => setPosition(e.target.value)}
                className="w-full border border-gray-300 focus:border-misf-blue outline-none px-3 py-2.5 text-sm"
              />
            </div>
            <div>
              <label className="block font-bold text-misf-blue-dark mb-1.5 text-sm">Playing History</label>
              <textarea
                rows={4} value={history}
                placeholder="Tell us about your football background — clubs, leagues, experience level..."
                onChange={(e) => setHistory(e.target.value)}
                className="w-full border border-gray-300 focus:border-misf-blue outline-none px-3 py-2.5 text-sm resize-y"
              />
            </div>
            <div>
              <label className="block font-bold text-misf-blue-dark mb-1.5 text-sm">Video / Links</label>
              <textarea
                rows={3} value={video}
                placeholder="YouTube, Instagram, or any links to footage of you playing..."
                onChange={(e) => setVideo(e.target.value)}
                className="w-full border border-gray-300 focus:border-misf-blue outline-none px-3 py-2.5 text-sm resize-y"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-misf-gold text-misf-blue-dark font-display font-black text-sm uppercase tracking-widest px-8 py-4 hover:bg-[#d4911c] transition-colors"
            >
              Submit Interest →
            </button>
            <p className="text-xs text-misf-gray-text text-center">
              This will open your email client pre-filled with your submission.
            </p>
          </form>
        </div>

      </div>

      <DonateStrip />
    </div>
  )
}
