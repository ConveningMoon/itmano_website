'use client'
import { useEffect, useRef } from 'react'
import type gsapType from 'gsap'

export function useGSAP(callback: (gsap: typeof gsapType) => void, deps: unknown[] = []) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ctx: { revert: () => void } | undefined

    async function init() {
      const gsapMod = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      const gsap = gsapMod.gsap

      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        callback(gsap)
      }, ref)
    }

    init()

    return () => ctx?.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return ref
}
