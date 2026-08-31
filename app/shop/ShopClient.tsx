'use client'

import { useState } from 'react'

type Category = 'all' | 'jerseys' | 'accessories'

const FAQS: { question: string; answer: string }[] = []

const PRODUCTS = [
  {
    name: '1st Ever Home Jersey',
    subtitle: "Men's · by PlayerLayer",
    category: 'jerseys',
    badge: 'Iconic',
    badgeClass: 'bg-misf-gold text-white',
    imageA: '/images/shop/full/home-jersey-1.webp',
    imageB: '/images/shop/full/home-jersey-3.jpg',
    href: 'https://marshall-islands-soccer-federation.square.site/product/marshall-islands-soccer-jersey-home/1?cp=true&sa=true&sbp=false&q=false',
  },
  {
    name: '2030 Alternative Jersey',
    subtitle: "Men's",
    category: 'jerseys',
    badge: '2030',
    badgeClass: 'bg-misf-blue-dark text-white',
    imageA: '/images/shop/full/alt-jersey-1.webp',
    imageB: '/images/shop/full/alt-jersey-5.webp',
    href: 'https://marshall-islands-soccer-federation.square.site/product/marshall-islands-2030-alternative-jersey-men-s/8?cp=true&sa=true&sbp=false&q=false',
  },
  {
    name: 'Matchworn Player Issue Jersey',
    subtitle: 'National Team · Limited',
    category: 'jerseys',
    badge: 'Exclusive',
    badgeClass: 'bg-misf-gold text-white',
    imageA: '/images/shop/full/matchworn-1.webp',
    imageB: '/images/shop/full/matchworn-2.webp',
    href: 'https://marshall-islands-soccer-federation.square.site/product/matchworn-marshall-islands-national-team-player-issue-jersey/ZJKR4G7KLOYOUQQ2IDE5TUCT?cp=true&sa=true&sbp=false&q=false',
  },
  {
    name: '2030 Goalkeeper Jersey',
    subtitle: "Men's",
    category: 'jerseys',
    badge: '2030',
    badgeClass: 'bg-misf-blue-dark text-white',
    imageA: '/images/shop/full/gk-jersey-1.webp',
    imageB: '/images/shop/full/gk-jersey-2.webp',
    href: 'https://marshall-islands-soccer-federation.square.site/product/marshall-islands-2030-goalkeeper-jersey-men-s/QHUK5R4AOLM2C7NSLT2NAOFC?cp=true&sa=true&sbp=false&q=false',
  },
  {
    name: '2030 Alternative Jersey',
    subtitle: 'Ladies',
    category: 'jerseys',
    badge: 'Ladies',
    badgeClass: 'bg-white text-misf-blue-dark',
    imageA: '/images/shop/full/alt-jersey-4.webp',
    imageB: '/images/shop/full/alt-jersey-6.webp',
    href: 'https://marshall-islands-soccer-federation.square.site/product/marshall-islands-2030-alternative-jersey-ladies/9?cp=true&sa=true&sbp=false&q=false',
  },
  {
    name: '2030 Alternative Jersey',
    subtitle: 'Junior',
    category: 'jerseys',
    badge: 'Junior',
    badgeClass: 'bg-white text-misf-blue-dark',
    imageA: '/images/shop/full/alt-jersey-2.webp',
    imageB: '/images/shop/full/alt-jersey-3.webp',
    href: 'https://marshall-islands-soccer-federation.square.site/product/marshall-islands-2030-alternative-jersey-junior/10?cp=true&sa=true&sbp=false&q=false',
  },
  {
    name: '1st Ever Home Jersey',
    subtitle: 'Junior · by PlayerLayer',
    category: 'jerseys',
    badge: 'Junior',
    badgeClass: 'bg-misf-gold text-white',
    imageA: '/images/shop/full/home-jersey-1.webp',
    imageB: '/images/shop/full/home-jersey-4.jpg',
    href: 'https://marshall-islands-soccer-federation.square.site/product/marshall-islands-1st-ever-home-jersey-junior-by-playerlayer/5?cp=true&sa=true&sbp=false&q=false',
  },
  {
    name: 'Reversible Bucket Hat',
    subtitle: 'Unisex · by PlayerLayer',
    category: 'accessories',
    imageA: '/images/shop/full/bucket-hat-1.webp',
    imageB: '/images/shop/full/bucket-hat-2.webp',
    href: 'https://marshall-islands-soccer-federation.square.site/product/marshall-islands-soccer-unisex-reversible-bucket-hat-by-playerlayer/2?cp=true&sa=true&sbp=false&q=false',
  },
  {
    name: 'Fan Scarf',
    subtitle: 'Marshall Islands × SDH',
    category: 'accessories',
    imageA: '/images/shop/full/scarf-2.webp',
    imageB: '/images/shop/full/scarf-1.webp',
    href: 'https://misfshop.myshopify.com/collections/all',
  },
] as const

