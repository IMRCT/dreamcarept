const RECIPIENTS = ['dreamcarept@gmail.com', 'imrctsite@gmail.com']

export default async function handler(req, res) {
  setCorsHeaders(res)

  if (req.method === 'OPTIONS') {
    sendJson(res, 204, {})
    return
  }

  if (req.method !== 'POST') {
    sendJson(res, 405, { error: 'Method not allowed.' })
    return
  }

  try {
    const body = await readJsonBody(req)
    const fields = body?.fields && typeof body.fields === 'object' ? body.fields : null

    if (!fields) {
      sendJson(res, 400, { error: 'Missing form fields.' })
      return
    }

    const payload = {
      ...fields,
      _subject: body.subject || 'New DreamCare website submission',
      _template: 'table',
      _captcha: 'false',
      'Form source': body.source || 'Website form',
      'Submitted at': new Date().toISOString(),
    }

    const results = await Promise.allSettled(
      RECIPIENTS.map((email) => submitToFormSubmit(email, payload)),
    )
    const sent = results.filter((result) => result.status === 'fulfilled')
    const failed = results.filter((result) => result.status === 'rejected')

    if (sent.length > 0) {
      sendJson(res, 200, { success: true, sent: sent.length, failed: failed.length })
      return
    }

    const message = failed[0]?.reason?.message || 'The message could not be sent.'
    sendJson(res, 502, { error: message })
  } catch (error) {
    sendJson(res, 500, { error: error?.message || 'The message could not be sent.' })
  }
}

async function submitToFormSubmit(email, payload) {
  const response = await fetch(`https://formsubmit.co/ajax/${email}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const data = await readResponseJson(response)

  if (!response.ok) {
    throw new Error(data?.message || data?.error || 'The message could not be sent.')
  }

  return data
}

async function readJsonBody(req) {
  if (req.body && typeof req.body === 'object') return req.body
  if (typeof req.body === 'string') return JSON.parse(req.body || '{}')

  let raw = ''
  for await (const chunk of req) {
    raw += chunk
  }

  return raw ? JSON.parse(raw) : {}
}

async function readResponseJson(response) {
  try {
    return await response.json()
  } catch {
    return null
  }
}

function setCorsHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept')
}

function sendJson(res, statusCode, body) {
  res.statusCode = statusCode
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(body))
}
