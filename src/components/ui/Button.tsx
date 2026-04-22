import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  fullWidth?: boolean
}

export function Button({
  children,
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  fullWidth = false,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 px-10 py-[18px] rounded-lg text-white font-bold text-[13px] tracking-[0.08em] uppercase no-underline border-none cursor-pointer whitespace-nowrap transition-[filter,box-shadow] duration-200 hover:brightness-110'
  const style = {
    background: 'var(--grad)',
    boxShadow: 'var(--shadow-btn)',
  } as React.CSSProperties
  const hoverStyle = {
    boxShadow: 'var(--shadow-btn-lg)',
  }
  const classes = `${base} ${fullWidth ? 'w-full' : ''} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} style={style}>
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      style={style}
    >
      {children}
    </button>
  )
}
