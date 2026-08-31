'use client'

import { useState } from 'react'

export default function MISLForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '', dob: '', cv: '' })

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
        <p className="font-display font-black text-misf-blue-dark text-xl uppercase">Interest Registered</p>
        <p className="text-misf-gray-text text-sm">We'll be in touch with more details about the 2027 MISL season.</p>
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
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-misf-blue-dark placeholder-gray-300 focus:outline-none focus:border-misf-blue-dark transition-colors"
          placeholder="Full name"
        />
      </div>

      <div className="space-y-1">
        <label className="block font-display font-bold text-xs uppercase tracking-widest text-gray-500">
          Phone Number <span className="text-misf-gold">*</span>
        </label>
        <input
          name="phone"
          type="tel"
          required
          value={form.phone}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-misf-blue-dark placeholder-gray-300 focus:outline-none focus:border-misf-blue-dark transition-colors"
          placeholder="+1 000 000 0000"
        />
      </div>

      <div className="space-y-1">
        <label className="block font-display font-bold text-xs uppercase tracking-widest text-gray-500">
          Email <span className="text-misf-gold">*</span>
        </label>
        <input
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-misf-blue-dark placeholder-gray-300 focus:outline-none focus:border-misf-blue-dark transition-colors"
          placeholder="you@example.com"
        />
      </div>

      <div className="space-y-1">
        <label className="block font-display font-bold text-xs uppercase tracking-widest text-gray-500">
          Date of Birth <span className="text-misf-gold">*</span>
        </label>
        <input
          name="dob"
          type="date"
          required
          value={form.dob}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-misf-blue-dark focus:outline-none focus:border-misf-blue-dark transition-colors"
        />
      </div>

      <div className="space-y-1">
        <label className="block font-display font-bold text-xs uppercase tracking-widest text-gray-500">
          Football CV <span className="text-misf-gold">*</span>
        </label>
        <textarea
          name="cv"
          required
          rows={5}
          value={form.cv}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-misf-blue-dark placeholder-gray-300 focus:outline-none focus:border-misf-blue-dark transition-colors resize-none"
          placeholder="List your clubs, positions, and any international experience…"
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
