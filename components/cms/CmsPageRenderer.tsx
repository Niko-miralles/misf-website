import Image from 'next/image'
import Link from 'next/link'
import type { CmsContentBlock, CmsPage } from '@/lib/sanity'

function Text({ block }: { block: CmsContentBlock }) {
  const links = new Map((block.markDefs || []).map((definition) => [definition._key, definition.href]))
  const children = (block.children || []).map((span, index) => {
    let value: React.ReactNode = span.text || ''
    const marks = span.marks || []

    if (marks.includes('strong')) value = <strong className="font-bold text-misf-blue-dark">{value}</strong>
    if (marks.includes('em')) value = <em>{value}</em>

    const href = marks.map((mark) => links.get(mark)).find(Boolean)
    if (href) {
      value = href.startsWith('/') ? (
        <Link href={href} className="font-semibold text-misf-blue underline decoration-misf-gold underline-offset-4 hover:text-misf-gold">
          {value}
        </Link>
      ) : (
        <a href={href} className="font-semibold text-misf-blue underline decoration-misf-gold underline-offset-4 hover:text-misf-gold" target="_blank" rel="noreferrer">
          {value}
        </a>
      )
    }

    return <span key={span._key || index}>{value}</span>
  })

  if (block.style === 'h2') return <h2 className="mt-10 font-display text-3xl font-black uppercase leading-tight text-misf-blue-dark">{children}</h2>
  if (block.style === 'h3') return <h3 className="mt-8 font-display text-2xl font-black uppercase leading-tight text-misf-blue-dark">{children}</h3>
  if (block.style === 'blockquote') return <blockquote className="my-8 border-l-4 border-misf-gold pl-5 text-xl font-medium italic leading-relaxed text-misf-blue-dark">{children}</blockquote>
  return <p className="mb-5 text-base leading-relaxed text-gray-700 sm:text-lg">{children}</p>
}

export default function CmsPageRenderer({ page }: { page: CmsPage }) {
  return (
    <article className="min-h-screen bg-white">
      <header className="relative overflow-hidden bg-misf-blue-dark px-4 py-20 sm:py-28">
        {page.heroImage && (
          <Image src={page.heroImage} alt="" fill priority sizes="100vw" className="object-cover opacity-40" />
        )}
        <div className="relative mx-auto max-w-5xl">
          <h1 className="font-display text-4xl font-black uppercase leading-none text-white sm:text-5xl lg:text-6xl">
            {page.heroTitle || page.title}
          </h1>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
        {(page.content || []).map((block, index) => {
          if (block._type === 'image' && block.url) {
            return (
              <figure key={block._key || index} className="my-8 overflow-hidden bg-misf-gray-light">
                <Image src={block.url} alt={block.alt || ''} width={1600} height={1000} className="h-auto w-full" />
                {block.alt && <figcaption className="px-3 py-2 text-sm text-misf-gray-text">{block.alt}</figcaption>}
              </figure>
            )
          }
          return <Text key={block._key || index} block={block} />
        })}
      </div>
    </article>
  )
}
