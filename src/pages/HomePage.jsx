import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import { BRAND, CONDITIONS } from '../data/site'

const PILLARS = [
  {
    image: '/images/why-home/slide-1.jpeg',
    title: 'One-on-one care in the comfort of your home',
    body: 'Personalized physical therapy designed around your goals, lifestyle, and recovery.',
    button: 'Book Appointment',
    to: '/book',
  },
  {
    image: '/images/why-home/slide-2.jpeg',
    title: 'Movement, recovery, and confidence restored',
    body: 'Evidence-based treatment focused on reducing pain, improving mobility, and helping you return to daily life.',
    button: 'Explore Services',
    to: '/services',
  },
  {
    image: '/images/why-home/slide-3.jpeg',
    title: 'Compassionate care that treats the root cause',
    body: 'Doctor-led physical therapy focused on long-term results - not just temporary symptom relief.',
  },
]

const INSURANCE_ACCESS_LOGOS = [
  { name: 'Medicare.gov', src: '/images/insurance/medicare.svg' },
  { name: 'Aetna', src: '/images/insurance/aetna.svg' },
  { name: 'Anthem Blue Cross Blue Shield', src: '/images/insurance/anthem-bcbs.svg' },
  { name: 'Cigna Healthcare', src: '/images/insurance/cigna-healthcare.svg' },
  { name: 'UnitedHealthcare', src: '/images/insurance/unitedhealthcare.svg' },
  { name: 'Humana', src: '/images/insurance/humana.svg' },
  { name: 'MultiPlan', src: '/images/insurance/multiplan.svg' },
  { name: 'TRICARE', src: '/images/insurance/tricare.png', size: 'tall' },
  { name: 'Additional plans accepted', kind: 'text' },
]

const HERO_PHONE = BRAND.phone.replace('+1 ', '')

const HERO_FEATURES = [
  {
    icon: 'shield',
    title: 'Trusted Professionals',
    body: '',
  },
  {
    icon: 'home',
    title: 'In-Home Convenience',
    body: '',
  },
  {
    icon: 'user',
    title: 'Personalized Treatment',
    body: '',
  },
]

const HERO_TRUST = [
  {
    icon: 'pin',
    title: 'Serving Southern California',
    body: 'LA, OC, SD & SFV',
  },
  {
    icon: 'shield',
    title: 'Medicare & Insurance',
    body: 'Accepted',
  },
  {
    icon: 'clock',
    title: 'Same-Day Appointments',
    body: 'Available',
  },
]

const CONDITION_CARD_COPY = {
  'back-pain': {
    title: 'Back & Neck Pain',
    body: 'Relieve pain and restore mobility caused by injury, posture, or everyday strain.',
  },
  'shoulder-pain': {
    title: 'Shoulder Pain',
    body: 'Rehabilitation after surgery or injury to help you regain strength and movement.',
  },
  'knee-pain': {
    title: 'Knee Pain',
    body: 'Support for arthritis, ACL injuries, meniscus tears and post-surgical recovery.',
  },
  'hip-pain': {
    title: 'Hip Pain',
    body: 'Relieve hip pain, improve mobility, and return to the activities you enjoy.',
  },
  'ankle-injuries': {
    title: 'Ankle & Foot Injuries',
    body: 'Recover from sprains, instability and injuries to get back on your feet.',
  },
  vestibular: {
    title: 'Vestibular & Concussion Care',
    body: 'Treatment for dizziness, concussions, and balance problems.',
  },
  'balance-fall-prevention': {
    title: 'Balance & Fall Prevention',
    body: 'Improve stability and confidence to reduce your risk of falls.',
  },
  'post-surgical-rehabilitation': {
    title: 'Post-Surgical Rehabilitation',
    body: 'Guided recovery after joint replacement or other surgeries.',
  },
  'hand-upper-extremity-therapy': {
    title: 'Hand & Wrist Therapy',
    body: 'Improve strength, mobility and function after injury or surgery.',
  },
}

