export const FORM_SUBMIT_ACTION = 'https://api.web3forms.com/submit'

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

export async function submitFormToEmail(form, { subject, source }) {
  const formData = new FormData(form)

  if (String(formData.get('_honey') || '').trim()) {
    return { success: true }
  }

  if (!WEB3FORMS_ACCESS_KEY) {
    throw new Error('Web3Forms is not configured yet. Add VITE_WEB3FORMS_ACCESS_KEY to your environment variables.')
  }

  const payload = new FormData()
  payload.append('access_key', WEB3FORMS_ACCESS_KEY)
  payload.append('subject', subject)
  payload.append('from_name', 'DreamCare Website')
  payload.append('Form source', source)

  formData.forEach((value, key) => {
    const normalized = typeof value === 'string' ? value.trim() : value
    if (key.startsWith('_') || normalized === '') return
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

function labelize(key) {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/^./, (letter) => letter.toUpperCase())
}
