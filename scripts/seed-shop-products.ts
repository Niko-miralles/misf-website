import { createClient } from '@sanity/client'
import { createReadStream } from 'node:fs'
import { basename, join } from 'node:path'
import { shopProducts } from '../data/products'

const token = process.env.SANITY_WRITE_TOKEN
if (!token) throw new Error('SANITY_WRITE_TOKEN is required')

const client = createClient({
  projectId: 'az62wb6s',
  dataset: 'production',
  apiVersion: '2026-08-31',
  token,
  useCdn: false,
})

async function imageReference(imagePath?: string) {
  if (!imagePath) return undefined
  const filename = basename(imagePath)
  const existing = await client.fetch<Array<{ _id: string }>>(
    '*[_type == "sanity.imageAsset" && originalFilename == $filename]{_id}',
    { filename },
  )
  const asset = existing[0] || await client.assets.upload(
    'image',
    createReadStream(join(process.cwd(), 'public', imagePath.replace(/^\//, ''))),
    { filename },
  )
  return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } }
}

async function run() {
  for (const product of shopProducts) {
    await client.createIfNotExists({
      _id: `product-${product.slug}`,
      _type: 'product',
      name: product.name,
      slug: { _type: 'slug', current: product.slug },
      subtitle: product.subtitle,
      price: product.price,
      category: product.category,
      badge: product.badge,
      image: await imageReference(product.imageA),
      hoverImage: await imageReference(product.imageB),
      href: product.href,
      featured: product.featured || false,
      order: product.order,
      visible: true,
    })
  }
  console.log(`Seeded ${shopProducts.length} shop products.`)
}

run()