const PATIENT_STORIES = [
  { name: 'Recovery client', role: 'Post-op total knee', condition: 'Knee replacement', quote: 'After surgery I was nervous about walking again. The plan was clear, hands-on and steady every week.', outcome: 'Walking the dog in 3 weeks' },
  { name: 'Vestibular patient', role: 'Sherman Oaks', condition: 'Vertigo and balance', quote: 'I had dizziness for months and tried several providers. The vestibular evaluation finally connected the dots.', outcome: 'Driving comfortably again' },
  { name: 'Sport client', role: 'Return to running', condition: 'Running injury', quote: 'I liked having the full session focused on me. The plan felt personal and I started noticing progress pretty quickly.', outcome: 'Back to training pain-free' },
  { name: 'Maya R.', role: 'Low back pain', condition: 'Back and sciatica', quote: 'My home setup and movement habits were part of the issue. The program fixed both.', outcome: 'No flare-ups for 6 months' },
  { name: 'David K.', role: 'Total knee rehab', condition: 'Post-surgical care', quote: 'The visits respected pain but still pushed progress. I felt stronger every session.', outcome: 'Off the cane in 5 weeks' },
  { name: 'Priya S.', role: 'Concussion recovery', condition: 'Vestibular rehab', quote: 'I used to get dizzy just from turning my head too quickly or spending too much time on screens. The exercises were simple to follow and gradually helped me feel normal again.', outcome: 'Back to full workdays' },
  { name: 'Marcus T.', role: 'Tennis player', condition: 'Rotator cuff repair', quote: 'After shoulder surgery, I was worried I wouldn’t get back to tennis the same way. The rehab plan was personalized, challenging in the right way, and helped me return with confidence.', outcome: 'Returned to court confidently' },
  { name: 'Hannah L.', role: 'Trail runner', condition: 'Ankle instability', quote: 'I stopped trusting my ankle on uneven ground. Balance and strength work changed that.', outcome: 'Running trails without taping' },
  { name: 'Joel M.', role: 'Hip arthroscopy', condition: 'Hip impingement', quote: 'I wanted to lift again without guessing. The progression made each phase feel safe.', outcome: 'Back to full workouts' },
  { name: 'Ana V.', role: 'Sports rehab', condition: 'Shoulder pain', quote: 'Every session was focused and practical. I understood what to do and why it mattered.', outcome: 'Pain-free overhead movement' },
  { name: 'Sam P.', role: 'Telehealth client', condition: 'Home exercise guidance', quote: 'Even virtually, the plan felt personal. We adjusted exercises around my space and equipment.', outcome: 'Consistent progress at home' },
  { name: 'Lena B.', role: 'Posture and neck pain', condition: 'Neck pain', quote: 'The desk changes and mobility work made my pain stop coming back every afternoon.', outcome: 'Long workdays without pain' },
  { name: 'Omar N.', role: 'Balance training', condition: 'Fall prevention', quote: 'The visits made my home feel safer and gave me confidence moving around again.', outcome: 'More stable daily walking' },
  { name: 'Grace C.', role: 'Hip replacement', condition: 'Post-op hip rehab', quote: 'Care at home made recovery easier. We practiced the movements I actually needed daily.', outcome: 'Stairs felt normal again' },
  { name: 'Eli W.', role: 'Weekend athlete', condition: 'Knee pain', quote: 'The program rebuilt strength without irritating my knee. It finally felt organized.', outcome: 'Back to weekend games' },
  { name: 'Nina F.', role: 'Hand and wrist', condition: 'Wrist recovery', quote: 'Small details mattered. The exercises helped me use my hand again without guarding.', outcome: 'Returned to daily tasks' },
  { name: 'Cal R.', role: 'Balance and gait', condition: 'Gait training', quote: 'The home visits helped us practice where I was actually struggling, not just in a clinic hallway.', outcome: 'Walking with more confidence' },
  { name: 'Tara J.', role: 'Shoulder replacement', condition: 'Post-op shoulder', quote: 'The progression was calm and consistent. I knew what milestones we were working toward.', outcome: 'Better reach and less pain' },
  { name: 'Ben A.', role: 'Back to lifting', condition: 'Low back rehab', quote: 'We started with the basics and slowly built back up. After a while, lifting didn’t feel intimidating anymore.', outcome: 'Returned to strength training' },
  { name: 'Sophia M.', role: 'Home health PT', condition: 'Mobility and strength', quote: 'Having therapy at home removed the stress of travel and made the plan easier to follow.', outcome: 'More independent at home' },
]

