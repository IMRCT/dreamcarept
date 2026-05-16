import { Link } from 'react-router-dom'
import FallbackImage from '../components/FallbackImage'
import Icon from '../components/Icon'
import { CTAArt } from '../components/Illustrations'
import Reveal from '../components/Reveal'

const EXPERTISE_CARDS = [
  { icon: 'star', title: '13+ Years Experience', body: 'Over a decade of dedicated clinical experience in orthopedic and sports physical therapy.' },
  { icon: 'trophy', title: 'Olympic & Elite Sports Background', body: 'Trusted by gold-medal athletes and elite teams at the highest level.' },
  { icon: 'hands', title: 'Advanced Manual Therapy', body: 'CMTPT & COMT certified for hands-on, evidence-based treatment that gets results.' },
  { icon: 'brain', title: 'Vestibular & Concussion Care', body: 'Specialized evaluation and rehabilitation for dizziness, balance, and concussion recovery.' },
]

const PHILOSOPHY = [
  { title: 'Care that comes to the client', body: 'Whether in-clinic or via telehealth, sessions are shaped around the patient, including their goals, their body and their real-life environment.' },
  { title: 'Recovery with purpose', body: 'We focus on helping people move better after surgery, injury and through the day-to-day work of recovery.' },
  { title: 'Sport and wellness support', body: 'Active adults, weekend warriors and wellness-focused clients all get programs that meet them at their level.' },
]

