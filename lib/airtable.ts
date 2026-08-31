import type { Article } from '@/data/news'

export interface AirtableRecord {
  id: string
  createdTime?: string
  fields: Record<string, unknown>
}

const AIRTABLE_API_URL = 'https://api.airtable.com/v0'

async function airtableFetch(url: string, init: RequestInit, attempts = 3) {
  let response = await fetch(url, init)

  for (let attempt = 1; response.status === 429 && attempt < attempts; attempt += 1) {
    await new Promise((resolve) => setTimeout(resolve, attempt * 750))
    response = await fetch(url, init)
  }

  return response
}

function getAirtableConfig() {
  const token = process.env.AIRTABLE_TOKEN || process.env.AIRTABLE_API_KEY
  const baseId = process.env.AIRTABLE_BASE_ID
  const tableName = process.env.AIRTABLE_TABLE_ID || process.env.AIRTABLE_TABLE_NAME || process.env.AIRTABLE_TABLE || 'Content'

  return { token, baseId, tableName }
}

export function isAirtableConfigured() {
  const { token, baseId, tableName } = getAirtableConfig()
  return Boolean(token && baseId && tableName)
}

export async function getAirtableRecords(tableName?: string): Promise<AirtableRecord[]> {
  const config = getAirtableConfig()

  if (!config.token || !config.baseId) {
    return []
  }

  const table = encodeURIComponent(tableName || config.tableName)
  const records: AirtableRecord[] = []
  let offset: string | undefined

  do {
    const params = new URLSearchParams({ pageSize: '100' })
    if (offset) params.set('offset', offset)

    const response = await airtableFetch(`${AIRTABLE_API_URL}/${config.baseId}/${table}?${params}`, {
      headers: {
        Authorization: `Bearer ${config.token}`,
      },
      cache: 'no-store',
    })

    if (!response.ok) {
      throw new Error(`Airtable request failed: ${response.status}`)
    }

    const data = (await response.json()) as { records?: AirtableRecord[]; offset?: string }
    records.push(...(data.records || []))
    offset = data.offset
  } while (offset)

  return records
}

export async function listAllRecords(tableName?: string): Promise<AirtableRecord[]> {
  try {
    return await getAirtableRecords(tableName)
  } catch (error) {
    console.error(error)
    return []
  }
}

export async function getRecordById(recordId: string, tableName?: string): Promise<AirtableRecord | null> {
  const config = getAirtableConfig()

  if (!config.token || !config.baseId) {
    return null
  }

  const table = encodeURIComponent(tableName || config.tableName)
  const response = await airtableFetch(`${AIRTABLE_API_URL}/${config.baseId}/${table}/${recordId}`, {
    headers: {
      Authorization: `Bearer ${config.token}`,
    },
    cache: 'no-store',
  })

  if (response.status === 404) {
    return null
  }

  if (!response.ok) {
    throw new Error(`Airtable record request failed: ${response.status}`)
  }

  return response.json() as Promise<AirtableRecord>
}

function fieldString(fields: Record<string, unknown>, names: string[], fallback = '') {
  for (const name of names) {
    const value = fields[name]
    if (typeof value === 'string') return value
    if (Array.isArray(value) && typeof value[0] === 'string') return value[0]
    if (Array.isArray(value) && value[0] && typeof value[0] === 'object') {
      const first = value[0] as { url?: unknown; thumbnails?: { large?: { url?: unknown } } }
      if (typeof first.thumbnails?.large?.url === 'string') return first.thumbnails.large.url
      if (typeof first.url === 'string') return first.url
    }
  }

  return fallback
}

function fieldBoolean(fields: Record<string, unknown>, names: string[], fallback = false) {
  for (const name of names) {
    const value = fields[name]
    if (typeof value === 'boolean') return value
  }

  return fallback
}

function fieldVisibility(fields: Record<string, unknown>) {
  return fieldString(fields, ['Visibility', 'Visiblity', 'visibility'], 'Public').toLowerCase()
}

export function airtableToArticle(record: AirtableRecord): Article {
  const title = fieldString(record.fields, ['Title', 'title'], 'Untitled')

  return {
    slug: fieldString(record.fields, ['Slug', 'slug'], record.id),
    title,
    category: fieldString(record.fields, ['Category', 'category'], 'News'),
    date: fieldString(record.fields, ['Date', 'date'], record.createdTime || new Date().toISOString()),
    excerpt: fieldString(record.fields, ['Excerpt', 'Summary', 'excerpt'], ''),
    image: fieldString(record.fields, ['Image', 'image', 'Hero Image'], '') || null,
    imageGradient: fieldString(record.fields, ['Image Gradient', 'imageGradient'], 'from-misf-blue-dark to-misf-blue'),
    featured: fieldBoolean(record.fields, ['Featured', 'featured'], false),
    body: fieldString(record.fields, ['Body', 'Content', 'body'], ''),
  }
}

export async function updateAirtableRecord(
  recordId: string,
  fields: Record<string, unknown>,
  tableName?: string
) {
  const config = getAirtableConfig()

  if (!config.token || !config.baseId) {
    throw new Error('Airtable is not configured')
  }

  const table = encodeURIComponent(tableName || config.tableName)
  const response = await airtableFetch(`${AIRTABLE_API_URL}/${config.baseId}/${table}/${recordId}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${config.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ fields }),
    cache: 'no-store',
  })

  if (!response.ok) {
    throw new Error(`Airtable update failed: ${response.status}`)
  }

  return response.json() as Promise<AirtableRecord>
}

export async function createAirtableRecord(fields: Record<string, unknown>, tableName?: string) {
  const config = getAirtableConfig()

  if (!config.token || !config.baseId) {
    throw new Error('Airtable is not configured')
  }

  const table = encodeURIComponent(tableName || config.tableName)
  const response = await airtableFetch(`${AIRTABLE_API_URL}/${config.baseId}/${table}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${config.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ fields }),
    cache: 'no-store',
  })

  if (!response.ok) {
    throw new Error(`Airtable create failed: ${response.status}`)
  }

  return response.json() as Promise<AirtableRecord>
}

export async function deleteAirtableRecord(recordId: string, tableName?: string) {
  const config = getAirtableConfig()

  if (!config.token || !config.baseId) {
    throw new Error('Airtable is not configured')
  }

  const table = encodeURIComponent(tableName || config.tableName)
  const response = await airtableFetch(`${AIRTABLE_API_URL}/${config.baseId}/${table}/${recordId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${config.token}`,
    },
    cache: 'no-store',
  })

  if (!response.ok) {
    throw new Error(`Airtable delete failed: ${response.status}`)
  }

  return response.json() as Promise<{ deleted: boolean; id: string }>
}

export async function getPublicArticles(): Promise<Article[]> {
  try {
    const records = await getAirtableRecords()

    return records
      .filter((record) => {
        const visibility = fieldVisibility(record.fields)
        return visibility !== 'private' && Boolean(fieldString(record.fields, ['Title', 'title']))
      })
      .map(airtableToArticle)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error(error)
    return []
  }
}

export async function getArticlesWithFallback(fallback: Article[] = []): Promise<Article[]> {
  const airtableArticles = await getPublicArticles()
  return airtableArticles.length > 0 ? airtableArticles : fallback
}

export async function getArticleBySlug(slug?: string): Promise<Article | undefined> {
  if (!slug) return undefined
  const articles = await getPublicArticles()
  return articles.find((article) => article.slug === slug)
}

export async function getArticle(slug?: string): Promise<Article | undefined> {
  return getArticleBySlug(slug)
}
