import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import { CTAArt } from './Illustrations'
import Reveal from './Reveal'
import { CONDITIONS } from '../data/site'

export default function ConditionPage({
  slug,
  eyebrow,
  title,
  intro,
  callout,        // { stat, label }
  sections,       // [{ key, label, title, body, items }]
  closing,        // string
}) {
  const [active, setActive] = useState(sections[0].key)
  const current = sections.find((s) => s.key === active) ?? sections[0]
  const others = CONDITIONS.filter((c) => c.slug !== slug)

  return (
    <>
      <section className="inner-hero">
        <div className="shell shell--wide">
          <Reveal className="inner-hero__grid">
            <div>
              <p className="eyebrow">{eyebrow}</p>
              <h1 className="h1">{title}</h1>
              <p className="lead" style={{ marginTop: '1.25rem' }}>{intro}</p>
              <div className="btn-row">
                <Link to="/book" className="btn btn--primary">Book an evaluation</Link>
                <Link to="/services" className="btn btn--ghost">See all services</Link>
              </div>
            </div>
            <div className="inner-hero__art inner-hero__art--condition">
              <img src={`/images/conditions/${slug}.png`} alt="" aria-hidden="true" />
            </div>
          </Reveal>
        </div>
      </section>

      {callout && (
        <section className="section section--cream">
          <div className="shell shell--tight">
            <Reveal className="cond-overview">
              <div className="stat-callout">
                <strong>{callout.stat}</strong>
                <span>{callout.label}</span>
              </div>
              <div>
                <p className="eyebrow">Our approach</p>
                <h2 className="h2">A holistic, personalized plan built around your <em>real life</em>.</h2>
                <p className="body-text" style={{ marginTop: '1.25rem' }}>
                  Every plan begins with a Doctor of Physical Therapy. We assess medical history,
                  movement patterns and current limitations, then build a progression that targets
                  the root cause — not just the symptom.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <section className="section">
        <div className="shell shell--wide">
          <Reveal className="section-head">
            <p className="eyebrow">Treatment Path</p>
            <h2 className="h2">A clear, step-by-step path from <em>assessment</em> to recovery.</h2>
          </Reveal>

          <div className="tab-block">
            <div className="tab-list">
              {sections.map((s, i) => (
                <button
                  key={s.key}
                  type="button"
                  className={`tab${active === s.key ? ' is-active' : ''}`}
                  onClick={() => setActive(s.key)}
                >
                  <span className="tab__num">{String(i + 1).padStart(2, '0')}</span>
                  {s.label}
                </button>
              ))}
            </div>

            <Reveal className="tab-panel" key={current.key}>
              <h3 className="h3">{current.title}</h3>
              <p className="body-text">{current.body}</p>
              {current.items?.length > 0 && (
                <ul>
                  {current.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {closing && (
        <section className="section">
          <div className="shell shell--tight">
            <Reveal className="card card--soft" style={{ padding: '2.5rem' }}>
              <p className="eyebrow">Why this works</p>
              <h2 className="h2" style={{ fontSize: '1.6rem' }}>{closing}</h2>
            </Reveal>
          </div>
        </section>
      )}

      <section className="section section--mint">
        <div className="shell shell--wide">
          <Reveal className="section-head">
            <p className="eyebrow">Other conditions we treat</p>
            <h2 className="h2">Explore more <em>care paths</em>.</h2>
          </Reveal>

          <div className="cond-grid">
            {others.slice(0, 3).map((c) => (
              <Link key={c.slug} to={`/conditions/${c.slug}`} className="cond-card">
                <div className="cond-card__icon"><Icon name={c.icon} size={22} /></div>
                <div className="cond-card__body">
                  <h4>{c.label}</h4>
                  <p>{c.short}</p>
                </div>
                <div className="cond-card__arrow"><Icon name="arrow" size={14} /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell shell--wide">
          <Reveal className="cta-banner">
            <div>
              <p className="eyebrow">Ready when you are</p>
              <h2 className="h2">Begin your <em>recovery journey</em> with a doctor-led evaluation.</h2>
              <p>Book in person at our Sherman Oaks studio or via telehealth from anywhere in California.</p>
              <div className="btn-row">
                <Link to="/book" className="btn btn--primary">Book Appointment</Link>
                <Link to="/contact" className="btn btn--cream">Talk to the team</Link>
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
