import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { articles } from '@/data/news'
import { getArticleBySlug, getArticlesWithFallback } from '@/lib/airtable'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = (await getArticleBySlug(slug)) || articles.find((a) => a.slug === slug)
  if (!article) return {}
  return { title: article.title, description: article.excerpt }
}

function renderBody(body: string) {
  return body.split('\n\n').map((para, i) => {
    if (para.startsWith('**') && para.endsWith('**')) {
      return (
        <p key={i} className="font-display font-bold text-lg uppercase text-misf-blue-dark mb-3">
          {para.replace(/\*\*/g, '')}
        </p>
      )
    }
    const parts = para.split(/(\*\*[^*]+\*\*)/)
    return (
      <p key={i} className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
        {parts.map((part, j) =>
          part.startsWith('**') ? (
            <strong key={j} className="font-bold text-misf-blue-dark">
              {part.replace(/\*\*/g, '')}
            </strong>
          ) : (
            part
          )
        )}
      </p>
    )
  })
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const liveArticles = await getArticlesWithFallback(articles)
  const article = liveArticles.find((a) => a.slug === slug)
  if (!article) notFound()

  const related = liveArticles.filter((a) => a.slug !== slug).slice(0, 3)

  return (
    <div className="bg-white min-h-screen">

      {/* Hero */}
      <div className="relative w-full bg-misf-blue-dark" style={{ height: 'clamp(240px, 40vw, 520px)' }}>
        {article.image ? (
          <img
            src={article.image}
            alt={article.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${article.imageGradient ?? 'from-misf-blue-dark to-misf-blue'}`} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-misf-blue-dark/80 via-misf-blue-dark/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <span className="inline-block font-display font-bold text-xs tracking-widest uppercase text-misf-gold mb-3">
            {article.category}
          </span>
          <h1 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl uppercase text-white leading-tight">
            {article.title}
          </h1>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-100 text-sm text-gray-400">
          <time>
            {new Date(article.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </time>
          <span>·</span>
          <span className="text-misf-blue font-medium">{article.category}</span>
        </div>

        <p className="text-lg sm:text-xl text-misf-blue-dark leading-relaxed mb-8 font-medium">
          {article.excerpt}
        </p>

        {article.body && (
          <div>{renderBody(article.body)}</div>
        )}

        <div className="mt-10 pt-6 border-t border-gray-100">
          <Link
            href="/news"
            className="font-display font-bold text-xs uppercase tracking-widest text-misf-blue hover:text-misf-gold transition-colors"
          >
            ← Back to News
          </Link>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="bg-gray-50 py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark mb-8">
              More News
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((a) => (
                <Link key={a.slug} href={`/news/${a.slug}`} className="group block">
                  <div className="relative aspect-[16/9] overflow-hidden bg-misf-blue-dark">
                    {a.image ? (
                      <img src={a.image} alt={a.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    ) : (
                      <div className={`absolute inset-0 bg-gradient-to-br ${a.imageGradient || 'from-misf-blue-dark to-misf-blue'}`} />
                    )}
                  </div>
                  <div className="pt-3">
                    <span className="font-display font-bold text-xs uppercase tracking-widest text-misf-gold">{a.category}</span>
                    <h3 className="font-display font-bold text-base uppercase leading-tight mt-0.5 text-misf-blue-dark group-hover:text-misf-blue transition-colors line-clamp-2">{a.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
