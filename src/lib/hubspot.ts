const HUBSPOT_PORTAL_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID ?? 'TU_PORTAL_ID'
const HUBSPOT_FORM_GUID_LM = process.env.NEXT_PUBLIC_HUBSPOT_FORM_LM ?? 'TU_FORM_ID_LEAD_MAGNET'
const HUBSPOT_FORM_GUID_NL = process.env.NEXT_PUBLIC_HUBSPOT_FORM_NL ?? 'TU_FORM_ID_NEWSLETTER'

export const HUBSPOT_FORMS = {
  leadMagnet: HUBSPOT_FORM_GUID_LM,
  newsletter: HUBSPOT_FORM_GUID_NL,
}

export async function submitToHubSpot(
  formGuid: string,
  fields: Record<string, string>,
): Promise<boolean> {
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
    return response.ok
  } catch {
    return false
  }
}
