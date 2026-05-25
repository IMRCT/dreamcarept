/* global process */
import nodemailer from 'nodemailer'

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
    const body = await readRequestBody(req)
    const fields = body?.fields && typeof body.fields === 'object' ? body.fields : body
    const subject = body?.subject || fields?._subject || 'New DreamCare website submission'
    const source = body?.source || fields?.source || 'Website form'

    if (!fields || typeof fields !== 'object') {
      sendJson(res, 400, { error: 'Missing form fields.' })
      return
    }

    const cleanFields = sanitizeFields(fields)
    const sentAt = new Date().toLocaleString('en-US', {
      timeZone: 'America/Los_Angeles',
      dateStyle: 'medium',
      timeStyle: 'short',
    })
    const payload = {
      ...cleanFields,
      'Form source': source,
      'Submitted at': `${sentAt} Pacific Time`,
    }

    const transporter = createTransporter()
    const messages = RECIPIENTS.map((recipient) => (
      transporter.sendMail({
        from: `"DreamCare Website" <${process.env.FORM_FROM_EMAIL || process.env.SMTP_USER}>`,
        to: recipient,
        replyTo: cleanFields.email || cleanFields.Email || undefined,
        subject,
        text: formatTextEmail(payload),
        html: formatHtmlEmail(payload),
      })
    ))

    const results = await Promise.allSettled(messages)
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

function createTransporter() {
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!user || !pass) {
    throw new Error('Email is not configured yet. Add SMTP_USER and SMTP_PASS environment variables.')
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT || 465),
    secure: process.env.SMTP_SECURE !== 'false',
    auth: { user, pass },
  })
}

function sanitizeFields(fields) {
  return Object.entries(fields).reduce((clean, [key, value]) => {
    if (!key || key.startsWith('_') || key === 'source') return clean
    const normalized = typeof value === 'string' ? value.trim() : value
    if (normalized === '') return clean
    clean[labelize(key)] = normalized
    return clean
  }, {})
}

function labelize(key) {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/^./, (letter) => letter.toUpperCase())
}

function formatTextEmail(fields) {
  return Object.entries(fields)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n')
}

function formatHtmlEmail(fields) {
  const rows = Object.entries(fields)
    .map(([key, value]) => `
      <tr>
        <th style="text-align:left;padding:10px 12px;border-bottom:1px solid #dee6f7;background:#f7f9ff;color:#102144;">${escapeHtml(key)}</th>
        <td style="padding:10px 12px;border-bottom:1px solid #dee6f7;color:#202b4a;">${escapeHtml(String(value)).replace(/\n/g, '<br>')}</td>
      </tr>
    `)
    .join('')

  return `
    <div style="font-family:Arial,sans-serif;color:#202b4a;">
      <h2 style="color:#102144;margin:0 0 16px;">DreamCare Website Submission</h2>
      <table style="border-collapse:collapse;width:100%;max-width:720px;border:1px solid #dee6f7;">
        ${rows}
      </table>
    </div>
  `
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

async function readRequestBody(req) {
  if (req.body && typeof req.body === 'object') return req.body
  if (typeof req.body === 'string') return parseBody(req.body, req.headers['content-type'])

  let raw = ''
  for await (const chunk of req) {
    raw += chunk
  }

  return parseBody(raw, req.headers['content-type'])
}

function parseBody(raw, contentType = '') {
  if (!raw) return {}
  if (contentType.includes('application/x-www-form-urlencoded')) {
    return Object.fromEntries(new URLSearchParams(raw))
  }
  return JSON.parse(raw)
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
