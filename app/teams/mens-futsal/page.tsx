import type { Metadata } from 'next'
import PageHeader from '@/components/ui/PageHeader'
import PlayerCard from '@/components/ui/PlayerCard'
import DonateStrip from '@/components/home/DonateStrip'
import { fetchPlayers } from '@/lib/players'

export const metadata: Metadata = { title: "Men's Futsal" }

export default async function MensFutsalPage() {
  const players = await fetchPlayers("Men's Futsal")

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        eyebrow="National Team"
        title="Men's Futsal"
        subtitle="The fast-format game driving development across the atolls."
        gradient="from-[#0E2D7A] via-[#1A4BAE] to-[#2563EB]"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="space-y-5 text-misf-gray-text leading-relaxed">
          <p>
            Futsal is central to MISF's development model. With limited full-size pitch infrastructure across the atolls, the compact format of futsal allows players of all ages to develop technical skills, tactical awareness and competitive instincts in any available space.
          </p>
          <p>
            The men's futsal national team competes in regional OFC Futsal Championship qualification, providing vital international match experience as the federation builds its competitive profile.
          </p>
          <p>
            Training camps and selection trials are held on Majuro and Ebeye, with scouts monitoring players from the diaspora in the United States.
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
