import Link from 'next/link'
import clsx from 'clsx'

interface ButtonProps {
  href?: string
  onClick?: () => void
  variant?: 'gold' | 'outline-white' | 'outline-blue' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  external?: boolean
}

export default function Button({
  href,
  onClick,
  variant = 'gold',
  size = 'md',
  children,
  className,
  external,
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 font-display font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer'

  const sizes = {
    sm: 'text-xs px-4 py-2',
    md: 'text-sm px-6 py-3',
    lg: 'text-base px-8 py-4',
  }

  const variants = {
    gold: 'bg-misf-gold text-misf-blue-dark hover:bg-[#d4911c] active:scale-95',
    'outline-white':
      'border-2 border-white text-white hover:bg-white hover:text-misf-blue-dark active:scale-95',
    'outline-blue':
      'border-2 border-misf-blue text-misf-blue hover:bg-misf-blue hover:text-white active:scale-95',
    ghost: 'text-misf-gold hover:text-[#d4911c] underline-offset-2 hover:underline',
  }

  const classes = clsx(base, sizes[size], variants[variant], className)

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
