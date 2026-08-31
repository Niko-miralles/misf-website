import { createClient } from '@sanity/client'
import { createReadStream } from 'node:fs'
import { readdir } from 'node:fs/promises'
import { basename, join } from 'node:path'
import { articles } from '../data/news'
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
