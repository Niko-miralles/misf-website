import { createClient } from 'next-sanity'
import type { Article } from '@/data/news'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'az62wb6s',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-08-31',
  useCdn: true,
})

const articlesQuery = `*[_type == "article"] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  category,
  "date": publishedAt,
  excerpt,
  "image": image.asset->url,
  body
}`

type SanityArticle = Omit<Article, 'featured' | 'imageGradient' | 'body'> & {
  body?: Array<{ children?: Array<{ text?: string }> }>
}

function toArticle(article: SanityArticle): Article {
  return {
    ...article,
    date: article.date?.slice(0, 10) || new Date().toISOString().slice(0, 10),
    category: article.category || 'Federation',
    featured: false,
    body: article.body?.map((block) => block.children?.map((child) => child.text || '').join('') || '').join('\n\n'),
  }
}

export async function getSanityArticles() {
  const articles = await sanityClient.fetch<SanityArticle[]>(articlesQuery, {}, { next: { revalidate: 60 } })
  return articles.map(toArticle)
}

export async function getSanityArticle(slug: string) {
  const article = await sanityClient.fetch<SanityArticle | null>(
    `*[_type == "article" && slug.current == $slug][0] { title, "slug": slug.current, category, "date": publishedAt, excerpt, "image": image.asset->url, body }`,
    { slug },
    { next: { revalidate: 60 } },
  )
  return article ? toArticle(article) : null
}

export type CmsPage = {
  title?: string
  heroTitle?: string
  heroImage?: string
  content?: string
  seo?: {
    metaTitle?: string
    metaDescription?: string
  }
}

export async function getSanityPage(path: string) {
  const slug = path === '/' ? 'home' : path.replace(/^\/+|\/+$/g, '')
  return sanityClient.fetch<CmsPage | null>(
    `*[_type == "page" && slug.current == $slug][0] {
      title,
      heroTitle,
      "heroImage": heroImage.asset->url,
      "content": pt::text(content),
      seo
    }`,
    { slug },
    { next: { revalidate: 60 } },
  )
}

export type CmsStaffMember = {
  _id: string
  name: string
  role?: string
  department?: string
  location?: string
  flag?: string
  image?: string
}

export async function getSanityStaff() {
  return sanityClient.fetch<CmsStaffMember[]>(
    `*[_type == "person" && team == "Federation staff"] | order(department asc, order asc, name asc) {
      _id, name, role, department, location, flag, "image": image.asset->url
    }`,
    {},
    { next: { revalidate: 60 } },
  )
}
