'use client'
import { useEffect, useRef, ReactNode } from 'react'

interface StaggerRevealProps {
  children: ReactNode
  className?: string
  stagger?: number
  delay?: number
}

export function StaggerReveal({ children, className = '', stagger = 0.13, delay = 0.2 }: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ctx: { revert: () => void } | undefined

    async function init() {
      if (!ref.current) return
      const gsapMod = await import('gsap')
      const gsap = gsapMod.gsap

      const items = ref.current.querySelectorAll('.reveal')

      ctx = gsap.context(() => {
        gsap.timeline({ delay }).to(items, {
          opacity: 1, y: 0, duration: 0.7, stagger, ease: 'power2.out',
        })
      })
    }

    init()
    return () => ctx?.revert()
  }, [stagger, delay])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
