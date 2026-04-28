import { Link } from 'react-router-dom'
import FallbackImage from '../components/FallbackImage'
import Icon from '../components/Icon'
import { CTAArt } from '../components/Illustrations'
import Reveal from '../components/Reveal'
import { SERVICES, BRAND } from '../data/site'

export default function ServicesPage() {
  return (
    <>
      <section className="inner-hero">
        <div className="shell shell--wide">
          <Reveal className="inner-hero__grid">
            <div>
              <p className="eyebrow">Services & Pricing</p>
              <h1 className="h1">Doctor-led care, <em>transparent pricing</em>, no shortcuts.</h1>
              <p className="lead" style={{ marginTop: '1.4rem' }}>
                Every session is one-on-one with Dr. Ashkani. Treatments combine manual therapy,
                exercise progression, vestibular and BFR techniques — selected based on what your
                body actually needs.
              </p>
              <div className="btn-row">
                <Link to="/book" className="btn btn--primary">Book a treatment</Link>
                <a href={`tel:${BRAND.phoneRaw}`} className="btn btn--ghost">
                  <Icon name="phone" size={16} /> {BRAND.phone}
                </a>
              </div>
            </div>

            <div className="inner-hero__art">
              <FallbackImage src="/images/services-hero.png" fallback="/images/manual-therapy.svg" alt="Physical therapy session with a client seated on an exercise ball" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pricing list */}
      <section className="section">
        <div className="shell">
          <Reveal className="section-head section-head--split">
            <div>
              <p className="eyebrow">Treatments & rates</p>
              <h2 className="h2">All sessions are <em>1-on-1</em> with a Doctor of PT.</h2>
            </div>
            <Link to="/book" className="btn btn--ink">Book any service →</Link>
          </Reveal>

          <Reveal className="price-list">
            {SERVICES.map((s, i) => (
              <div key={s.title} className="price-row">
                <span className="price-row__num">{String(i + 1).padStart(2, '0')}</span>
                <div className="price-row__title">
                  <strong>{s.title}</strong>
                  <span>{s.blurb}</span>
                </div>
                <span className="price-row__meta">
                  <Icon name="clock" size={14} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: 4 }} />
                  {s.duration}
                </span>
                <span className="price-row__price">
                  {s.price ? <>${s.price}</> : <em>Call for rate</em>}
                </span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Insurance band */}
      <section className="section section--ink">
        <div className="shell shell--wide">
          <div className="grid grid--2" style={{ alignItems: 'center', gap: '3rem' }}>
            <Reveal>
              <p className="eyebrow">Insurance & access</p>
              <h2 className="h2">We accept <em>nearly all major</em> insurance plans.</h2>
              <p className="lead" style={{ marginTop: '1.25rem' }}>
                Some plans accepted without a doctor's referral — call us first and we'll
                check coverage so you can skip the wait.
              </p>
              <div className="btn-row">
                <a href={`tel:${BRAND.phoneRaw}`} className="btn btn--primary">
                  <Icon name="phone" size={16} /> Verify coverage
                </a>
              </div>
            </Reveal>

            <Reveal delay={1} className="grid grid--2" style={{ gap: '0.75rem' }}>
              {['PPO plans', 'Medicare', 'Workers\' comp', 'Auto / personal injury', 'Southpacific PT', 'Cedars Orthopedics'].map((label) => (
                <div key={label} className="card" style={{ padding: '1.1rem 1.2rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#F5EFFB', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Icon name="check" size={18} /> {label}
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="shell shell--wide">
          <Reveal className="section-head">
            <p className="eyebrow">What to expect</p>
            <h2 className="h2">A treatment session, <em>start to finish</em>.</h2>
          </Reveal>

          <div className="steps-list">
            {[
              { t: 'Check-in & re-assess', b: 'Each visit starts with a quick re-assessment so we track real progress, not guesses.' },
              { t: 'Manual therapy', b: 'Hands-on work — soft tissue release, joint mobilization, cupping, IASTM as indicated.' },
              { t: 'Exercise progression', b: 'Strength, mobility and neuromuscular work paced to where your body is today.' },
              { t: 'Home program', b: 'Clear, simple between-session work that fits into your real schedule.' },
            ].map((step, i) => (
              <Reveal key={step.t} delay={(i % 4) + 1} className="step">
                <div className="step__num">{String(i + 1).padStart(2, '0')}</div>
                <h4 className="h4">{step.t}</h4>
                <p>{step.b}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="shell shell--wide">
          <Reveal className="cta-banner">
            <div>
              <p className="eyebrow">Not sure what fits?</p>
              <h2 className="h2">Start with a <em>comprehensive evaluation</em>.</h2>
              <p>45 minutes with Dr. Ashkani — assessment, treatment direction and a clear next step.</p>
              <div className="btn-row">
                <Link to="/book" className="btn btn--primary">Book evaluation</Link>
                <Link to="/contact" className="btn btn--cream">Ask a question</Link>
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
