'use client'
import { useEffect, useRef } from 'react'
import { Container } from '@/components/ui/Container'

const PAIN_CARDS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#8D4ECA" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4l14 14M8 4h10v10" />
      </svg>
    ),
    title: 'Inviertes en ads. Recibes ruido.',
    body: 'Gastas $2,000 en Meta. Llegan 40 leads. 32 no contestan. 6 no tienen presupuesto. 1 compra — si tienes suerte. Eso no es marketing, es una lotería cara que tú estás financiando.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#8D4ECA" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8" /><path d="M11 7v4l3 3" />
      </svg>
    ),
    title: 'Vives de referidos o mueres.',
    body: 'Enero fue increíble porque Carlos te mandó dos clientes. Febrero fue un desastre porque nadie te mandó nada. Esa montaña rusa tiene nombre: dependencia total de variables que no controlas.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#8D4ECA" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="5" width="16" height="14" rx="2" /><path d="M7 5V3M15 5V3M3 9h16" />
      </svg>
    ),
    title: 'Tus leads viven en WhatsApp y la memoria.',
    body: 'Tienes un prospecto caliente en el chat, otro en el correo de hace tres semanas, y uno en un papel encima de tu escritorio. Alguien va a cerrar con ellos. Probablemente no seas tú.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#8D4ECA" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 18l7-7 4 4 7-9" />
      </svg>
    ),
    title: 'Más presupuesto = más caos.',
    body: 'Duplicas la inversión en Meta. Llegan el doble de leads. Tu equipo se satura. La tasa de cierre cae a la mitad. El costo por cliente se dispara. El problema nunca fue el volumen.',
  },
]

export function PainSection() {
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
    <section ref={ref} className="py-24 bg-white max-[600px]:py-16">
      <Container>
        <div className="text-center mb-14 reveal">
          <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-purple mb-[14px]">El diagnóstico</div>
          <h2 className="font-bold leading-[1.2] tracking-[-0.01em] mb-4" style={{ fontSize: 'clamp(28px, 3.2vw, 40px)' }}>
            Reconoces esto.<br />Y ya estás harto.
          </h2>
          <p className="text-[17px] text-gray-text leading-[1.7] max-w-[540px] mx-auto">
            No es mala suerte. No es el mercado. Es que nadie te dio el sistema correcto — y llevas años compensando con esfuerzo lo que debería resolver una infraestructura.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 max-[900px]:grid-cols-1">
          {PAIN_CARDS.map((card) => (
            <div
              key={card.title}
              className="reveal bg-white rounded-xl p-[30px_28px] border border-gray-mid relative overflow-hidden transition-[transform,box-shadow] duration-[250ms] hover:-translate-y-0.5 group"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px] transition-[background] duration-300"
                style={{ background: 'var(--gray-mid)' }}
                aria-hidden="true"
              />
              <style>{`
                .pain-card-hover:hover .pain-top-bar { background: var(--grad) !important; }
              `}</style>
              <div
                className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'var(--grad)' }}
                aria-hidden="true"
              />
              <div className="w-10 h-10 rounded-[10px] flex items-center justify-center mb-4" style={{ background: 'rgba(141,78,202,0.07)' }}>
                {card.icon}
              </div>
              <h3 className="text-[17px] font-bold text-navy mb-[10px] leading-[1.25]">{card.title}</h3>
              <p className="text-[14px] text-gray-text leading-[1.7]">{card.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
