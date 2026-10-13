import { sanityClient } from '@/lib/sanity'

export interface Player {
  id: string | number
  name: string
  position: string
  photo: string | null
  team?: string
  number?: number | string
  nationality?: string
}

const TEAM_ALIASES: Record<string, string[]> = {
  "Men's Soccer": ["men's soccer", 'mens soccer', 'men soccer', "men's national team", 'mens national team'],
  "Men's Futsal": ["men's futsal", 'mens futsal', 'men futsal'],
  "Women's Futsal": ["women's futsal", 'womens futsal', 'women futsal'],
}

export const STAFF_POSITIONS = new Set([
  'Head Coach', 'Assistant Coach', 'Goalkeeper Coach',
  'Coach', 'Physio', 'Analyst', 'General Secretary',
])

export const POSITION_BUCKETS: { label: string; match: (p: string) => boolean }[] = [
  { label: 'Goalkeepers',    match: (p) => p === 'Goalkeeper' },
  { label: 'Defenders',      match: (p) => ['Defender', 'Full back', 'Center back', 'Centre back'].includes(p) },
  { label: 'Midfielders',    match: (p) => ['Midfielder', 'Center midfield', 'Centre midfield'].includes(p) },
  { label: 'Forwards',       match: (p) => ['Forward', 'Attacker', 'Winger'].includes(p) },
  { label: 'Technical Staff', match: (p) => STAFF_POSITIONS.has(p) },
]

export function groupByPosition(players: Player[]): { label: string; players: Player[] }[] {
  const groups = POSITION_BUCKETS.map((b) => ({
    label: b.label,
    players: players.filter((p) => b.match(p.position)),
  })).filter((g) => g.players.length > 0)

  const matched = new Set(groups.flatMap((g) => g.players.map((p) => p.id)))
  const rest = players.filter((p) => !matched.has(p.id))
  if (rest.length > 0) groups.push({ label: 'Squad', players: rest })

  return groups
}

function normalize(value: string) {
  return value.toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9]+/g, ' ').trim()
}

export function teamMatches(playerTeam: string, selectedTeam: string) {
  const actual = normalize(playerTeam)
  const aliases = TEAM_ALIASES[selectedTeam] || [selectedTeam]
  return aliases.some((alias) => actual.includes(normalize(alias)))
}

export async function fetchAllPlayers(): Promise<Player[]> {
  const cmsPlayers = await sanityClient.fetch<Array<{
    _id: string
    name: string
    role?: string
    position?: string
    team?: string
    shirtNumber?: number
    image?: string
  }>>(
    `*[_type == "person" && defined(team)] | order(order asc, name asc) {
      _id, name, role, position, team, shirtNumber, "image": image.asset->url
    }`,
    {},
    { next: { revalidate: 60 } },
  )

  return cmsPlayers.map((player) => ({
    id: player._id,
    name: player.name,
    position: player.position || player.role || 'Squad',
    photo: player.image || null,
    team: player.team,
    number: player.shirtNumber,
  }))
}

export async function fetchPlayers(team?: string): Promise<Player[]> {
  const players = await fetchAllPlayers()
  if (!team) return players
  return players.filter((player) => teamMatches(player.team || '', team))
}
