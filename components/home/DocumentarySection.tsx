'use client'

import Link from 'next/link'

export default function DocumentarySection() {
  return (
    <section id="documentary" className="bg-white py-5 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col overflow-hidden sm:h-[clamp(300px,38vw,500px)] sm:flex-row">
        {/* Left panel */}
        <div className="bg-misf-blue-dark flex min-h-[260px] flex-col justify-between px-6 py-8 sm:min-h-0 sm:w-[42%] sm:shrink-0 sm:px-14 sm:py-14">
          <div>
            <p className="mb-4 font-display text-[11px] font-bold uppercase tracking-[0.35em] text-white/50 sm:text-xs">
              Documentary
            </p>
            <h2
              className="max-w-[16ch] font-display text-[32px] font-black uppercase leading-[0.95] text-white underline decoration-misf-gold decoration-2 underline-offset-4 sm:max-w-none sm:text-[clamp(22px,3.2vw,52px)] sm:leading-tight"
            >
              The Last Country on Earth Without a Football Team
            </h2>
          </div>

          {/* Play button — only clickable element */}
          <Link
            href="/documentary"
            className="group mt-7 flex w-fit items-center gap-4 sm:mt-0 sm:gap-3"
          >
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-misf-gold transition-colors group-hover:bg-[#d4911c] sm:h-14 sm:w-14">
              <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-7 w-7 text-misf-blue-dark sm:h-6 sm:w-6">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </div>
            <span className="font-display text-sm font-bold uppercase tracking-widest text-white/55 transition-colors group-hover:text-white sm:text-xs">
              Play
            </span>
          </Link>
        </div>

        {/* Right panel — thumbnail only, NOT clickable */}
        <div className="relative aspect-[16/9] flex-1 overflow-hidden pointer-events-none select-none sm:aspect-auto">
          <img
            src="/images/documentary-poster.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-misf-blue-dark/10" />
        </div>
      </div>
      </div>
    </section>
  )
}
