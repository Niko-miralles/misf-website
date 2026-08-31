'use client'

import { useState } from 'react'

export default function LoginForm({ initialError = false }: { initialError?: boolean }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(initialError ? 'That password is not correct.' : '')
  const [loading, setLoading] = useState(false)

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setError('')

    const response = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    setLoading(false)

    if (!response.ok) {
      const data = await response.json().catch(() => ({}))
      setError(data.error || 'Could not sign in.')
      return
    }

    window.location.href = '/admin'
  }

  return (
    <form onSubmit={submit} className="w-full max-w-md bg-white p-8 shadow-2xl">
      <p className="font-display font-black text-xs uppercase tracking-[0.25em] text-misf-gold mb-3">
        MISF Admin
      </p>
      <h1 className="font-display font-black text-4xl uppercase text-misf-blue-dark mb-4">
        Sign in
      </h1>
      <p className="text-sm leading-relaxed text-misf-gray-text mb-7">
        Private editing area for Marshall Islands Soccer Federation website content.
      </p>

      <label className="block font-bold text-misf-blue-dark mb-2" htmlFor="password">
        Password
      </label>
      <input
        id="password"
        name="password"
        type="password"
        autoComplete="current-password"
        required
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-misf-blue"
      />

      {error && <p className="mt-4 text-sm font-bold text-red-600">{error}</p>}

      <button
        disabled={loading}
        className="mt-6 w-full bg-misf-gold px-6 py-4 font-display font-black uppercase tracking-widest text-misf-blue-dark hover:bg-[#d4911c] disabled:opacity-60"
      >
        {loading ? 'Opening...' : 'Open Admin'}
      </button>
    </form>
  )
}