export default function AboutPage() {
  return (
    <>
      <section className="inner-hero">
        <div className="shell shell--wide">
          <Reveal className="inner-hero__grid">
            <div className="inner-hero__copy">
              <p className="eyebrow">About DreamCare</p>
              <h1 className="h1">A physical therapist-led practice built on <em>quality</em>, <em>time</em> and outcomes</h1>
              <p className="lead" style={{ marginTop: '1.4rem' }}>
                DreamCare is led by Dr. Ashkan Ashkani, an orthopedic and sports physical therapist, former clinical instructor, and Olympic team therapist. Every visit is one-on-one, every plan is evidence-based, and every program is designed to treat the root cause.
              </p>
              <div className="btn-row">
                <Link to="/book" className="btn btn--primary">Book with Dr. Ashkani</Link>
                <Link to="/services" className="btn btn--ghost">See services</Link>
              </div>
            </div>
            <div className="inner-hero__art">
              <FallbackImage src="/images/doctor-photo.jpg" fallback="/images/doctor.svg" alt="Portrait of Dr. Ashkan Ashkani" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bio */}
      <section className="section">
        <div className="shell shell--tight">
          <Reveal className="section-head">
            <p className="eyebrow">Meet Dr. Ashkan Ashkani</p>
            <h2 className="h2">PT, DPT, CMTPT driven by the belief that <em>movement is medicine</em>.</h2>
          </Reveal>

          <Reveal className="body-text" delay={1} style={{ fontSize: '1.05rem' }}>
            <p style={{ marginBottom: '1.2rem' }}>
              Dr. Ashkani earned his Doctor of Physical Therapy degree from the University of North Gereinjuryraduating with honors and distinction. Over a decade of clinical practice, he has become nationally and internationally recognized for orthopedic and sports physical therapy.
            </p>
            <p style={{ marginBottom: '1.2rem' }}>
              He has worked with gold medal-winning weightlifting athletes, served as an Olympic and elite athletic team therapist, and mentored Doctor of Physical Therapy students from Columbia University, USC, and the University of Pittsburgh. He also volunteers with the Red Cross and balances clinical work with surfing, swimming, hiking, and travel.
            </p>
            <p>
              His philosophy is simple: <strong style={{ color: 'var(--ink)' }}>movement is medicine</strong>. Focused, hands-on, evidence-based care designed to restore function and prevent reinjury.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Highlights */}
      <section id="credentials" className="section section--about-expertise">
        <div className="shell shell--wide">
          <Reveal className="section-head section-head--about-expertise">
            <p className="eyebrow">Experience & Expertise</p>
            <h2 className="h2 h1">Advanced, evidence-based care trusted by <em>athletes</em> and <em>active adults</em>.</h2>
            <span className="about-expertise__rule" aria-hidden="true" />
            <p className="lead">
              Years of clinical experience, advanced certifications, and a passion for helping people move better, feel stronger, and live without limits.
            </p>
          </Reveal>

          <div className="about-expertise__grid">
            {EXPERTISE_CARDS.map((item, i) => (
              <Reveal key={item.title} delay={(i % 4) + 1} className="about-expertise-card">
                <div className="about-expertise-card__icon"><Icon name={item.icon} size={38} /></div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <span className="about-expertise-card__rule" aria-hidden="true" />
              </Reveal>
            ))}
          </div>

          <Reveal className="about-expertise__assurance" delay={2}>
            <span className="about-expertise__assurance-icon" aria-hidden="true">
              <Icon name="shield" size={56} className="about-expertise__assurance-shield" />
              <Icon name="check" size={24} className="about-expertise__assurance-check" />
            </span>
            <p>
              <strong>Every visit is one-on-one. Every plan is evidence-based. Every program treats the root cause.</strong>
              <span>Focused on restoring function, building strength, and preventing reinjury so you can get back to doing what you love.</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section">
        <div className="shell shell--wide">
          <Reveal className="section-head">
            <p className="eyebrow">Our philosophy</p>
            <h2 className="h2">Care built around the <em>person</em>, not the protocol.</h2>
          </Reveal>

          <div className="grid grid--3">
            {PHILOSOPHY.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) + 1} className="card">
                <h3 className="h3" style={{ marginBottom: '0.75rem' }}>{p.title}</h3>
                <p className="body-text">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section section--mint">
        <div className="shell shell--wide">
          <Reveal className="section-head">
            <p className="eyebrow">What we treat</p>
            <h2 className="h2">From <em>everyday aches</em> to elite performance.</h2>
          </Reveal>

          <div className="grid grid--2">
            {[
              { icon: 'home', title: 'In-clinic and telehealth visits', body: 'Comprehensive care delivered in your home or preferred setting across Southern California.' },
              { icon: 'pulse', title: 'Post-surgical physical therapy', body: 'Rebuilding strength, mobility and confidence after total knee, total hip, ACL and shoulder surgeries.' },
              { icon: 'trophy', title: 'Sport rehabilitation', body: 'Return-to-activity work for athletes through sport-specific progression, performance rebuilds and prevention.' },
              { icon: 'brain', title: 'Vestibular and concussion care', body: 'Gaze stabilization, balance training, and progressive rehabilitation for dizziness, vertigo, and post-concussion recovery.' },
              { icon: 'hands', title: 'Mobility, balance & fall prevention', body: 'Programs for older adults and anyone working on stability, confidence and safer daily movement.' },
              { icon: 'spark', title: 'Strength & wellness', body: 'Movement training for daily life that builds durability, posture and movement quality long-term.' },
            ].map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) + 1} className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: 'var(--primary)', color: '#F5EFFB', display: 'grid', placeItems: 'center', flex: 'none' }}>
                  <Icon name={item.icon} size={22} />
                </div>
                <div>
                  <h3 className="h4">{item.title}</h3>
                  <p className="body-text" style={{ marginTop: '0.4rem', fontSize: '0.95rem' }}>{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hands-on care */}
      <section className="section section--manual-care">
        <div className="shell shell--wide">
          <div className="manual-care">
            <Reveal className="manual-care__copy">
              <p className="eyebrow">Hands-on care</p>
              <h2 className="h2">Hands-on therapy<br />tailored to how<br /><em>your body moves.</em></h2>
              <span className="manual-care__rule" aria-hidden="true" />
              <p className="body-text">
                Soft-tissue release, joint mobilization, IASTM, cupping and trigger-point work - selected based on what your body actually needs that day. Manual care creates the window for movement and exercise to do their job.
              </p>
              <div className="manual-care__actions">
                <Link to="/services" className="manual-care__button">
                  <span>Explore services</span>
                  <Icon name="arrow" size={24} />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={1} className="manual-care__art">
              <div className="manual-care__photo">
                <img src="/images/manual-care-main-clean.jpeg" alt="DreamCare therapist providing hands-on shoulder manual therapy" />
              </div>
              <div className="manual-care__techniques" aria-label="Manual therapy technique examples">
                <Link to="/services" className="manual-care-technique-card">
                  <img src="/images/manual-care-iastm.jpeg" alt="IASTM scraping technique" />
                  <span>IASTM / Scraping</span>
                </Link>
                <Link to="/services" className="manual-care-technique-card">
                  <img src="/images/manual-care-cupping.jpeg" alt="Cupping therapy technique" />
                  <span>Cupping</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="shell shell--wide">
          <Reveal className="cta-banner">
            <div>
              <p className="eyebrow">DreamCare. You deserve it.</p>
              <h2 className="h2">Ready to start with a <em>doctor-led plan</em>?</h2>
              <p>Book a 45-minute comprehensive evaluation and walk out with clear direction.</p>
              <div className="btn-row">
                <Link to="/book" className="btn btn--primary">Book Appointment</Link>
                <Link to="/contact" className="btn btn--cream">Talk to us first</Link>
              </div>
            </div>
            <div className="cta-banner__art">
              <CTAArt />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
