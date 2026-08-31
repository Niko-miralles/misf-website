import type { Metadata } from 'next'
import { articles } from '@/data/news'
import { getSanityArticles } from '@/lib/sanity'
import NewsClient from './NewsClient'

export const metadata: Metadata = {
  title: 'News',
  description: 'Latest and historic news from the Marshall Islands Soccer Federation.',
}

export default async function NewsPage() {
  const cmsArticles = await getSanityArticles()
  return <NewsClient articles={cmsArticles.length ? cmsArticles : articles} />
}