const PATIENT_STORY_TRUST = [
  {
    icon: 'shield',
    title: 'Trusted Professionals',
    body: 'Your care is provided by licensed professionals you can trust.',
  },
  {
    icon: 'user',
    title: 'One-on-One Care',
    body: 'You work directly with your therapist every step of the way.',
  },
  {
    icon: 'home',
    title: 'Care at Home',
    body: 'Convenient, comfortable care in the place you know best.',
  },
  {
    icon: 'heart',
    title: 'Focused on Results',
    body: 'Personalized treatment plans designed around your goals.',
  },
]

const STORY_RATING = [1, 2, 3, 4, 5]

const HOME_RECOVERY_STEPS = [
  {
    icon: 'phone',
    image: '/images/recovery/get-started.jpg',
    title: 'Get Started',
    body: 'Call us or submit a request to discuss your goals, symptoms and location.',
  },
  {
    icon: 'user',
    image: '/images/recovery/get-matched.jpg',
    title: 'Get Matched With a PT',
    body: 'We connect you with a licensed physical therapist based on your needs and schedule.',
  },
  {
    icon: 'home',
    image: '/images/recovery/receive-care.jpg',
    title: 'Receive Care at Home',
    body: 'Personalized one-on-one treatment delivered in the comfort of your home and built around your life.',
  },
]

const HOME_FAQS = [
  {
    icon: 'clipboard',
    question: 'Do I need a referral to start physical therapy?',
    answer: [
      'In many cases, you can begin physical therapy through direct access without needing a referral for your first visit, depending on your insurance plan and condition.',
      'For Medicare patients, a physician plan of care is required and will be coordinated after your evaluation. If additional authorization is needed, our team will help guide you through the process.',
    ],
  },
  {
    icon: 'shield',
    question: 'Does insurance cover home health physical therapy?',
    answer: [
      'Yes. DreamCare PT is in-network with Medicare Part B, many PPO insurance plans, and selected HMO plans.',
      'Coverage varies by plan, and our team will verify your benefits before treatment begins and help you understand any out-of-pocket costs.',
    ],
  },
  {
    icon: 'user',
    question: 'Can I see the same physical therapist every session?',
    answer: [
      'Yes. We prioritize continuity of care, and in most cases you will work with the same physical therapist throughout your treatment.',
      'If scheduling adjustments are ever needed, another licensed clinician may step in while following your established plan of care.',
    ],
  },
  {
    icon: 'home',
    question: 'Where does treatment take place?',
    answer: [
      'All visits take place in the comfort of your home or preferred setting.',
      'Receiving care in your own environment allows therapy to feel more practical, personalized, and connected to your daily routine.',
    ],
  },
  {
    icon: 'clock',
    question: 'How quickly can I get started?',
    answer: [
      'Scheduling and insurance verification can usually be completed within a short time.',
      'Once everything is confirmed, we will match you with a physical therapist and schedule your first in-home visit as soon as possible.',
    ],
  },
  {
    icon: 'pin',
    question: 'What areas do you serve?',
    answer: [
      'DreamCare PT proudly serves patients throughout Southern California, including Los Angeles County, Orange County, San Diego, and the San Fernando Valley.',
      'If you are unsure whether we service your area, feel free to contact us and our team will be happy to assist you.',
    ],
  },
  {
    icon: 'dollar',
    question: 'Do you offer private-pay options?',
    answer: [
      'Yes. We offer private-pay physical therapy sessions for patients without insurance coverage.',
      'Self-pay visits are $130 for a one-on-one session delivered in the comfort of your home. Additional fees may apply depending on location and scheduling needs.',
    ],
  },
]

const FAQ_TOPIC_ITEMS = [
  { icon: 'shield', label: 'Insurance & coverage' },
  { icon: 'calendar', label: 'Appointments & scheduling' },
  { icon: 'home', label: 'Getting started with care at home' },
]

const SERVICE_AREAS_HOME = [
  { icon: 'palm', title: 'Los Angeles County' },
  { icon: 'coast', title: 'Orange County' },
  { icon: 'bridge', title: 'San Diego County' },
  { icon: 'pin', title: 'San Fernando Valley' },
]

