import type { Metadata } from 'next'
import TeamsClient from './TeamsClient'
import { fetchAllPlayers, teamMatches } from '@/lib/players'

export const metadata: Metadata = {
  title: "Men's Soccer",
  description: "Marshall Islands men's soccer team squad and technical staff.",
}

export default async function TeamsPage() {
  const players = await fetchAllPlayers()
  const matchedMensSoccer = players.filter((player) => teamMatches(player.team || '', "Men's Soccer"))
  const mensSoccer = matchedMensSoccer.length > 0
    ? matchedMensSoccer
    : players.filter((player) => !teamMatches(player.team || '', "Men's Futsal") && !teamMatches(player.team || '', "Women's Futsal"))

  return (
    <TeamsClient
      title="Men's Soccer"
      teams={[{ label: "Men's Soccer", players: mensSoccer }]}
    />
  )
}
