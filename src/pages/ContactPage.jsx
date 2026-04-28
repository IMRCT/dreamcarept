import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import { BRAND } from '../data/site'

export default function ContactPage() {
  return (
    <>
      <section className="inner-hero">
        <div className="shell shell--wide">
          <Reveal className="inner-hero__grid">
            <div>
              <p className="eyebrow">Contact DreamCare</p>
              <h1 className="h1">Talk to a doctor of physical therapy — <em>directly</em>.</h1>
              <p className="lead" style={{ marginTop: '1.4rem' }}>
                Questions about your symptoms, insurance or whether PT is the right fit?
                Reach out and we'll get back to you the same business day.
              </p>
            </div>
            <div className="inner-hero__art">
              <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                <defs><linearGradient id="cgrad" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#DCC6EE" /><stop offset="1" stopColor="#F5DDF0" /></linearGradient></defs>
                <rect width="400" height="320" fill="url(#cgrad)" />
                <g stroke="#8B2FB7" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="100" y="80" width="200" height="160" rx="20" fill="#FFFFFF" />
                  <path d="M100 100 L200 170 L300 100" />
                  <circle cx="320" cy="80" r="12" fill="#E04E8B" stroke="none" />
                </g>
              </svg>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell shell--wide">
          <div className="contact-grid">
            <Reveal className="contact-info">
              <p className="eyebrow">Reach us</p>
              <h3 className="h3">DreamCare PT, Sport and Wellness</h3>
              <p className="lead">{BRAND.address}, {BRAND.city}</p>

              <div className="contact-row">
                <div className="ico"><Icon name="phone" size={18} /></div>
                <div>
                  <strong>Call or text</strong>
                  <span><a href={`tel:${BRAND.phoneRaw}`} style={{ color: 'inherit' }}>{BRAND.phone}</a></span>
                </div>
              </div>
              <div className="contact-row">
                <div className="ico"><Icon name="mail" size={18} /></div>
                <div>
                  <strong>Email</strong>
                  <span><a href={`mailto:${BRAND.email}`} style={{ color: 'inherit' }}>{BRAND.email}</a></span>
                </div>
              </div>
              <div className="contact-row">
                <div className="ico"><Icon name="pin" size={18} /></div>
                <div>
                  <strong>Studio</strong>
                  <span>{BRAND.address}<br />{BRAND.city}</span>
                </div>
              </div>
              <div className="contact-row">
                <div className="ico"><Icon name="clock" size={18} /></div>
                <div>
                  <strong>Hours</strong>
                  {BRAND.hours.map((h) => (
                    <span key={h.day}>{h.day} — {h.time}</span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <form className="form-card" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <p className="eyebrow">Send a message</p>
                  <h3 className="h3">We respond within one business day.</h3>
                </div>
                <div className="form-grid">
                  <label>Full name<input type="text" placeholder="Jordan Parker" /></label>
                  <label>Email<input type="email" placeholder="jordan@example.com" /></label>
                  <label>Phone<input type="tel" placeholder="(555) 123-4567" /></label>
                  <label>Topic
                    <select defaultValue="General">
                      <option>General inquiry</option>
                      <option>Book an appointment</option>
                      <option>Insurance & coverage</option>
                      <option>Vestibular / concussion</option>
                      <option>Sport rehab</option>
                      <option>Post-surgical care</option>
                    </select>
                  </label>
                  <label className="form-grid--full">Message
                    <textarea rows="6" placeholder="Tell us about your symptoms, goals or insurance situation." />
                  </label>
                </div>
                <button type="submit" className="btn btn--primary" style={{ alignSelf: 'flex-start' }}>
                  Send message
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--mint">
        <div className="shell shell--wide" style={{ textAlign: 'center' }}>
          <Reveal>
            <p className="eyebrow" style={{ justifyContent: 'center' }}>Service areas</p>
            <h2 className="h2" style={{ marginBottom: '2rem' }}>Patients come to us from <em>across LA</em>.</h2>
            <div className="locations">
              {BRAND.serviceAreas.map((a) => (
                <span key={a} className="location-pill">
                  <Icon name="pin" size={14} /> {a}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
