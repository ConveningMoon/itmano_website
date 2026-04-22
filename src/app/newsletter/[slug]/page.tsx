import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getPostBySlug } from '@/lib/mdx'
import { Container } from '@/components/ui/Container'
import { NewsletterForm } from '@/components/forms/NewsletterForm'
import Link from 'next/link'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const data = await getPostBySlug(slug)
  if (!data) return {}
  return {
    title: data.frontmatter.title,
    description: data.frontmatter.excerpt,
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const data = await getPostBySlug(slug)
  if (!data) notFound()

  const { frontmatter, content } = data
  const dateFormatted = new Date(frontmatter.date).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <section className="py-24 bg-white max-[600px]:py-16">
      <Container>
        <div className="grid gap-12 max-[900px]:grid-cols-1" style={{ gridTemplateColumns: '1fr 320px' }}>
          {/* Article */}
          <article className="max-w-[720px]">
            {/* Back */}
            <Link href="/newsletter" className="inline-flex items-center gap-2 text-[12px] font-semibold text-gray-text no-underline mb-8 hover:text-navy transition-colors">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M12 7H2M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Newsletter
            </Link>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {frontmatter.tags.map((tag) => (
                <span key={tag} className="text-[10px] font-bold tracking-[0.10em] uppercase text-purple px-2 py-0.5 rounded-full" style={{ background: 'rgba(141,78,202,0.10)' }}>
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="font-bold text-navy leading-[1.15] tracking-[-0.01em] mb-4" style={{ fontSize: 'clamp(26px, 3vw, 40px)' }}>
              {frontmatter.title}
            </h1>

            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-mid">
              <time className="text-[13px] text-gray-text font-medium" dateTime={frontmatter.date}>{dateFormatted}</time>
              <span className="text-gray-mid">·</span>
              <span className="text-[13px] text-gray-text font-medium">{frontmatter.readingTime} min de lectura</span>
            </div>

            <div className="prose-itmano">
              <MDXRemote source={content} />
            </div>

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-gray-mid">
              <p className="text-[13px] font-bold text-navy mb-4 uppercase tracking-[0.08em]">Compartir</p>
              <div className="flex gap-3">
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=https://www.itmano.com/newsletter/${frontmatter.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg border border-gray-mid text-[12px] font-semibold text-gray-text no-underline hover:border-navy hover:text-navy transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=https://www.itmano.com/newsletter/${frontmatter.slug}&text=${encodeURIComponent(frontmatter.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg border border-gray-mid text-[12px] font-semibold text-gray-text no-underline hover:border-navy hover:text-navy transition-colors"
                >
                  X / Twitter
                </a>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6 max-[900px]:order-first">
            {/* Newsletter CTA */}
            <div className="rounded-xl p-6 bg-navy">
              <div className="text-[11px] font-bold tracking-[0.14em] uppercase mb-3" style={{ color: 'rgba(94,175,223,0.9)' }}>Newsletter</div>
              <p className="text-[15px] text-white font-semibold leading-[1.4] mb-4">Recibe estrategias cada semana. Gratis.</p>
              <NewsletterForm />
            </div>

            {/* Strategic session CTA */}
            <div className="rounded-xl p-6 border border-gray-mid" style={{ boxShadow: 'var(--shadow-card)' }}>
              <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-purple mb-3">Sesión estratégica</div>
              <p className="text-[14px] text-navy font-semibold leading-[1.4] mb-4">30 minutos que pueden cambiar tu negocio.</p>
              <a
                href="/#cta"
                className="flex items-center justify-center w-full py-3 rounded-lg text-white font-bold text-[12px] tracking-[0.08em] uppercase"
                style={{ background: 'var(--grad)', boxShadow: 'var(--shadow-btn)' }}
              >
                Agendar gratis
              </a>
            </div>

            {/* Lead magnet */}
            <div className="rounded-xl p-6 border border-gray-mid bg-gray-light">
              <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-purple mb-3">Recurso gratuito</div>
              <p className="text-[14px] text-navy font-semibold leading-[1.4] mb-4">131.989€ en 10 meses sin publicidad — el sistema exacto.</p>
              <a
                href="/recursos/prospeccion-avanzada"
                className="inline-flex items-center gap-1 text-[12px] font-bold text-purple no-underline hover:underline"
              >
                Descargar gratis →
              </a>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  )
}
