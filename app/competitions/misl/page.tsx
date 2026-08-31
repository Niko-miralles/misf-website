import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/ui/PageHeader'
import MISLForm from '@/components/ui/MISLForm'

export const metadata: Metadata = { title: 'Marshall Islands Soccer League' }

const DETAILS = [
  { label: 'Season Start', value: 'August 13, 2027' },
  { label: 'Season End', value: 'September 24, 2027' },
  { label: 'Duration', value: '66 days' },
  { label: 'Venue', value: 'Track & Field Stadium, Majuro' },
  { label: 'Teams', value: '4 teams' },
  { label: 'Format', value: '6 league game weeks + cup' },
  { label: 'Playoff', value: 'vs Kwajalein League winner' },
]

const PAYMENTS = [
  { label: 'Deposit', amount: '$1,500', due: 'November 1, 2026' },
  { label: 'Payment 2', amount: '$1,500', due: 'February 1, 2027' },
  { label: 'Final', amount: '$1,500', due: 'May 30, 2027' },
]

const INCLUSIONS = [
  'Accommodation',
  'Catering',
  'Transport',
  'Local SIM card',
  'OFC coaching qualification',
  'Highlights package',
  'Introductions to partner clubs in New Zealand, Japan & Europe',
]

export default function MISLPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        eyebrow="Domestic Competition"
        title="Marshall Islands Soccer League"
        subtitle="The first 11v11 soccer league in the nation's history. Launching 2027."
        image="/images/misl-hero.jpg"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        {/* Overview */}
        <div className="space-y-4 text-misf-gray-text leading-relaxed">
          <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark">About the MISL</h2>
          <p>
            The Marshall Islands Soccer League is the inaugural 11-a-side soccer competition in the Marshall Islands. Running from August to September 2027 at the Track & Field Stadium in Majuro, the MISL brings together four clubs competing across six league game weeks plus a cup competition, culminating in an inter-island playoff against the Kwajalein league winner.
          </p>
        </div>

        <div className="overflow-hidden border border-gray-200 bg-misf-blue-dark">
          <div className="relative aspect-[16/9]">
            <img
              src="/images/news/misl-players.jpg"
              alt="Players wanted for the Marshall Islands Soccer League"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-misf-blue-dark/30" />
          </div>
          <div className="p-6 sm:p-8">
            <p className="font-display font-black text-xs uppercase tracking-[0.25em] text-misf-gold mb-3">
              Clubs Pathway
            </p>
            <h2 className="font-display font-black text-2xl uppercase text-white mb-3">
              Clubs will shape the future of the MISL
            </h2>
            <p className="text-sm text-white/75 leading-relaxed mb-5">
              Current futsal clubs and future soccer league clubs will sit at the heart of domestic football in the Marshall Islands.
            </p>
            <Link href="/clubs" className="font-display font-black text-sm uppercase tracking-widest text-misf-gold hover:text-white transition-colors">
              View Clubs →
            </Link>
          </div>
        </div>

        {/* Tournament details */}
        <div>
          <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark mb-5">Tournament Details</h2>
          <div className="divide-y divide-gray-100 border border-gray-100 rounded-lg overflow-hidden">
            {DETAILS.map(({ label, value }) => (
              <div key={label} className="flex gap-4 text-sm px-5 py-4">
                <span className="text-misf-gold font-bold w-40 shrink-0">{label}</span>
                <span className="text-gray-700">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pay to play */}
        <div className="space-y-5">
          <div>
            <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark">Play in the MISL</h2>
            <p className="mt-3 text-misf-gray-text leading-relaxed text-sm">
              The MISL operates on a pay-to-play model. The total cost is <strong className="text-misf-blue-dark">$4,500 USD</strong> (excluding flights), split across three installments.
            </p>
          </div>

          <div className="overflow-x-auto rounded-lg border border-gray-100">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-xs uppercase tracking-widest text-gray-400">
                <tr>
                  <th className="text-left px-5 py-3">Installment</th>
                  <th className="px-4 py-3 text-right">Amount</th>
                  <th className="px-5 py-3 text-right">Due</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {PAYMENTS.map(({ label, amount, due }) => (
                  <tr key={label}>
                    <td className="px-5 py-4 font-medium text-misf-blue-dark">{label}</td>
                    <td className="px-4 py-4 text-right font-bold text-misf-blue-dark">{amount}</td>
                    <td className="px-5 py-4 text-right text-gray-500">{due}</td>
                  </tr>
                ))}
                <tr className="bg-misf-gold/5">
                  <td className="px-5 py-4 font-bold text-misf-blue-dark">Total</td>
                  <td className="px-4 py-4 text-right font-black text-misf-blue-dark">$4,500</td>
                  <td className="px-5 py-4" />
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Included in the fee</p>
            <ul className="space-y-2">
              {INCLUSIONS.map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-misf-gold shrink-0 mt-1.5" />{item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Register interest */}
        <div className="space-y-5">
          <div>
            <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark">Register Your Interest</h2>
            <p className="mt-2 text-misf-gray-text text-sm leading-relaxed">
              Interested in playing in the 2027 MISL season? Fill in the form below and we'll be in touch.
            </p>
          </div>
          <MISLForm />
        </div>

      </div>
    </div>
  )
}
