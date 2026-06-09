export const FORM_SUBMIT_ACTION = 'https://api.web3forms.com/submit'
export const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '7ff350b4-b9bf-4d90-a7d6-7e5e5a2e6068'
export const FORM_RECIPIENT_EMAIL = 'referrals@dreamcarept.com'

export async function submitFormToEmail(form, { subject, source }) {
  const formData = new FormData(form)

  if (String(formData.get('_honey') || '').trim() || formData.get('botcheck')) {
    return { success: true }
  }

  const payload = new FormData()
  const replyTo = getReplyTo(formData)

  payload.append('access_key', WEB3FORMS_ACCESS_KEY)
  payload.append('subject', subject)
  payload.append('from_name', 'DreamCare PT Website')
  payload.append('Form source', source)
  payload.append('Send to', FORM_RECIPIENT_EMAIL)
  payload.append('Submitted at', new Date().toLocaleString())

  if (replyTo) {
    payload.append('email', replyTo)
    payload.append('replyto', replyTo)
  }

  formData.forEach((value, key) => {
    if (isReservedField(key)) return

    if (value instanceof File) {
      if (value.size === 0) return
      payload.append('attachment', value, value.name)
      payload.append(labelize(key), value.name)
      return
    }

    const normalized = typeof value === 'string' ? value.trim() : value
    if (normalized === '') return
    payload.append(labelize(key), normalized)
  })

  const response = await fetch(FORM_SUBMIT_ACTION, {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body: payload,
  })

  let data = null
  try {
    data = await response.json()
  } catch {
    data = null
  }

  if (!response.ok) {
    throw new Error(data?.error || data?.message || 'The message could not be sent.')
  }

  return data
}

function getReplyTo(formData) {
  const fields = ['email', 'providerEmail', 'patientEmail']

  for (const field of fields) {
    const value = String(formData.get(field) || '').trim()
    if (value) return value
  }

  return ''
}

function isReservedField(key) {
  return key.startsWith('_')
    || key === 'access_key'
    || key === 'subject'
    || key === 'from_name'
    || key === 'botcheck'
}

function labelize(key) {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/^./, (letter) => letter.toUpperCase())
}
