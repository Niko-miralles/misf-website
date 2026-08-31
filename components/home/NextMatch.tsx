import Image from 'next/image'
import Link from 'next/link'
import { upcomingMatches } from '@/data/matches'
import { Calendar, MapPin } from 'lucide-react'

export default function NextMatch() {
  const match = upcomingMatches[0]
  if (!match) return null

  const matchDate = new Date(match.date)
  const formattedDate = matchDate.toLocaleDateString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  const formattedTime = matchDate.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short',
  })

  return (
    <div className="bg-misf-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          {/* Label */}
          <div className="shrink-0">
            <span className="font-display font-black text-xs uppercase tracking-[0.25em] text-misf-gold">
              Next Match
            </span>
          </div>

          {/* Teams */}
          <div className="flex items-center gap-4 sm:gap-6 flex-1">
            {/* Home */}
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 shrink-0">
                {match.homeTeam.logo ? (
                  <Image
                    src={match.homeTeam.logo}
                    alt={match.homeTeam.name}
                    fill
                    className="object-contain"
                  />
                ) : (
                  <div className="w-8 h-8 bg-misf-blue flex items-center justify-center text-white font-display font-black text-xs">
                    {match.homeTeam.code}
                  </div>
                )}
              </div>
              <span className="font-display font-bold text-white text-sm sm:text-base uppercase tracking-wide">
                {match.homeTeam.name}
              </span>
            </div>

            <span className="font-display font-black text-misf-gold text-lg tracking-widest">
              VS
            </span>

            {/* Away */}
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 shrink-0">
                {match.awayTeam.logo ? (
                  <Image
                    src={match.awayTeam.logo}
                    alt={match.awayTeam.name}
                    fill
                    className="object-contain"
                  />
                ) : (
                  <div className="w-8 h-8 bg-misf-blue flex items-center justify-center text-white font-display font-black text-xs">
                    {match.awayTeam.code}
                  </div>
                )}
              </div>
              <span className="font-display font-bold text-white text-sm sm:text-base uppercase tracking-wide">
                {match.awayTeam.name}
              </span>
            </div>
          </div>

          {/* Meta */}
          <div className="flex items-center gap-4 text-white/60 text-xs shrink-0">
            <span className="flex items-center gap-1.5">
              <Calendar size={12} />
              <span className="font-medium">{formattedDate} · {formattedTime}</span>
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <MapPin size={12} />
              <span>{match.venue}</span>
            </span>
            <span className="hidden sm:block font-display font-bold text-misf-gold text-xs uppercase tracking-wider">
              {match.competition}
            </span>
          </div>

          {/* CTA */}
          <Link
            href="/competitions/outrigger-cup"
            className="shrink-0 border border-white/30 text-white/80 hover:text-white hover:border-white font-display font-bold text-xs uppercase tracking-widest px-4 py-2 transition-colors"
          >
            More info
          </Link>
        </div>
      </div>
    </div>
  )
}
