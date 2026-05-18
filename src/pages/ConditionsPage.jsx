import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import { CONDITIONS } from '../data/site'

const CONDITION_DETAILS = {
  'back-pain': {
    summary: 'Most back pain and radiating leg and arm symptoms can be successfully treated with conservative care when the true source of the problem is properly identified, whether it is neural or structural.',
    bullets: [
      'Posture and movement assessment',
      'Manual therapy and soft tissue techniques',
      'Targeted strengthening and mobility',
    ],
  },
  'shoulder-pain': {
    summary: 'We help restore shoulder mobility, reduce pain and rebuild strength so you can return to the activities you enjoy.',
    bullets: [
      'Diagnosis and improve shoulder dyskinesia and instability within postural modification',
      'Rotator cuff and shoulder impingement',
      'Stability and mobility training',
      'Post-surgical shoulder rehab',
    ],
  },
  'knee-pain': {
    summary: 'Whether from injury, arthritis or overuse, we create personalized plans to reduce pain and improve knee function.',
    bullets: [
      'Arthritis and joint pain',
      'Ligament and meniscus injuries',
      'Strengthening and movement retraining',
      'Return to sport, running and playing golf',
    ],
  },
  'hip-pain': {
    summary: 'We address hip pain at the source to improve mobility, strength and overall lower body function.',
    bullets: [
      'Hip impingement and arthritis',
      'Muscle imbalances and weakness',
      'Post-surgical hip rehabilitation',
    ],
  },
  'ankle-injuries': {
    summary: 'From sprains to chronic instability, we help you heal and get back to the activities you love.',
    bullets: [
      'Sprains and soft tissue injuries',
      'Strength, balance and stability training',
      'Post-surgical foot and ankle rehab',
    ],
  },
  vestibular: {
    summary: 'Specialized care for dizziness, vertigo and concussion symptoms so you can feel steady and confident again.',
    bullets: [
      'Vestibular rehabilitation',
      'Concussion management',
      'Balance and visual-vestibular training',
    ],
  },
  'balance-fall-prevention': {
    summary: 'We help you improve balance, coordination and confidence to prevent falls and stay independent.',
    bullets: [
      'Balance and gait training',
      'Strength and functional mobility',
      'Fall risk assessment and education',
    ],
  },
  'post-surgical-rehabilitation': {
    summary: 'Guided recovery programs that help you heal safely and return to your daily life stronger.',
    bullets: [
      'Joint replacement rehab',
      'Sports injury recovery',
      'Strength and function restoration',
    ],
  },
  'hand-upper-extremity-therapy': {
    summary: 'We treat hand and wrist injuries, pain and dysfunction so you can move, grip and perform with ease.',
    bullets: [
      'Tendonitis and overuse injuries',
      'Post-surgical hand rehab',
      'Strength, mobility and dexterity training',
    ],
  },
}

export default function ConditionsPage() {
  return (
    <>
      <section className="conditions-index-hero">
        <div className="shell shell--wide conditions-index-hero__grid">
          <Reveal className="conditions-index-hero__copy">
            <p className="eyebrow">Conditions we treat</p>
            <h1 className="h1">Expert care for what&apos;s holding <em>you back.</em></h1>
            <p className="lead">
              Whether you&apos;re dealing with pain, recovering from surgery, or working to improve balance and mobility, our doctors of physical therapy are here to help you move better and live better.
            </p>
          </Reveal>

          <Reveal delay={1} className="conditions-index-hero__figure" aria-hidden="true">
            <div className="conditions-index-hero__body">
              <img src="/images/conditions/back-pain.png" alt="" />
              <span className="conditions-index-hero__spot conditions-index-hero__spot--neck" />
              <span className="conditions-index-hero__spot conditions-index-hero__spot--shoulder" />
              <span className="conditions-index-hero__spot conditions-index-hero__spot--hip" />
              <span className="conditions-index-hero__spot conditions-index-hero__spot--knee" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--conditions-index-list">
        <div className="shell">
          <div className="conditions-index-list">
            {CONDITIONS.map((condition, index) => {
              const detail = CONDITION_DETAILS[condition.slug]
              return (
                <Reveal
                  key={condition.slug}
                  id={condition.slug}
                  delay={(index % 3) + 1}
                  className="condition-index-row"
                >
                  <span className="condition-index-row__num">{String(index + 1).padStart(2, '0')}</span>
                  <div className="condition-index-row__content">
                    <h2>{condition.label}</h2>
                    <p>{detail?.summary ?? condition.short}</p>
                    <ul>
                      {(detail?.bullets ?? [condition.short]).map((item) => (
                        <li key={item}>
                          <span><Icon name="check" size={13} /></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="condition-index-row__media">
                    <img src={condition.tileImage} alt="" loading="lazy" style={{ objectPosition: condition.tilePosition ?? 'center' }} />
                  </div>
                </Reveal>
              )
            })}
          </div>

          <Reveal className="conditions-index-cta">
            <span className="conditions-index-cta__icon"><Icon name="calendar" size={34} /></span>
            <div>
              <p className="eyebrow">Not sure what fits?</p>
              <h2 className="h2">Start with a <em>comprehensive evaluation.</em></h2>
              <p>We&apos;ll assess your condition and create a plan tailored to your goals.</p>
            </div>
            <Link to="/book" className="btn btn--primary">
              Book an evaluation <Icon name="arrow" size={17} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
