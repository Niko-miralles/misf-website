'use client'
import { useState } from 'react'
import { Player } from '@/data/players'
import PlayerCard from './PlayerCard'

const TABS = ['All', 'Goalkeepers', 'Defenders', 'Midfielders', 'Forwards']

const POSITION_MAP: Record<string, string> = {
  Goalkeepers: 'Goalkeeper',
  Defenders:   'Defender',
  Midfielders: 'Midfielder',
  Forwards:    'Forward',
}

const SECTION_ORDER = ['Goalkeeper', 'Defender', 'Midfielder', 'Forward']
const SECTION_LABELS: Record<string, string> = {
  Goalkeeper: 'Goalkeepers',
  Defender:   'Defenders',
  Midfielder: 'Midfielders',
  Forward:    'Forwards',
}

export default function SquadGrid({ players, note }: { players: Player[]; note?: string }) {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? players
    : players.filter(p => p.position === POSITION_MAP[active])

  const grouped = SECTION_ORDER.reduce<Record<string, Player[]>>((acc, pos) => {
    const group = filtered.filter(p => p.position === pos)
    if (group.length) acc[pos] = group
    return acc
  }, {})

  return (
    <div className="bg-white py-10 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Underline tabs */}
        <div className="flex gap-0 border-b border-gray-200 mb-10">
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-5 py-3 font-display font-bold text-sm uppercase tracking-wide transition-colors border-b-2 -mb-px ${
                active === tab
                  ? 'border-misf-blue-dark text-misf-blue-dark'
                  : 'border-transparent text-gray-400 hover:text-misf-blue-dark'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Sections */}
        {Object.entries(grouped).map(([pos, group]) => (
          <div key={pos} className="mb-12">
            <h3 className="font-display font-black text-3xl sm:text-4xl text-misf-blue-dark mb-6">
              {SECTION_LABELS[pos]}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {group.map(player => (
                <PlayerCard key={player.id} player={player} />
              ))}
            </div>
          </div>
        ))}

        {note && (
          <p className="text-gray-300 text-xs mt-2">{note}</p>
        )}
      </div>
    </div>
  )
}
