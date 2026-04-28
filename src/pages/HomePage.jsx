import { Link } from 'react-router-dom'
import FallbackImage from '../components/FallbackImage'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import { CTAArt } from '../components/Illustrations'
import { BRAND, CONDITIONS, SERVICES } from '../data/site'

const PILLARS = [
  {
    icon: 'user',
    tag: 'Doctor-Led',
    title: 'Individualized treatment',
    body: 'Every plan is built and delivered by a Doctor of Physical Therapy. One-on-one, every visit — no aides, no shared time.',
  },
  {
    icon: 'shield',
    tag: 'Evidence-Based',
    title: 'Grounded in research',
    body: 'Manual therapy, exercise progression, vestibular and BFR techniques backed by current orthopedic and sports research.',
  },
  {
    icon: 'heart',
    tag: 'Whole-Person',
    title: 'Supportive environment',
    body: 'A calm, motivating space that addresses physical, emotional and lifestyle factors — not just the injury.',
  },
]

const FEATURED_SERVICES = SERVICES.slice(0, 6)

const STEPS = [
  { title: 'Reach out', body: 'Call, message or book online. We confirm your goals and schedule the right evaluation slot.' },
  { title: 'Comprehensive eval', body: '45 minutes with a Doctor of Physical Therapy. Movement screen, history, posture and treatment direction.' },
  { title: 'Personalized plan', body: 'A progression built around your real life — sport, work, recovery and home environment.' },
  { title: 'Recover & build', body: 'Hands-on care, exercise progression and root-cause work, session by session.' },
]

