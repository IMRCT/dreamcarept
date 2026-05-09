import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import { CTAArt } from '../components/Illustrations'
import { BRAND, CONDITIONS } from '../data/site'

const PILLARS = [
  {
    title: 'Individualized treatment',
    body: 'Every treatment plan is customized to your goals, condition, lifestyle and home environment. By bringing care directly to you, recovery becomes more comfortable, practical and focused on long-term function.',
  },
  {
    title: 'Rehabilitation services',
    body: 'Sessions can include manual therapy, joint mobilization, personalized exercise progression, vestibular and concussion rehabilitation, orthopedic and sports injury care, neurological rehabilitation, gait training and fall-risk prevention.',
  },
  {
    title: 'Supportive Care You Can Trust',
    body: 'Our team provides hands-on care, clear guidance and open communication to help you feel confident throughout recovery. Therapy stays simple, supportive and focused on helping you move better and live more independently.',
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

const PATIENT_STORIES = [
  { name: 'Recovery client', role: 'Post-op total knee', condition: 'Knee replacement', quote: 'After surgery I was nervous about walking again. The plan was clear, hands-on and steady every week.', outcome: 'Walking the dog in 3 weeks' },
  { name: 'Vestibular patient', role: 'Sherman Oaks', condition: 'Vertigo and balance', quote: 'I had dizziness for months and tried several providers. The vestibular evaluation finally connected the dots.', outcome: 'Driving comfortably again' },
  { name: 'Sport client', role: 'Return to running', condition: 'Running injury', quote: 'The 1-on-1 time felt different. No waiting around, no generic program, just real progression.', outcome: 'Back to training pain-free' },
  { name: 'Maya R.', role: 'Low back pain', condition: 'Back and sciatica', quote: 'My home setup and movement habits were part of the issue. The program fixed both.', outcome: 'No flare-ups for 6 months' },
  { name: 'David K.', role: 'Total knee rehab', condition: 'Post-surgical care', quote: 'The visits respected pain but still pushed progress. I felt stronger every session.', outcome: 'Off the cane in 5 weeks' },
  { name: 'Priya S.', role: 'Concussion recovery', condition: 'Vestibular rehab', quote: 'Screen time and head turns used to trigger symptoms. The exercises were precise and manageable.', outcome: 'Back to full workdays' },
  { name: 'Marcus T.', role: 'Tennis player', condition: 'Rotator cuff repair', quote: 'The shoulder plan matched my surgical protocol and my goal of playing tennis again.', outcome: 'Returned to court confidently' },
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
  { name: 'Ben A.', role: 'Back to lifting', condition: 'Low back rehab', quote: 'We rebuilt the basics first, then lifting started feeling possible again.', outcome: 'Returned to strength training' },
  { name: 'Sophia M.', role: 'Home health PT', condition: 'Mobility and strength', quote: 'Having therapy at home removed the stress of travel and made the plan easier to follow.', outcome: 'More independent at home' },
]

const HOME_RECOVERY_STEPS = [
  {
    icon: 'mail',
    title: 'Referral or direct access',
    body: 'Your doctor can send a referral, or we can help you understand whether direct access is available for your plan.',
  },
  {
    icon: 'user',
    title: 'Get matched with a PT',
    body: 'We match you with a licensed physical therapist based on your condition, goals, schedule and location.',
  },
  {
    icon: 'check',
    title: 'Complete simple forms',
    body: 'We guide the intake process so insurance, medical history and care details are ready before treatment begins.',
  },
  {
    icon: 'home',
    title: 'Receive care at home',
    body: 'Your therapist comes to your home or preferred setting and builds treatment around your real environment.',
  },
  {
    icon: 'shield',
    title: 'Evidence-based treatment',
    body: 'One-on-one care follows clinical reasoning, proven methods and progressions matched to your recovery stage.',
  },
  {
    icon: 'heart',
    title: 'Return to function',
    body: 'The goal is better movement, strength and confidence for a safer return to the activities you love.',
  },
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
      'Sherman Oaks is our center point. We serve nearby cities and neighborhoods within about a 20-mile range, and we adjust scheduling based on your address for convenience and coverage.',
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
                One-on-one PT that treats the <em>root cause</em>, not just the symptom
              </h1>

              <p className="lead" style={{ marginTop: '1.4rem' }}>
                Dreamcare PT is a physical therapists-led holistic and evidenvce-based
                practice in California. Quality over quantity. personalized care in your home, designed to restore function and prevent further injuries
              </p>

              <div className="btn-row">
                <Link to="/book" className="btn btn--primary">
                  Book an Appointment <Icon name="arrowUpRight" size={16} />
                </Link>
              </div>
              <p className="hero-video__tagline" style={{ fontSize: '1.2em' }}>You deserve it</p>
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
              
              We provide one-on-one home health physical therapy focused on helping
              you move pain-free, recover faster, and regain independence and
              function through compassionate, evidence-based care.
            </p>
          </Reveal>

          <div className="grid grid--3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i + 1} className="card care-card">
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
          <Reveal className="section-head section-head--center">
            <p className="eyebrow">Conditions we treat</p>
            <h2 className="h2">Care for movement, pain, balance and recovery.</h2>
          </Reveal>

          <div className="cond-grid">
            {CONDITIONS.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 3) + 1}>
                <Link
                  to={`/conditions/${c.slug}`}
                  className={`cond-card${c.tileImage ? ' cond-card--photo' : ''}`}
                  style={c.tileImage ? {
                    '--cond-image': `url(${c.tileImage})`,
                    '--cond-position': c.tilePosition ?? 'center',
                  } : undefined}
                >
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

          <Reveal delay={1} className="section-action">
            <Link to="/services" className="btn btn--ghost">Services details</Link>
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
              From the first call to functional progress, each step is clear,
              coordinated and built around care where you live.
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
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section section--mint section--patient-stories">
        <div className="shell shell--wide">
          <Reveal className="section-head section-head--wide-title patient-stories__head">
            <p className="eyebrow">Patient stories</p>
            <h2 className="h2">Real progress, one <em>home visit</em> at a time.</h2>
            <p className="lead" style={{ marginTop: '1.1rem' }}>
              A growing library of recovery snapshots, moving gently so each story
              stays easy to scan without crowding the page.
            </p>
          </Reveal>

          <Reveal delay={1} className="patient-story-marquee">
            <div className="patient-story-track patient-story-track--auto">
              {[...PATIENT_STORIES, ...PATIENT_STORIES].map((story, i) => (
                <article
                  key={`${story.name}-${i}`}
                  className="patient-story-card patient-story-card--slide"
                  aria-hidden={i >= PATIENT_STORIES.length}
                >
                  <div className="patient-story-card__top">
                    <span className="patient-story-card__avatar">{story.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}</span>
                    <span>{story.condition}</span>
                  </div>
                  <p className="patient-story-card__quote">{story.quote}</p>
                  <div className="patient-story-card__person">
                    <strong>{story.name}</strong>
                    <span>{story.role}</span>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
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
              Centered in Sherman Oaks. Serving nearby cities within a <em>20-mile range</em>.
            </h2>
            <div className="locations locations--marquee" aria-label="Cities and neighborhoods served within 20 miles of Sherman Oaks">
              <div className="locations__track">
                {[0, 1].map((set) => (
                  <div className="locations__set" key={set} aria-hidden={set === 1}>
                    {BRAND.serviceAreas.map((area) => (
                      <span key={`${set}-${area}`} className="location-pill">
                        <Icon name="pin" size={14} /> {area}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
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
