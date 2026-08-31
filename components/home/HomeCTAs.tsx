import Link from 'next/link'

const CTAS = [
  {
    eyebrow: 'About MISF',
    title: 'Who Are We?',
    body: 'From a blank page to the world stage — the story of football in the Marshall Islands.',
    href: '/about',
    accent: 'border-misf-gold',
  },
  {
    eyebrow: 'Climate',
    title: 'Climate Emergency',
    body: 'The Marshall Islands could disappear within decades. Football is how 42,000 people tell the world we exist.',
    href: '/about/climate',
    accent: 'border-misf-blue',
  },
  {
    eyebrow: 'Mission & Strategy',
    title: '2030 Roadmap',
    body: 'FIFA recognition, 1,000 registered players, a domestic league. Our goals and how we will achieve them.',
    href: '/about/mission',
    accent: 'border-white/40',
  },
]

export default function HomeCTAs() {
  return (
    <section className="bg-misf-blue-dark py-12 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
          {CTAS.map(({ eyebrow, title, body, href, accent }) => (
            <Link
              key={title}
              href={href}
              className={`group block border-l-4 ${accent} pl-5 py-2 hover:pl-6 transition-all duration-200`}
            >
              <p className="font-display font-bold text-xs uppercase tracking-[0.2em] text-misf-gold mb-1.5">
                {eyebrow}
              </p>
              <h3 className="font-display font-black text-xl sm:text-2xl uppercase text-white leading-tight mb-2 group-hover:text-misf-gold transition-colors">
                {title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {body}
              </p>
              <p className="text-misf-gold text-xs font-display font-bold uppercase tracking-widest mt-3">
                Read More →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
