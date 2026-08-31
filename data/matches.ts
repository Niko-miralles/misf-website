export interface Team {
  name: string
  logo: string | null
  code: string
}

export interface Match {
  id: number
  homeTeam: Team
  awayTeam: Team
  date: string
  competition: string
  venue: string
  infoUrl?: string
}

export const upcomingMatches: Match[] = [
  {
    id: 1,
    homeTeam: {
      name: 'Marshall Islands',
      logo: '/images/logo.webp',
      code: 'MHL',
    },
    awayTeam: {
      name: 'Guam',
      logo: null,
      code: 'GUM',
    },
    date: '2026-08-15T14:00:00Z',
    competition: 'Outrigger Challenge Cup',
    venue: 'Majuro, RMI',
  },
]
