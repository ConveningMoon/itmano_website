import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'

export const metadata: Metadata = {
  title: 'Términos y condiciones',
  description: 'Términos y condiciones de uso de ITMANO.',
  robots: { index: false, follow: false },
}

export default function TerminosPage() {
  return (
    <section className="py-24 bg-white max-[600px]:py-16">
      <Container>
        <div className="max-w-[720px]">
          <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-purple mb-4">Legal</div>
          <h1 className="font-bold text-navy leading-[1.2] tracking-[-0.01em] mb-8" style={{ fontSize: 'clamp(26px, 3vw, 36px)' }}>
            Términos y condiciones
          </h1>
          <div className="prose-itmano space-y-6">
            <p>
              El acceso y uso de este sitio web implica la aceptación de los presentes términos y condiciones de uso. Si no estás de acuerdo, te pedimos que no utilices este sitio.
            </p>
            <h2>Propiedad intelectual</h2>
            <p>
              Todos los contenidos de este sitio web — textos, imágenes, marcas y materiales — son propiedad de <strong>ITMANO Technology Services</strong> o de sus licenciantes. Queda prohibida su reproducción sin autorización expresa.
            </p>
            <h2>Limitación de responsabilidad</h2>
            <p>
              ITMANO no garantiza la disponibilidad ininterrumpida del sitio ni la ausencia de errores. Los resultados mencionados son ejemplos reales pero no garantizan resultados equivalentes para otros usuarios.
            </p>
            <h2>Ley aplicable</h2>
            <p>
              Estos términos se rigen por la legislación española. Para cualquier disputa, las partes se someten a la jurisdicción de los tribunales de Madrid, España.
            </p>
            <h2>Contacto</h2>
            <p>
              Para cualquier consulta legal: <strong>legal@itmano.com</strong>
            </p>
            <p className="text-[13px] text-gray-text">Última actualización: abril 2026.</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
