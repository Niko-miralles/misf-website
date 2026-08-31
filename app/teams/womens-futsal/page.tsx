import type { Metadata } from 'next'
import PageHeader from '@/components/ui/PageHeader'
import PlayerCard from '@/components/ui/PlayerCard'
import DonateStrip from '@/components/home/DonateStrip'
import { fetchPlayers } from '@/lib/players'

export const metadata: Metadata = { title: "Women's Futsal" }

export default async function WomensFutsalPage() {
  const players = await fetchPlayers("Women's Futsal")

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        eyebrow="National Team"
        title="Women's Futsal"
        subtitle="Growing women's football in the Marshall Islands."
        gradient="from-[#7C3AED] via-[#1A4BAE] to-[#0E2D7A]"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="space-y-5 text-misf-gray-text leading-relaxed">
          <p>
            The women's futsal programme represents MISF's commitment to growing the game for all Marshallese people. The team is developing through a combination of on-island training sessions and diaspora outreach, working to field a competitive side in OFC Women's Futsal competition.
          </p>
          <p>
            MISF actively promotes women's football participation through Project 1,000 Players, with dedicated youth sessions for girls running weekly on Majuro. The women's futsal team is the senior pathway for these players.
          </p>
        </div>
      </div>

      <div className="bg-misf-gray-light py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-black text-2xl sm:text-3xl uppercase text-misf-blue-dark mb-8">
            Squad
          </h2>
          {players.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {players.map((player) => (
                <PlayerCard key={player.id} player={player} />
              ))}
            </div>
          ) : (
            <p className="text-gray-300 text-sm font-display uppercase tracking-widest">
              Squad to be announced
            </p>
          )}
        </div>
      </div>

      <DonateStrip />
    </div>
  )
}
