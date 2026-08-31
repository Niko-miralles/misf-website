export interface Player {
  id: string | number
  name: string
  position: string
  photo: string | null
  team?: string
  number?: number | string
  nationality?: string
}

interface AirtableAttachment {
  url?: string
  thumbnails?: {
    large?: { url?: string }
    full?: { url?: string }
  }
}

interface AirtableRecord {
  id: string
  fields: Record<string, unknown>
}

const PHOTO_FIELDS = [
  'Photo',
  'Photos',
  'Image',
  'Images',
  'Headshot',
  'Picture',
  'Profile Photo',
  'Player Photo',
  'Avatar',
]

const NUMBER_FIELDS = ['Number', 'Squad Number', 'Shirt Number', 'Kit Number', 'No.']

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

function fieldString(fields: Record<string, unknown>, names: string[], fallback = '') {
  for (const name of names) {
    const value = fields[name]
    if (typeof value === 'string' && value.trim()) return value.trim()
    if (typeof value === 'number') return String(value)
    if (Array.isArray(value)) {
      const strings = value.filter((item): item is string => typeof item === 'string' && item.trim().length > 0)
      if (strings.length > 0) return strings.join(', ')
    }
  }
  return fallback
}

function imageUrl(value: unknown): string | null {
  if (typeof value === 'string' && value.trim()) return value.trim()

  if (Array.isArray(value)) {
    for (const item of value) {
      const url = imageUrl(item)
      if (url) return url
    }
    return null
  }

  if (value && typeof value === 'object') {
    const attachment = value as AirtableAttachment
    return attachment.thumbnails?.large?.url || attachment.thumbnails?.full?.url || attachment.url || null
  }

  return null
}

function firstImage(fields: Record<string, unknown>) {
  for (const name of PHOTO_FIELDS) {
    const url = imageUrl(fields[name])
    if (url) return url
  }
  return null
}

export function teamMatches(playerTeam: string, selectedTeam: string) {
  const actual = normalize(playerTeam)
  const aliases = TEAM_ALIASES[selectedTeam] || [selectedTeam]
  return aliases.some((alias) => actual.includes(normalize(alias)))
}

async function airtableFetch(url: string, token: string) {
  for (let attempt = 0; attempt < 3; attempt += 1) {
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 300 },
    })

    if (res.status !== 429) return res

    const retryAfter = Number(res.headers.get('retry-after') || '1')
    await new Promise((resolve) => setTimeout(resolve, Math.max(retryAfter, 1) * 1000))
  }

  return fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
    next: { revalidate: 300 },
  })
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

  if (cmsPlayers.length > 0) {
    return cmsPlayers.map((player) => ({
      id: player._id,
      name: player.name,
      position: player.position || player.role || 'Squad',
      photo: player.image || null,
      team: player.team,
      number: player.shirtNumber,
    }))
  }

  const base = process.env.AIRTABLE_BASE_ID
  const table = process.env.AIRTABLE_PLAYERS_TABLE_ID || process.env.AIRTABLE_PLAYERS_TABLE || 'Players'
  const token = process.env.AIRTABLE_TOKEN

  if (!base || !table || !token) return []

  const records: AirtableRecord[] = []
  let offset: string | undefined

  try {
    do {
      const params = new URLSearchParams({ pageSize: '100' })
      if (offset) params.set('offset', offset)

      const res = await airtableFetch(`https://api.airtable.com/v0/${base}/${encodeURIComponent(table)}?${params}`, token)

      if (!res.ok) return []

      const data = await res.json()
      records.push(...((data.records || []) as AirtableRecord[]))
      offset = data.offset
    } while (offset)

    return records
      .filter((record) => fieldString(record.fields, ['Name', 'Player', 'Full Name']))
      .map((record) => ({
        id: record.id,
        name: fieldString(record.fields, ['Name', 'Player', 'Full Name']),
        position: fieldString(record.fields, ['Position', 'Role'], 'Squad'),
        photo: firstImage(record.fields),
        team: fieldString(record.fields, ['Team', 'Teams', 'Squad']),
        number: fieldString(record.fields, NUMBER_FIELDS),
        nationality: fieldString(record.fields, ['Nationality', 'Country']),
      }))
  } catch {
    return []
  }
}

export async function fetchPlayers(team?: string): Promise<Player[]> {
  const players = await fetchAllPlayers()
  if (!team) return players
  return players.filter((player) => teamMatches(player.team || '', team))
}
import { sanityClient } from '@/lib/sanity'
