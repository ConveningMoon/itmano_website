import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`bg-white rounded-xl border border-gray-mid relative overflow-hidden ${
        hover ? 'transition-transform duration-[250ms] hover:-translate-y-0.5' : ''
      } ${className}`}
      style={{ boxShadow: 'var(--shadow-card)' }}
    >
      {children}
    </div>
  )
}
