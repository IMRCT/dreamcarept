import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import { BRAND, SERVICES } from '../data/site'
import { FORM_SUBMIT_ACTION, submitFormToEmail } from '../utils/formSubmit'

export default function BookPage() {
  const [submission, setSubmission] = useState({ status: 'idle', message: '' })

  async function handleBookingSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    setSubmission({ status: 'loading', message: 'Sending your appointment request...' })

    try {
      await submitFormToEmail(form, {
        subject: 'New DreamCare appointment request',
        source: 'Book appointment page form',
      })
      form.reset()
      setSubmission({
        status: 'success',
        message: 'Thank you. Your appointment request has been sent to DreamCare.',
      })
    } catch (error) {
      setSubmission({
        status: 'error',
        message: error?.message || 'Sorry, the request could not be sent. Please call or email DreamCare directly.',
      })
    }
  }

  return (
    <>
      <section className="book-hero">
        <div className="shell shell--wide book-hero__layout">
          <Reveal className="book-hero__content">
            <p className="eyebrow book-hero__eyebrow">
              <Icon name="plus" size={16} /> Book an Appointment
            </p>
            <h1 className="h1 book-hero__title">Book a 45-minute eval with a <em>Doctor of PT</em>.</h1>
            <p className="lead book-hero__lead">
              Tell us a little about your goals and we'll confirm a time within one
              business day. New clients usually start with a comprehensive evaluation
              so we can build the right plan from day one.
            </p>
            <div className="book-hero__actions">
              <a href="#booking-request" className="btn btn--primary book-hero__primary">
                <Icon name="calendar" size={18} />
                <span>Schedule Your Appointment</span>
                <Icon name="arrow" size={18} />
              </a>
              <a href={`tel:${BRAND.phoneRaw}`} className="btn btn--ghost book-hero__phone">
                <Icon name="phone" size={18} />
                <span>Call Us: {BRAND.phone.replace('+1 ', '')}</span>
              </a>
            </div>
          </Reveal>
          <div className="book-hero__media" aria-hidden="true">
            <img src="/images/book-appointment-hero.jpeg" alt="" />
          </div>
        </div>
      </section>

      <section className="section" id="booking-request">
        <div className="shell">
          <div className="contact-grid">
            <Reveal>
              <form className="form-card" action={FORM_SUBMIT_ACTION} method="POST" onSubmit={handleBookingSubmit}>
                <input type="hidden" name="_subject" value="New DreamCare appointment request" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input className="form-honey" type="text" name="_honey" tabIndex="-1" autoComplete="off" aria-hidden="true" />
                <div>
                  <p className="eyebrow">Booking request</p>
                  <h2 className="h2" style={{ fontSize: '1.6rem' }}>Tell us about your visit.</h2>
                </div>
                <div className="form-grid">
                  <label>Full name<input name="name" type="text" placeholder="Jordan Parker" required /></label>
                  <label>Date of birth<input name="dateOfBirth" type="date" /></label>
                  <label>Email<input name="email" type="email" placeholder="jordan@example.com" required /></label>
                  <label>Phone<input name="phone" type="tel" placeholder="(555) 123-4567" required /></label>
                  <label>Visit type
                    <select name="visitType" defaultValue="Comprehensive Evaluation">
                      {SERVICES.map((s) => <option key={s.title}>{s.title}</option>)}
                    </select>
                  </label>
                  <label>Visit format
                    <select name="visitFormat" defaultValue="In-clinic">
                      <option>In-clinic (Los Angeles)</option>
                      <option>Telehealth</option>
                    </select>
                  </label>
                  <label className="form-grid--full">Preferred days / times
                    <input name="preferredDaysTimes" type="text" placeholder="e.g. weekday mornings, Saturdays after 10am" />
                  </label>
                  <label className="form-grid--full">What is bringing you in?
                    <textarea name="visitReason" rows="5" placeholder="Brief summary of symptoms, goals, prior treatment or recent surgery." required />
                  </label>
                  <label className="form-grid--full">Insurance (optional)
                    <input name="insurance" type="text" placeholder="Carrier and plan, if you'd like us to verify coverage" />
                  </label>
                </div>
                {submission.message && (
                  <p
                    className={`form-status form-status--${submission.status}`}
                    role={submission.status === 'error' ? 'alert' : 'status'}
                    aria-live="polite"
                  >
                    {submission.message}
                  </p>
                )}
                <button type="submit" className="btn btn--primary" style={{ alignSelf: 'flex-start' }} disabled={submission.status === 'loading'}>
                  {submission.status === 'loading' ? 'Sending...' : 'Request appointment'}
                </button>
              </form>
            </Reveal>

            <Reveal delay={1} className="contact-info">
              <p className="eyebrow">What to expect</p>
              <h3 className="h3">A clear, focused first visit.</h3>
              <p className="lead">
                45 minutes one-on-one with Dr. Ashkani. Movement screen, history,
                hands-on assessment and a treatment plan you walk out with.
              </p>

              <div className="contact-row">
                <div className="ico"><Icon name="clock" size={18} /></div>
                <div>
                  <strong>45 minutes</strong>
                  <span>standard new-client evaluation</span>
                </div>
              </div>
              <div className="contact-row">
                <div className="ico"><Icon name="user" size={18} /></div>
                <div>
                  <strong>One-on-one</strong>
                  <span>direct care with a Doctor of PT, no hand-offs</span>
                </div>
              </div>
              <div className="contact-row">
                <div className="ico"><Icon name="check" size={18} /></div>
                <div>
                  <strong>No referral required</strong>
                  <span>for many plans, call first to confirm</span>
                </div>
              </div>
              <div className="contact-row">
                <div className="ico"><Icon name="pin" size={18} /></div>
                <div>
                  <strong>Clinic address</strong>
                  <span>{BRAND.address}, {BRAND.city}</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell shell--wide">
          <Reveal className="cta-banner">
            <div>
              <p className="eyebrow">Prefer to talk first?</p>
              <h2 className="h2">Call us. We pick <em>up the phone</em>.</h2>
              <p>Most callers reach a person, not a queue. We'll answer questions and help you pick the right starting visit.</p>
              <div className="btn-row">
                <a href={`tel:${BRAND.phoneRaw}`} className="btn btn--primary">
                  <Icon name="phone" size={16} /> {BRAND.phone}
                </a>
                <Link to="/contact" className="btn btn--cream">Send a message</Link>
              </div>
            </div>
            <div className="cta-banner__art">
              <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
                <circle cx="120" cy="120" r="100" fill="#F5C56A" />
                <path d="M85 95 q0 -25 25 -25 l15 0 l10 30 l-15 10 q15 30 35 40 l10 -15 l30 10 l0 15 q0 25 -25 25 q-90 0 -85 -90 z" fill="#8B2FB7" />
              </svg>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
