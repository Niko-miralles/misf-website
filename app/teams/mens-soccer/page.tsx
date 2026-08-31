import type { Metadata } from 'next'
import TeamsClient from './TeamsClient'
import { fetchAllPlayers, teamMatches } from '@/lib/players'

export const metadata: Metadata = { title: 'Teams' }

export default async function TeamsPage() {
  const players = await fetchAllPlayers()
  const matchedMensSoccer = players.filter((player) => teamMatches(player.team || '', "Men's Soccer"))
  const mensFutsal = players.filter((player) => teamMatches(player.team || '', "Men's Futsal"))
  const womensFutsal = players.filter((player) => teamMatches(player.team || '', "Women's Futsal"))
  const mensSoccer = matchedMensSoccer.length > 0
    ? matchedMensSoccer
    : players.filter((player) => !teamMatches(player.team || '', "Men's Futsal") && !teamMatches(player.team || '', "Women's Futsal"))

  return (
    <TeamsClient
      teams={[
        { label: "Men's Soccer", players: mensSoccer },
        { label: "Men's Futsal", players: mensFutsal },
        { label: "Women's Futsal", players: womensFutsal },
      ]}
    />
  )
}
