'use client'

import { useState } from 'react'

const ENQUIRY_TYPES = [
  { value: 'jersey', label: 'Replica Jersey Enquiry', email: 'mist.retail@gmail.com' },
  { value: 'sponsorship', label: 'Sponsorship', email: 'marshallislandssf@gmail.com' },
  { value: 'volunteering', label: 'Volunteering', email: 'marshallislandssf@gmail.com' },
  { value: 'partnerships', label: 'Partnerships', email: 'marshallislandssf@gmail.com' },
  { value: 'events', label: 'Events', email: 'marshallislandssf@gmail.com' },
  { value: 'general', label: 'General Enquiry', email: 'marshallislandssf@gmail.com' },
]

export default function ContactPage() {
  const [type, setType] = useState(ENQUIRY_TYPES[0])
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [typeMenuOpen, setTypeMenuOpen] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const subject = encodeURIComponent(`${type.label} - ${form.name || 'Website Enquiry'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nEnquiry type: ${type.label}\n\n${form.message}`
    )

    window.location.href = `mailto:${type.email}?subject=${subject}&body=${body}`
  }

  return (
    <div className="bg-white min-h-screen">
      <div
        className="relative py-16 sm:py-20 px-4 overflow-hidden"
        style={{
          backgroundImage: 'url(/images/team-huddle.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(14,45,122,0.72)' }} />
        <div className="relative max-w-7xl mx-auto">
          <p className="font-display font-black text-xs uppercase tracking-[0.25em] text-misf-gold mb-3">
            Marshall Islands Soccer Federation
          </p>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl uppercase text-white leading-none">
            Contact
          </h1>
          <p className="mt-4 text-white/70 text-base sm:text-lg max-w-2xl">
            For replica jerseys, sponsorship, volunteering, partnerships, and general enquiries.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16 pb-4">
        <p className="text-lg text-misf-gray-text leading-relaxed mb-6">
          Get in touch with the Marshall Islands Soccer Federation. Replica jersey enquiries
          are sent to the retail team, while sponsorship, volunteering, partnerships, and
          general enquiries are sent to the federation inbox.
        </p>

        <h2 className="font-display font-black text-2xl uppercase text-misf-blue-dark">
          Send a Message
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-gray-200" />
      </div>

      <div className="max-w-lg mx-auto px-4 sm:px-6 pb-12 pt-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block font-bold text-misf-blue-dark mb-1.5 text-sm">
              Enquiry Type <span className="font-normal text-misf-gray-text">(required)</span>
            </label>
            <div className="relative">
              <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={typeMenuOpen}
                onClick={() => setTypeMenuOpen((open) => !open)}
                className="flex w-full items-center justify-between border border-gray-300 bg-white px-3 py-2.5 text-left text-sm text-misf-blue-dark outline-none transition-colors hover:border-misf-blue focus:border-misf-blue"
              >
                <span>{type.label}</span>
                <span className="ml-3 text-misf-blue-dark" aria-hidden="true">
                  {typeMenuOpen ? '−' : '+'}
                </span>
              </button>

              {typeMenuOpen && (
                <div
                  role="listbox"
                  className="absolute left-0 right-0 top-full z-20 mt-1 border border-gray-300 bg-white shadow-lg"
                >
                  {ENQUIRY_TYPES.map((item) => (
                    <button
                      key={item.value}
                      type="button"
                      role="option"
                      aria-selected={item.value === type.value}
                      onClick={() => {
                        setType(item)
                        setTypeMenuOpen(false)
                      }}
                      className={`block w-full px-3 py-2.5 text-left text-sm transition-colors ${
                        item.value === type.value
                          ? 'bg-misf-blue-dark text-white'
                          : 'text-misf-blue-dark hover:bg-gray-100'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <p className="text-xs text-misf-gray-text mt-1.5">
              Sends to <span className="font-semibold text-misf-blue">{type.email}</span>
            </p>
          </div>

          <div>
            <label className="block font-bold text-misf-blue-dark mb-1.5 text-sm">
              Name <span className="font-normal text-misf-gray-text">(required)</span>
            </label>
            <input
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 focus:border-misf-blue outline-none px-3 py-2.5 text-sm"
            />
          </div>

          <div>
            <label className="block font-bold text-misf-blue-dark mb-1.5 text-sm">
              Email <span className="font-normal text-misf-gray-text">(required)</span>
            </label>
            <input
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 focus:border-misf-blue outline-none px-3 py-2.5 text-sm"
            />
          </div>

          <div>
            <label className="block font-bold text-misf-blue-dark mb-1.5 text-sm">
              Your Message
            </label>
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-300 focus:border-misf-blue outline-none px-3 py-2.5 text-sm resize-y"
            />
          </div>

          <button
            type="submit"
            className="bg-misf-blue-dark text-white font-bold text-sm px-8 py-3 rounded-full hover:bg-misf-blue transition-colors"
          >
            Contact Us
          </button>
        </form>
      </div>

    </div>
  )
}
