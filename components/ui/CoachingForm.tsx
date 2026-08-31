'use client'

import { useState } from 'react'

export default function CoachingForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="border border-misf-gold/30 rounded-lg p-8 text-center space-y-2">
        <p className="font-display font-black text-misf-blue-dark text-xl uppercase">Thank you</p>
        <p className="text-misf-gray-text text-sm">We'll be in touch soon about your coaching interest.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-1">
        <label className="block font-display font-bold text-xs uppercase tracking-widest text-gray-500">
          Name <span className="text-misf-gold">*</span>
        </label>
        <input
          name="name" type="text" required value={form.name} onChange={handleChange}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-misf-blue-dark placeholder-gray-300 focus:outline-none focus:border-misf-blue-dark transition-colors"
          placeholder="Full name"
        />
      </div>

      <div className="space-y-1">
        <label className="block font-display font-bold text-xs uppercase tracking-widest text-gray-500">
          Email <span className="text-misf-gold">*</span>
        </label>
        <input
          name="email" type="email" required value={form.email} onChange={handleChange}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-misf-blue-dark placeholder-gray-300 focus:outline-none focus:border-misf-blue-dark transition-colors"
          placeholder="you@example.com"
        />
      </div>

      <div className="space-y-1">
        <label className="block font-display font-bold text-xs uppercase tracking-widest text-gray-500">
          Message
        </label>
        <textarea
          name="message" rows={4} value={form.message} onChange={handleChange}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-misf-blue-dark placeholder-gray-300 focus:outline-none focus:border-misf-blue-dark transition-colors resize-none"
          placeholder="Tell us about your coaching background and interest…"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-misf-blue-dark text-white font-display font-black text-sm uppercase tracking-widest py-4 rounded-lg hover:bg-misf-blue transition-colors"
      >
        Register Interest
      </button>
    </form>
  )
}
