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

  const results = await Promise.allSettled(
    FORM_SUBMIT_RECIPIENTS.map((email) => submitToRecipient(email, payload)),
  )

  const sent = results.filter((result) => result.status === 'fulfilled')
  const failed = results.filter((result) => result.status === 'rejected')

  if (sent.length > 0) {
    return { success: true, sent: sent.length, failed: failed.length }
  }

  const firstError = failed[0]?.reason
  throw new Error(firstError?.message || 'The message could not be sent.')
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
    const message = data?.message || data?.error || 'The message could not be sent.'
    throw new Error(message)
  }

  return data
}
