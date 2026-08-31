import type { Metadata } from 'next'
import PageHeader from '@/components/ui/PageHeader'
import { federationStaff, staffDepartments } from '@/data/federation-staff'

export const metadata: Metadata = {
  title: 'Federation Team',
  description: 'Board members and the global volunteer team behind the Marshall Islands Soccer Federation.',
}

function initials(name: string) {
  return name.split(' ').map((part) => part[0]).join('').slice(0, 2)
}

export default function FederationTeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        eyebrow="Marshall Islands Soccer Federation"
        title="Our Team"
        subtitle="Board members and volunteers building football opportunities for Marshallese communities around the world."
        image="/images/team-huddle.jpg"
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="max-w-3xl">
          <p className="font-display text-xs font-black uppercase tracking-[0.25em] text-misf-gold">Global volunteer network</p>
          <h2 className="mt-3 font-display text-3xl font-black uppercase text-misf-blue-dark sm:text-4xl">A federation powered by people</h2>
          <p className="mt-4 text-base leading-relaxed text-misf-gray-text sm:text-lg">
            MISF is a volunteer-led federation. Our board, staff, coaches, and specialist volunteers work across the Marshall Islands and the global diaspora.
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {staffDepartments.map((department) => {
            const people = federationStaff.filter((person) => person.department === department)
            if (!people.length) return null

            return (
              <section key={department} aria-labelledby={`department-${department}`}>
                <h2 id={`department-${department}`} className="border-b border-gray-200 pb-4 font-display text-3xl font-black uppercase text-misf-blue-dark">
                  {department}
                </h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {people.map((person) => (
                    <article key={`${person.name}-${person.role}`} className="flex gap-4 border border-gray-200 bg-misf-gray-light p-5">
                      <div aria-hidden className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-misf-blue font-display text-lg font-black text-misf-gold">
                        {initials(person.name)}
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-black uppercase text-misf-blue-dark">{person.name}</h3>
                        <p className="mt-1 text-sm font-semibold text-misf-gray-text">{person.role}</p>
                        <p className="mt-2 text-xs uppercase tracking-wide text-misf-gray-text">{person.flag} {person.location}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </div>
  )
}
