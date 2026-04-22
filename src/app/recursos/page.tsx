import type { Metadata } from 'next'
import { getAllResources } from '@/lib/mdx'
import { Container } from '@/components/ui/Container'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Recursos gratuitos para agentes inmobiliarios',
  description:
    'Guías, plantillas y sistemas de prospección para profesionales inmobiliarios que quieren escalar con método.',
}

export default async function RecursosPage() {
  const resources = await getAllResources()

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-navy text-center">
        <Container>
          <div className="text-[11px] font-bold tracking-[0.14em] uppercase mb-4" style={{ color: 'rgba(94,175,223,0.9)' }}>
            Recursos gratuitos
          </div>
          <h1 className="font-bold text-white leading-[1.2] tracking-[-0.01em] mb-4" style={{ fontSize: 'clamp(28px, 3.2vw, 40px)' }}>
            Sistemas y plantillas para escalar<br />
            <span className="gradient-text">con método</span>
          </h1>
          <p className="text-[17px] leading-[1.7] max-w-[500px] mx-auto" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Todo lo que necesitas para empezar a construir tu infraestructura de captación. Sin compromiso.
          </p>
        </Container>
      </section>

      <hr className="h-[2px] border-none" style={{ background: 'var(--grad)' }} />

      {/* Resources grid */}
      <section className="py-24 bg-white max-[600px]:py-16">
        <Container>
          {resources.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-text text-[15px]">Próximamente. Vuelve en breve.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-6 max-[900px]:grid-cols-1">
              {resources.map((r) => (
                <Link
                  key={r.slug}
                  href={`/recursos/${r.slug}`}
                  className="group block bg-white rounded-xl border border-gray-mid p-8 no-underline transition-[transform,box-shadow] duration-[250ms] hover:-translate-y-0.5"
                  style={{ boxShadow: 'var(--shadow-card)' }}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <span
                      className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.10em] uppercase text-purple"
                      style={{ background: 'rgba(141,78,202,0.10)' }}
                    >
                      {r.format}
                    </span>
                  </div>
                  <h2 className="text-[20px] font-bold text-navy leading-[1.25] mb-3 group-hover:text-purple transition-colors">
                    {r.title}
                  </h2>
                  <p className="text-[14px] text-gray-text leading-[1.7] mb-6">{r.description}</p>
                  <span
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-bold text-[12px] tracking-[0.08em] uppercase"
                    style={{ background: 'var(--grad)', boxShadow: 'var(--shadow-btn)' }}
                  >
                    Descargar gratis
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  )
}
