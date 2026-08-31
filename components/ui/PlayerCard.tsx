import type { Player } from '@/lib/players'

export default function PlayerCard({ player }: { player: Player }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-misf-blue-dark aspect-[3/4] cursor-default">
      {/* Photo */}
      {player.photo ? (
        <img
          src={player.photo}
          alt={player.name}
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-misf-blue/60 to-misf-blue-dark flex items-end justify-center pb-8">
          <svg viewBox="0 0 100 120" className="w-3/5 opacity-10 fill-white">
            <ellipse cx="50" cy="30" rx="22" ry="24" />
            <path d="M8 120 Q8 70 50 65 Q92 70 92 120Z" />
          </svg>
        </div>
      )}

      {/* Overlays only for placeholder (no photo) */}
      {!player.photo && (
        <>
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-misf-blue-dark/95 to-transparent" />
          <div className="absolute top-3 right-4">
            <span className="font-display font-black text-white text-4xl leading-none drop-shadow-lg">
              {'number' in player ? player.number : ''}
            </span>
          </div>
          <div className="absolute bottom-0 inset-x-0 px-4 pb-4">
            <p className="font-display font-black italic text-white uppercase text-xl leading-tight drop-shadow">
              {player.name}
            </p>
            <p className="text-white/50 text-xs uppercase tracking-widest mt-0.5">{player.position}</p>
          </div>
        </>
      )}
    </div>
  )
}
