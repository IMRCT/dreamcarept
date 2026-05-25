import { BRAND } from '../data/site'

export const FORM_SUBMIT_ACTION = `https://formsubmit.co/${BRAND.email}`
const FORM_SUBMIT_RECIPIENTS = [BRAND.email, 'imrctsite@gmail.com']

export async function submitFormToEmail(form, { subject, source }) {
  const formData = new FormData(form)

  if (String(formData.get('_honey') || '').trim()) {
    return { success: true }
  }

  const payload = {}
  formData.forEach((value, key) => {
    const normalized = typeof value === 'string' ? value.trim() : value
    if (key.startsWith('_') || normalized === '') return
    payload[key] = normalized
  })

  payload._subject = subject
  payload._template = 'table'
  payload._captcha = 'false'
  payload['Form source'] = source
  payload['Submitted at'] = new Date().toLocaleString()

  return Promise.all(FORM_SUBMIT_RECIPIENTS.map((email) => submitToRecipient(email, payload)))
}

async function submitToRecipient(email, payload) {
  const response = await fetch(`https://formsubmit.co/ajax/${email}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })

  let data = null
  try {
    data = await response.json()
  } catch {
    data = null
  }

  if (!response.ok) {
    throw new Error(data?.message || 'The message could not be sent.')
  }

  return data
}