const FINAL_CTA_FEATURES = [
  { icon: 'home', title: 'In-Home Convenience' },
  { icon: 'user', title: 'One-on-One Care' },
  { icon: 'shield', title: 'Licensed Professionals' },
  { icon: 'heart', title: 'Personalized Treatment' },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="home-hero" aria-label="DreamCare home health physical therapy">
        <img
          className="home-hero__image"
          src="/images/home-hero-dreamcare.jpeg"
          alt=""
          aria-hidden="true"
        />
        <div className="home-hero__wash" aria-hidden="true" />

        <div className="shell shell--wide home-hero__content">
          <Reveal className="home-hero__copy">
            <p className="eyebrow">Home health physical therapy</p>
            <h1 className="h1">
              DreamCare Physical Therapy treats <em>mind, body, and soul</em>
            </h1>

            <p className="lead">
              Dreamcare PT is a physical therapists-led, evidence-based practice
              providing personalized care in the comfort of your home. We help
              restore function, reduce pain, and prevent future injuries.
            </p>

            <div className="btn-row home-hero__actions">
              <Link to="/book" className="btn btn--primary">
                <Icon name="calendar" size={16} /> Book an Appointment
              </Link>
              <a href={`tel:${BRAND.phoneRaw}`} className="btn btn--call">
                <Icon name="phone" size={16} /> Call {HERO_PHONE}
              </a>
            </div>

            <div className="home-hero__features" aria-label="DreamCare care promises">
              {HERO_FEATURES.map((item) => (
                <div className="home-hero__feature" key={item.title}>
                  <span className="home-hero__feature-icon">
                    <Icon name={item.icon} size={28} />
                  </span>
                  <span>
                    <strong>{item.title}</strong>
                    <small>{item.body}</small>
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

        </div>
      </section>

      <section className="hero-trust-bar" aria-label="DreamCare trust highlights">
        <div className="shell shell--wide hero-trust-bar__grid">
          {HERO_TRUST.map((item) => (
            <div className="hero-trust-bar__item" key={item.title}>
              <Icon name={item.icon} size={30} />
              <span>
                <strong>{item.title}</strong>
                <small>{item.body}</small>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* PILLARS */}
      <section className="section section--why-home" id="why-dreamcare">
        <div className="shell shell--wide">
          <Reveal className="section-head section-head--why-home">
            <p className="eyebrow">Why DreamCare</p>
            <h2 className="h2">Care that actually feels <em>personal</em>.</h2>
            <p className="lead">
              Compassionate one-on-one physical therapy delivered in the comfort of your home.
            </p>
          </Reveal>

          <Reveal delay={1} className="why-home__carousel" aria-label="DreamCare care highlights">
            <div className="why-home__fade-stage">
              {PILLARS.map((p) => (
                <article
                  className="why-home__photo-slide"
                  key={p.title}
                  style={{ '--slide-image': `url(${p.image})` }}
                >
                  <div className="why-home__slide-panel">
                    <h3>{p.title}</h3>
                    <span className="care-card__rule" aria-hidden="true" />
                    <p>{p.body}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="why-home__dots" aria-hidden="true">
              {PILLARS.map((p) => (
                <span key={p.title} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONDITIONS */}
      <section className="section section--conditions-home" id="conditions-home">
        <div className="shell shell--wide">
          <Reveal className="section-head section-head--center section-head--conditions-home">
            <p className="eyebrow">Conditions we treat</p>
            <h2 className="h2">Care for movement, pain, balance and <em>recovery.</em></h2>
          </Reveal>

          <div className="cond-grid">
            {CONDITIONS.map((c, i) => {
              const card = CONDITION_CARD_COPY[c.slug] ?? { title: c.label, body: c.short }

              return (
                <Reveal key={c.slug} delay={(i % 3) + 1}>
                  <Link
                    to={`/conditions#${c.slug}`}
                    className={`cond-card${c.tileImage ? ' cond-card--photo' : ''}`}
                    style={c.tileImage ? {
                      '--cond-image': `url(${c.tileImage})`,
                      '--cond-position': c.tilePosition ?? 'center',
                    } : undefined}
                  >
                    {c.tileImage ? <div className="cond-card__media" aria-hidden="true" /> : null}
                    <div className="cond-card__body">
                      <div className="cond-card__icon"><Icon name={c.icon} size={18} /></div>
                      <h4>{card.title}</h4>
                      <p>{card.body}</p>
                    </div>
                    <div className="cond-card__arrow"><Icon name="arrow" size={13} /></div>
                  </Link>
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={1} className="section-action">
            <Link to="/book" className="btn btn--primary">
              <Icon name="calendar" size={18} /> Book an Appointment
            </Link>
          </Reveal>
        </div>
      </section>

      {/* RECOVERY PATH */}
      <section className="section section--path-home" id="recovery-path">
        <div className="shell shell--wide">
          <Reveal className="section-head section-head--center">
            <p className="eyebrow">Your path to recovery at home</p>
            <h2 className="h2">Simple steps. <em>Personalized care.</em> Better outcomes.</h2>
            <p className="lead" style={{ marginInline: 'auto', marginTop: '1.15rem' }}>
              From the first call to functional progress, we make recovery
              simple, convenient and built around you.
            </p>
          </Reveal>

          <div className="path-home__grid">
            {HOME_RECOVERY_STEPS.map((step, i) => (
              <Reveal key={step.title} delay={(i % 3) + 1} className="path-home__card">
                <div className="path-home__number">{i + 1}</div>
                <div className="path-home__media">
                  <img src={step.image} alt="" loading="lazy" />
                </div>
                <div className="path-home__icon"><Icon name={step.icon} size={27} /></div>
                <h3>{step.title}</h3>
                <span className="path-home__rule" aria-hidden="true" />
                <p>{step.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={1} className="section-action path-home__action">
            <Link to="/book" className="btn btn--primary">
              <Icon name="calendar" size={18} /> Book an Appointment
            </Link>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section section--patient-stories" id="patient-stories-home">
        <div className="shell shell--wide">
          <Reveal className="section-head section-head--center patient-stories__head">
            <p className="eyebrow">Patient stories</p>
            <h2 className="h2">Real progress, one <em>home visit</em> at a time.</h2>
            <p className="lead" style={{ marginTop: '1.1rem' }}>
              Hear from our patients who are moving better, feeling stronger,
              and living with more confidence.
            </p>
          </Reveal>

          <Reveal delay={1} className="patient-story-marquee patient-story-marquee--feature">
            <div className="patient-story-track patient-story-track--feature">
              {[...PATIENT_STORIES, ...PATIENT_STORIES].map((story, i) => (
                <article
                  key={`${story.name}-${i}`}
                  className="patient-story-card patient-story-card--feature"
                  aria-hidden={i >= PATIENT_STORIES.length}
                >
                  <span className="patient-story-card__quote-badge" aria-hidden="true">
                    <span className="patient-story-card__quote-mark" />
                  </span>
                  <div className="patient-story-card__content">
                    <p className="patient-story-card__quote">{story.quote}</p>
                    <span className="patient-story-card__rule" aria-hidden="true" />
                    <span className="patient-story-card__rating" aria-label="5 out of 5 rating">
                      {STORY_RATING.map((star) => (
                        <Icon key={star} name="star" size={17} />
                      ))}
                    </span>
                    <div className="patient-story-card__person">
                      <strong>{story.name}</strong>
                      <span>{story.condition}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal delay={2} className="patient-stories-trust">
            <h3>Care you can trust.</h3>
            <span className="patient-stories-trust__rule" aria-hidden="true" />
            <div className="patient-stories-trust__grid">
              {PATIENT_STORY_TRUST.map((item) => (
                <article className="patient-stories-trust__item" key={item.title}>
                  <span className="patient-stories-trust__icon" aria-hidden="true">
                    <Icon name={item.icon} size={34} />
                  </span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* INSURANCE / TRUST */}
      <section className="section section--insurance-access" id="insurance-access">
        <div className="shell shell--wide">
          <Reveal className="section-head section-head--center">
            <p className="eyebrow">Insurance & access</p>
            <h2 className="h2">In-network with many <em>major insurance</em> plans.</h2>
            <p className="lead" style={{ marginInline: 'auto', marginTop: '1.25rem' }}>
              Some plans accepted without your doctor's referral. Save time and skip the
              wait. Call us first to confirm coverage.
            </p>
          </Reveal>

          <Reveal delay={1} className="insurance-access__divider" aria-hidden="true">
            <span />
            <Icon name="shield" size={22} />
            <span />
          </Reveal>

          <Reveal delay={1} className="insurance-access__marquee" aria-label="Insurance and provider networks">
            <div className="insurance-access__track">
              {[0, 1].map((setIndex) => (
                <div className="insurance-access__set" key={setIndex} aria-hidden={setIndex === 1}>
                  {INSURANCE_ACCESS_LOGOS.map((logo) => (
                    <span
                      className={`insurance-access__logo${logo.size ? ` insurance-access__logo--${logo.size}` : ''}${logo.kind === 'text' ? ' insurance-access__logo--text' : ''}`}
                      key={`${setIndex}-${logo.name}`}
                    >
                      {logo.src ? (
                        <img src={logo.src} alt={setIndex === 0 ? logo.name : ''} loading="eager" />
                      ) : (
                        logo.name
                      )}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={2} className="insurance-access__coverage-note">
            <Icon name="check" size={20} />
            <p>Coverage may vary by plan. Contact us and we'll help verify your benefits.</p>
          </Reveal>
        </div>
      </section>

      {/* HOME FAQ */}
      <section className="section section--home-faq" id="home-faq">
        <div className="shell shell--wide home-faq">
          <Reveal className="home-faq__intro">
            <p className="eyebrow">FAQ</p>
            <h2 className="h2">Clear answers for <em>home health PT</em>.</h2>
            <p className="home-faq__topics-label">Find answers about:</p>
            <ul className="home-faq__topics" aria-label="FAQ topics">
              {FAQ_TOPIC_ITEMS.map((item) => (
                <li key={item.label}>
                  <span aria-hidden="true">
                    <Icon name={item.icon} size={24} />
                  </span>
                  <strong>{item.label}</strong>
                </li>
              ))}
            </ul>
            <div className="home-faq__contact">
              <span className="home-faq__contact-icon" aria-hidden="true">
                <Icon name="help" size={34} />
              </span>
              <strong>Still have a question?</strong>
              <span>We're here to help.</span>
              <a href={`tel:${BRAND.phoneRaw}`}>
                <Icon name="phone" size={16} /> {BRAND.phone}
              </a>
            </div>
          </Reveal>

          <div className="home-faq__list">
            {HOME_FAQS.map((item, i) => (
              <Reveal key={item.question} delay={(i % 3) + 1}>
                <details className="home-faq__item">
                  <summary>
                    <span className="home-faq__item-icon" aria-hidden="true">
                      <Icon name={item.icon} size={25} />
                    </span>
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
      <section className="section section--service-areas" id="service-areas">
        <div className="shell shell--wide">
          <Reveal className="section-head section-head--center service-areas__head">
            <p className="eyebrow">Where we serve</p>
            <span className="service-areas__rule" aria-hidden="true" />
            <h2 className="h2">
              Proudly serving patients across <em>Southern California.</em>
            </h2>
            <p className="lead" style={{ marginInline: 'auto', marginTop: '1.1rem' }}>
              We bring expert, one-on-one physical therapy directly to you,
              in the comfort and convenience of your home.
            </p>
          </Reveal>

          <Reveal delay={1} className="service-areas__cards">
            {SERVICE_AREAS_HOME.map((area) => (
              <article className="service-area-card" key={area.title}>
                <span aria-hidden="true">
                  <Icon name={area.icon} size={42} />
                </span>
                <h3>{area.title}</h3>
              </article>
            ))}
          </Reveal>

          <Reveal delay={2} className="service-areas__contact">
            <Icon name="pin" size={22} />
            <p>
              Not sure if we service your area? <Link to="/contact">Contact our team</Link> and
              we'll be happy to help.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--final-cta" id="book-home">
        <div className="shell shell--wide">
          <Reveal className="cta-banner">
            <div className="cta-banner__copy">
              <p className="eyebrow">Take the first step</p>
              <span className="cta-banner__rule" aria-hidden="true" />
              <h2 className="h2">DreamCare. <em>You deserve it.</em></h2>
              <p>
                Book a one-on-one evaluation with a licensed Doctor of Physical Therapy
                and begin a care plan built around your goals.
              </p>
              <div className="btn-row">
                <Link to="/book" className="btn btn--primary">
                  <Icon name="calendar" size={18} /> Book Appointment
                </Link>
                <a href={`tel:${BRAND.phoneRaw}`} className="btn btn--cream">
                  <Icon name="phone" size={18} /> {BRAND.phone}
                </a>
              </div>
            </div>
            <div className="cta-banner__art">
              <img src="/images/cta/home-care-cta.jpg" alt="" aria-hidden="true" loading="lazy" />
              <span className="cta-banner__home-line" aria-hidden="true" />
            </div>
          </Reveal>

          <Reveal delay={1} className="final-cta-features">
            {FINAL_CTA_FEATURES.map((feature) => (
              <article className="final-cta-feature" key={feature.title}>
                <span aria-hidden="true"><Icon name={feature.icon} size={35} /></span>
                <h3>{feature.title}</h3>
              </article>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  )
}
