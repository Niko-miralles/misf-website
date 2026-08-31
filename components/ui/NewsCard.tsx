import Link from 'next/link'
import { Article } from '@/data/news'

interface NewsCardProps {
  article: Article
  variant?: 'featured' | 'small' | 'list'
}

function CategoryBadge({ category }: { category: string }) {
  return (
    <span className="inline-block font-display font-bold text-xs tracking-widest uppercase text-misf-gold">
      {category}
    </span>
  )
}

function ArticleImage({ article, aspectClass }: { article: Article; aspectClass: string }) {
  return (
    <div className={`relative overflow-hidden bg-misf-blue-dark ${aspectClass}`}>
      <div
        className={`absolute inset-0 bg-gradient-to-br ${article.imageGradient || 'from-[#0E2D7A] to-[#1A4BAE]'}`}
      />
      <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.03)_10px,rgba(255,255,255,0.03)_20px)]" />
      <div className="absolute bottom-3 left-3">
        <CategoryBadge category={article.category} />
      </div>
    </div>
  )
}

export default function NewsCard({ article, variant = 'small' }: NewsCardProps) {
  if (variant === 'featured') {
    return (
      <Link href={`/news/${article.slug}`} className="group block">
        <ArticleImage article={article} aspectClass="aspect-video" />
        <div className="pt-4">
          <CategoryBadge category={article.category} />
          <h3 className="font-display font-bold text-2xl md:text-3xl uppercase leading-tight mt-1 text-misf-blue-dark group-hover:text-misf-blue transition-colors line-clamp-3">
            {article.title}
          </h3>
          <p className="text-misf-gray-text text-sm mt-2 line-clamp-2">{article.excerpt}</p>
          <time className="block text-xs text-misf-gray-text mt-3 font-medium">
            {new Date(article.date).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </time>
        </div>
      </Link>
    )
  }

  if (variant === 'list') {
    return (
      <Link href={`/news/${article.slug}`} className="group flex gap-4 items-start">
        <div className="relative overflow-hidden bg-misf-blue-dark shrink-0 w-24 h-20">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${article.imageGradient || 'from-[#0E2D7A] to-[#1A4BAE]'}`}
          />
        </div>
        <div className="min-w-0">
          <CategoryBadge category={article.category} />
          <h3 className="font-display font-bold text-base uppercase leading-tight mt-0.5 text-misf-blue-dark group-hover:text-misf-blue transition-colors line-clamp-2">
            {article.title}
          </h3>
          <time className="block text-xs text-misf-gray-text mt-1">
            {new Date(article.date).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </time>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/news/${article.slug}`} className="group block">
      <ArticleImage article={article} aspectClass="aspect-square" />
      <div className="pt-3">
        <CategoryBadge category={article.category} />
        <h3 className="font-display font-bold text-lg uppercase leading-tight mt-1 text-misf-blue-dark group-hover:text-misf-blue transition-colors line-clamp-2">
          {article.title}
        </h3>
        <time className="block text-xs text-misf-gray-text mt-2">
          {new Date(article.date).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </time>
      </div>
    </Link>
  )
}
