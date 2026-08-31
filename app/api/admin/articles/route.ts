import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import {
  airtableToArticle,
  createAirtableRecord,
  deleteAirtableRecord,
  getAirtableRecords,
  updateAirtableRecord,
} from '@/lib/airtable'
import { isAdminAuthenticated } from '@/lib/admin-auth'
import { rejectCrossSiteWrite } from '@/lib/admin-request'
import { articles as fallbackArticles } from '@/data/news'

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
}

function imageField(value: string) {
  if (!value) return undefined
  if (value.startsWith('http://') || value.startsWith('https://')) return [{ url: value }]
  return value
}

function fieldsFromBody(body: Record<string, unknown>, useAttachmentImage = true) {
  const title = String(body.title || '').trim()
  const slug = String(body.slug || '').trim() || slugify(title)
  const image = String(body.image || '').trim()

  return {
    Title: title,
    Slug: slug,
    Category: String(body.category || 'News').trim(),
    Date: String(body.date || new Date().toISOString().slice(0, 10)),
    Excerpt: String(body.excerpt || '').trim(),
    Body: String(body.body || '').trim(),
    Featured: Boolean(body.featured),
    Visibility: String(body.visibility || 'Public'),
    ...(image ? { Image: useAttachmentImage ? imageField(image) : image } : {}),
  }
}

function revalidateNews(slug?: string) {
  revalidatePath('/')
  revalidatePath('/news')
  if (slug) revalidatePath(`/news/${slug}`)
}

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: 'Not authorised' }, { status: 401 })
  }

  let articles = fallbackArticles

  try {
    const records = await getAirtableRecords()
    const airtableArticles = records
      .map((record) => ({ id: record.id, ...airtableToArticle(record) }))
      .filter((article) => article.title && article.title !== 'Untitled')
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    if (airtableArticles.length > 0) {
      articles = airtableArticles
    }
  } catch (error) {
    console.error(error)
  }

  return NextResponse.json({ articles })
}

export async function POST(request: Request) {
  const rejected = rejectCrossSiteWrite(request)
  if (rejected) return rejected

  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: 'Not authorised' }, { status: 401 })
  }

  const body = await request.json()
  const fields = fieldsFromBody(body)
  const title = String(fields.Title || '').trim()
  const slug = String(fields.Slug || '').trim()

  if (!title || !slug) {
    return NextResponse.json({ error: 'Title is required.' }, { status: 400 })
  }

  try {
    const record = await createAirtableRecord(fields)
    revalidateNews(slug)
    return NextResponse.json({ article: { id: record.id, ...airtableToArticle(record) } })
  } catch {
    const record = await createAirtableRecord(fieldsFromBody(body, false))
    revalidateNews(slug)
    return NextResponse.json({ article: { id: record.id, ...airtableToArticle(record) } })
  }
}

export async function PATCH(request: Request) {
  const rejected = rejectCrossSiteWrite(request)
  if (rejected) return rejected

  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: 'Not authorised' }, { status: 401 })
  }

  const body = await request.json()
  const id = String(body.id || '')
  if (!id) return NextResponse.json({ error: 'Missing article id.' }, { status: 400 })

  const fields = fieldsFromBody(body)
  const slug = String(fields.Slug || '').trim()

  try {
    const record = await updateAirtableRecord(id, fields)
    revalidateNews(slug)
    return NextResponse.json({ article: { id: record.id, ...airtableToArticle(record) } })
  } catch {
    const record = await updateAirtableRecord(id, fieldsFromBody(body, false))
    revalidateNews(slug)
    return NextResponse.json({ article: { id: record.id, ...airtableToArticle(record) } })
  }
}

export async function DELETE(request: Request) {
  const rejected = rejectCrossSiteWrite(request)
  if (rejected) return rejected

  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: 'Not authorised' }, { status: 401 })
  }

  const { id, slug } = await request.json()
  if (!id) return NextResponse.json({ error: 'Missing article id.' }, { status: 400 })

  await deleteAirtableRecord(String(id))
  revalidateNews(typeof slug === 'string' ? slug : undefined)
  return NextResponse.json({ ok: true })
}
