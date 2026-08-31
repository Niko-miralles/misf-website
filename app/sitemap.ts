import type { MetadataRoute } from 'next'
import { listAllRecords } from '@/lib/airtable'

const BASE = 'https://marshallislandssoccer.com'

const STATIC_PAGES = [
  { url: BASE, priority: 1.0 },
  { url: `${BASE}/news`, priority: 0.9 },
  { url: `${BASE}/events`, priority: 0.8 },
  { url: `${BASE}/teams/mens-soccer`, priority: 0.8 },
  { url: `${BASE}/teams/mens-futsal`, priority: 0.8 },
  { url: `${BASE}/teams/womens-futsal`, priority: 0.8 },
  { url: `${BASE}/competitions`, priority: 0.8 },
  { url: `${BASE}/clubs`, priority: 0.7 },
  { url: `${BASE}/competitions/outrigger-cup`, priority: 0.7 },
  { url: `${BASE}/competitions/misl`, priority: 0.7 },
  { url: `${BASE}/competitions/futsal`, priority: 0.7 },
  { url: `${BASE}/competitions/inter-island`, priority: 0.6 },
  { url: `${BASE}/about`, priority: 0.8 },
  { url: `${BASE}/about/mission`, priority: 0.7 },
  { url: `${BASE}/about/soccer-development`, priority: 0.7 },
  { url: `${BASE}/about/soccer-development/resources`, priority: 0.6 },
  { url: `${BASE}/about/climate`, priority: 0.6 },
  { url: `${BASE}/about/the-islands`, priority: 0.6 },
  { url: `${BASE}/documentary`, priority: 0.6 },
  { url: `${BASE}/donate`, priority: 0.7 },
  { url: `${BASE}/contact`, priority: 0.7 },
  { url: `${BASE}/get-involved/volunteer`, priority: 0.6 },
  { url: `${BASE}/get-involved/player`, priority: 0.7 },
  { url: `${BASE}/get-involved/coaching`, priority: 0.5 },
  { url: `${BASE}/get-involved/sponsors`, priority: 0.5 },
  { url: `${BASE}/partners-sponsors`, priority: 0.5 },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const records = await listAllRecords()
  const articleUrls = records
    .filter((r) => r.fields.Title && r.fields.Visiblity !== 'Private')
    .map((r) => ({
      url: `${BASE}/news/${r.id}`,
      lastModified: new Date(r.createdTime || Date.now()),
      priority: 0.8,
    }))

  return [
    ...STATIC_PAGES.map((p) => ({ ...p, lastModified: new Date(), changeFrequency: 'weekly' as const })),
    ...articleUrls,
  ]
}