const FILTERS: { label: string; value: Category }[] = [
  { label: 'All', value: 'all' },
  { label: 'Jerseys', value: 'jerseys' },
  { label: 'Accessories', value: 'accessories' },
]

export default function ShopClient() {
  const [filter, setFilter] = useState<Category>('all')
  const products = filter === 'all' ? PRODUCTS : PRODUCTS.filter((product) => product.category === filter)

  return (
    <div className="bg-white min-h-screen">
      {filter === 'all' && (
        <div
          className="relative py-24 sm:py-32 px-4 overflow-hidden bg-misf-blue-dark"
          style={{
            backgroundImage: 'url(/images/shop/full/home-jersey-3.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
          }}
        >
          <div className="absolute inset-0 bg-misf-blue-dark/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-misf-blue-dark/85 to-transparent" />
          <div className="relative max-w-7xl mx-auto">
            <p className="font-display font-black text-xs uppercase tracking-[0.25em] text-misf-gold mb-3">
              Marshall Islands Soccer Federation
            </p>
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl uppercase text-white leading-none">
              Official Shop
            </h1>
            <p className="mt-4 text-white/75 text-base sm:text-lg max-w-2xl leading-relaxed">
              History-making kits worn by the first national team of the Marshall Islands.
              Every purchase supports football across the islands.
            </p>
          </div>
        </div>
      )}

      <section className={filter === 'all' ? 'py-10 lg:py-14' : 'pt-24 pb-14'}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {FILTERS.map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => {
                  setFilter(item.value)
                  window.scrollTo({ top: 0, behavior: 'instant' })
                }}
                className={`font-display font-black text-xs uppercase tracking-widest px-4 py-2 transition-colors ${
                  filter === item.value
                    ? 'bg-misf-blue-dark text-white'
                    : 'bg-gray-100 text-misf-blue-dark hover:bg-misf-gold'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://misfshop.myshopify.com/collections/all"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-black text-xs uppercase tracking-widest px-4 py-2 bg-gray-100 text-misf-blue-dark hover:bg-misf-gold transition-colors"
            >
              Merchandising ↗
            </a>
          </div>

          <div className="grid [grid-template-columns:repeat(auto-fill,minmax(260px,1fr))] gap-4">
            {products.map((product) => (
              <article
                key={`${product.name}-${product.subtitle}`}
                className="group block overflow-hidden bg-[#F4F6FB] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,45,122,0.12)]"
              >
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-[3/4] overflow-hidden bg-[#E8ECF7]"
                >
                  <img
                    src={product.imageA}
                    alt={product.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-0"
                  />
                  <img
                    src={product.imageB}
                    alt={product.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-500 group-hover:scale-[1.02] group-hover:opacity-100"
                  />
                  {'badge' in product && product.badge && (
                    <span
                      className={`absolute left-3 top-3 z-10 font-display font-black text-[10px] uppercase tracking-widest px-2.5 py-1 ${product.badgeClass}`}
                    >
                      {product.badge}
                    </span>
                  )}
                </a>
                <div className="flex items-start justify-between gap-3 p-4">
                  <div className="min-w-0">
                    <h2 className="font-display font-black text-lg uppercase leading-none text-misf-blue-dark">
                      {product.name}
                    </h2>
                    <p className="mt-1 font-display font-bold text-xs uppercase tracking-widest text-misf-gray-text">
                      {product.subtitle}
                    </p>
                  </div>
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 bg-misf-blue-dark text-white font-display font-black text-xs uppercase tracking-widest px-4 py-2 hover:bg-misf-blue transition-colors"
                  >
                    Buy
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 py-12 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-black text-3xl uppercase leading-none text-misf-blue-dark">
            FAQs
          </h2>

          {FAQS.length > 0 && (
            <div className="mt-8 divide-y divide-gray-200 border-y border-gray-200">
              {FAQS.map((item) => (
                <div key={item.question} className="py-5">
                  <h3 className="font-display font-black text-lg uppercase text-misf-blue-dark">
                    {item.question}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-misf-gray-text">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
