import { ReactNode } from 'react'

type Variant = 'default' | 'dark' | 'alt'

interface SectionWrapperProps {
  children: ReactNode
  variant?: Variant
  id?: string
  className?: string
}

const variantClasses: Record<Variant, string> = {
  default: 'bg-white',
  dark: 'bg-navy text-white',
  alt: 'bg-gray-light',
}

export function SectionWrapper({ children, variant = 'default', id, className = '' }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-24 max-[600px]:py-16 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </section>
  )
}
