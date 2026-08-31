export interface Article {
  slug: string
  title: string
  category: string
  date: string
  excerpt: string
  image: string | null
  imageGradient?: string
  featured: boolean
  body?: string
}

export const articles: Article[] = [
  {
    slug: 'boca-crowned-futsal-kings',
    title: 'Boca crowned futsal kings',
    category: 'Domestic',
    date: '2026-04-13',
    excerpt: 'Boca Lagoon are the new futsal kings of the Marshall Islands after clinching the 2026 Centennial 38 Ratak Cup, the country\'s first domestic futsal competition.',
    image: '/images/news/boca-futsal.jpg',
    featured: true,
    body: `Boca Lagoon has become the futsal champions of the Marshall Islands after winning the 2026 Centennial 38 Ratak Cup, held from March 28 to April 7.

The competition featured six newly-formed teams competing for the title in the Marshall Islands' first futsal championship since 2024. Boca demonstrated dominant performance throughout, winning all seven games and scoring 22 goals while conceding only seven during group play.

Boca Lagoon lifted the Ratak Cup after edging past plucky Vasco de Laura in the final. The match went to extra time with the score tied at 2-2, where Kairos Zinihite scored the winning goal for Boca Lagoon.

Individual honours went to Jack Muller of Vasco de Laura (Player of the Tournament), Kaboua Anterea of Rairok Flamengo (Young Player of the Tournament), and Kairos Zinihite of Boca Lagoon (Golden Boot, 13 goals).

The Marshall Islands Soccer Federation thanked all sponsors and participants, emphasising their ongoing mission to develop soccer across the nation.`,
  },
  {
    slug: 'national-teams-training-camps-2026',
    title: 'National teams meet in US for training camps',
    category: 'National Team',
    date: '2026-02-28',
    excerpt: 'The Marshall Islands men\'s and women\'s squads came together in Northwest Arkansas for the federation\'s most ambitious camp to date.',
    image: '/images/news/training-camps-2026.jpg',
    featured: false,
    body: `The Marshall Islands Soccer Federation held its first simultaneous men's and women's national team training camps in Northwest Arkansas during February 2026.

The women's team, participating in their third annual camp, focused on futsal training. Head coach Katie Smith noted: "This was the best camp yet. The players were fully committed and the program is making strides." Seven new players were evaluated, with all being selected for consideration in future national team events. The squad aims to make their international debut in fall 2026 or spring 2027.

The men's program held its inaugural talent identification camp, identifying 14 new prospects following their historic first 11-a-side international match in August 2025. Six newcomers were selected for future international consideration. The squad scrimmaged against Ozark United's under-19 team and continues preparing for the June 2026 Outrigger Challenge Cup.

Assistant coach Dean Johnson stated the team aimed to "discover players who can improve the depth of our squad and we've been able to identify some quality."

Both squads jointly conducted a coaching session for 50 local children, and the federation covered all training expenses and accommodations for participants. The federation continues pursuing confederation membership with aspirations of competing in 2034 World Cup qualification.`,
  },
  {
    slug: 'players-required-misl',
    title: 'Players required for the Marshall Islands Soccer League',
    category: 'Domestic',
    date: '2025-11-02',
    excerpt: 'The Marshall Islands Soccer Federation is inviting players from around the globe to play in the country\'s first-ever 11-a-side football league, launching in Majuro in 2026.',
    image: '/images/news/misl-players.jpg',
    featured: false,
    body: `The Marshall Islands Soccer Federation is inviting players from around the globe to play in the country's first-ever 11-a-side football league.

The competition, which will be known as the Marshall Islands Soccer League (MISL), is due to launch in the Marshallese capital of Majuro in July 2026. Six founding clubs, representing different communities, will compete in a round-robin format over twelve weekends.

The league is designed as a developmental pipeline for the national team, giving players regular competitive match experience throughout the year. MISF will provide referees, match balls, and scorekeeping infrastructure for all fixtures.

Players of Marshallese heritage worldwide are encouraged to get in touch with the federation to express their interest in participating.`,
  },
  {
    slug: 'her-game-too-partnership',
    title: 'Her Game Too USA Partnership',
    category: "Women's Football",
    date: '2025-09-19',
    excerpt: 'Her Game Too USA and the Marshall Islands Soccer Federation announce a partnership to increase female representation in the sport across all levels.',
    image: '/images/news/her-game-too.jpg',
    featured: false,
    body: `Her Game Too USA, a non-profit dedicated to fostering equality in soccer where women are welcomed and respected, has announced a partnership with the Marshall Islands Soccer Federation.

Through this collaboration, both organisations will work to increase female representation in the sport across all levels — from grassroots participation to national team competition.

The partnership will support the development of the Marshall Islands women's national futsal team as they work towards their first international matches, and help create more opportunities for women and girls across the archipelago to participate in football.`,
  },
  {
    slug: '2025-outrigger-challenge-cup-review',
    title: '2025 Outrigger Challenge Cup Review',
    category: 'Competitions',
    date: '2025-09-08',
    excerpt: 'The last country in the world without a football team has finally arrived on the international stage. The Marshall Islands officially made their historic bow at the Outrigger Challenge Cup.',
    image: '/images/news/outrigger-cup-review.jpg',
    featured: false,
    body: `The Marshall Islands made their historic international soccer debut at the Outrigger Challenge Cup, held in Springdale, Arkansas from August 13–16, 2025. As the last country in the world without a football team, their arrival on the international stage marked a defining milestone.

The Marshallese competed against three established teams: the US Virgin Islands, Turks & Caicos Islands, and Ozark United under-19s.

Their opening match against the US Virgin Islands ended in a 4-0 loss on August 14th, with Rakeem Joseph scoring a hat-trick. However, the Marshall Islands created history in their second match on August 16th against Turks & Caicos. Defender Josiah Blanton scored his country's first-ever international goal following a pass from Aaron Anitok-Brokken, who then added a penalty. The Marshall Islands fell 3-2, but the moment was historic.

The US Virgin Islands won the tournament, defeating Ozark United 4-2 in the final.

The Marshall Islands Soccer Federation aspires to join FIFA by 2030, with membership in either the Oceania or Asian Football Confederation as their long-term goal.`,
  },
  {
    slug: 'how-to-watch-first-match',
    title: 'How to watch the Marshall Islands 1st ever match',
    category: 'National Team',
    date: '2025-08-09',
    excerpt: 'Everything you need to know about watching the Marshall Islands play their first-ever international fixtures against the US Virgin Islands and Turks & Caicos.',
    image: '/images/news/how-to-watch.jpg',
    featured: false,
    body: `The Marshall Islands Soccer Federation is preparing to make history with their inaugural national team matches at the 2025 Outrigger Challenge Cup in Springdale, Arkansas.

The Marshall Islands will face the US Virgin Islands on August 14th and Turks & Caicos Islands on August 16th — two competitive matches against established FIFA members that represent the culmination of years of work by the federation.

The matches will be streamed live for the global Marshallese diaspora. Details on how to watch will be shared on the federation's official social media channels closer to the tournament.

This is a moment for every Marshallese person around the world to celebrate.`,
  },
  {
    slug: 'meet-the-marshall-islands-squad',
    title: 'Meet the Marshall Islands squad',
    category: 'National Team',
    date: '2025-08-01',
    excerpt: 'The Marshall Islands Soccer Federation reveals the historic first squad ahead of their debut at the 2025 Outrigger Challenge Cup in Springdale, Arkansas.',
    image: '/images/news/meet-the-squad.jpg',
    featured: false,
    body: `The Marshall Islands Soccer Federation is proud to unveil the historic first national team squad ahead of their debut at the 2025 Outrigger Challenge Cup.

The squad has been drawn from players both on the islands and across the Marshallese diaspora, representing every corner of the archipelago. Many players grew up dreaming of representing their country — a dream that was impossible just four years ago.

Established FIFA members the US Virgin Islands, the Turks & Caicos Islands, and MLS Next outfit Ozark United under-19s will compete in the tournament hosted in Springdale, Arkansas, between Wednesday 13th August and Saturday 16th August.

"This is not just a game," said MISF President Shem Livai. "This is 42,000 people on the world stage."`,
  },
  {
    slug: 'in-conversation-dane-ritchie',
    title: 'In conversation with: Dane Ritchie, Turks & Caicos Technical Director',
    category: 'Competitions',
    date: '2025-08-06',
    excerpt: 'Ahead of the Outrigger Challenge Cup, we spoke with Turks & Caicos Technical Director Dane Ritchie about his side\'s preparations and what it means to help a new football nation grow.',
    image: '/images/news/dane-ritchie.jpg',
    featured: false,
    body: `Ahead of the 2025 Outrigger Challenge Cup, we sat down with Dane Ritchie, Technical Director of the Turks & Caicos Islands Football Association, to discuss their participation in the tournament and what it means to be part of the Marshall Islands' historic first steps.

**On the significance of the tournament:**
"It is significant for us to be able to contribute to the growth of another football nation," said Ritchie. "FIFA membership has been instrumental in our own development — providing training, financial support, and competitive opportunities through CONCACAF. We want to share that experience."

**On preparations:**
The Turks & Caicos squad has had limited preparation time ahead of the tournament, but Ritchie remains confident. The team competed in CONCACAF Nations League in October 2024 and has maintained its competitive edge.

**On the Marshall Islands:**
"What the Marshall Islands Soccer Federation has achieved in just a few years is remarkable. We are honoured to be part of their first chapter."

The tournament runs August 13–16 in Springdale, Arkansas, featuring the Marshall Islands, US Virgin Islands, Turks & Caicos, and Ozark United under-19s.`,
  },
  {
    slug: 'home-jersey-revealed',
    title: 'Marshall Islands first ever home jersey revealed',
    category: 'Federation',
    date: '2024-11-12',
    excerpt: 'MISF revealed the first Marshall Islands home jersey, giving supporters around the world a visible symbol of the federation\'s journey.',
    image: '/images/shop/jersey-home.webp',
    featured: false,
    body: `The Marshall Islands Soccer Federation revealed its first ever home jersey, giving the national team project a visual identity for supporters around the world.

The shirt draws inspiration from the Marshall Islands, its colours, and the growing football community that has supported MISF since the federation was founded.

The jersey became an important part of the federation's public story, helping supporters, players, and the Marshallese diaspora connect with the team before its first international matches.`,
  },
  {
    slug: 'womens-national-team-camp-2024',
    title: 'Women\'s national team camp marks major step forward',
    category: "Women's Football",
    date: '2024-06-15',
    excerpt: 'The Marshall Islands women\'s programme continued to grow with a national team camp focused on building the first generation of players.',
    image: '/images/our-story-springdale.jpg',
    featured: false,
    body: `The Marshall Islands women's programme continued to build momentum with a national team camp bringing players together for training, evaluation, and team development.

The camp was another step toward creating a pathway for Marshallese women and girls to represent their nation through football and futsal.

MISF continues to develop the women's programme alongside the men's and youth pathways, with the long-term aim of creating regular opportunities for players across the diaspora and on-island.`,
  },
  {
    slug: 'youth-programme-begins',
    title: 'Youth programme begins in the Marshall Islands',
    category: 'Development',
    date: '2023-09-01',
    excerpt: 'MISF coaches began delivering school and community sessions, introducing football to the first generation of young Marshallese players.',
    image: '/images/youth-soccer.webp',
    featured: false,
    body: `MISF's youth programme began with coaches delivering school and community sessions for young players in the Marshall Islands.

The programme is central to the federation's long-term mission: creating regular access to football for children and building a foundation for future domestic competitions and national teams.

Youth development remains one of MISF's most important areas of work as the federation grows the game from the ground up.`,
  },
  {
    slug: 'federation-founded-2021',
    title: 'Marshall Islands Soccer Federation founded',
    category: 'Federation',
    date: '2021-12-01',
    excerpt: 'The Marshall Islands Soccer Federation was founded to create football opportunities for Marshallese people and begin the country\'s journey toward international football.',
    image: '/images/our-story-camp.png',
    featured: false,
    body: `The Marshall Islands Soccer Federation was founded with a simple but ambitious goal: to create football opportunities for Marshallese people and build a national programme from the ground up.

At the time, the Marshall Islands was known as one of the last countries in the world without a recognised national football team.

Since then, MISF has worked to create youth activity, coaching pathways, domestic competitions, national team camps, and a visible identity for Marshallese football.`,
  },
]
