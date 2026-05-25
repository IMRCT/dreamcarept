import { BRAND } from '../data/site'

export const FORM_SUBMIT_ACTION = '/api/send-form'

export async function submitFormToEmail(form, { subject, source }) {
  const formData = new FormData(form)

  if (String(formData.get('_honey') || '').trim()) {
    return { success: true }
  }

  const fields = {}
  formData.forEach((value, key) => {
    const normalized = typeof value === 'string' ? value.trim() : value
    if (key.startsWith('_') || normalized === '') return
    fields[key] = normalized
  })

  const response = await fetch('/api/send-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      subject,
      source,
      fields,
    }),
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
