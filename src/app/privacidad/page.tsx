import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'

export const metadata: Metadata = {
  title: 'Política de privacidad',
  description: 'Política de privacidad de ITMANO Technology Services.',
  robots: { index: false, follow: false },
}

export default function PrivacidadPage() {
  return (
    <section className="py-24 bg-white max-[600px]:py-16">
      <Container>
        <div className="max-w-[720px]">
          <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-purple mb-4">Legal</div>
          <h1 className="font-bold text-navy leading-[1.2] tracking-[-0.01em] mb-8" style={{ fontSize: 'clamp(26px, 3vw, 36px)' }}>
            Política de privacidad
          </h1>
          <div className="prose-itmano space-y-6">
            <p>
              <strong>ITMANO Technology Services</strong> es responsable del tratamiento de los datos personales que nos proporciones a través de este sitio web.
            </p>
            <h2>Datos que recopilamos</h2>
            <p>
              Recopilamos únicamente los datos que tú nos facilitas voluntariamente: nombre, dirección de correo electrónico y rol profesional, a través de nuestros formularios de contacto y suscripción.
            </p>
            <h2>Finalidad del tratamiento</h2>
            <p>
              Tus datos se utilizan para enviarte el recurso gratuito solicitado, para comunicaciones comerciales relacionadas con nuestros servicios y para el envío de la newsletter si te suscribes.
            </p>
            <h2>Base legal</h2>
            <p>
              El tratamiento de tus datos se basa en el consentimiento que nos otorgas al completar los formularios de este sitio.
            </p>
            <h2>Tus derechos</h2>
            <p>
              Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad enviando un email a <strong>privacidad@itmano.com</strong>.
            </p>
            <h2>Conservación</h2>
            <p>
              Conservamos tus datos mientras mantengas una relación activa con nosotros o hasta que solicites su eliminación.
            </p>
            <p className="text-[13px] text-gray-text">Última actualización: abril 2026.</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
