import type { Metadata } from 'next'
import ShopClient from './ShopClient'
import { getProductsWithFallback } from '@/lib/sanity'

export const metadata: Metadata = { title: 'Shop' }

export default async function ShopPage() {
  return <ShopClient products={await getProductsWithFallback()} />
}
