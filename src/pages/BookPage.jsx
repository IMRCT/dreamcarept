import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import { BRAND, SERVICES } from '../data/site'

export default function BookPage() {
  return (
    <>
      <section className="inner-hero">
        <div className="shell shell--wide">
          <Reveal className="inner-hero__grid">
            <div>
              <p className="eyebrow">Book an Appointment</p>
              <h1 className="h1">A 45-minute eval with a <em>Doctor of PT</em> — book online.</h1>
              <p className="lead" style={{ marginTop: '1.4rem' }}>
                Tell us a little about your goals and we'll confirm a time within one
                business day. New clients usually start with a comprehensive evaluation
                so we can build the right plan from day one.
              </p>
              <div className="btn-row">
                <a href={`tel:${BRAND.phoneRaw}`} className="btn btn--ghost">
                  <Icon name="phone" size={16} /> Call {BRAND.phone}
                </a>
              </div>
            </div>
            <div className="inner-hero__art">
              <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                <defs><linearGradient id="bgrad" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#FBE7B8" /><stop offset="1" stopColor="#DCC6EE" /></linearGradient></defs>
                <rect width="400" height="320" fill="url(#bgrad)" />
                <g stroke="#8B2FB7" strokeWidth="3" fill="none" strokeLinecap="round">
                  <rect x="80" y="60" width="240" height="200" rx="20" fill="#FFFFFF" />
                  <path d="M80 100 L320 100" />
                  <path d="M120 80 L120 60 M180 80 L180 60 M240 80 L240 60 M280 80 L280 60" />
                  <rect x="120" y="130" width="40" height="30" rx="6" fill="#E04E8B" stroke="none" />
                  <rect x="180" y="130" width="40" height="30" rx="6" fill="#DCC6EE" />
                  <rect x="240" y="130" width="40" height="30" rx="6" fill="#FBE7B8" stroke="none" />
                  <rect x="120" y="180" width="40" height="30" rx="6" fill="#DCC6EE" />
                  <rect x="180" y="180" width="40" height="30" rx="6" fill="#FFFFFF" />
                  <rect x="240" y="180" width="40" height="30" rx="6" fill="#A24BCC" stroke="none" />
                </g>
              </svg>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="contact-grid">
            <Reveal>
              <form className="form-card" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <p className="eyebrow">Booking request</p>
                  <h2 className="h2" style={{ fontSize: '1.6rem' }}>Tell us about your visit.</h2>
                </div>
                <div className="form-grid">
                  <label>Full name<input type="text" placeholder="Jordan Parker" /></label>
                  <label>Date of birth<input type="date" /></label>
                  <label>Email<input type="email" placeholder="jordan@example.com" /></label>
                  <label>Phone<input type="tel" placeholder="(555) 123-4567" /></label>
                  <label>Visit type
                    <select defaultValue="Comprehensive Evaluation">
                      {SERVICES.map((s) => <option key={s.title}>{s.title}</option>)}
                    </select>
                  </label>
                  <label>Visit format
                    <select defaultValue="In-clinic">
                      <option>In-clinic (Sherman Oaks)</option>
                      <option>Telehealth</option>
                    </select>
                  </label>
                  <label className="form-grid--full">Preferred days / times
                    <input type="text" placeholder="e.g. weekday mornings, Saturdays after 10am" />
                  </label>
                  <label className="form-grid--full">What is bringing you in?
                    <textarea rows="5" placeholder="Brief summary of symptoms, goals, prior treatment or recent surgery." />
                  </label>
                  <label className="form-grid--full">Insurance (optional)
                    <input type="text" placeholder="Carrier and plan, if you'd like us to verify coverage" />
                  </label>
                </div>
                <button type="submit" className="btn btn--primary" style={{ alignSelf: 'flex-start' }}>
                  Request appointment
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
                  <span>direct care with a Doctor of PT — no hand-offs</span>
                </div>
              </div>
              <div className="contact-row">
                <div className="ico"><Icon name="check" size={18} /></div>
                <div>
                  <strong>No referral required</strong>
                  <span>for many plans — call first to confirm</span>
                </div>
              </div>
              <div className="contact-row">
                <div className="ico"><Icon name="pin" size={18} /></div>
                <div>
                  <strong>Sherman Oaks studio</strong>
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
              <h2 className="h2">Call us — we pick <em>up the phone</em>.</h2>
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
