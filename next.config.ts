import type { NextConfig } from "next";

const legacyHost = {
  type: 'host' as const,
  value: '(?:www\\.)?rmi\\.soccer',
}

const legacyRedirects = [
  ['/', 'https://marshallislandssoccer.com/'],
  ['/2024-outrigger-challenge-cup', 'https://marshallislandssoccer.com/competitions/outrigger-cup/2024'],
  ['/2024-ratak-cup-mens', 'https://marshallislandssoccer.com/competitions/futsal/2024'],
  ['/2025/08/01/meet-the-marshall-islands-squad', 'https://marshallislandssoccer.com/news/meet-the-marshall-islands-squad'],
  ['/2025/08/06/in-conversation-with-dane-ritchie-turks-caicos-technical-director', 'https://marshallislandssoccer.com/news/in-conversation-dane-ritchie'],
  ['/2025/08/09/how-to-watch-the-marshall-islands-1st-ever-match', 'https://marshallislandssoccer.com/news/how-to-watch-first-match'],
  ['/2025/09/08/2025-outrigger-challenge-cup-review', 'https://marshallislandssoccer.com/news/2025-outrigger-challenge-cup-review'],
  ['/2025/09/19/her-game-too-usa-partnership', 'https://marshallislandssoccer.com/news/her-game-too-partnership'],
  ['/2025/11/02/players-required-for-the-marshall-islands-soccer-league', 'https://marshallislandssoccer.com/news/players-required-misl'],
  ['/2026-ratak-cup-mens', 'https://marshallislandssoccer.com/competitions/futsal/2026'],
  ['/2026/02/28/national-teams-meet-in-us-for-training-camps', 'https://marshallislandssoccer.com/news/national-teams-training-camps-2026'],
  ['/2026/04/13/boca-crowned-futsal-kings', 'https://marshallislandssoccer.com/news/boca-crowned-futsal-kings'],
  ['/about-the-marshall-islands', 'https://marshallislandssoccer.com/about/the-islands'],
  ['/about', 'https://marshallislandssoccer.com/about'],
  ['/climate-change-in-the-marshall-islands', 'https://marshallislandssoccer.com/about/climate'],
  ['/coach-development', 'https://marshallislandssoccer.com/get-involved/coaching#coach-development'],
  ['/coaching-opportunities', 'https://marshallislandssoccer.com/get-involved/coaching'],
  ['/coaching-placements', 'https://marshallislandssoccer.com/get-involved/coaching/placements'],
  ['/competitions', 'https://marshallislandssoccer.com/competitions'],
  ['/donate', 'https://marshallislandssoccer.com/donate'],
  ['/faw-coaching-courses', 'https://marshallislandssoccer.com/get-involved/coaching/faw'],
  ['/inter-island-tournaments', 'https://marshallislandssoccer.com/competitions/inter-island'],
  ['/join-our-volunteer-team', 'https://marshallislandssoccer.com/get-involved/volunteer'],
  ['/kojjela-kon-majel-soccer-federation', 'https://marshallislandssoccer.com/about/marshallese'],
  ['/marshall-islands-futsal-league', 'https://marshallislandssoccer.com/competitions/futsal/2023'],
  ['/marshall-islands-futsal', 'https://marshallislandssoccer.com/competitions/futsal'],
  ['/marshall-islands-soccer-league', 'https://marshallislandssoccer.com/competitions/misl'],
  ['/mens-futsal-team', 'https://marshallislandssoccer.com/teams/mens-futsal'],
  ['/mens-soccer-team', 'https://marshallislandssoccer.com/teams/mens-soccer'],
  ['/national-teams', 'https://marshallislandssoccer.com/national-teams'],
  ['/news-articles', 'https://marshallislandssoccer.com/news'],
  ['/ofc-coaching-courses', 'https://marshallislandssoccer.com/get-involved/coaching/ofc'],
  ['/outrigger-challenge-cup', 'https://marshallislandssoccer.com/competitions/outrigger-cup'],
  ['/overseas-marshallese', 'https://marshallislandssoccer.com/get-involved/diaspora'],
  ['/partners-sponsors', 'https://marshallislandssoccer.com/get-involved/sponsors'],
  ['/sponsor-rmisoccer', 'https://marshallislandssoccer.com/get-involved/sponsors#sponsor-rmi'],
  ['/soccer-development', 'https://marshallislandssoccer.com/about/soccer-development'],
  ['/womens-futsal-team', 'https://marshallislandssoccer.com/teams/womens-futsal'],
]

const nextConfig: NextConfig = {
  distDir: process.env.NODE_ENV === 'production' ? '.next' : '/tmp/misf-next',
  async redirects() {
    return legacyRedirects.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
      has: [legacyHost],
    }))
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
};

export default nextConfig;
