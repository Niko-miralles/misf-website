import Link from 'next/link'
import { articles } from '@/data/news'
import { getArticlesWithFallback } from '@/lib/airtable'

function CategoryLabel({ category }: { category: string }) {
  return (
    <span className="font-display font-bold text-xs uppercase tracking-widest text-misf-gold">
      {category}
    </span>
  )
}

function CardImage({ image, gradient, title }: { image: string | null; gradient?: string; title: string }) {
  if (image) {
    return (
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    )
  }
  return (
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient || 'from-misf-blue-dark to-misf-blue'}`} />
  )
}

export default async function NewsGrid() {
  const liveArticles = await getArticlesWithFallback(articles)
  const [featured1, featured2, ...rest] = liveArticles
  const small = rest.slice(0, 4)

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-display font-black text-3xl sm:text-4xl uppercase text-misf-blue-dark leading-none">
            Latest News
          </h2>
          <Link
            href="/news"
            className="hidden sm:flex items-center gap-1.5 font-display font-bold text-xs uppercase tracking-widest text-misf-blue hover:text-misf-gold transition-colors"
          >
            All News →
          </Link>
        </div>

        {/* Top row — 2 featured large cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          {[featured1, featured2].filter(Boolean).map((article) => (
            <Link key={article.slug} href={`/news/${article.slug}`} className="group block">
              <div className="relative aspect-[16/9] overflow-hidden bg-misf-blue-dark">
                <CardImage image={article.image} gradient={article.imageGradient} title={article.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="pt-3">
                <CategoryLabel category={article.category} />
                <h3 className="font-display font-bold text-xl sm:text-2xl uppercase leading-tight mt-1 text-misf-blue-dark group-hover:text-misf-blue transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <time className="block text-xs text-gray-400 mt-1.5">
                  {new Date(article.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                </time>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom row — 4 small cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {small.map((article) => (
            <Link key={article.slug} href={`/news/${article.slug}`} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden bg-misf-blue-dark">
                <CardImage image={article.image} gradient={article.imageGradient} title={article.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="pt-2.5">
                <CategoryLabel category={article.category} />
                <h3 className="font-display font-bold text-sm sm:text-base uppercase leading-tight mt-0.5 text-misf-blue-dark group-hover:text-misf-blue transition-colors line-clamp-3">
                  {article.title}
                </h3>
                <time className="block text-xs text-gray-400 mt-1">
                  {new Date(article.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                </time>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 sm:hidden text-center">
          <Link href="/news" className="font-display font-bold text-sm uppercase tracking-widest text-misf-blue">
            All News →
          </Link>
        </div>

      </div>
    </section>
  )
}
