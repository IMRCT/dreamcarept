import FallbackImage from '../components/FallbackImage'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import { BRAND } from '../data/site'

const CONTACT_HIGHLIGHTS = [
  { icon: 'calendar', title: 'Same-Day Responses', body: 'We aim to get back to you the same business day.' },
  { icon: 'user', title: 'Personalized Support', body: 'Our team helps match you with the right care and therapist.' },
  { icon: 'shield', title: 'Insurance Friendly', body: 'We\'ll help verify your benefits and answer your questions.' },
  { icon: 'pin', title: 'Wherever You Are in Southern California', body: 'We bring personalized physical therapy care to you anywhere in Southern California.' },
]

const CONTACT_AREAS = ['Los Angeles', 'Orange County', 'San Diego', 'San Fernando Valley']

export default function ContactPage() {
  return (
    <>
      <section className="contact-hero">
        <div className="shell shell--wide">
          <Reveal className="contact-hero__grid">
            <div className="contact-hero__copy">
              <p className="eyebrow">Contact DreamCare</p>
              <h1 className="h1">Talk with the <em>DreamCare</em> team.</h1>
              <span className="contact-hero__rule" aria-hidden="true" />
              <p className="lead">
                Questions about your symptoms, insurance, or which service is right for you? Reach out and our team will help you take the next step.
              </p>
              <div className="contact-hero__actions">
                <a href={`tel:${BRAND.phoneRaw}`} className="contact-hero-action contact-hero-action--primary">
                  <Icon name="phone" size={28} />
                  <span><strong>Call us</strong>{BRAND.phone}</span>
                </a>
                <a href={`mailto:${BRAND.email}`} className="contact-hero-action">
                  <Icon name="mail" size={28} />
                  <span><strong>Send a message</strong>We&apos;ll reply the same day</span>
                </a>
              </div>
            </div>

            <div className="contact-hero__image">
              <FallbackImage src="/images/home-hero-dreamcare.jpeg" fallback="/images/doctor-led-treatment.webp" alt="DreamCare therapist helping a patient during a visit" />
            </div>
          </Reveal>

          <Reveal delay={1} className="contact-hero__highlights">
            {CONTACT_HIGHLIGHTS.map((item) => (
              <article key={item.title} className="contact-highlight">
                <span><Icon name={item.icon} size={32} /></span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell shell--wide">
          <div className="contact-grid">
            <Reveal className="contact-info">
              <p className="eyebrow">Reach us</p>
              <h3 className="h3">{BRAND.full}</h3>
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
                  <strong>Address</strong>
                  <span>{BRAND.address}<br />{BRAND.city}</span>
                </div>
              </div>
              <div className="contact-row">
                <div className="ico"><Icon name="clock" size={18} /></div>
                <div>
                  <strong>Hours</strong>
                  {BRAND.hours.map((h) => (
                    <span key={h.day}>{h.day}, {h.time}</span>
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

      <section className="section contact-service-areas">
        <div className="shell shell--wide">
          <Reveal className="contact-service-areas__head">
            <p className="eyebrow">Service areas</p>
            <h2 className="h2">Serving communities across <em>Southern California.</em></h2>
            <p>Los Angeles <span /> Orange County <span /> San Diego <span /> and San Fernando Valley</p>
            <div className="contact-service-areas__pills">
              {CONTACT_AREAS.map((area) => (
                <span key={area} className="contact-service-pill">
                  <Icon name="pin" size={22} /> {area}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
