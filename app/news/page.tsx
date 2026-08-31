import type { Metadata } from 'next'
import { articles } from '@/data/news'
import NewsClient from './NewsClient'

export const metadata: Metadata = {
  title: 'News',
  description: 'Latest and historic news from the Marshall Islands Soccer Federation.',
}

export default function NewsPage() {
  return <NewsClient articles={articles} />
}
