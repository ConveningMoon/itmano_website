const HUBSPOT_PORTAL_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID ?? 'TU_PORTAL_ID'
const HUBSPOT_FORM_GUID_LM = process.env.NEXT_PUBLIC_HUBSPOT_FORM_LM ?? 'TU_FORM_ID_LEAD_MAGNET'
const HUBSPOT_FORM_GUID_NL = process.env.NEXT_PUBLIC_HUBSPOT_FORM_NL ?? 'TU_FORM_ID_NEWSLETTER'

export const HUBSPOT_FORMS = {
  leadMagnet: HUBSPOT_FORM_GUID_LM,
  newsletter: HUBSPOT_FORM_GUID_NL,
}

export type HubSpotSubmitResult = {
  ok: boolean
  error?: string
}

export async function submitToHubSpotDetailed(
  formGuid: string,
  fields: Record<string, string>,
): Promise<HubSpotSubmitResult> {
  try {
    const response = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${formGuid}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fields: Object.entries(fields).map(([name, value]) => ({ name, value })),
        }),
      },
    )

    if (response.ok) {
      return { ok: true }
    }

    let errorMessage = `Error ${response.status}: no se pudo enviar el formulario.`
    try {
      const payload = await response.json()
      if (typeof payload?.errors?.[0]?.message === 'string') {
        errorMessage = payload.errors[0].message
      } else if (typeof payload?.message === 'string') {
        errorMessage = payload.message
      }
    } catch {
      // Keep default message when response is not JSON.
    }

    return { ok: false, error: errorMessage }
  } catch {
    return { ok: false, error: 'Error de red: no se pudo conectar con HubSpot.' }
  }
}

export async function submitToHubSpot(
  formGuid: string,
  fields: Record<string, string>,
): Promise<boolean> {
  const result = await submitToHubSpotDetailed(formGuid, fields)
  return result.ok
}
