'use client'
import { useEffect, useRef, useState } from 'react'
import { Container } from '@/components/ui/Container'
import { submitToHubSpot, HUBSPOT_FORMS } from '@/lib/hubspot'

function BookMockup() {
  return (
    <div className="flex items-center justify-center py-12 px-6">
      <div className="relative w-[220px] h-[290px]" style={{ filter: 'drop-shadow(0 32px 56px rgba(21,36,60,0.32))' }}>
        {/* Spine */}
        <div
          className="absolute top-[3px] bottom-[3px] flex items-center justify-center rounded-l-[6px] z-[2]"
          style={{
            left: '-34px', width: '34px',
            background: 'linear-gradient(90deg, #3D1878 0%, #5C2A9A 100%)',
            transform: 'perspective(900px) rotateY(75deg) translateX(17px)',
            transformOrigin: 'right center',
          }}
        >
          <span
            className="text-[9px] font-bold tracking-[0.14em] uppercase text-white/35"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
          >
            ITMANO · Sistema FCI
          </span>
        </div>

        {/* Top */}
        <div
          className="absolute z-[4] rounded-[6px_10px_0_0]"
          style={{
            top: '-22px', left: '-28px', right: '-3px', height: '24px',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.08) 100%)',
            transform: 'perspective(900px) rotateX(70deg) skewX(-6deg)',
            transformOrigin: 'bottom',
          }}
        />

        {/* Pages */}
        <div
          className="absolute top-1 bottom-1 z-[1] rounded-[0_3px_3px_0]"
          style={{
            right: '-8px', width: '10px',
            background: 'repeating-linear-gradient(to bottom, #f0e8d8 0px, #f0e8d8 1px, #e8ddc8 1px, #e8ddc8 2px)',
            transform: 'perspective(900px) skewY(-2deg)',
          }}
        />

        {/* Front */}
        <div
          className="absolute inset-0 rounded-[3px_10px_10px_3px] p-[30px_24px] flex flex-col overflow-hidden z-[3]"
          style={{
            background: 'linear-gradient(145deg, #9B5FD8 0%, #7A3FC0 50%, #6030A8 100%)',
            transform: 'perspective(900px) rotateY(-6deg) rotateX(2deg)',
          }}
        >
          {/* Spine shadow */}
          <div
            className="absolute top-0 bottom-0 left-0 w-[18px] border-r border-black/10"
            style={{ background: 'rgba(0,0,0,0.22)' }}
            aria-hidden="true"
          />
          {/* Highlight */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(120deg, rgba(255,255,255,0.12) 0%, transparent 50%)' }}
            aria-hidden="true"
          />

          <div className="text-[9px] font-bold tracking-[0.16em] uppercase text-white/50 mb-[18px] pl-[18px]">
            Guía gratuita · ITMANO
          </div>
          <div className="text-[20px] font-black text-white leading-[1.18] mb-[14px] pl-[18px] tracking-[-0.01em]" style={{ textWrap: 'pretty' } as React.CSSProperties}>
            Sistema de Prospección Avanzada
          </div>
          <div className="h-px bg-white/15 mb-4 ml-[18px]" aria-hidden="true" />
          <div className="pl-[18px]">
            <div className="text-[30px] font-black text-white leading-none mb-0.5">131.989€</div>
            <div className="text-[11px] text-white/45 leading-[1.4]">
              generados en 10 meses<br />sin un euro en publicidad
            </div>
          </div>
          <div className="absolute bottom-6 right-[18px] rounded-[6px] px-[10px] py-[6px]" style={{ background: 'rgba(255,255,255,0.12)' }}>
            <span className="text-[10px] font-bold text-white/70 tracking-[0.08em] uppercase">7 pasos · PDF</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function LeadMagnetSection() {
  const ref = useRef<HTMLElement>(null)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  useEffect(() => {
    async function init() {
      if (!ref.current) return
      const gsapMod = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      const gsap = gsapMod.gsap
      gsap.registerPlugin(ScrollTrigger)
      ;['.reveal-left', '.reveal-right'].forEach((sel) => {
        ref.current!.querySelectorAll(sel).forEach((el) => {
          gsap.to(el, {
            opacity: 1, x: 0, duration: 0.7, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 88%' },
          })
        })
      })
    }
    init()
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    const form = e.currentTarget
    const data = new FormData(form)
    const ok = await submitToHubSpot(HUBSPOT_FORMS.leadMagnet, {
      firstname: data.get('firstname') as string,
      email: data.get('email') as string,
      jobtitle: data.get('jobtitle') as string,
    })
    setStatus(ok ? 'success' : 'error')
  }

  return (
    <section ref={ref} id="recursos" className="py-24 bg-gray-light max-[600px]:py-16">
      <Container>
        <div className="grid gap-20 items-center max-[900px]:grid-cols-1 max-[900px]:gap-12" style={{ gridTemplateColumns: '1fr 1fr' }}>
          <div className="reveal-left">
            <BookMockup />
          </div>

          <div className="reveal-right">
            <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-purple mb-[10px]">Recurso gratuito</div>
            <h3
              className="font-extrabold text-navy leading-[1.18] tracking-[-0.015em] mb-[14px]"
              style={{ fontSize: 'clamp(22px, 2.4vw, 30px)', textWrap: 'pretty' } as React.CSSProperties}
            >
              ¿No estás listo para una sesión? Empieza aquí.
            </h3>
            <p className="text-[15px] text-gray-text leading-[1.68] mb-7">
              El sistema exacto que usamos para generar 131.989€ en 10 meses sin publicidad. Sin teoría, sin relleno — solo el proceso paso a paso con plantillas listas para implementar esta semana.
            </p>

            {status === 'success' ? (
              <div className="rounded-xl border border-gray-mid p-6 text-center" style={{ background: 'rgba(141,78,202,0.06)' }}>
                <div className="text-[28px] mb-2">✓</div>
                <p className="font-bold text-navy mb-1">¡Revisa tu email!</p>
                <p className="text-[14px] text-gray-text">Hemos enviado el recurso a tu bandeja de entrada.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="lm-name" className="sr-only">Tu nombre</label>
                  <input
                    id="lm-name"
                    name="firstname"
                    type="text"
                    placeholder="Tu nombre"
                    required
                    className="w-full px-4 py-[14px] rounded-lg border-[1.5px] border-gray-mid font-medium text-[14px] text-navy bg-white outline-none transition-[border-color,box-shadow] focus:border-purple focus:shadow-[0_0_0_3px_rgba(141,78,202,0.10)] placeholder:text-gray-text/55"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="lm-email" className="sr-only">Tu email profesional</label>
                  <input
                    id="lm-email"
                    name="email"
                    type="email"
                    placeholder="Tu email profesional"
                    required
                    className="w-full px-4 py-[14px] rounded-lg border-[1.5px] border-gray-mid font-medium text-[14px] text-navy bg-white outline-none transition-[border-color,box-shadow] focus:border-purple focus:shadow-[0_0_0_3px_rgba(141,78,202,0.10)] placeholder:text-gray-text/55"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="lm-role" className="sr-only">¿A qué te dedicas en real estate?</label>
                  <input
                    id="lm-role"
                    name="jobtitle"
                    type="text"
                    placeholder="¿A qué te dedicas en real estate?"
                    className="w-full px-4 py-[14px] rounded-lg border-[1.5px] border-gray-mid font-medium text-[14px] text-navy bg-white outline-none transition-[border-color,box-shadow] focus:border-purple focus:shadow-[0_0_0_3px_rgba(141,78,202,0.10)] placeholder:text-gray-text/55"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full mt-1 py-4 rounded-lg text-white font-bold text-[13px] tracking-[0.08em] uppercase transition-[filter,box-shadow] duration-200 hover:brightness-110 disabled:opacity-70"
                  style={{ background: 'var(--grad)', boxShadow: 'var(--shadow-btn)' }}
                >
                  {status === 'loading' ? 'Enviando...' : 'Descargar gratis'}
                </button>
                {status === 'error' && (
                  <p className="text-[12px] text-red-500 text-center mt-2">Error al enviar. Inténtalo de nuevo.</p>
                )}
                <p className="text-[11px] text-gray-text text-center mt-[10px] leading-[1.5]">
                  Sin spam. Sin compromisos. Solo el recurso en tu bandeja de entrada.
                </p>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
