import Link from 'next/link'

export default function GlobalAmbassadors() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch min-h-[480px]">

        {/* Left: text */}
        <div className="flex flex-col justify-center px-8 sm:px-14 py-16 lg:py-20 lg:w-[38%] shrink-0">
          <h2 className="font-display font-black text-4xl sm:text-5xl uppercase text-misf-blue-dark leading-none mb-6">
            Global<br />Ambassadors
          </h2>
          <p className="text-misf-gray-text text-base leading-relaxed mb-10 max-w-sm">
            To amplify our project we have enlisted the help of several renowned soccer players, coaches, and personalities. The global ambassadors are unpaid, and support our project as they are passionate about building the world's best-loved sport.
          </p>
          <Link
            href="/ambassadors"
            className="inline-flex items-center justify-center w-fit px-8 py-3.5 rounded-full border-2 border-misf-blue-dark text-misf-blue-dark font-display font-bold uppercase tracking-wider text-sm hover:bg-misf-blue-dark hover:text-white transition-colors duration-200"
          >
            Learn more
          </Link>
        </div>

        {/* Right: image */}
        <div className="relative lg:flex-1 h-72 lg:h-auto">
          <img
            src="/images/youth-soccer.webp"
            alt="Marshall Islands youth soccer players"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>

      </div>
    </section>
  )
}
