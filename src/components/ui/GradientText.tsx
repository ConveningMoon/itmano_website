import { ReactNode } from 'react'

interface GradientTextProps {
  children: ReactNode
  as?: keyof JSX.IntrinsicElements
  className?: string
}

export function GradientText({ children, as: Tag = 'span', className = '' }: GradientTextProps) {
  return (
    <Tag className={`gradient-text ${className}`}>
      {children}
    </Tag>
  )
}
