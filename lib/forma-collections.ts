// Forma collections adapter v1. Existing website templates remain in control.
import { cache } from 'react'
import type { Article } from '@/data/news'
import type { ShopProduct } from '@/data/products'
const load = cache(async (): Promise<{news: Article[]; products: ShopProduct[]}> => {
  try {
    const response = await fetch("https://forma-cms-visual.vercel.app/api/collections?action=public&site=J0eIWFMME36VTVhl0Yow1Unh2Dvi22X_PVd2lpmA1Gg", {cache:'no-store', signal:AbortSignal.timeout(5000)})
    if (!response.ok) throw new Error('Content unavailable')
    const data = await response.json()
    return {news: Array.isArray(data.news) ? data.news : [], products: Array.isArray(data.products) ? data.products : []}
  } catch { return {news: [], products: []} }
})
export async function mergeFormaNews(base: Article[]): Promise<Article[]> {
  const values = new Map(base.map(item => [item.slug, item]))
  const news = (await load()).news
  const priority = new Map(news.map((item,index) => [item.slug,index]))
  for (const item of news) values.set(item.slug, {...values.get(item.slug), ...item})
  return [...values.values()].sort((a,b) => b.date.localeCompare(a.date) || (priority.get(b.slug) ?? -1)-(priority.get(a.slug) ?? -1) || a.slug.localeCompare(b.slug))
}
export async function mergeFormaProducts(base: ShopProduct[]): Promise<ShopProduct[]> {
  const values = new Map(base.map(item => [item.slug, item]))
  for (const item of (await load()).products) values.set(item.slug, {...values.get(item.slug), ...item})
  return [...values.values()].sort((a,b) => (a.order ?? 999)-(b.order ?? 999) || a.name.localeCompare(b.name))
}
