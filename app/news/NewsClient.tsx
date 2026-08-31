'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { Article } from '@/data/news'

const PAGE_SIZE = 10

interface Props {
  articles: Article[]
}

export default function NewsClient({ articles }: Props) {
  const categories = ['All', ...Array.from(new Set(articles.map((a) => a.category)))]
  const [active, setActive] = useState('All')
  const [page, setPage] = useState(1)

  const filtered = active === 'All' ? articles : articles.filter((a) => a.category === active)
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const paginated = filtered.slice(0, page * PAGE_SIZE)
  const hasMore = page < totalPages

  const handleCategoryChange = (cat: string) => {
    setActive(cat)
    setPage(1)
  }

  return (
    <div className="bg-white min-h-screen">

      {/* Page header */}
      <div className="border-b border-gray-200 pt-10 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display font-black text-5xl sm:text-6xl uppercase text-misf-blue-dark leading-none mb-6">
            News
          </h1>
          <div className="flex overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`shrink-0 font-display font-bold text-sm uppercase tracking-wide px-5 py-3 border-b-[3px] transition-colors ${
                  active === cat
                    ? 'border-misf-blue-dark text-misf-blue-dark'
                    : 'border-transparent text-gray-400 hover:text-misf-blue-dark hover:border-gray-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Top 2 — large featured grid */}
        {paginated.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {paginated.slice(0, 2).map((article) => (
              <Link key={article.slug} href={`/news/${article.slug}`} className="group block">
                <div className="relative aspect-[16/9] overflow-hidden bg-misf-blue-dark">
                  {article.image ? (
                    <img
                      src={article.image}
                      alt={article.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${article.imageGradient || 'from-misf-blue-dark to-misf-blue'}`} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="pt-3">
                  <span className="font-display font-bold text-xs uppercase tracking-widest text-misf-gold">
                    {article.category}
                  </span>
                  <h2 className="font-display font-bold text-xl sm:text-2xl uppercase leading-tight mt-1 text-misf-blue-dark group-hover:text-misf-blue transition-colors line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1.5 line-clamp-2">{article.excerpt}</p>
                  <time className="block text-xs text-gray-400 mt-1.5">
                    {new Date(article.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </time>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Rest — horizontal list rows */}
        {paginated.length > 2 && (
          <div className="divide-y divide-gray-100">
            {paginated.slice(2).map((article) => (
              <Link key={article.slug} href={`/news/${article.slug}`} className="group flex gap-5 py-5 items-start">
                <div className="relative shrink-0 w-36 sm:w-52 aspect-[16/9] overflow-hidden bg-misf-blue-dark">
                  {article.image ? (
                    <img
                      src={article.image}
                      alt={article.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${article.imageGradient || 'from-misf-blue-dark to-misf-blue'}`} />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-display font-bold text-xs uppercase tracking-widest text-misf-gold">
                    {article.category}
                  </span>
                  <h3 className="font-display font-bold text-lg sm:text-xl uppercase leading-tight mt-0.5 text-misf-blue-dark group-hover:text-misf-blue transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2 hidden sm:block">{article.excerpt}</p>
                  <time className="block text-xs text-gray-400 mt-1.5">
                    {new Date(article.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </time>
                </div>
              </Link>
            ))}
          </div>
        )}

        {paginated.length === 0 && (
          <p className="text-gray-400 text-center py-20 font-display uppercase tracking-widest text-sm">
            No articles in this category yet.
          </p>
        )}

        {/* Load More */}
        {hasMore && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setPage((p) => p + 1)}
              className="bg-misf-blue-dark text-white font-display font-black text-sm uppercase tracking-widest px-10 py-3.5 hover:bg-misf-blue transition-colors"
            >
              Load More Articles
            </button>
            <p className="text-xs text-misf-gray-text mt-2">
              Showing {paginated.length} of {filtered.length} articles
            </p>
          </div>
        )}

      </div>
    </div>
  )
}
