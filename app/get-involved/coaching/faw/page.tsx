import type { Metadata } from 'next'
import PageHeader from '@/components/ui/PageHeader'
import CoachingForm from '@/components/ui/CoachingForm'

export const metadata: Metadata = { title: 'FAW Coaching Courses' }

const INTRO_COURSES = [
  {
    name: 'Intro to Coaching Football',
    price: '£100',
    href: 'https://lms.faw.cymru/courses/introduction-to-coaching-football-award-marshall-islands-soccer-federation/?code=A8HGDVDuhoO1QSMuIabgfvBIGcDS70AZcSWDAye9hvg',
  },
  {
    name: 'Intro to Coaching Goalkeepers',
    price: '£100',
    href: 'https://lms.faw.cymru/courses/introduction-to-coaching-goalkeepers-marshall-islands-soccer-federation/?code=d_ILgLUzJv5b9_31TL8p-SGtf30uhzO5toTMAJUXjqU',
  },
  {
    name: 'Safeguarding Awareness Award',
    price: '£25',
    href: 'https://lms.faw.cymru/courses/safeguarding-awareness-award-marshall-islands-soccer-federation/?code=TuMZBYdIA3kA5AMzh545nfWJM1Fp8wIZFPFqymYHR4Q',
  },
  {
    name: 'Football Emergency Aid',
    price: '£50',
    href: 'https://lms.faw.cymru/courses/football-emergency-aid-award-marshall-islands-soccer-federation/?code=rNrtev0qflY4mMYELmBSoez0eXTNVbZoeMAqBkEHd90',
  },
  {
    name: 'Talent ID Level 1',
    price: '£50',
    href: 'https://lms.faw.cymru/courses/talent-id-level-one-marshall-islands-soccer-federation/?code=_9mweGqtJBUnxQeFMMCfC4mxrjNWJtj7ZnFNG0T13Ww',
  },
]

export default function FAWCoachingPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        eyebrow="Coaching"
        title="FAW Coaching Courses"
        subtitle="UEFA-aligned coaching education delivered in partnership with the Football Association of Wales."
        image="/images/coaching-team-prayer.jpg"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">

        {/* About */}
        <div className="space-y-4 text-misf-gray-text leading-relaxed">
          <p>
            The Marshall Islands Soccer Federation partners with the Football Association of Wales (FAW) to provide self-guided coaching education courses. These qualifications sit within the wider UEFA coaching pathway, enabling participants to progress to residential courses for UEFA C, B, and A licences in Wales.
          </p>
          <p>
            All courses are completed online through the FAW platform and are available to coaches anywhere in the world. MISF supports Marshallese coaches in accessing these qualifications as part of our broader coach development mission.
          </p>
        </div>

        {/* FAW pathway diagram */}
        <div className="rounded-xl overflow-hidden border border-gray-100">
          <img
            src="/images/coaching-faw-diagram.png"
            alt="FAW coaching pathway diagram"
            className="w-full object-contain"
          />
        </div>

        {/* Courses available */}
        <div className="space-y-8">
          <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark">Courses Available Through MISF</h2>

          <div className="space-y-4">
            <h3 className="font-display font-black text-sm uppercase tracking-widest text-misf-gold">Introductory Courses</h3>
            <div className="space-y-3">
              {INTRO_COURSES.map((c) => (
                <div key={c.name} className="flex items-center justify-between bg-misf-gray-light rounded-xl px-6 py-5 gap-4">
                  <span className="font-display font-black text-lg uppercase text-misf-blue-dark leading-tight">{c.name}</span>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="font-display font-black text-2xl text-misf-blue-dark">{c.price}</span>
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-misf-blue-dark text-white font-display font-black text-xs uppercase tracking-widest px-5 py-2.5 rounded-lg hover:bg-misf-blue transition-colors whitespace-nowrap"
                    >
                      Sign Up →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-display font-black text-sm uppercase tracking-widest text-misf-gold">Advanced Pathway</h3>
            <div className="flex items-center justify-between bg-misf-blue-dark rounded-xl px-6 py-5 gap-4">
              <div>
                <p className="font-display font-black text-lg uppercase text-white leading-tight">FAW Grassroots Leaders</p>
                <p className="text-white/60 text-sm mt-1">Contact MISF to register</p>
              </div>
              <span className="font-display font-black text-2xl text-misf-gold shrink-0">£300</span>
            </div>
            <p className="text-sm text-misf-gray-text px-1">Then progress to UEFA C → UEFA B → UEFA A → UEFA Pro Licence</p>
          </div>
        </div>

        {/* Register interest */}
        <div className="space-y-5 pt-4 border-t border-gray-100">
          <div>
            <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark">Register Interest</h2>
            <p className="mt-2 text-misf-gray-text text-sm leading-relaxed">
              Fill in the form and we'll be in touch about enrolling in FAW courses through MISF.
            </p>
          </div>
          <CoachingForm />
        </div>

      </div>
    </div>
  )
}
