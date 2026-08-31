import { createClient } from '@sanity/client'
import { createReadStream } from 'node:fs'
import { readdir } from 'node:fs/promises'
import { basename, join, relative } from 'node:path'
import { articles } from '../data/news'
import { shopProducts } from '../data/products'
import { federationStaff } from '../data/federation-staff'
import { squad, futsalSquad, womensFutsalSquad, technicalStaff } from '../data/players'

const token = process.env.SANITY_WRITE_TOKEN

if (!token) throw new Error('SANITY_WRITE_TOKEN is required')

const client = createClient({
  projectId: 'az62wb6s',
  dataset: 'production',
  apiVersion: '2026-08-31',
  token,
  useCdn: false,
})

const key = (prefix: string, value: string | number) => `${prefix}-${String(value).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`
const blocks = (text?: string) => text?.split(/\n\n+/).filter(Boolean).map((children, index) => ({
  _key: `block-${index + 1}`,
  _type: 'block',
  style: 'normal',
  markDefs: [],
  children: [{ _key: `span-${index + 1}`, _type: 'span', marks: [], text: children }],
}))

async function listImageFiles(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true })
  const nested = await Promise.all(entries.map(async (entry) => {
    const filePath = join(directory, entry.name)
    if (entry.isDirectory()) return listImageFiles(filePath)
    return /\.(avif|gif|jpe?g|png|webp)$/i.test(entry.name) ? [filePath] : []
  }))
  return nested.flat()
}

async function uploadRemainingAssets() {
  const imageDirectory = join(process.cwd(), 'public', 'images')
  const existing = new Set(await client.fetch<string[]>('*[_type == "sanity.imageAsset"].originalFilename'))
  const limit = Number(process.env.SANITY_IMPORT_LIMIT || 20)
  const files = (await listImageFiles(imageDirectory)).filter((file) => !existing.has(basename(file))).slice(0, limit)
  for (const file of files) {
    // Sanity's public API limits uploads per second. A small delay makes this
    // migration resumable and avoids losing the remaining assets to a 429.
    await client.assets.upload('image', createReadStream(file), { filename: basename(file) })
    await new Promise((resolve) => setTimeout(resolve, 100))
  }
  return files.length
}

async function listPagePaths(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true })
  const routes: string[] = []
  for (const entry of entries) {
    const fullPath = join(directory, entry.name)
    if (entry.isDirectory()) {
      if (['api', 'admin', 'studio'].includes(entry.name) || entry.name.startsWith('[')) continue
      routes.push(...await listPagePaths(fullPath))
    } else if (entry.name === 'page.tsx') {
      const folder = relative(join(process.cwd(), 'app'), directory)
      routes.push(folder ? `/${folder.replaceAll('\\', '/')}` : '/')
    }
  }
  return routes
}

function plainText(value: string) {
  return value.replace(/<[^>]*>/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/\s+/g, ' ').trim()
}

async function fetchPageSummary(path: string) {
  const baseUrl = process.env.CMS_SOURCE_URL || 'https://misf-website-psi.vercel.app'
  const html = await fetch(`${baseUrl}${path}`).then((response) => response.ok ? response.text() : '')
  const title = plainText(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] || '')
  const heading = plainText(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1] || title.replace(/\s*\|\s*MISF$/, ''))
  const description = plainText(html.match(/<meta[^>]+name="description"[^>]+content="([^"]*)"/i)?.[1] || '')
  const imagePath = html.match(/<img[^>]+src="(\/images\/[^"?]+)[^>]*>/i)?.[1]
  return { title: heading || path, description, imagePath }
}

async function run() {
  const remainingAssets = await uploadRemainingAssets()
  const assetIds = new Map(await client.fetch<Array<{ _id: string, originalFilename: string }>>('*[_type == "sanity.imageAsset"]{_id, originalFilename}').then((assets) => assets.map((asset) => [asset.originalFilename, asset._id] as const)))
  const imageReference = (imagePath: string | null) => {
    if (!imagePath) return undefined
    const assetId = assetIds.get(basename(imagePath))
    return assetId ? { _type: 'image', asset: { _type: 'reference', _ref: assetId } } : undefined
  }
  const articleImages = new Map(articles.map((article) => [article.slug, imageReference(article.image)] as const))
  const peopleWithPhotos = [...squad, ...technicalStaff]
  const peopleImages = new Map(peopleWithPhotos.map((person) => [person.id, imageReference(person.photo)] as const))
  const tx = client.transaction()

  tx.createOrReplace({
    _id: 'site-settings', _type: 'siteSettings', title: 'Marshall Islands Soccer Federation',
    description: 'The Marshall Islands Soccer Federation — building football across the Pacific islands, developing players, competing internationally, and advocating for climate action.',
    footerText: 'Marshall Islands Soccer Federation',
  })

  for (const article of articles) {
    tx.createOrReplace({
      _id: `article-${article.slug}`,
      _type: 'article',
      title: article.title,
      slug: { _type: 'slug', current: article.slug },
      category: article.category,
      publishedAt: `${article.date}T12:00:00.000Z`,
      excerpt: article.excerpt,
      body: blocks(article.body),
      image: articleImages.get(article.slug),
    })
  }

  for (const product of shopProducts) {
    tx.createOrReplace({
      _id: `product-${product.slug}`,
      _type: 'product',
      name: product.name,
      slug: { _type: 'slug', current: product.slug },
      subtitle: product.subtitle,
      price: product.price,
      category: product.category,
      badge: product.badge,
      image: imageReference(product.imageA),
      hoverImage: imageReference(product.imageB || null),
      href: product.href,
      featured: product.featured || false,
      order: product.order,
      visible: true,
    })
  }

  for (const path of await listPagePaths(join(process.cwd(), 'app'))) {
    const page = await fetchPageSummary(path)
    tx.createOrReplace({
      _id: `page-${path === '/' ? 'home' : path.slice(1).replaceAll('/', '-')}`,
      _type: 'page',
      title: page.title,
      slug: { _type: 'slug', current: path === '/' ? 'home' : path.slice(1) },
      heroTitle: page.title,
      heroImage: imageReference(page.imagePath || null),
      content: blocks(page.description),
      seo: { metaTitle: page.title, metaDescription: page.description },
    })
  }

  for (const person of federationStaff) {
    tx.createOrReplace({
      _id: key('staff', `${person.name}-${person.role}`), _type: 'person', name: person.name,
      role: person.role, team: 'Federation staff', department: person.department,
      location: person.location, flag: person.flag,
    })
  }

  const teams = [
    ['mens-soccer', "Men's soccer", squad],
    ['mens-futsal', "Men's futsal", futsalSquad],
    ['womens-futsal', "Women's futsal", womensFutsalSquad],
    ['technical', "Men's soccer", technicalStaff],
  ] as const
  for (const [group, team, people] of teams) {
    for (const person of people) {
      tx.createOrReplace({
        _id: key(group, person.id), _type: 'person', name: person.name, role: 'role' in person ? person.role : undefined,
        team, position: 'position' in person ? person.position : undefined,
        shirtNumber: 'number' in person ? person.number : undefined, order: person.id,
        image: peopleImages.get(person.id),
      })
    }
  }

  await tx.commit()
  console.log(`Imported ${articles.length} articles, ${federationStaff.length + squad.length + futsalSquad.length + womensFutsalSquad.length + technicalStaff.length} people, and ${remainingAssets} remaining image assets.`)
}

run()
