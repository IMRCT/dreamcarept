import { Link } from 'react-router-dom'
import FallbackImage from '../components/FallbackImage'
import Icon from '../components/Icon'
import { CTAArt } from '../components/Illustrations'
import Reveal from '../components/Reveal'
import { SERVICES, BRAND } from '../data/site'

const SERVICE_ICONS = [
  'clipboard',
  'treatmentTable',
  'rehab',
  'knee',
  'soundwave',
  'headProfile',
  'spine',
  'massage',
  'laptop',
]

const PROCESS_STEPS = [
  { icon: 'clipboard', title: 'Check-in & reassess', body: 'Every visit begins with a quick reassessment to track progress and adjust care.' },
  { icon: 'hands', title: 'Manual therapy', body: 'Hands-on treatment selected based on what your body needs that day.' },
  { icon: 'rehab', title: 'Exercise progression', body: 'Mobility and strength work progressed at the right pace for recovery.' },
  { icon: 'home', title: 'Home program', body: 'Simple between-session guidance designed for real life.' },
]

const INSURANCE_ACCESS = [
  {
    icon: 'shield',
    title: 'PPO Insurance Plans',
    body: 'We are in-network with many major PPO plans.',
  },
  {
    icon: 'user',
    title: 'Medicare',
    body: 'We accept Medicare for eligible patients.',
  },
  {
    icon: 'briefcase',
    title: 'Workers’ Compensation',
    body: 'We work with most workers’ comp insurance.',
  },
  {
    icon: 'car',
    title: 'Personal Injury / Auto Accident Cases',
    body: 'Care for auto accident and injury related cases.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="services-hero">
        <div className="shell shell--wide">
          <Reveal className="services-hero__grid">
            <div className="services-hero__copy">
              <h1 className="h1">Personalized care designed around <em>your goals.</em></h1>
              <span className="services-hero__rule" aria-hidden="true" />
              <p className="lead">
                One-on-one physical therapy from our experienced team. Evidence-based treatment and personalized plans to help you move better, feel better, and get back to the activities you love.
              </p>
              <div className="services-hero__actions">
                <Link to="/book" className="btn btn--primary">
                  <span>Book an appointment</span>
                  <Icon name="arrow" size={18} />
                </Link>
                <a href={`tel:${BRAND.phoneRaw}`} className="btn services-hero__phone">
                  <Icon name="phone" size={17} /> {BRAND.phone}
                </a>
              </div>
            </div>

            <div className="services-hero__art">
              <FallbackImage src="/images/services-personalized-care.jpeg" fallback="/images/services-hero.png" alt="DreamCare physical therapist providing personalized shoulder treatment" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pricing list */}
      <section id="treatments" className="section section--services-treatments">
        <div className="shell">
          <Reveal className="services-treatments__head">
            <div>
              <p className="eyebrow">Treatments</p>
              <h2 className="h2">Personalized physical therapy for <em>every stage of recovery.</em></h2>
              <p className="lead">One-on-one care with a Doctor of PT. Each session is tailored to your needs, your goals, and your life.</p>
            </div>
            <Link to="/book" className="services-treatments__button">
              <span>Book any service</span>
              <Icon name="arrow" size={18} />
            </Link>
          </Reveal>

          <Reveal className="services-treatment-list">
            {SERVICES.map((s, i) => (
              <div key={s.title} className="services-treatment-row">
                <span className="services-treatment-row__icon">
                  <Icon name={SERVICE_ICONS[i] || 'clipboard'} size={34} />
                </span>
                <div className="services-treatment-row__copy">
                  <h3>{s.title}</h3>
                  <p>{s.blurb}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="section section--services-process">
        <div className="shell shell--wide">
          <Reveal className="services-process__head">
            <p className="eyebrow">What to expect</p>
            <h2 className="h2">How treatment is <em>tailored to you.</em></h2>
            <p className="lead">Every session is one-on-one with a Doctor of PT and customized around your goals and progress.</p>
          </Reveal>

          <div className="services-process__grid">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.title} delay={(i % 4) + 1} className="services-process-step">
                <span className="services-process-step__num">{String(i + 1).padStart(2, '0')}</span>
                <span className="services-process-step__icon"><Icon name={step.icon} size={42} /></span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="services-process__cta" delay={2}>
            <Icon name="calendar" size={20} />
            <span>Ready to start your recovery?</span>
            <Link to="/book">Book an appointment <Icon name="arrow" size={18} /></Link>
          </Reveal>
        </div>
      </section>

      {/* Insurance band */}
      <section className="section services-insurance">
        <div className="shell shell--wide services-insurance__layout">
          <Reveal className="services-insurance__copy">
            <p className="eyebrow">Insurance & access</p>
            <h2 className="h2">We work with many <em>major insurance</em> plans.</h2>
            <p className="lead">
              Our goal is to make your care simple and stress-free. We’re in-network with
              many major PPO plans and Medicare, and we accept workers’ comp and personal
              injury cases.
            </p>
            <a href={`tel:${BRAND.phoneRaw}`} className="btn btn--primary services-insurance__button">
              <Icon name="phone" size={16} /> Verify coverage
            </a>
            <p className="services-insurance__note">We’ll check your benefits so you can skip the wait.</p>
          </Reveal>

          <Reveal delay={1} className="services-insurance__cards">
            {INSURANCE_ACCESS.map((item) => (
              <article key={item.title} className="services-insurance-card">
                <span className="services-insurance-card__icon">
                  <Icon name={item.icon} size={34} />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section services-final-cta">
        <div className="shell shell--wide">
          <Reveal className="cta-banner">
            <div>
              <p className="eyebrow">Not sure what fits?</p>
              <h2 className="h2">Start with a <em>comprehensive evaluation</em>.</h2>
              <p>We’ll assess your condition, understand your goals, and create a personalized plan to help you move better.</p>
              <div className="btn-row">
                <Link to="/book" className="btn btn--primary">Book an appointment</Link>
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
