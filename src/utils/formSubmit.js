export const FORM_SUBMIT_ACTION = '/api/send-form'

export async function submitFormToEmail(form, { subject, source }) {
  const formData = new FormData(form)

  if (String(formData.get('_honey') || '').trim()) {
    return { success: true }
  }

  const payload = new FormData()
  payload.append('subject', subject)
  payload.append('source', source)

  formData.forEach((value, key) => {
    const normalized = typeof value === 'string' ? value.trim() : value
    if (key.startsWith('_') || normalized === '') return
    if (value instanceof File && value.size === 0) return
    payload.append(key, normalized)
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
