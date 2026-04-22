import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/mdx'
import { Container } from '@/components/ui/Container'
import { NewsletterForm } from '@/components/forms/NewsletterForm'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Newsletter para profesionales inmobiliarios',
  description:
    'Estrategias de captación, filtrado y conversión para agentes y firmas que quieren escalar con sistema.',
}

export default async function NewsletterPage() {
  const posts = await getAllPosts()

  return (
    <>
      {/* Hero with subscribe */}
      <section className="py-20 bg-navy">
        <Container>
          <div className="max-w-[640px]">
            <div className="text-[11px] font-bold tracking-[0.14em] uppercase mb-4" style={{ color: 'rgba(94,175,223,0.9)' }}>
              Newsletter
            </div>
            <h1 className="font-bold text-white leading-[1.2] tracking-[-0.01em] mb-4" style={{ fontSize: 'clamp(28px, 3.2vw, 40px)' }}>
              Sistema, no atajos.<br />
              <span className="gradient-text">Cada semana.</span>
            </h1>
            <p className="text-[17px] leading-[1.7] mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Estrategias de captación, filtrado y conversión para agentes y firmas que quieren escalar con sistema.
            </p>
            <NewsletterForm />
          </div>
        </Container>
      </section>

      <hr className="h-[2px] border-none" style={{ background: 'var(--grad)' }} />

      {/* Articles */}
      <section className="py-24 bg-white max-[600px]:py-16">
        <Container>
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-text text-[15px]">El primer número llega pronto. Suscríbete para no perdértelo.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/newsletter/${post.slug}`}
                  className="group flex gap-6 p-6 bg-white rounded-xl border border-gray-mid no-underline transition-[transform,box-shadow] duration-[250ms] hover:-translate-y-0.5 max-[600px]:flex-col"
                  style={{ boxShadow: 'var(--shadow-card)' }}
                >
                  <div className="flex-shrink-0 w-[120px] max-[600px]:w-auto">
                    <time className="text-[12px] text-gray-text font-medium" dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </time>
                    <div className="mt-1 text-[11px] text-gray-text/70">{post.readingTime} min</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-[10px] font-bold tracking-[0.10em] uppercase text-purple px-2 py-0.5 rounded-full" style={{ background: 'rgba(141,78,202,0.10)' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-[18px] font-bold text-navy leading-[1.25] mb-2 group-hover:text-purple transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-[14px] text-gray-text leading-[1.7]">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  )
}
