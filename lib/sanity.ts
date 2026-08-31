import { createClient } from 'next-sanity'
import { articles, type Article } from '@/data/news'
import { shopProducts, type ShopProduct } from '@/data/products'

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
  const fallback = articles.find((localArticle) => localArticle.slug === article.slug)

  return {
    ...article,
    date: article.date?.slice(0, 10) || new Date().toISOString().slice(0, 10),
    category: article.category || 'Federation',
    image: article.image || fallback?.image || null,
    imageGradient: fallback?.imageGradient,
    featured: false,
    body: article.body?.map((block) => block.children?.map((child) => child.text || '').join('') || '').join('\n\n') || fallback?.body,
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

type SanityProduct = Partial<ShopProduct> & { slug?: string; name?: string }

export async function getProductsWithFallback(): Promise<ShopProduct[]> {
  const cmsProducts = await sanityClient.fetch<SanityProduct[]>(
    `*[_type == "product" && (!defined(visible) || visible != false)] | order(order asc, name asc) {
      "slug": slug.current, name, subtitle, price, category, badge,
      "imageA": image.asset->url, "imageB": hoverImage.asset->url,
      href, featured, order
    }`,
    {},
    { next: { revalidate: 60 } },
  )

  const validProducts = cmsProducts.filter((product): product is ShopProduct => Boolean(product.slug && product.name && product.imageA && product.href && product.category))
  const cmsBySlug = new Map(validProducts.map((product) => [product.slug, product]))
  const existing = shopProducts.map((product) => ({ ...product, ...cmsBySlug.get(product.slug) }))
  const newProducts = validProducts.filter((product) => !shopProducts.some((fallback) => fallback.slug === product.slug))
  return [...existing, ...newProducts].sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
}

export type CmsPage = {
  title?: string
  slug?: string
  heroTitle?: string
  heroImage?: string
  content?: CmsContentBlock[]
  seo?: {
    metaTitle?: string
    metaDescription?: string
  }
}

export type CmsSpan = {
  _key?: string
  _type?: 'span'
  text?: string
  marks?: string[]
}

export type CmsContentBlock = {
  _key?: string
  _type?: 'block' | 'image'
  style?: 'normal' | 'h2' | 'h3' | 'blockquote'
  children?: CmsSpan[]
  markDefs?: Array<{ _key?: string; _type?: 'link'; href?: string }>
  url?: string
  alt?: string
}

export async function getSanityPage(path: string) {
  const slug = path === '/' ? 'home' : path.replace(/^\/+|\/+$/g, '')
  return sanityClient.fetch<CmsPage | null>(
    `*[_type == "page" && slug.current == $slug][0] {
      title,
      "slug": slug.current,
      heroTitle,
      "heroImage": heroImage.asset->url,
      content[]{
        ...,
        _type == "image" => { "url": asset->url, alt },
      },
      seo
    }`,
    { slug },
    { next: { revalidate: 60 } },
  )
}

export async function getSanityPagePaths() {
  return sanityClient.fetch<Array<{ slug?: string }>>(
    `*[_type == "page" && defined(slug.current)]{ "slug": slug.current }`,
    {},
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
