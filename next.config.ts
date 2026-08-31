import type { NextConfig } from "next";

const legacyHost = {
  type: 'host' as const,
  value: '(?:www\\.)?rmi\\.soccer',
}

const legacyRedirects = [
  ['/2024-outrigger-challenge-cup', '/competitions/outrigger-cup/2024'],
  ['/2024-ratak-cup-mens', '/competitions/futsal/2024'],
  ['/2025/08/01/meet-the-marshall-islands-squad', '/news/meet-the-marshall-islands-squad'],
  ['/2025/08/06/in-conversation-with-dane-ritchie-turks-caicos-technical-director', '/news/in-conversation-dane-ritchie'],
  ['/2025/08/09/how-to-watch-the-marshall-islands-1st-ever-match', '/news/how-to-watch-first-match'],
  ['/2025/09/08/2025-outrigger-challenge-cup-review', '/news/2025-outrigger-challenge-cup-review'],
  ['/2025/09/19/her-game-too-usa-partnership', '/news/her-game-too-partnership'],
  ['/2025/11/02/players-required-for-the-marshall-islands-soccer-league', '/news/players-required-misl'],
  ['/2026-ratak-cup-mens', '/competitions/futsal/2026'],
  ['/2026/02/28/national-teams-meet-in-us-for-training-camps', '/news/national-teams-training-camps-2026'],
  ['/2026/04/13/boca-crowned-futsal-kings', '/news/boca-crowned-futsal-kings'],
  ['/about-the-marshall-islands', '/about/the-islands'],
  ['/climate-change-in-the-marshall-islands', '/about/climate'],
  ['/coach-development', '/get-involved/coaching#coach-development'],
  ['/coaching-opportunities', '/get-involved/coaching'],
  ['/coaching-placements', '/get-involved/coaching/placements'],
  ['/faw-coaching-courses', '/get-involved/coaching/faw'],
  ['/global-ambassadors', '/about/global-ambassadors'],
  ['/inter-island-tournaments', '/competitions/inter-island'],
  ['/join-our-volunteer-team', '/get-involved/volunteer'],
  ['/kojjela-kon-majel-soccer-federation', '/about/marshallese'],
  ['/marshall-islands-first-team-in-the-world-to-release-a-2030-jersey', '/news/home-jersey-revealed'],
  ['/marshall-islands-futsal-league', '/competitions/futsal/2023'],
  ['/marshall-islands-futsal', '/competitions/futsal'],
  ['/marshall-islands-national-team-legacy-numbers', '/national-teams/legacy-numbers'],
  ['/marshall-islands-soccer-jerseys', '/national-teams/jerseys'],
  ['/marshall-islands-soccer-league', '/competitions/misl'],
  ['/mens-futsal-team', '/teams/mens-futsal'],
  ['/mens-soccer-team', '/teams/mens-soccer'],
  ['/news-articles', '/news'],
  ['/ofc-coaching-courses', '/get-involved/coaching/ofc'],
  ['/outrigger-challenge-cup', '/competitions/outrigger-cup'],
  ['/overseas-marshallese', '/get-involved/diaspora'],
  ['/partners-sponsors', '/get-involved/sponsors'],
  ['/sponsor-rmisoccer', '/get-involved/sponsors#sponsor-rmi'],
  ['/soccer-development', '/about/soccer-development'],
  ['/womens-futsal-team', '/teams/womens-futsal'],
]

const nextConfig: NextConfig = {
  distDir: process.env.NODE_ENV === 'production' ? '.next' : '/tmp/misf-next',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
    ],
  },
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
