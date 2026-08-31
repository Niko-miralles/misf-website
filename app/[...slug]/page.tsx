import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CmsPageRenderer from '@/components/cms/CmsPageRenderer'
import { getSanityPage } from '@/lib/sanity'

interface Props {
  params: Promise<{ slug: string[] }>
}

function toPath(slug: string[]) {
  return `/${slug.join('/')}`
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = await getSanityPage(toPath(slug))
  if (!page) return {}

  return {
    title: page.seo?.metaTitle || page.title,
    description: page.seo?.metaDescription,
  }
}

export default async function CmsPage({ params }: Props) {
  const { slug } = await params
  const page = await getSanityPage(toPath(slug))
  if (!page) notFound()
  return <CmsPageRenderer page={page} />
}
