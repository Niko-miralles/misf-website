const SPONSORS = [
  {
    name: 'SortItOutSI',
    logo: '/images/sponsors/sortitoutsi.png',
    darkBg: false,
  },
  {
    name: 'KitAid Australia',
    logo: '/images/sponsors/kitaid-australia.png',
    darkBg: false,
  },
  {
    name: 'PlayerLayer',
    logo: '/images/sponsors/playerlayer.png',
    darkBg: false,
  },
  {
    name: 'Net World Sports',
    logo: '/images/sponsors/net-world-sports.webp',
    darkBg: true,
  },
  {
    name: 'Chewy Lin Photo × Film',
    logo: '/images/sponsors/chewy-lin.png',
    darkBg: false,
  },
]

export default function SponsorsBar() {
  return (
    <section className="bg-white py-14 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center font-display font-black text-xs uppercase tracking-[0.25em] text-misf-gray-text mb-10">
          Supported By & Partner Organisations
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {SPONSORS.map(({ name, logo, darkBg }) => (
            <div
              key={name}
              title={name}
              className={`flex items-center justify-center w-28 h-10 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ${darkBg ? 'bg-[#1A56E8] rounded' : ''}`}
            >
              <img
                src={logo}
                alt={name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-misf-gray-text/50 mt-8 font-medium">
          Interested in supporting MISF?{' '}
          <a href="/get-involved/sponsors" className="underline hover:text-misf-blue transition-colors">
            Become a partner →
          </a>
        </p>
      </div>
    </section>
  )
}
