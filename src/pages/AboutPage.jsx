import { Link } from 'react-router-dom'
import FallbackImage from '../components/FallbackImage'
import Icon from '../components/Icon'
import { CTAArt } from '../components/Illustrations'
import Reveal from '../components/Reveal'

const HIGHLIGHTS = [
  { icon: 'trophy', title: '13+ years', body: 'of dedicated clinical experience in orthopedic and sports physical therapy.' },
  { icon: 'spark', title: 'University of North Georgia', body: 'Doctor of Physical Therapy, graduated with honors and distinction.' },
  { icon: 'shield', title: 'FIFA-certified', body: 'physical therapist and Olympic team consultant for international athletes.' },
  { icon: 'pulse', title: 'Vestibular & concussion', body: 'certified by the New York Concussion Corner Academy.' },
  { icon: 'hands', title: 'Manual therapy', body: 'advanced certifications (CMTPT, COMT) for hands-on, root-cause work.' },
  { icon: 'sparkles', title: 'BFR therapy', body: 'Blood Flow Restriction training for safer, faster strength rebuilds.' },
]

const PHILOSOPHY = [
  { title: 'Care that comes to the client', body: 'Whether in-clinic or via telehealth, sessions are shaped around the patient — their goals, their body and their real-life environment.' },
  { title: 'Recovery with purpose', body: 'We focus on helping people move better after surgery, injury and through the day-to-day work of recovery.' },
  { title: 'Sport and wellness support', body: 'Active adults, weekend warriors and wellness-focused clients all get programs that meet them at their level.' },
]

export default function AboutPage() {
  return (
    <>
      <section className="inner-hero">
        <div className="shell shell--wide">
          <Reveal className="inner-hero__grid">
            <div>
              <p className="eyebrow">About DreamCare</p>
              <h1 className="h1">A doctor-led practice built on <em>quality, time</em> and outcomes.</h1>
              <p className="lead" style={{ marginTop: '1.4rem' }}>
                DreamCare is the work of Dr. Ashkan Ashkani — orthopedic and sports
                physical therapist, clinical instructor, and international Olympics team
                consultant. Every visit is one-on-one, every plan is built from
                evidence and every program treats the root cause.
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
            <h2 className="h2">PT, DPT, CMTPT, COMT — and a thirteen-year obsession with <em>movement done right</em>.</h2>
          </Reveal>

          <Reveal className="body-text" delay={1} style={{ fontSize: '1.05rem' }}>
            <p style={{ marginBottom: '1.2rem' }}>
              Dr. Ashkani earned his Doctor of Physical Therapy from the University of North Georgia,
              graduating with honors and distinction. Over thirteen years of clinical practice he has
              become nationally and internationally recognized for orthopedic and sports physical therapy.
            </p>
            <p style={{ marginBottom: '1.2rem' }}>
              He has worked with gold-medal-winning weightlifting athletes, served as an Olympic and
              elite athletic team consultant, and mentored Doctor of Physical Therapy students from
              Columbia University, USC and the University of Pittsburgh. He volunteers with the Red
              Cross and balances clinical work with surfing, swimming, hiking and travel.
            </p>
            <p>
              His philosophy is simple: <strong style={{ color: 'var(--ink)' }}>quality over quantity</strong>.
              No assistants, no overlapping sessions, no five-patient hours. Just focused, hands-on,
              evidence-based care designed to restore function and keep injuries from coming back.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Highlights */}
      <section className="section section--cream">
        <div className="shell shell--wide">
          <Reveal className="section-head">
            <p className="eyebrow">Credentials & training</p>
            <h2 className="h2">A foundation built on <em>real expertise</em>.</h2>
          </Reveal>

          <div className="grid grid--3">
            {HIGHLIGHTS.map((h, i) => (
              <Reveal key={h.title} delay={(i % 3) + 1} className="card service-card">
                <div className="service-card__icon"><Icon name={h.icon} size={26} /></div>
                <h3>{h.title}</h3>
                <p>{h.body}</p>
              </Reveal>
            ))}
          </div>
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
              { icon: 'home', title: 'In-clinic and telehealth visits', body: 'Comprehensive care from our Sherman Oaks studio or fully remote sessions for clients across California.' },
              { icon: 'pulse', title: 'Post-surgical physical therapy', body: 'Rebuilding strength, mobility and confidence after total knee, total hip, ACL and shoulder surgeries.' },
              { icon: 'trophy', title: 'Sport rehabilitation', body: 'Return-to-activity work for athletes — sport-specific progression, performance rebuilds and prevention.' },
              { icon: 'brain', title: 'Vestibular and concussion care', body: 'Gaze stabilization, balance training and graded return for dizziness, vertigo and post-concussion symptoms.' },
              { icon: 'hands', title: 'Mobility, balance & fall prevention', body: 'Programs for older adults and anyone working on stability, confidence and safer daily movement.' },
              { icon: 'spark', title: 'Strength & wellness', body: 'Movement training for daily life — building durability, posture and movement quality long-term.' },
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

      {/* HANDS-ON SPLIT */}
      <section className="section">
        <div className="shell shell--wide">
          <div className="split-photo">
            <Reveal>
              <p className="eyebrow">Hands-on care</p>
              <h2 className="h2">Manual therapy is <em>core</em> to every visit.</h2>
              <p className="body-text" style={{ marginTop: '1.25rem' }}>
                Soft-tissue release, joint mobilization, IASTM, cupping and
                trigger-point work — selected based on what your body actually
                needs that day. Manual care creates the window for movement
                and exercise to do their job.
              </p>
              <div className="btn-row">
                <Link to="/services" className="btn btn--ink">See all techniques</Link>
              </div>
            </Reveal>
            <Reveal delay={1} className="split-photo__art">
              <FallbackImage src="/images/manual-therapy.svg" fallback="/images/manual-therapy.svg" alt="Hands-on manual therapy session focused on the lower limb" />
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
