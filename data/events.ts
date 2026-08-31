export interface EventItem {
  slug: string
  title: string
  category: string
  status: string
  dateLabel: string
  location: string
  image: string
  summary: string
  details: string[]
  relatedHref?: string
  relatedLabel?: string
}

export const events: EventItem[] = [
  {
    slug: 'outrigger-challenge-cup-2027',
    title: 'Outrigger Challenge Cup 2027',
    category: 'International Fixture',
    status: 'Upcoming',
    dateLabel: 'August 2027',
    location: 'Majuro, Marshall Islands',
    image: '/images/outrigger-2027-placeholder.jpg',
    summary:
      'The next planned edition of the Outrigger Challenge Cup, bringing international football to the Marshall Islands.',
    details: [
      'The Outrigger Challenge Cup is MISF\'s flagship international event, designed to bring national teams, visiting delegations, volunteers, supporters, and media attention to the Marshall Islands football project.',
      'Details will be confirmed closer to the event, including participating teams, venues, match schedule, volunteer roles, and community events around the tournament.',
    ],
    relatedHref: '/competitions/outrigger-cup/2027',
    relatedLabel: 'View Competition',
  },
  {
    slug: 'misl-season-one',
    title: 'Marshall Islands Soccer League Season 1',
    category: 'Domestic League',
    status: 'Planning',
    dateLabel: '2026',
    location: 'Majuro, Marshall Islands',
    image: '/images/misl-hero.jpg',
    summary:
      'The first structured domestic 11v11 league in the Marshall Islands, giving local players regular competitive matches.',
    details: [
      'The Marshall Islands Soccer League is planned as a major step in creating a regular domestic pathway for players, coaches, referees, and clubs.',
      'Fixtures, team entries, venues, and matchday information will be added once confirmed by MISF.',
    ],
    relatedHref: '/competitions/misl',
    relatedLabel: 'View MISL',
  },
  {
    slug: 'futsal-league-matchdays',
    title: 'Domestic Futsal League Matchdays',
    category: 'Domestic Futsal',
    status: 'Recurring',
    dateLabel: 'Dates TBC',
    location: 'Majuro, Marshall Islands',
    image: '/images/futsal-2026.webp',
    summary:
      'Domestic futsal matchdays for clubs and community teams, supporting player development across the islands.',
    details: [
      'Futsal remains one of MISF\'s most important development formats, especially where full-size pitch space is limited.',
      'Upcoming matchdays, kick-off times, venues, and participating teams will be published here when confirmed.',
    ],
    relatedHref: '/competitions/futsal',
    relatedLabel: 'View Futsal',
  },
  {
    slug: 'fundraising-events',
    title: 'Fundraising Events',
    category: 'Fundraising',
    status: 'Open',
    dateLabel: 'To be announced',
    location: 'Marshall Islands and international',
    image: '/images/team-huddle.jpg',
    summary:
      'Fundraising events that help MISF fund travel, equipment, coaching, competitions, and youth development.',
    details: [
      'MISF is completely self-funded, so fundraising events are essential to keeping programmes running and creating opportunities for Marshallese players.',
      'Future fundraising events may include community days, supporter events, online campaigns, and partner-led activations.',
    ],
    relatedHref: '/donate',
    relatedLabel: 'Support MISF',
  },
  {
    slug: 'on-island-training-sessions',
    title: 'On-Island Training Sessions',
    category: 'Training',
    status: 'Recurring',
    dateLabel: 'Dates TBC',
    location: 'Majuro and outer atolls',
    image: '/images/youth-soccer.webp',
    summary:
      'Training sessions and development activity for players, coaches, and community football programmes on-island.',
    details: [
      'Training sessions support MISF\'s long-term development pathway, from youth participation to national team preparation.',
      'Confirmed session dates, age groups, locations, and registration details will be added as programmes are announced.',
    ],
    relatedHref: '/about/soccer-development',
    relatedLabel: 'Soccer Development',
  },
]
