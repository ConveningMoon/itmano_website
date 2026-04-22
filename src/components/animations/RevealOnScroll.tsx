'use client'
import { useEffect, useRef, ReactNode } from 'react'

interface RevealOnScrollProps {
  children: ReactNode
  direction?: 'up' | 'left' | 'right'
  className?: string
}

export function RevealOnScroll({ children, direction = 'up', className = '' }: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ctx: { revert: () => void } | undefined

    async function init() {
      if (!ref.current) return
      const gsapMod = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      const gsap = gsapMod.gsap
      gsap.registerPlugin(ScrollTrigger)

      const el = ref.current
      const classMap = { up: 'reveal', left: 'reveal-left', right: 'reveal-right' }
      el.classList.add(classMap[direction])

      ctx = gsap.context(() => {
        if (direction === 'up') {
          gsap.to(el, {
            opacity: 1, y: 0, duration: 0.65, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 88%' },
          })
        } else {
          gsap.to(el, {
            opacity: 1, x: 0, duration: 0.7, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 88%' },
          })
        }
      })
    }

    init()
    return () => ctx?.revert()
  }, [direction])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
