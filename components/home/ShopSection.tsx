const PRODUCTS = [
  {
    id: 'jersey-home',
    name: "Marshall Islands 1st Ever Home Jersey Men's",
    price: '£46.99',
    image: '/images/shop/jersey-home.webp',
    href: 'https://marshall-islands-soccer-federation.square.site/product/marshall-islands-soccer-jersey-home/1?cp=true&sa=true&sbp=false&q=false',
  },
  {
    id: 'jersey-2030',
    name: "Marshall Islands 2030 Alternative Jersey Men's",
    price: '£49.99',
    image: '/images/shop/jersey-2030.webp',
    href: 'https://marshall-islands-soccer-federation.square.site/product/marshall-islands-2030-alternative-jersey-men-s/8?cp=true&sa=true&sbp=false&q=false',
  },
  {
    id: 'bucket-hat',
    name: 'Marshall Islands Soccer Unisex Reversible Bucket Hat',
    price: '£17.50',
    image: '/images/shop/bucket-hat.webp',
    href: 'https://marshall-islands-soccer-federation.square.site/product/marshall-islands-soccer-unisex-reversible-bucket-hat-by-playerlayer/2?cp=true&sa=true&sbp=false&q=false',
  },
]

export default function ShopSection() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-display font-black text-3xl sm:text-4xl uppercase text-misf-blue-dark leading-none">
            Shop Now
          </h2>
          <a
            href="/shop"
            className="hidden sm:flex items-center gap-1.5 font-display font-bold text-xs uppercase tracking-widest text-misf-blue hover:text-misf-gold transition-colors"
          >
            All Products →
          </a>
        </div>

        {/* Products */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 items-end">
          {PRODUCTS.map((product) => (
            <a
              key={product.id}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-gray-100 aspect-[3/4]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="pt-3">
                <h3 className="text-sm font-semibold text-misf-blue-dark leading-snug line-clamp-2 group-hover:text-misf-blue transition-colors">
                  {product.name}
                </h3>
                <p className="font-bold text-base text-misf-blue-dark mt-1.5">
                  {product.price}
                </p>
                <div className="mt-3 w-full text-center bg-misf-blue-dark text-white text-xs font-bold uppercase tracking-widest py-2.5 rounded-full group-hover:bg-misf-blue transition-colors">
                  Buy Now
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
