import Link from 'next/link'
import Image from 'next/image'

const SOCIAL = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/rmisoccer/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: 'X / Twitter',
    href: 'https://x.com/SoccerFedMI',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/rmisoccer',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@soccerfedmi',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/marshall-islands-soccer-federation',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'Newsletter',
    href: 'https://41dcb809.sibforms.com/serve/MUIFAM_TLHLFJMWLgiUPbJAJM_1egNUwD3c7BCwNqWvTMT_wYTa-Nk5GBJsbIoSiW7S49Ld1qgigUkY_m-Ly6p7JooXnZo-m8YT8jpPBtTAHGeOkKUH4kHE7cH5FxQUnR6Cmp2-R-ASGhEQxBDWBFgLpDgM7h13AgL19oldL-m0F-9DZMVU8S14rZ8_jeAnV-Bp5OunHWlO_ITshCg==',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
]

const QUICK_LINKS = [
  { label: 'News', href: '/news' },
  { label: 'National Team', href: '/national-teams' },
  { label: "Men's Soccer", href: '/teams/mens-soccer' },
  { label: "Men's Futsal", href: '/teams/mens-futsal' },
  { label: "Women's Futsal", href: '/teams/womens-futsal' },
  { label: 'Outrigger Cup', href: '/competitions/outrigger-cup' },
  { label: 'MISL', href: '/competitions/misl' },
  { label: 'Clubs', href: '/clubs' },
]

const GET_INVOLVED = [
  { label: 'Volunteer', href: '/get-involved/volunteer' },
  { label: 'Coaching', href: '/get-involved/coaching' },
  { label: 'Diaspora', href: '/get-involved/diaspora' },
  { label: 'Become a Sponsor', href: '/get-involved/sponsors' },
  { label: 'Contact', href: '/contact' },
  { label: 'Donate', href: '/donate' },
  { label: 'Shop', href: '/shop' },
]

export default function Footer() {
  return (
    <footer>
      {/* Main footer */}
      <div className="bg-misf-blue-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            {/* Col 1: Logo + tagline */}
            <div>
              <Link href="/" className="flex items-center gap-3 mb-4">
                <div className="relative w-12 h-12 shrink-0">
                  <Image src="/images/logo.webp" alt="MISF" fill className="object-contain" />
                </div>
                <span className="font-display font-bold text-sm uppercase tracking-wider leading-tight text-white">
                  Marshall Islands<br />Soccer Federation
                </span>
              </Link>
              <p className="text-white/60 text-sm leading-relaxed mt-3 mb-4">
                Uniting the islands through football. Building towards FIFA membership and beyond.
              </p>

              {/* Get updated */}
              <p className="font-display font-black text-xs uppercase tracking-widest text-misf-gold mb-2">Get updated</p>
              <div className="flex items-center gap-2 mb-3">
                {SOCIAL.map(({ label, href, icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 hover:bg-misf-gold hover:text-misf-blue-dark text-white/70 transition-colors [&_svg]:w-3.5 [&_svg]:h-3.5">
                    {icon}
                  </a>
                ))}
              </div>
              <div className="flex items-center bg-white/10 rounded-full overflow-hidden">
                <input type="email" placeholder="Your email…"
                  className="flex-1 min-w-0 px-3 py-2 text-xs text-white placeholder-white/40 outline-none bg-transparent" />
                <a href="https://41dcb809.sibforms.com/serve/MUIFAM_TLHLFJMWLgiUPbJAJM_1egNUwD3c7BCwNqWvTMT_wYTa-Nk5GBJsbIoSiW7S49Ld1qgigUkY_m-Ly6p7JooXnZo-m8YT8jpPBtTAHGeOkKUH4kHE7cH5FxQUnR6Cmp2-R-ASGhEQxBDWBFgLpDgM7h13AgL19oldL-m0F-9DZMVU8S14rZ8_jeAnV-Bp5OunHWlO_ITshCg=="
                  target="_blank" rel="noopener noreferrer"
                  className="bg-misf-gold text-misf-blue-dark font-bold text-xs px-3 py-2 rounded-full hover:bg-[#d4911c] transition-colors whitespace-nowrap">
                  Subscribe
                </a>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h4 className="font-display font-black text-xs uppercase tracking-widest text-misf-gold mb-3">
                Quick Links
              </h4>
              <ul className="space-y-1.5">
                {QUICK_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="text-sm text-white/70 hover:text-white transition-colors hover:pl-1 inline-block">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Get Involved */}
            <div>
              <h4 className="font-display font-black text-xs uppercase tracking-widest text-misf-gold mb-3">
                Get Involved
              </h4>
              <ul className="space-y-1.5">
                {GET_INVOLVED.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="text-sm text-white/70 hover:text-white transition-colors hover:pl-1 inline-block">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="mt-6 mb-4 h-px bg-misf-gold/40" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
            <p>© 2025 Marshall Islands Soccer Federation. All rights reserved.</p>
            <p>
              <Link href="/about" className="hover:text-white/70 transition-colors">rmi.soccer</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
