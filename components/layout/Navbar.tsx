'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import clsx from 'clsx'

const NAV_ITEMS = [
  { label: 'News', href: '/news' },
  {
    label: 'Teams',
    href: '#',
    children: [
      { label: 'National Team', href: '/national-teams' },
      { label: "Men's Soccer", href: '/teams/mens-soccer' },
      { label: "Men's Futsal", href: '/teams/mens-futsal' },
      { label: "Women's Futsal", href: '/teams/womens-futsal' },
    ],
  },
  {
    label: 'Competitions',
    href: '#',
    children: [
      { label: 'Competitions Overview', href: '/competitions' },
      { label: 'Outrigger Cup', href: '/competitions/outrigger-cup' },
      { label: 'Futsal', href: '/competitions/futsal' },
      { label: 'MISL', href: '/competitions/misl' },
      { label: 'Inter-Island', href: '/competitions/inter-island' },
      { label: 'Clubs', href: '/clubs' },
    ],
  },
  {
    label: 'Get Involved',
    href: '#',
    children: [
      { label: 'Volunteer', href: '/get-involved/volunteer' },
      { label: 'Players', href: '/get-involved/player' },
      { label: 'Coaching', href: '/get-involved/coaching' },
      { label: 'Sponsors & Partners', href: '/get-involved/sponsors' },
    ],
  },
  {
    label: 'About',
    href: '#',
    children: [
      { label: 'About MISF', href: '/about' },
      { label: 'Mission & Strategy', href: '/about/mission' },
      { label: 'Our Story', href: '/documentary' },
      { label: 'Soccer Development', href: '/about/soccer-development' },
      { label: 'Resource Hub', href: '/about/soccer-development/resources' },
      { label: 'Climate', href: '/about/climate' },
      { label: 'The Islands', href: '/about/the-islands' },
      { label: 'About in Marshallese', href: '/about/marshallese' },
    ],
  },
  { label: 'Shop', href: '/shop' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setMobileExpanded(null)
  }, [pathname])

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-shadow duration-300',
        scrolled ? 'shadow-[0_2px_20px_rgba(0,0,0,0.3)]' : ''
      )}
    >
      <nav className="bg-misf-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <div className="relative w-11 h-11">
                <Image
                  src="/images/logo.webp"
                  alt="Marshall Islands Soccer Federation"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="hidden sm:block font-display font-bold text-white text-sm uppercase tracking-wider leading-tight">
                Marshall Islands<br />Soccer Federation
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) =>
                item.children ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpenMenu(item.label)}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    <button className={clsx(
                      'flex items-center gap-1 px-3 py-5 font-display font-bold text-sm uppercase tracking-wider text-white/90 hover:text-white transition-colors',
                      item.children.some((c) => pathname.startsWith(c.href))
                        ? 'border-b-[3px] border-misf-gold text-white'
                        : 'border-b-[3px] border-transparent'
                    )}>
                      {item.label}
                      <ChevronDown size={14} strokeWidth={2.5} />
                    </button>
                    {openMenu === item.label && (
                      <div className="absolute top-full left-0 w-52 bg-misf-blue-dark border-t-[3px] border-misf-gold shadow-xl">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={clsx(
                              'block px-4 py-2.5 font-display font-bold text-xs uppercase tracking-wider transition-colors',
                              pathname === child.href
                                ? 'text-misf-gold bg-white/5'
                                : 'text-white/80 hover:text-white hover:bg-white/10'
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={clsx(
                      'px-3 py-5 font-display font-bold text-sm uppercase tracking-wider text-white/90 hover:text-white transition-colors',
                      pathname === item.href
                        ? 'border-b-[3px] border-misf-gold text-white'
                        : 'border-b-[3px] border-transparent'
                    )}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>

            {/* Right side */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/donate"
                className="bg-misf-gold text-misf-blue-dark font-display font-black text-xs uppercase tracking-widest px-5 py-2.5 hover:bg-[#d4911c] transition-colors"
              >
                Donate →
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2 -mr-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="lg:hidden bg-misf-blue-dark border-t border-white/10 max-h-[80vh] overflow-y-auto">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() =>
                      setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                    }
                    className="flex items-center justify-between w-full px-6 py-3.5 font-display font-bold text-sm uppercase tracking-wider text-white/90 border-b border-white/5"
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={clsx(
                        'transition-transform',
                        mobileExpanded === item.label ? 'rotate-180' : ''
                      )}
                    />
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="bg-misf-blue-dark/70">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block pl-10 pr-6 py-3 font-display font-bold text-xs uppercase tracking-wider text-white/70 hover:text-white border-b border-white/5"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-6 py-3.5 font-display font-bold text-sm uppercase tracking-wider text-white/90 hover:text-white border-b border-white/5"
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="p-4 flex items-center gap-3">
              <Link
                href="/donate"
                className="flex-1 text-center bg-misf-gold text-misf-blue-dark font-display font-black text-sm uppercase tracking-widest px-5 py-3 hover:bg-[#d4911c] transition-colors"
              >
                Donate →
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
