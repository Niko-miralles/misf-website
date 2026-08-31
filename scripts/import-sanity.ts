import { createClient } from '@sanity/client'
import { createReadStream, existsSync } from 'node:fs'
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

async function uploadImage(imagePath: string | null) {
  if (!imagePath) return undefined
  const filePath = join(process.cwd(), 'public', imagePath.replace(/^\//, ''))
  if (!existsSync(filePath)) return undefined
  const asset = await client.assets.upload('image', createReadStream(filePath), { filename: basename(filePath) })
  return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } }
}

async function run() {
  const articleImages = new Map(await Promise.all(articles.map(async (article) => [article.slug, await uploadImage(article.image)] as const)))
  const peopleWithPhotos = [...squad, ...technicalStaff]
  const peopleImages = new Map(await Promise.all(peopleWithPhotos.map(async (person) => [person.id, await uploadImage(person.photo)] as const)))
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
  console.log(`Imported ${articles.length} articles and ${federationStaff.length + squad.length + futsalSquad.length + womensFutsalSquad.length + technicalStaff.length} people.`)
}

run()
