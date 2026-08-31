'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] min-h-[560px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0E2D7A] via-[#0d3585] to-[#1A4BAE]" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `repeating-linear-gradient(-45deg,transparent,transparent 40px,rgba(255,255,255,0.15) 40px,rgba(255,255,255,0.15) 41px)`,
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(14,45,122,0.7)_100%)]" />
      <div className="absolute inset-0 bg-[#0E2D7A]/55" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-misf-gold text-xs sm:text-sm tracking-[0.3em] uppercase mb-6"
        >
          Marshall Islands Soccer Federation
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="font-display font-black uppercase text-white leading-none tracking-tight"
          style={{ fontSize: 'clamp(52px, 10vw, 96px)' }}
        >
          We Play for
          <br />
          <span className="text-misf-gold">the Islands</span>
        </motion.h1>
      </div>
    </section>
  )
}
