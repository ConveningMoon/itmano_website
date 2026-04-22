import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  dark?: boolean
  className?: string
}

export function Badge({ children, dark = false, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-[6px] px-[14px] py-[6px] rounded-full text-[11px] font-bold tracking-[0.10em] uppercase ${
        dark
          ? 'bg-white/[0.08] text-white/75'
          : 'text-purple'
      } ${className}`}
      style={!dark ? { background: 'rgba(141,78,202,0.10)' } : undefined}
    >
      <span
        className="w-[6px] h-[6px] rounded-full flex-shrink-0"
        style={{ background: 'var(--grad)' }}
        aria-hidden="true"
      />
      {children}
    </span>
  )
}
