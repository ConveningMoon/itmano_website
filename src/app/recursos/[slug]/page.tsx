import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllResources, getResourceBySlug } from '@/lib/mdx'
import { Container } from '@/components/ui/Container'
import { LeadMagnetForm } from '@/components/forms/LeadMagnetForm'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const resources = await getAllResources()
  return resources.map((r) => ({ slug: r.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const data = await getResourceBySlug(slug)
  if (!data) return {}
  return {
    title: data.frontmatter.title,
    description: data.frontmatter.description,
  }
}

export default async function RecursoPage({ params }: Props) {
  const { slug } = await params
  const data = await getResourceBySlug(slug)
  if (!data) notFound()

  const { frontmatter, content } = data

  return (
    <>
      {/* Minimal header bar */}
      <div className="h-1 w-full" style={{ background: 'var(--grad)' }} aria-hidden="true" />

      <section className="py-24 bg-white max-[600px]:py-16">
        <Container>
          <div className="grid gap-20 items-start max-[900px]:grid-cols-1 max-[900px]:gap-12" style={{ gridTemplateColumns: '1fr 1fr' }}>
            {/* Left: content */}
            <div>
              <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-purple mb-3">Recurso gratuito</div>
              <h1 className="font-bold text-navy leading-[1.2] tracking-[-0.01em] mb-4" style={{ fontSize: 'clamp(24px, 2.8vw, 36px)' }}>
                {frontmatter.title}
              </h1>
              <p className="text-[16px] text-gray-text leading-[1.7] mb-8">{frontmatter.description}</p>
              <div className="prose-itmano">
                <MDXRemote source={content} />
              </div>
            </div>

            {/* Right: form */}
            <div className="sticky top-24">
              <div className="rounded-xl border border-gray-mid p-8" style={{ boxShadow: 'var(--shadow-card-lg)' }}>
                <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-purple mb-3">Descarga gratuita</div>
                <h2 className="text-[22px] font-bold text-navy leading-[1.2] mb-3">{frontmatter.title}</h2>
                <p className="text-[14px] text-gray-text leading-[1.7] mb-6">
                  Completa el formulario y recíbelo en tu bandeja de entrada.
                </p>
                <LeadMagnetForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
