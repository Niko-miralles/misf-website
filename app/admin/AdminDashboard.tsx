'use client'

import { useMemo, useState } from 'react'
import type { Article } from '@/data/news'

type AdminArticle = Article & { id?: string }

const emptyArticle: AdminArticle = {
  title: '',
  slug: '',
  category: 'News',
  date: new Date().toISOString().slice(0, 10),
  excerpt: '',
  image: null,
  featured: false,
  body: '',
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
}

export default function AdminDashboard({ initialArticles }: { initialArticles: AdminArticle[] }) {
  const [articles, setArticles] = useState(initialArticles)
  const [selected, setSelected] = useState<AdminArticle>(initialArticles[0] || emptyArticle)
  const [status, setStatus] = useState('')
  const [isSaving, setIsSaving] = useState(false)
  const [isUploading, setIsUploading] = useState(false)

  const sortedArticles = useMemo(
    () => [...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    [articles]
  )

  function updateField<K extends keyof AdminArticle>(key: K, value: AdminArticle[K]) {
    setSelected((current) => {
      const next = { ...current, [key]: value }
      if (key === 'title' && !current.id) next.slug = slugify(String(value))
      return next
    })
  }

  async function saveArticle() {
    setIsSaving(true)
    setStatus('Saving...')

    const response = await fetch('/api/admin/articles', {
      method: selected.id ? 'PATCH' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(selected),
    })

    const data = await response.json()
    setIsSaving(false)

    if (!response.ok) {
      setStatus(data.error || 'Could not save. Check the fields and try again.')
      return
    }

    const saved = data.article as AdminArticle
    setSelected(saved)
    setArticles((current) => {
      const exists = current.some((article) => article.id === saved.id)
      return exists ? current.map((article) => (article.id === saved.id ? saved : article)) : [saved, ...current]
    })
    setStatus('Saved. The website has been refreshed.')
  }

  async function deleteArticle() {
    if (!selected.id) return
    if (!window.confirm('Delete this article?')) return

    setIsSaving(true)
    setStatus('Deleting...')

    const response = await fetch('/api/admin/articles', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: selected.id, slug: selected.slug }),
    })

    setIsSaving(false)

    if (!response.ok) {
      const data = await response.json()
      setStatus(data.error || 'Could not delete.')
      return
    }

    const remaining = articles.filter((article) => article.id !== selected.id)
    setArticles(remaining)
    setSelected(remaining[0] || emptyArticle)
    setStatus('Deleted.')
  }

  async function uploadImage(file: File) {
    setIsUploading(true)
    setStatus('Uploading image...')

    const form = new FormData()
    form.append('file', file)

    const response = await fetch('/api/admin/upload', { method: 'POST', body: form })
    const data = await response.json()
    setIsUploading(false)

    if (!response.ok) {
      setStatus(data.error || 'Image upload failed.')
      return
    }

    updateField('image', data.url)
    setStatus('Image uploaded. Remember to save the article.')
  }

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    window.location.href = '/admin/login'
  }

  return (
    <main className="min-h-screen bg-misf-gray-light">
      <header className="bg-misf-blue-dark px-4 py-5 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div>
            <p className="font-display text-xs font-black uppercase tracking-[0.25em] text-misf-gold">
              MISF Admin
            </p>
            <h1 className="font-display text-3xl font-black uppercase">Website Editor</h1>
          </div>
          <button
            onClick={logout}
            className="bg-white px-4 py-3 font-display text-xs font-black uppercase tracking-widest text-misf-blue-dark"
          >
            Sign out
          </button>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-5 px-4 py-6 lg:grid-cols-[340px_1fr]">
        <aside className="bg-white p-4">
          <button
            onClick={() => {
              setSelected(emptyArticle)
              setStatus('')
            }}
            className="mb-4 w-full bg-misf-gold px-5 py-4 font-display text-sm font-black uppercase tracking-widest text-misf-blue-dark"
          >
            New Article
          </button>

          <div className="space-y-2">
            {sortedArticles.map((article) => (
              <button
                key={article.id || article.slug}
                onClick={() => {
                  setSelected(article)
                  setStatus('')
                }}
                className={`w-full border p-4 text-left transition-colors ${
                  selected.id === article.id
                    ? 'border-misf-blue bg-misf-blue text-white'
                    : 'border-gray-200 bg-white hover:border-misf-blue'
                }`}
              >
                <p className="font-display text-sm font-black uppercase leading-tight">{article.title}</p>
                <p className={selected.id === article.id ? 'mt-1 text-xs text-white/70' : 'mt-1 text-xs text-misf-gray-text'}>
                  {article.date} · {article.category}
                </p>
              </button>
            ))}
          </div>
        </aside>

        <section className="bg-white p-5 sm:p-7">
          <div className="mb-6 flex flex-col gap-3 border-b border-gray-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-xs font-black uppercase tracking-[0.25em] text-misf-gold">
                News
              </p>
              <h2 className="font-display text-3xl font-black uppercase text-misf-blue-dark">
                {selected.id ? 'Edit Article' : 'Create Article'}
              </h2>
            </div>
            <div className="flex gap-2">
              {selected.id && (
                <a
                  href={`/news/${selected.slug}`}
                  target="_blank"
                  className="bg-misf-gray-light px-4 py-3 font-display text-xs font-black uppercase tracking-widest text-misf-blue-dark"
                >
                  View
                </a>
              )}
              {selected.id && (
                <button
                  onClick={deleteArticle}
                  disabled={isSaving}
                  className="bg-red-600 px-4 py-3 font-display text-xs font-black uppercase tracking-widest text-white disabled:opacity-50"
                >
                  Delete
                </button>
              )}
              <button
                onClick={saveArticle}
                disabled={isSaving}
                className="bg-misf-blue px-5 py-3 font-display text-xs font-black uppercase tracking-widest text-white disabled:opacity-50"
              >
                {isSaving ? 'Saving...' : 'Save'}
              </button>
            </div>
          </div>

          {status && (
            <div className="mb-5 border border-misf-gold bg-[#fff8e8] px-4 py-3 text-sm font-bold text-misf-blue-dark">
              {status}
            </div>
          )}

          <div className="grid gap-5 lg:grid-cols-[1fr_320px]">
            <div className="space-y-5">
              <label className="block">
                <span className="mb-2 block font-bold text-misf-blue-dark">Title</span>
                <input
                  value={selected.title}
                  onChange={(event) => updateField('title', event.target.value)}
                  className="w-full border border-gray-300 px-4 py-3 text-lg outline-none focus:border-misf-blue"
                  placeholder="Article title"
                />
              </label>

              <div className="grid gap-5 sm:grid-cols-3">
                <label className="block">
                  <span className="mb-2 block font-bold text-misf-blue-dark">Slug</span>
                  <input
                    value={selected.slug}
                    onChange={(event) => updateField('slug', slugify(event.target.value))}
                    className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-misf-blue"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block font-bold text-misf-blue-dark">Category</span>
                  <input
                    value={selected.category}
                    onChange={(event) => updateField('category', event.target.value)}
                    className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-misf-blue"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block font-bold text-misf-blue-dark">Date</span>
                  <input
                    type="date"
                    value={selected.date.slice(0, 10)}
                    onChange={(event) => updateField('date', event.target.value)}
                    className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-misf-blue"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block font-bold text-misf-blue-dark">Short summary</span>
                <textarea
                  value={selected.excerpt}
                  onChange={(event) => updateField('excerpt', event.target.value)}
                  rows={3}
                  className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-misf-blue"
                  placeholder="This appears on news cards."
                />
              </label>

              <label className="block">
                <span className="mb-2 block font-bold text-misf-blue-dark">Article text</span>
                <textarea
                  value={selected.body || ''}
                  onChange={(event) => updateField('body', event.target.value)}
                  rows={14}
                  className="w-full border border-gray-300 px-4 py-3 leading-relaxed outline-none focus:border-misf-blue"
                  placeholder="Write the full article here. Leave a blank line between paragraphs."
                />
              </label>
            </div>

            <aside className="space-y-5">
              <div className="border border-gray-200 p-4">
                <p className="mb-3 font-display text-lg font-black uppercase text-misf-blue-dark">
                  Main Image
                </p>
                <div className="relative mb-4 aspect-[16/10] overflow-hidden bg-misf-blue-dark">
                  {selected.image ? (
                    <img src={selected.image} alt="" className="h-full w-full object-cover" />
                  ) : (
                    <div className="flex h-full items-center justify-center px-6 text-center font-display text-sm font-black uppercase tracking-widest text-white/60">
                      No image yet
                    </div>
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  disabled={isUploading}
                  onChange={(event) => {
                    const file = event.target.files?.[0]
                    if (file) uploadImage(file)
                  }}
                  className="mb-3 w-full text-sm"
                />
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-misf-blue-dark">Or paste image URL</span>
                  <input
                    value={selected.image || ''}
                    onChange={(event) => updateField('image', event.target.value)}
                    className="w-full border border-gray-300 px-3 py-2 text-sm outline-none focus:border-misf-blue"
                  />
                </label>
              </div>

              <label className="flex items-center gap-3 border border-gray-200 p-4">
                <input
                  type="checkbox"
                  checked={selected.featured}
                  onChange={(event) => updateField('featured', event.target.checked)}
                  className="h-5 w-5"
                />
                <span className="font-bold text-misf-blue-dark">Featured article</span>
              </label>

              <div className="bg-misf-gray-light p-4 text-sm leading-relaxed text-misf-gray-text">
                <p className="font-bold text-misf-blue-dark">Simple rule:</p>
                <p>Fill the fields, upload or paste a photo, then press Save. The news page and homepage refresh automatically.</p>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </main>
  )
}
