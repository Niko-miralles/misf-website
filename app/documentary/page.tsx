import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import VideoPlayer from './VideoPlayer'

export const metadata: Metadata = {
  title: 'The Last Country on Earth Without a Football Team',
  description: 'The Marshall Islands Soccer Federation documentary.',
}

export default function DocumentaryPage() {
  return (
    <div className="bg-misf-blue-dark min-h-screen text-white">

      {/* Video player */}
      <div className="w-full bg-misf-blue-dark pt-3 sm:pt-4">
        <div className="max-w-6xl mx-auto">
          <VideoPlayer />
        </div>
      </div>

      {/* Article */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">

        {/* Category */}
        <p className="text-white/50 text-sm font-medium mb-4 uppercase tracking-widest">
          Documentary
        </p>

        {/* Title */}
        <h1 className="font-display font-black uppercase text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(28px, 5vw, 64px)' }}>
          The Last Country on Earth Without a Football Team
        </h1>

        {/* Meta row */}
        <div className="flex items-center gap-3 mb-8">
          <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
            <Image src="/images/logo.webp" alt="MISF" fill className="object-contain" sizes="40px" />
          </div>
          <div>
            <p className="font-bold text-sm text-white">Marshall Islands Soccer Federation</p>
            <a href="https://www.instagram.com/rmisoccer/" target="_blank" rel="noopener noreferrer" className="text-white/40 text-xs hover:text-white transition-colors">@rmisoccer</a>
          </div>
        </div>

        {/* Body */}
        <div className="space-y-6 text-white/80 leading-relaxed text-base sm:text-lg">
          <p className="text-white font-semibold text-lg sm:text-xl leading-relaxed">
            The Last Team Society & MISF are collaborating charities founded on the belief that every nation deserves a fair chance to thrive.
          </p>
          <p>
            The Marshall Islands, a small island nation in the Pacific, has endured generations of injustice — from foreign invasions and nuclear testing to the devastating impacts of climate change that now threaten to erase its very home. Despite these challenges, the spirit of its people remains strong and united.
          </p>
          <p>
            Our mission is to raise global awareness about the struggles and resilience of the Marshallese community through the universal language of football. By building teams, hosting matches, and sharing their story across the world, we aim to inspire solidarity, drive support, and ensure that the Marshall Islands are never forgotten — because on this planet, no team should have to fight alone.
          </p>
          <p>
            To fulfill our mission, what better way than football? The biggest sport in the world by far, with nearly 2 billion people watching the World Cup alone.
          </p>
          <p>
            However, to become a part of this universe, the Marshall Islands need to become members of FIFA.
          </p>
        </div>

        {/* Back link */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <Link
            href="/"
            className="font-display font-bold text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

      </div>
    </div>
  )
}
