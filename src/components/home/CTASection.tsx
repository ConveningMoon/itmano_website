'use client'
import { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import { Badge } from '@/components/ui/Badge'
import { Container } from '@/components/ui/Container'

const CalendlyEmbed = dynamic(
  () => import('@/components/integrations/CalendlyEmbed').then((m) => m.CalendlyEmbed),
  {
    ssr: false,
    loading: () => (
      <div
        className="rounded-[10px] border border-dashed h-[220px] flex items-center justify-center flex-col gap-[10px]"
        style={{ borderColor: 'var(--gray-mid)', background: 'var(--white)' }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" opacity={0.35} aria-hidden="true">
          <rect x="3" y="5" width="26" height="24" rx="3" stroke="#15243C" strokeWidth="1.8" />
          <path d="M10 3v4M22 3v4M3 13h26" stroke="#15243C" strokeWidth="1.8" strokeLinecap="round" />
          <rect x="9" y="18" width="4" height="4" rx="1" fill="#15243C" />
          <rect x="14" y="18" width="4" height="4" rx="1" fill="#15243C" />
          <rect x="19" y="18" width="4" height="4" rx="1" fill="#15243C" />
        </svg>
        <span className="text-[13px] font-medium" style={{ color: 'rgba(21,36,60,0.45)' }}>Cargando calendario...</span>
      </div>
    ),
  },
)

const STEPS = [
  'Elige tu horario',
  'Responde 3 preguntas de calificación',
  'Recibe la confirmación y el acceso',
]

export function CTASection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    async function init() {
      if (!ref.current) return
      const gsapMod = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      const gsap = gsapMod.gsap
      gsap.registerPlugin(ScrollTrigger)
      ref.current.querySelectorAll('.reveal').forEach((el) => {
        gsap.to(el, {
          opacity: 1, y: 0, duration: 0.65, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        })
      })
    }
    init()
  }, [])

  return (
    <section ref={ref} id="cta" className="py-24 bg-white text-center max-[600px]:py-16">
      <Container>
        <div className="reveal mb-7">
          <Badge>Sesión Estratégica · Gratuita</Badge>
        </div>

        <h2
          className="reveal font-bold text-navy leading-[1.2] tracking-[-0.01em] max-w-[660px] mx-auto mb-4"
          style={{ fontSize: 'clamp(28px, 3.2vw, 40px)' }}
        >
          30 minutos para diseñar tu sistema de automatización comercial
        </h2>

        <p
          className="reveal text-[17px] leading-[1.7] max-w-[540px] mx-auto mb-[52px]"
          style={{ color: 'var(--gray-text)' }}
        >
          No es una llamada de ventas. Es un diagnóstico estratégico. Analizamos tu captación actual, detectamos qué parte aún depende de trabajo manual y te mostramos cómo convertirlo en un flujo automatizado con IA.
        </p>

        <div
          className="reveal max-w-[820px] mx-auto mb-8 rounded-[14px] p-[40px_32px]"
          style={{ background: 'var(--gray-light)', border: '1px solid var(--gray-mid)' }}
        >
          {/* Steps */}
          <div className="flex gap-0 mb-8 max-[600px]:flex-col max-[600px]:gap-3">
            {STEPS.map((step, i) => (
              <div
                key={step}
                className="flex-1 text-center px-4 relative"
                style={i > 0 ? { borderLeft: '1px solid var(--gray-mid)' } : undefined}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-bold text-white mx-auto mb-[10px]"
                  style={{ background: 'var(--grad)' }}
                >
                  {i + 1}
                </div>
                <div className="text-[12px] font-semibold leading-[1.4]" style={{ color: 'var(--gray-text)' }}>
                  {step}
                </div>
              </div>
            ))}
          </div>

          <CalendlyEmbed />
        </div>

        <p className="reveal text-[13px] font-medium" style={{ color: 'rgba(21,36,60,0.45)' }}>
          Solo para agentes y firmas con operación establecida y $1,000+/mes de inversión publicitaria
        </p>
      </Container>
    </section>
  )
}