const QUOTES = [
  { quote: 'After my knee surgery I was back walking the dog in three weeks. Dr. Ashkani actually listens — every visit feels custom.', name: 'Recovery client', role: 'Post-op total knee' },
  { quote: 'I had vertigo for months and saw four other providers. The vestibular evaluation here changed everything in two sessions.', name: 'Vestibular patient', role: 'Sherman Oaks' },
  { quote: 'The 1-on-1 time is unreal. No bouncing between PTs, no waiting on a table. Real hands-on work, real progression.', name: 'Sport client', role: 'Return to running' },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="section section--hero">
        <div className="shell shell--wide">
          <div className="hero">
            <Reveal className="hero__copy">
              <span className="hero__chip">
                <span className="hero__chip-dot" /> Now booking — Sherman Oaks & telehealth
              </span>

              <h1 className="h1">
                One-on-one PT that treats the <em>root cause</em> — not the symptom.
              </h1>

              <p className="lead" style={{ marginTop: '1.4rem' }}>
                DreamCare is a doctor-led, holistic and evidence-based practice in
                Sherman Oaks. Quality over quantity — focused, personalized care
                designed to restore function and prevent future injury.
              </p>

              <div className="btn-row">
                <Link to="/book" className="btn btn--primary">
                  Book an Appointment <Icon name="arrowUpRight" size={16} />
                </Link>
                <Link to="/services" className="btn btn--ghost">See all treatments</Link>
              </div>

              <div className="hero__strip">
                <article>
                  <strong>13+</strong>
                  <span>years of doctor-led orthopedic and sports PT</span>
                </article>
                <article>
                  <strong>1-on-1</strong>
                  <span>every session, with a Doctor of Physical Therapy</span>
                </article>
                <article>
                  <strong>80%</strong>
                  <span>of back pain managed without any procedure</span>
                </article>
              </div>
            </Reveal>

            <Reveal delay={2} className="hero__visual">
              <div className="hero__blob" aria-hidden="true" />
              <div className="hero__photo" role="img" aria-label="Doctor of Physical Therapy with a client during a one-on-one care session">
                <FallbackImage src="/images/hero-therapy-session.png" fallback="/images/hero-care.svg" alt="" aria-hidden="true" />
              </div>

              <div className="hero__badge hero__badge--top">
                <div className="ico"><Icon name="trophy" size={18} /></div>
                <div>
                  <strong>FIFA-certified</strong>
                  <span>Olympic team consultant</span>
                </div>
              </div>

              <div className="hero__badge hero__badge--bottom">
                <div className="ico"><Icon name="check" size={18} /></div>
                <div>
                  <strong>Most insurance accepted</strong>
                  <span>No referral required</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {Array.from({ length: 2 }).map((_, idx) => (
            <span key={idx}>
              Orthopedic PT <em>·</em> Sport rehabilitation <em>·</em> Vestibular & concussion
              <em>·</em> Manual therapy <em>·</em> Shockwave <em>·</em> Post-surgical recovery
              <em>·</em> Telehealth <em>·</em> 1-on-1 doctor-led care <em>·</em>
            </span>
          ))}
        </div>
      </div>

      {/* PILLARS */}
      <section className="section">
        <div className="shell shell--wide">
          <Reveal className="section-head">
            <p className="eyebrow">Why DreamCare</p>
            <h2 className="h2">Care that actually feels <em>personal</em>.</h2>
            <p className="lead" style={{ marginTop: '1.25rem' }}>
              No conveyor belt. No double-booking. Just a doctor of physical therapy and a
              practice built around quality, time and outcomes.
            </p>
          </Reveal>

          <div className="grid grid--3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i + 1} className="card service-card">
                <div className="service-card__icon"><Icon name={p.icon} size={26} /></div>
                <span className="service-card__tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONDITIONS */}
      <section className="section section--mint">
        <div className="shell shell--wide">
          <Reveal className="section-head section-head--split">
            <div>
              <p className="eyebrow">Conditions we treat</p>
              <h2 className="h2">Targeted programs for the <em>most common</em> orthopedic issues.</h2>
            </div>
            <Link to="/services" className="btn btn--ghost">All services →</Link>
          </Reveal>

          <div className="cond-grid">
            {CONDITIONS.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 3) + 1}>
                <Link to={`/conditions/${c.slug}`} className="cond-card">
                  <div className="cond-card__icon"><Icon name={c.icon} size={22} /></div>
                  <div className="cond-card__body">
                    <h4>{c.label}</h4>
                    <p>{c.short}</p>
                  </div>
                  <div className="cond-card__arrow"><Icon name="arrow" size={14} /></div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DOCTOR */}
      <section className="section">
        <div className="shell shell--wide">
          <div className="doctor-block">
            <Reveal className="doctor-portrait">
              <FallbackImage src="/images/doctor-photo.jpg" fallback="/images/doctor.svg" alt="Dr. Ashkan Ashkani, Doctor of Physical Therapy" />
              <div className="doctor-stamp">
                <div className="ico"><Icon name="trophy" size={18} /></div>
                <div>
                  <strong>Dr. Ashkan Ashkani</strong>
                  <span>PT, DPT, CMTPT, COMT</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <p className="eyebrow">Meet your therapist</p>
              <h2 className="h2">An orthopedic and sports PT trusted by <em>elite teams</em> and everyday athletes.</h2>
              <p className="body-text" style={{ marginTop: '1.25rem' }}>
                Dr. Ashkan Ashkani is a Doctor of Physical Therapy with 13+ years of clinical
                experience. Nationally and internationally recognized in orthopedic and sports PT,
                he has worked with gold-medal weightlifting athletes, served as an Olympic team
                consultant and mentored DPT students from Columbia, USC and the University of
                Pittsburgh.
              </p>

              <ul className="cred-list">
                <li>Doctor of Physical Therapy (Honors)</li>
                <li>Vestibular & Concussion Rehab</li>
                <li>Advanced Manual Therapy (CMTPT, COMT)</li>
                <li>Blood Flow Restriction (BFR) Therapy</li>
                <li>FIFA-Certified Physical Therapist</li>
                <li>International Olympics Team Consultant</li>
              </ul>

              <div className="btn-row">
                <Link to="/about" className="btn btn--ink">Read full bio</Link>
                <Link to="/book" className="btn btn--ghost">Book with Dr. Ashkani</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WELLNESS SPLIT (real photo) */}
      <section className="section">
        <div className="shell shell--wide">
          <div className="split-photo">
            <Reveal className="split-photo__art">
              <FallbackImage src="/images/wellness-stretch.svg" fallback="/images/wellness-stretch.svg" alt="Athlete stretching during a wellness recovery session" />
            </Reveal>
            <Reveal delay={1}>
              <p className="eyebrow">Sport · Wellness</p>
              <h2 className="h2">Move <em>better</em>. Recover <em>smarter</em>.</h2>
              <p className="body-text" style={{ marginTop: '1.25rem' }}>
                DreamCare is built for active people — runners, lifters, weekend
                warriors and anyone working their way back. Programs blend
                manual therapy, mobility work and progressive loading designed
                around your real activity.
              </p>
              <ul className="cred-list">
                <li>Sport-specific return-to-play</li>
                <li>Mobility & flexibility work</li>
                <li>Strength rebuilds with BFR</li>
                <li>Performance & posture coaching</li>
              </ul>
              <div className="btn-row">
                <Link to="/services" className="btn btn--ink">Explore services</Link>
                <Link to="/book" className="btn btn--ghost">Book a session</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FULL-BLEED MOVEMENT BAND */}
      <section className="photo-band" aria-label="Movement and recovery">
        <FallbackImage src="/images/movement-run.svg" fallback="/images/movement-run.svg" alt="" className="photo-band__bg" aria-hidden="true" />
        <div className="shell shell--wide photo-band__inner">
          <Reveal>
            <p className="eyebrow">Move again</p>
            <h2 className="h2" style={{ maxWidth: '20ch' }}>
              Recovery is the bridge — we'll walk it <em>with you</em>.
            </h2>
            <p style={{ marginTop: '1rem' }}>
              From a first painful step to confident strides, every visit takes
              you closer to the activity that matters. DreamCare. You deserve it.
            </p>
            <div className="btn-row">
              <Link to="/book" className="btn btn--primary">Begin your recovery</Link>
              <Link to="/conditions/knee-pain" className="btn btn--cream">Read a recovery path</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section section--cream">
        <div className="shell shell--wide">
          <Reveal className="section-head">
            <p className="eyebrow">What we offer</p>
            <h2 className="h2">Doctor-led services <em>built around you</em>.</h2>
          </Reveal>

          <div className="grid grid--3">
            {FEATURED_SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) + 1} className="card service-card">
                <div className="service-card__icon"><Icon name={['hands','spark','tools','pulse','brain','sparkles'][i % 6]} size={26} /></div>
                <h3>{s.title}</h3>
                <p>{s.blurb}</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                  <span className="tag"><Icon name="clock" size={12} /> {s.duration}</span>
                  {s.price && <span className="tag"><span className="tag__dot" /> ${s.price}</span>}
                </div>
                <Link to="/services" className="service-card__link">Learn more</Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={2} style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Link to="/services" className="btn btn--ink">See full price list →</Link>
          </Reveal>
        </div>
      </section>

      {/* STEPS */}
      <section className="section">
        <div className="shell shell--wide">
          <Reveal className="section-head section-head--center">
            <p className="eyebrow">How it works</p>
            <h2 className="h2">Your <em>path</em> from first call to lasting recovery.</h2>
          </Reveal>

          <div className="steps-list">
            {STEPS.map((step, i) => (
              <Reveal key={step.title} delay={(i % 4) + 1} className="step">
                <div className="step__num">{String(i + 1).padStart(2, '0')}</div>
                <h4 className="h4">{step.title}</h4>
                <p>{step.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section section--mint">
        <div className="shell shell--wide">
          <Reveal className="section-head">
            <p className="eyebrow">In their words</p>
            <h2 className="h2">Stories from clients who <em>stuck with it</em>.</h2>
          </Reveal>

          <div className="grid grid--3">
            {QUOTES.map((q, i) => (
              <Reveal key={q.quote} delay={(i % 3) + 1} className="quote-card">
                <p>{q.quote}</p>
                <div className="quote-card__author">
                  <span className="quote-card__avatar">{q.name.split(' ').map((w) => w[0]).slice(0,2).join('')}</span>
                  <div>
                    <strong>{q.name}</strong>
                    <span>{q.role}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INSURANCE / TRUST */}
      <section className="section section--tight">
        <div className="shell shell--wide">
          <Reveal className="section-head section-head--center">
            <p className="eyebrow">Insurance & access</p>
            <h2 className="h2">We accept nearly <em>all major insurance</em>.</h2>
            <p className="lead" style={{ marginInline: 'auto', marginTop: '1.25rem' }}>
              Some plans accepted without your doctor's referral. Save time and skip the
              wait — call us first to confirm coverage.
            </p>
          </Reveal>

          <div className="logo-strip">
            <span>Southpacific PT</span>
            <span>Cedars Orthopedics</span>
            <span>Major LA networks</span>
            <span>Workers' comp</span>
            <span>Medicare</span>
            <span>PPO plans</span>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="section section--tight">
        <div className="shell shell--wide" style={{ textAlign: 'center' }}>
          <Reveal>
            <p className="eyebrow" style={{ justifyContent: 'center' }}>Where we serve</p>
            <h2 className="h2" style={{ marginBottom: '2rem' }}>
              Our home is Sherman Oaks. Our patients come from <em>across LA</em>.
            </h2>
            <div className="locations">
              {BRAND.serviceAreas.map((area) => (
                <span key={area} className="location-pill">
                  <Icon name="pin" size={14} /> {area}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="shell shell--wide">
          <Reveal className="cta-banner">
            <div>
              <p className="eyebrow">Take the first step</p>
              <h2 className="h2">DreamCare. <em>You deserve it.</em></h2>
              <p>
                Book a comprehensive evaluation with a Doctor of Physical Therapy and start a
                care plan built around your goals.
              </p>
              <div className="btn-row">
                <Link to="/book" className="btn btn--primary">Book Appointment</Link>
                <a href={`tel:${BRAND.phoneRaw}`} className="btn btn--cream">
                  <Icon name="phone" size={16} /> {BRAND.phone}
                </a>
              </div>
            </div>
            <div className="cta-banner__art"><CTAArt /></div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
