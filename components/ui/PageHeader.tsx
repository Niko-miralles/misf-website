interface PageHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  gradient?: string
  image?: string
  imagePosition?: string
  tall?: boolean
}

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  gradient = 'from-[#0E2D7A] to-[#1A4BAE]',
  image,
  imagePosition = 'center',
  tall = false,
}: PageHeaderProps) {
  return (
    <div
      className={`relative ${tall ? 'py-32 sm:py-48' : 'py-16 sm:py-20'} px-4 ${!image ? `bg-gradient-to-br ${gradient}` : ''}`}
      style={image ? { backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: imagePosition } : undefined}
    >
      <div className="absolute inset-0 bg-[#0E2D7A]/60" />
      <div className="relative max-w-7xl mx-auto">
        {eyebrow && (
          <p className="font-display font-black text-xs uppercase tracking-[0.25em] text-misf-gold mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl uppercase text-white leading-none">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-white/70 text-base sm:text-lg max-w-2xl">{subtitle}</p>
        )}
      </div>
    </div>
  )
}
