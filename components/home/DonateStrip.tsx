import Link from 'next/link'

export default function DonateStrip() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: 'url(/images/youth-soccer.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        minHeight: '420px',
      }}
    >
      {/* subtle dark tint */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 flex items-center">
        {/* Text box with thin white border */}
        <div className="border border-white/50 px-10 py-10 max-w-lg">
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white leading-tight mb-5">
            Can you help us?
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-8">
            The MISF is completely self-funded. Help us provide opportunities to young Marshallese players by contributing to our fundraiser.
          </p>
          <Link
            href="/donate"
            className="inline-block bg-misf-gold text-misf-blue-dark font-bold text-base px-8 py-3.5 rounded-full hover:bg-[#d4911c] transition-colors"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </section>
  )
}
