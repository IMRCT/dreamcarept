import { Link } from 'react-router-dom'
import FallbackImage from '../components/FallbackImage'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import { CTAArt } from '../components/Illustrations'
import { BRAND, CONDITIONS } from '../data/site'

const PILLARS = [
  {
    icon: 'user',
    tag: 'Doctor-Led',
    title: 'Individualized treatment',
    body: 'Every treatment plan is customized to each patient\'s goals, condition, and lifestyle and home. By delivering care directly in the home, we create a more comfortable, convenient, and functional recovery experience focused on long-term results and improved quality of life and experience gym and physical therapy at your home or work.',
  },
  {
    icon: 'shield',
    tag: 'Evidence-Based',
    title: 'Rehabilitation services',
    items: [
      'Manual therapy and joint mobilization and manipulation',
      'Personalized exercise progression with your stage of function',
      'Evidence-Based pre- and post-operative rehabilitation protocol for total knee, shoulder, hip and ankle replacements',
      'Vestibular and concussion rehabilitation',
      'Orthopedic and sports injury rehabilitation',
      'Neurological rehabilitation and gait and balance training',
      'Balance training and fall risk prevention',
    ],
  },
  {
    icon: 'heart',
    tag: 'Whole-Person',
    title: 'Supportive Care You Can Trust',
    body: 'Our team provides hands-on care, clear guidance, and open communication to help patients feel comfortable and confident throughout recovery at home.\n\nWe strive to make therapy simple, supportive, and focused on helping you move better and live more independently.',
  },
]

const INSURANCE_LOGOS = [
  { name: 'Medicare', src: '/images/insurance/medicare.svg' },
  { name: 'Aetna', src: '/images/insurance/aetna.svg' },
  { name: 'Anthem Blue Cross Blue Shield', src: '/images/insurance/anthem-bcbs.svg' },
  { name: 'Cigna Healthcare', src: '/images/insurance/cigna-healthcare.svg' },
  { name: 'UnitedHealthcare', src: '/images/insurance/unitedhealthcare.svg' },
  { name: 'Humana', src: '/images/insurance/humana.svg' },
  { name: 'MultiPlan', src: '/images/insurance/multiplan.svg' },
  { name: 'TRICARE', src: '/images/insurance/tricare.png', size: 'tall' },
  { name: 'And More!', kind: 'text' },
]

const STEPS = [
  { title: 'Reach out', body: 'Call, message or book online. We confirm your goals and schedule the right evaluation slot.' },
  { title: 'Comprehensive eval', body: '45 minutes with a Doctor of Physical Therapy. Movement screen, history, posture and treatment direction.' },
  { title: 'Personalized plan', body: 'A progression built around your real life, sport, work, recovery and home environment.' },
  { title: 'Recover & build', body: 'Hands-on care, exercise progression and root-cause work, session by session.' },
]

const QUOTES = [
  { quote: 'After my knee surgery I was back walking the dog in three weeks. Dr. Ashkani actually listens. Every visit feels custom.', name: 'Recovery client', role: 'Post-op total knee' },
  { quote: 'I had vertigo for months and saw four other providers. The vestibular evaluation here changed everything in two sessions.', name: 'Vestibular patient', role: 'Sherman Oaks' },
  { quote: 'The 1-on-1 time is unreal. No bouncing between PTs, no waiting on a table. Real hands-on work, real progression.', name: 'Sport client', role: 'Return to running' },
]

const HOME_RECOVERY_STEPS = [
  {
    icon: 'mail',
    title: 'Referral or direct access',
    body: 'Your doctor can send a referral, and in many cases we can also guide you through direct access requirements.',
  },
  {
    icon: 'user',
    title: 'Get matched with a PT',
    body: 'We match you with a licensed physical therapist who fits your needs, goals, schedule and location.',
  },
  {
    icon: 'check',
    title: 'Simple intake forms',
    body: 'We help you complete the essentials so insurance, safety and care details are ready before treatment begins.',
  },
  {
    icon: 'home',
    title: 'Receive care at home',
    body: 'Your therapist comes to your home or preferred location and builds a plan around your real environment.',
  },
  {
    icon: 'shield',
    title: 'Evidence-based treatment',
    body: 'One-on-one care follows proven protocols, clinical reasoning and progressions matched to your condition.',
  },
  {
    icon: 'heart',
    title: 'Return to function faster',
    body: 'The goal is better movement, strength, confidence and a safer return to the activities you love.',
  },
]

