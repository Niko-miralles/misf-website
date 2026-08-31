'use client'

import { useEffect, useRef, useState } from 'react'

interface Stat {
  value: number
  suffix: string
  label: string
  sublabel: string
  noFormat?: boolean
}

const STATS: Stat[] = [
  { value: 1000, suffix: '+', label: 'Players Goal', sublabel: 'Project 1,000 Players' },
  { value: 3, suffix: '', label: 'National Teams', sublabel: "Men's · Men's Futsal · Women's" },
  { value: 20, suffix: '+', label: 'Islands Reached', sublabel: 'Across the archipelago' },
  { value: 2025, suffix: '', label: 'First Int\'l Match', sublabel: 'Historic milestone', noFormat: true },
]

function CountUp({ target, suffix, active, noFormat }: { target: number; suffix: string; active: boolean; noFormat?: boolean }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!active) return
    const duration = 1800
    const steps = 60
    const increment = target / steps
    let step = 0

    const timer = setInterval(() => {
      step++
      const eased = Math.min(Math.round(increment * step * (step / steps) * 1.5), target)
      setCurrent(eased)
      if (step >= steps) {
        setCurrent(target)
        clearInterval(timer)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [active, target])

  return (
    <span>
      {noFormat ? current.toString() : current.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function ImpactNumbers() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-misf-gold py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-black text-misf-blue-dark leading-none mb-2"
                   style={{ fontSize: 'clamp(48px, 7vw, 80px)' }}>
                <CountUp target={stat.value} suffix={stat.suffix} active={active} noFormat={stat.noFormat} />
              </div>
              <p className="font-display font-black text-sm sm:text-base uppercase tracking-wider text-misf-blue-dark">
                {stat.label}
              </p>
              <p className="text-misf-blue-dark/60 text-xs mt-1 font-medium">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
