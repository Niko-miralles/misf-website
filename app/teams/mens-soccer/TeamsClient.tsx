'use client'

import { useState } from 'react'
import PlayerCard from '@/components/ui/PlayerCard'
import type { Player } from '@/lib/players'
import { groupByPosition } from '@/lib/players'

interface TeamData {
  label: string
  players: Player[]
}

export default function TeamsClient({ teams, title = 'Teams' }: { teams: TeamData[]; title?: string }) {
  const [idx, setIdx] = useState(0)
  const groups = groupByPosition(teams[idx].players)

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">

        <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-misf-blue-dark leading-none mb-6">
          {title}
        </h1>

        {/* Team tabs */}
        {teams.length > 1 && <div className="flex gap-0 border-b border-gray-200 mb-10">
          {teams.map((t, i) => (
            <button
              key={t.label}
              onClick={() => setIdx(i)}
              className={`px-5 py-3.5 font-display font-bold text-sm uppercase tracking-wide transition-colors border-b-2 -mb-px ${
                idx === i
                  ? 'border-misf-blue-dark text-misf-blue-dark'
                  : 'border-transparent text-gray-400 hover:text-misf-blue-dark'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>}

        {/* Position groups */}
        {groups.map(({ label, players }) => (
          <div key={label} className="mb-12">
            <h3 className="font-display font-black text-3xl sm:text-4xl text-misf-blue-dark mb-5">
              {label}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {players.map((player) => (
                <PlayerCard key={player.id} player={player} />
              ))}
            </div>
          </div>
        ))}

        {groups.length === 0 && (
          <p className="text-gray-300 text-sm font-display uppercase tracking-widest py-20 text-center">
            Squad to be announced
          </p>
        )}
      </div>
    </div>
  )
}
