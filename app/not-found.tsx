import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-[65vh] items-center bg-misf-gray-light px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-display text-sm font-black uppercase tracking-[0.25em] text-misf-gold">404</p>
        <h1 className="mt-3 font-display text-5xl font-black uppercase text-misf-blue-dark sm:text-6xl">Page not found</h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-misf-gray-text">
          This page is no longer available. Visit the latest MISF pages from the homepage or explore the news archive.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="bg-misf-blue px-6 py-3 font-display text-sm font-black uppercase tracking-widest text-white">Home</Link>
          <Link href="/news" className="border border-misf-blue px-6 py-3 font-display text-sm font-black uppercase tracking-widest text-misf-blue">News</Link>
        </div>
      </div>
    </main>
  )
}
