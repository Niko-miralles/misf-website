export type ShopProduct = {
  slug: string
  name: string
  subtitle?: string
  price?: string
  category: 'jerseys' | 'accessories'
  badge?: string
  imageA: string
  imageB?: string
  href: string
  featured?: boolean
  order?: number
}

export const shopProducts: ShopProduct[] = [
  { slug: 'home-jersey-mens', name: '1st Ever Home Jersey', subtitle: "Men's · by PlayerLayer", price: '£46.99', category: 'jerseys', badge: 'Iconic', imageA: '/images/shop/full/home-jersey-1.webp', imageB: '/images/shop/full/home-jersey-3.jpg', href: 'https://marshall-islands-soccer-federation.square.site/product/marshall-islands-soccer-jersey-home/1?cp=true&sa=true&sbp=false&q=false', featured: true, order: 1 },
  { slug: 'alternative-jersey-mens', name: '2030 Alternative Jersey', subtitle: "Men's", price: '£49.99', category: 'jerseys', badge: '2030', imageA: '/images/shop/full/alt-jersey-1.webp', imageB: '/images/shop/full/alt-jersey-5.webp', href: 'https://marshall-islands-soccer-federation.square.site/product/marshall-islands-2030-alternative-jersey-men-s/8?cp=true&sa=true&sbp=false&q=false', featured: true, order: 2 },
  { slug: 'matchworn-jersey', name: 'Matchworn Player Issue Jersey', subtitle: 'National Team · Limited', category: 'jerseys', badge: 'Exclusive', imageA: '/images/shop/full/matchworn-1.webp', imageB: '/images/shop/full/matchworn-2.webp', href: 'https://marshall-islands-soccer-federation.square.site/product/matchworn-marshall-islands-national-team-player-issue-jersey/ZJKR4G7KLOYOUQQ2IDE5TUCT?cp=true&sa=true&sbp=false&q=false', featured: true, order: 3 },
  { slug: 'goalkeeper-jersey', name: '2030 Goalkeeper Jersey', subtitle: "Men's", category: 'jerseys', badge: '2030', imageA: '/images/shop/full/gk-jersey-1.webp', imageB: '/images/shop/full/gk-jersey-2.webp', href: 'https://marshall-islands-soccer-federation.square.site/product/marshall-islands-2030-goalkeeper-jersey-men-s/QHUK5R4AOLM2C7NSLT2NAOFC?cp=true&sa=true&sbp=false&q=false', order: 4 },
  { slug: 'alternative-jersey-ladies', name: '2030 Alternative Jersey', subtitle: 'Ladies', category: 'jerseys', badge: 'Ladies', imageA: '/images/shop/full/alt-jersey-4.webp', imageB: '/images/shop/full/alt-jersey-6.webp', href: 'https://marshall-islands-soccer-federation.square.site/product/marshall-islands-2030-alternative-jersey-ladies/9?cp=true&sa=true&sbp=false&q=false', order: 5 },
  { slug: 'alternative-jersey-junior', name: '2030 Alternative Jersey', subtitle: 'Junior', category: 'jerseys', badge: 'Junior', imageA: '/images/shop/full/alt-jersey-2.webp', imageB: '/images/shop/full/alt-jersey-3.webp', href: 'https://marshall-islands-soccer-federation.square.site/product/marshall-islands-2030-alternative-jersey-junior/10?cp=true&sa=true&sbp=false&q=false', order: 6 },
  { slug: 'home-jersey-junior', name: '1st Ever Home Jersey', subtitle: 'Junior · by PlayerLayer', category: 'jerseys', badge: 'Junior', imageA: '/images/shop/full/home-jersey-1.webp', imageB: '/images/shop/full/home-jersey-4.jpg', href: 'https://marshall-islands-soccer-federation.square.site/product/marshall-islands-1st-ever-home-jersey-junior-by-playerlayer/5?cp=true&sa=true&sbp=false&q=false', order: 7 },
  { slug: 'bucket-hat', name: 'Reversible Bucket Hat', subtitle: 'Unisex · by PlayerLayer', price: '£17.50', category: 'accessories', imageA: '/images/shop/full/bucket-hat-1.webp', imageB: '/images/shop/full/bucket-hat-2.webp', href: 'https://marshall-islands-soccer-federation.square.site/product/marshall-islands-soccer-unisex-reversible-bucket-hat-by-playerlayer/2?cp=true&sa=true&sbp=false&q=false', featured: true, order: 8 },
  { slug: 'fan-scarf', name: 'Fan Scarf', subtitle: 'Marshall Islands × SDH', category: 'accessories', imageA: '/images/shop/full/scarf-2.webp', imageB: '/images/shop/full/scarf-1.webp', href: 'https://misfshop.myshopify.com/collections/all', order: 9 },
]
