'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'

const TESTIMONIALS = [
	{
	  text: '"Pasamos de depender 100% de referidos a tener un pipeline constante de prospectos cualificados. El sistema de filtrado fue el mayor cambio estructural que hemos implementado en la agencia."',
	  name: 'Adriana Meléndez',
	  role: 'Directora · A&J Real Estate · Florida · USA',
	  avatarSrc: '/assets/TestimonialsFaces/Adri_Face.png',
	},
	{
	  text: '"En tres meses, el porcentaje de leads que llegaba a reunión con perfil real de compra pasó del 15% al 62%. Ahora invierto mi tiempo donde tiene sentido económico — gracias James por tu ayuda."',
	  name: 'John Leonard',
	  role: 'Broker · Azul Inversiones · Madrid · España',
	  avatarSrc: '/assets/TestimonialsFaces/John_Face.png',
	},
  ]

const COMPANIES = [
  {
    id: 'ac',
    label: 'AC',
    logoSrc: '/assets/TestimonialsLogos/AC_Logo.png',
  },
  {
    id: 'aj',
    label: 'AJ',
    logoSrc: '/assets/TestimonialsLogos/AJ_Logo.png',
  },
  {
    id: 'azul',
    label: 'Azul',
    logoSrc: '/assets/TestimonialsLogos/Azul_Logo.png',
  },
  {
    id: 'gp',
    label: 'GP',
    logoSrc: '/assets/TestimonialsLogos/GP_Logo.png',
  },
  {
    id: 'hc',
    label: 'HC',
    logoSrc: '/assets/TestimonialsLogos/HC_Logo.png',
  },
  {
    id: 'jana',
    label: 'Jana Real Estate',
    logoSrc: '/assets/TestimonialsLogos/Jana_Logo.png',
  },
  {
    id: 'lombok',
    label: 'Lombok Properties',
    logoSrc: '/assets/TestimonialsLogos/Lombok_Logo.png',
  },
  {
    id: 'remax',
    label: 'Remax',
    logoSrc: '/assets/TestimonialsLogos/Remax_Logo.png',
  },
]

export function ProofSection() {
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
    <section ref={ref} className="py-12 bg-gray-light max-[600px]:py-16">
      <Container>
        <div className="text-center mb-12 reveal">
          <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-purple mb-[14px]">Resultados reales</div>
          <h2 className="font-bold leading-[1.2] tracking-[-0.01em] mb-4" style={{ fontSize: 'clamp(28px, 3.2vw, 40px)' }}>
            Resultados que no necesitan adjetivos
          </h2>
          <p className="text-[17px] text-gray-text leading-[1.7] max-w-[500px] mx-auto">
            Agentes y firmas que confiaron en nosotros y decidieron dejar de improvisar y empezaron construir un sistema
          </p>
        </div>

        {/* Logo ticker */}
        <div
          className="overflow-hidden mb-14 reveal"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
            maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          }}
        >
          <div className="logo-ticker flex items-center gap-10" style={{ width: 'max-content' }}>
            {[...COMPANIES, ...COMPANIES].map((company, i) => (
              <div
                key={`${company.id}-${i}`}
                className="flex items-center justify-center flex-shrink-0 h-[120px]"
              >
                <Image
                  src={company.logoSrc}
                  alt={company.label}
                  width={120}
                  height={28}
                  className="w-auto h-[100px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-2 gap-5 max-[900px]:grid-cols-1">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="reveal bg-white rounded-xl p-[30px] border border-gray-mid relative"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <span
                className="absolute top-[10px] right-5 text-[72px] font-black leading-none select-none pointer-events-none"
                style={{ color: 'rgba(141,78,202,0.10)', fontFamily: 'Georgia, serif' }}
                aria-hidden="true"
              >
                &#x201C;
              </span>
              <p className="text-[15px] text-navy leading-[1.72] mb-[22px] font-medium italic">{t.text}</p>
              <div className="flex items-center gap-3">
                <Image
                  src={t.avatarSrc}
                  alt={t.name}
                  width={42}
                  height={42}
                  className="w-[42px] h-[42px] rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <div className="text-[13px] font-bold text-navy mb-0.5">{t.name}</div>
                  <div className="text-[12px] text-gray-text font-medium">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
