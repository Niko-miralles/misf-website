import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = { title: '2027 Outrigger Challenge Cup' }

export default function Outrigger2027Page() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        eyebrow="Outrigger Challenge Cup"
        title="2027 Majuro"
        subtitle="Coming to the Marshall Islands."
        image="/images/outrigger-2027-placeholder.jpg"
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-8">
        <p className="text-misf-gray-text leading-relaxed text-lg">
          We are currently planning the 2027 Outrigger Challenge Cup to take place in Majuro, RMI.
        </p>

        <div className="border border-gray-100 rounded-lg overflow-hidden inline-block w-full text-left">
          <div className="bg-misf-blue-dark px-6 py-4">
            <span className="font-display font-black text-misf-gold text-lg">Tournament Details</span>
          </div>
          <dl className="divide-y divide-gray-100">
            {[
              { label: 'Format', value: 'Soccer & Futsal' },
              { label: 'Gender', value: "Men's & Women's" },
              { label: 'Location', value: 'Majuro, Marshall Islands' },
              { label: 'Competing Nations', value: 'TBC' },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between px-6 py-4 text-sm">
                <dt className="text-gray-400 uppercase tracking-widest">{label}</dt>
                <dd className="font-bold text-misf-blue-dark">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <Link href="/competitions/outrigger-cup" className="inline-block text-misf-blue font-display font-bold text-sm uppercase tracking-widest hover:text-misf-blue-dark transition-colors">
          ← All Editions
        </Link>
      </div>
    </div>
  )
}