const HOME_RECOVERY_BENEFITS = [
  { icon: 'home', label: 'Convenient at home' },
  { icon: 'user', label: 'One-on-one attention' },
  { icon: 'shield', label: 'Evidence-based approach' },
  { icon: 'heart', label: 'Focused on you' },
]

const HOME_FAQS = [
  {
    question: 'Do I need a referral or prescription to start physical therapy?',
    answer: [
      'In many cases, you can start physical therapy through direct access, meaning you may not need a referral for your first visit depending on your insurance and condition.',
      'For Medicare patients, a physician plan of care is required and will be coordinated after your evaluation. For PPO and some HMO plans, we will verify requirements and help guide you through the process.',
    ],
  },
  {
    question: 'Does insurance cover home health physical therapy?',
    answer: [
      'Yes. We are in-network with Medicare Part B and many PPO insurance plans, and selected HMO plans.',
      'Coverage depends on your specific plan, and we will verify your benefits before you begin treatment. You are typically responsible only for your copay, deductible, or coinsurance, depending on your insurance policy.',
    ],
  },
  {
    question: 'What if I do not have insurance?',
    answer: [
      'We offer a self-pay option of $130 per visit for a 40-minute one-on-one session.',
      'A small marketplace fee may apply, which supports scheduling systems, safety compliance, and access to licensed therapists.',
    ],
  },
  {
    question: 'Can I always see the same physical therapist?',
    answer: [
      'Yes, we prioritize continuity of care. In most cases, you will see the same physical therapist throughout your treatment.',
      'In rare cases, such as scheduling conflicts, another licensed clinician may provide care while maintaining your treatment plan.',
    ],
  },
  {
    question: 'Where will my appointments take place?',
    answer: [
      'All visits are completed in the comfort of your home or preferred location. This allows therapy to be more functional, practical, and convenient for your daily life.',
    ],
  },
  {
    question: 'How quickly can I start?',
    answer: [
      'Insurance verification and scheduling can typically be completed within a short time. Once confirmed, we will match you with a therapist and schedule your first visit.',
    ],
  },
  {
    question: 'Why choose home health physical therapy instead of a clinic?',
    answer: [
      'Home-based care allows you to receive treatment in your real environment, focusing on everyday movement, safety, and function.',
      'This approach reduces travel, improves convenience, and allows therapy to directly address your home and lifestyle needs.',
      'Our goal is to provide focused, one-on-one care without distractions, so your recovery stays consistent and efficient.',
    ],
  },
  {
    question: 'Do you help with insurance and physician coordination?',
    answer: [
      'Yes. We handle insurance verification, communicate with your physician when needed, and help coordinate your plan of care to ensure compliance and continuity of treatment.',
    ],
  },
  {
    question: 'What areas do you serve?',
    answer: [
      'We provide home health physical therapy across multiple locations in California and adjust scheduling based on your address for convenience and coverage.',
    ],
  },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="section section--hero section--hero-video">
        <div className="hero-video" aria-label="DreamCare home health physical therapy">
          <video className="hero-video__media" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
            <source src="/videos/home-hero-recovery.mp4" type="video/mp4" />
          </video>
          <div className="hero-video__tint" aria-hidden="true" />

          <div className="shell shell--wide hero-video__content">
            <Reveal className="hero__copy hero-video__copy">
              <p className="eyebrow">Home health physical therapy</p>
              <h1 className="h1">
                One-on-one PT that treats the <em>root cause</em>, not just the symptom.
              </h1>

              <p className="lead" style={{ marginTop: '1.4rem' }}>
                Dreamcare is a physical therapists-led practice grounded in a
                holistic approach that recognizes the deep connection between
                mind, body, and Soul.
              </p>

              <div className="btn-row">
                <Link to="/book" className="btn btn--primary">
                  Book an Appointment <Icon name="arrowUpRight" size={16} />
                </Link>
                <Link to="/services" className="btn btn--ghost">See all treatments</Link>
              </div>
              <p className="hero-video__tagline">You deserve it.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* INSURANCE MARQUEE */}
      <div className="insurance-slider insurance-slider--hero" aria-label="Insurance and provider networks">
        <div className="insurance-slider__track">
          {[0, 1].map((set) => (
            <div className="insurance-slider__set" key={set} aria-hidden={set === 1}>
              {INSURANCE_LOGOS.map((logo) => (
                <span
                  className={`insurance-logo${logo.size ? ` insurance-logo--${logo.size}` : ''}${logo.kind === 'text' ? ' insurance-logo--text' : ''}`}
                  key={`${set}-${logo.name}`}
                >
                  {logo.src ? (
                    <img src={logo.src} alt={logo.name} loading="lazy" />
                  ) : (
                    logo.name
                  )}
                </span>
              ))}
            </div>
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
              Personalized Physical Therapy protocol and rehabilitation services in the
              Comfort of Your Home or your work
              <br /><br />
              We provide one-on-one home health physical therapy focused on helping
              patients move pain-free, recover faster, and regain independence and
              function through compassionate, evidence-based care.
            </p>
          </Reveal>

          <div className="grid grid--3">
            {PILLARS.map((p, i) => {
              const hasItems = Array.isArray(p.items)

              return (
                <Reveal
                  key={p.title}
                  delay={i + 1}
                  className={`card service-card${i === 0 ? ' service-card--doctor-led' : ''}${i === 1 ? ' service-card--evidence-based' : ''}${i === 2 ? ' service-card--supportive' : ''}`}
                >
                  <div className="service-card__icon"><Icon name={p.icon} size={26} /></div>
                  <span className="service-card__tag">{p.tag}</span>
                  <h3>{p.title}</h3>
                  {hasItems ? (
                    <ul className="service-card__body service-card__list">
                      {p.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="service-card__body">
                      {p.body}
                    </p>
                  )}
                </Reveal>
              )
            })}
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
                DreamCare is built for active people, runners, lifters, weekend
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
              wait. Call us first to confirm coverage.
            </p>
          </Reveal>

          <div className="insurance-slider" aria-label="Insurance and provider networks">
            <div className="insurance-slider__track">
              {[0, 1].map((set) => (
                <div className="insurance-slider__set" key={set} aria-hidden={set === 1}>
                  {INSURANCE_LOGOS.map((logo) => (
                    <span
                      className={`insurance-logo${logo.size ? ` insurance-logo--${logo.size}` : ''}${logo.kind === 'text' ? ' insurance-logo--text' : ''}`}
                      key={`${set}-${logo.name}`}
                    >
                      {logo.src ? (
                        <img src={logo.src} alt={logo.name} loading="lazy" />
                      ) : (
                        logo.name
                      )}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <Reveal delay={1} className="insurance-note">
            DreamCare PT is a physical therapist-led practice grounded in a holistic
            approach that recognizes the deep connection between mind, body, and heart.
            We provide personalized, compassionate care designed to restore function,
            help you return to daily life and sport activities, and reduce the risk of
            future injuries.
          </Reveal>
        </div>
      </section>

      {/* RECOVERY PATH */}
      <section className="section section--path-home">
        <div className="shell shell--wide">
          <Reveal className="section-head section-head--center">
            <p className="eyebrow">Your path to recovery at home</p>
            <h2 className="h2">Simple steps. <em>Personalized care.</em> Better outcomes.</h2>
            <p className="lead" style={{ marginInline: 'auto', marginTop: '1.15rem' }}>
              From the first call to functional progress, we keep the process clear,
              coordinated and centered around care where you live.
            </p>
          </Reveal>

          <div className="path-home__grid">
            {HOME_RECOVERY_STEPS.map((step, i) => (
              <Reveal key={step.title} delay={(i % 3) + 1} className="path-home__card">
                <div className="path-home__number">{i + 1}</div>
                <div className="path-home__icon"><Icon name={step.icon} size={26} /></div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={2} className="path-home__promise">
            <div>
              <strong>Compassionate care. Expert therapists.</strong>
              <span>Better recovery, right where you are.</span>
            </div>
            <div className="path-home__benefits">
              {HOME_RECOVERY_BENEFITS.map((benefit) => (
                <span key={benefit.label}>
                  <Icon name={benefit.icon} size={18} /> {benefit.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOME FAQ */}
      <section className="section section--home-faq">
        <div className="shell shell--wide home-faq">
          <Reveal className="home-faq__intro">
            <p className="eyebrow">Questions before care</p>
            <h2 className="h2">Clear answers for <em>home health PT</em>.</h2>
            <p>
              Coverage, referrals, scheduling and location details, organized so you can
              understand the next step before your first visit.
            </p>
            <div className="home-faq__contact">
              <span>Need your plan checked?</span>
              <a href={`tel:${BRAND.phoneRaw}`}>
                <Icon name="phone" size={15} /> {BRAND.phone}
              </a>
            </div>
          </Reveal>

          <div className="home-faq__list">
            {HOME_FAQS.map((item, i) => (
              <Reveal key={item.question} delay={(i % 3) + 1}>
                <details className="home-faq__item" open={i === 0}>
                  <summary>
                    <span>{item.question}</span>
                    <Icon name="plus" size={18} />
                  </summary>
                  <div className="home-faq__answer">
                    {item.answer.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </details>
              </Reveal>
            ))}
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
