import './App.css'

const metrics = [
  { value: '96%', label: 'fill rate on urgent coverage requests' },
  { value: '4 hr', label: 'average time to first qualified shortlist' },
  { value: '50+', label: 'credential checks before placement approval' },
  { value: '24/7', label: 'support coverage for facilities and clinicians' },
]

const featureCards = [
  {
    title: 'Fast reliable matching',
    description:
      'Route open shifts to the right clinicians faster with a cleaner intake flow and verified talent pools.',
  },
  {
    title: 'High trust credentialing',
    description:
      'Keep compliance visible with license, skills, and onboarding checkpoints that stay easy to audit.',
  },
  {
    title: 'Flexible staffing models',
    description:
      'Support per diem, contract, local, travel, and long-term coverage without rebuilding the workflow.',
  },
]

const audiences = [
  {
    title: 'For facilities',
    description:
      'A sharper base for hospital groups, rehab networks, clinics, and home health teams that need dependable coverage.',
    highlights: [
      'Live request intake with priority-based triage',
      'Shared visibility into credential status and readiness',
      'Clean handoff from staffing request to confirmed placement',
    ],
    cta: 'Request staffing support',
  },
  {
    title: 'For clinicians',
    description:
      'A polished starting point for therapists, nurses, and allied professionals looking for transparent opportunities.',
    highlights: [
      'Role cards with pay, schedule, and location at a glance',
      'Quick view of specialties, onboarding, and support access',
      'Career-first messaging that feels premium instead of generic',
    ],
    cta: 'Explore open roles',
  },
]

const protocolSteps = [
  {
    number: '01',
    title: 'Intake',
    description:
      'Capture facility goals, unit needs, shift windows, and urgency without a cluttered request flow.',
  },
  {
    number: '02',
    title: 'Verification',
    description:
      'Review licenses, fit, readiness, and compliance checkpoints before presenting talent.',
  },
  {
    number: '03',
    title: 'Matching',
    description:
      'Surface the most relevant clinicians based on specialty, availability, and location.',
  },
  {
    number: '04',
    title: 'Continuity',
    description:
      'Keep communication, support, and staffing health visible after the shift is confirmed.',
  },
]

const shiftCards = [
  {
    role: 'Physical Therapist',
    facility: 'North Ridge Rehab',
    rate: '$88/hr',
    meta: 'Austin, TX  |  Mon-Fri  |  8:00-17:00',
    accent: 'cyan',
    urgent: true,
  },
  {
    role: 'Occupational Therapist',
    facility: 'Central Care Medical',
    rate: '$81/hr',
    meta: 'Round Rock, TX  |  Tue-Thu  |  7:00-15:00',
    accent: 'violet',
  },
  {
    role: 'Speech Language Pathologist',
    facility: 'Bright Path Pediatrics',
    rate: '$93/hr',
    meta: 'Georgetown, TX  |  Fri  |  9:00-15:00',
    accent: 'rose',
  },
]

const testimonials = [
  {
    quote:
      'Medicore feels like a premium staffing command center instead of another agency landing page.',
    name: 'Avery Brooks',
    title: 'VP of Clinical Operations',
  },
  {
    quote:
      'The clinician path is clear, transparent, and modern. That is exactly the tone a healthcare brand needs.',
    name: 'Mina Patel',
    title: 'Director of Talent',
  },
  {
    quote:
      'This gives us a strong visual base we can expand into a full brand site without starting over later.',
    name: 'Jordan Ellis',
    title: 'Product and Growth Lead',
  },
]

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="topbar__inner">
          <a className="brand" href="#hero">
            Medicore Staffing
          </a>

          <nav className="topbar__nav" aria-label="Primary">
            <a href="#solutions">Solutions</a>
            <a href="#audiences">Audiences</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="button button--primary button--small" href="#contact">
            Request Staff
          </a>
        </div>
      </header>

      <main>
        <section className="hero section" id="hero">
          <div className="hero__copy reveal">
            <p className="eyebrow">Modern Healthcare Staffing Network</p>
            <h1>
              Reliable staffing,
              <span> built for modern care teams.</span>
            </h1>
            <p className="hero__lede">
              Medicore connects facilities with verified clinicians through a
              faster, clearer staffing experience. This base homepage is styled
              to match the dark editorial look and neon energy from your
              reference pack.
            </p>

            <div className="hero__actions">
              <a className="button button--primary" href="#contact">
                Partner With Us
              </a>
              <a className="button button--ghost" href="#shift-board">
                Explore Open Roles
              </a>
            </div>

            <ul className="hero__chips" aria-label="Featured specialties">
              <li>PT coverage</li>
              <li>OT and SLP</li>
              <li>Allied health</li>
              <li>Per diem and contract</li>
            </ul>
          </div>

          <div className="hero__visual reveal reveal--delay">
            <div className="hero__halo hero__halo--rose" aria-hidden="true" />
            <div className="hero__halo hero__halo--cyan" aria-hidden="true" />

            <div className="hero__frame glass-card">
              <div className="hero__signal">
                <span className="hero__signal-dot" />
                <span>Live coverage console</span>
              </div>

              <div className="dashboard">
                <div className="dashboard__item">
                  <div>
                    <strong>ICU and rehab coverage</strong>
                    <span>Prioritized requests in active review</span>
                  </div>
                  <b>98% filled</b>
                </div>

                <div className="dashboard__item">
                  <div>
                    <strong>Credentialing pulse</strong>
                    <span>New candidates ready for submission</span>
                  </div>
                  <b>14 verified</b>
                </div>

                <div className="dashboard__item">
                  <div>
                    <strong>Open shift urgency</strong>
                    <span>Escalations routed to after-hours team</span>
                  </div>
                  <b>4 active</b>
                </div>
              </div>

              <div className="hero__cards">
                <article className="mini-card mini-card--accent">
                  <p>Credential speed</p>
                  <strong>Shortlisted in under 4 hours</strong>
                </article>
                <article className="mini-card">
                  <p>Top specialties</p>
                  <strong>RN, PT, OT, SLP, allied health</strong>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--compact">
          <div className="metrics-grid">
            {metrics.map((metric) => (
              <article className="metric-card reveal" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="solutions">
          <div className="section-heading reveal">
            <p className="eyebrow">Engineered for Efficiency</p>
            <h2>A stronger visual and content base for the real build.</h2>
            <p>
              The layout below gives us the same premium feel as the references
              while keeping the structure flexible for your official launch.
            </p>
          </div>

          <div className="feature-grid">
            {featureCards.map((feature) => (
              <article className="feature-card reveal" key={feature.title}>
                <span className="feature-card__badge" aria-hidden="true" />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--surface" id="audiences">
          <div className="section-heading section-heading--split reveal">
            <div>
              <p className="eyebrow">Who We Serve</p>
              <h2>One brand base for both facility demand and clinician growth.</h2>
            </div>
            <p>
              This lets us keep the homepage balanced between operational trust
              and talent attraction, just like the best parts of the reference
              set.
            </p>
          </div>

          <div className="audience-grid">
            {audiences.map((audience) => (
              <article className="audience-card glass-card reveal" key={audience.title}>
                <p className="eyebrow">{audience.title}</p>
                <h3>{audience.description}</h3>
                <ul>
                  {audience.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a className="text-link" href="#contact">
                  {audience.cta}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="process">
          <div className="section-heading reveal">
            <p className="eyebrow">The Medicore Flow</p>
            <h2>Four steps that turn staffing urgency into confident coverage.</h2>
            <p>
              The process section is already structured for future timelines,
              integrations, platform screenshots, or animated explainers.
            </p>
          </div>

          <div className="protocol-grid">
            {protocolSteps.map((step) => (
              <article className="protocol-card reveal" key={step.number}>
                <span className="protocol-card__number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--surface" id="shift-board">
          <div className="section-heading section-heading--split reveal">
            <div>
              <p className="eyebrow">Live Shift Board</p>
              <h2>Sample marketplace styling for the clinician side of the brand.</h2>
            </div>
            <p>
              The map and cards are placeholders for now, but the visual system
              is ready for real jobs, filters, and location data.
            </p>
          </div>

          <div className="shift-layout">
            <div className="map-card glass-card reveal" aria-hidden="true">
              <div className="map-card__grid" />
              <span className="map-card__marker map-card__marker--one" />
              <span className="map-card__marker map-card__marker--two" />
              <span className="map-card__marker map-card__marker--three" />
              <div className="map-card__label">Austin region availability</div>
            </div>

            <div className="shift-list">
              {shiftCards.map((shift) => (
                <article
                  className={`shift-card shift-card--${shift.accent} reveal`}
                  key={shift.role}
                >
                  {shift.urgent ? <span className="shift-card__flag">Urgent</span> : null}
                  <div className="shift-card__top">
                    <div>
                      <h3>{shift.role}</h3>
                      <p>{shift.facility}</p>
                    </div>
                    <strong>{shift.rate}</strong>
                  </div>
                  <span className="shift-card__meta">{shift.meta}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-heading reveal">
            <p className="eyebrow">Brand Direction</p>
            <h2>Premium, high-trust, and clearly healthcare without feeling generic.</h2>
            <p>
              These testimonial cards are placeholder content, but they help us
              test hierarchy, spacing, and the glass-card treatment across the
              full homepage.
            </p>
          </div>

          <div className="quote-grid">
            {testimonials.map((testimonial) => (
              <article className="quote-card glass-card reveal" key={testimonial.name}>
                <p className="quote-card__quote">"{testimonial.quote}"</p>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.title}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--cta" id="contact">
          <div className="contact-shell">
            <div className="contact-copy reveal">
              <p className="eyebrow">Ready for the Official Build</p>
              <h2>Request a staffing audit or start the next design round.</h2>
              <p>
                This contact area gives us a clean base for a future lead form,
                recruiter workflow, or CTA block once you lock the final content.
              </p>

              <ul className="contact-points">
                <li>No-obligation facility review</li>
                <li>Direct line to a regional specialist</li>
                <li>Future-ready structure for a real conversion form</li>
              </ul>
            </div>

            <form className="contact-form glass-card reveal reveal--delay">
              <label>
                Full name
                <input placeholder="Jordan Parker" type="text" />
              </label>
              <label>
                Work email
                <input placeholder="jordan@medicore.com" type="email" />
              </label>
              <label>
                Organization
                <input placeholder="Medicore Staffing" type="text" />
              </label>
              <label>
                Primary need
                <select defaultValue="Therapy coverage">
                  <option>Therapy coverage</option>
                  <option>Nursing coverage</option>
                  <option>Allied health staffing</option>
                  <option>Platform and brand redesign</option>
                </select>
              </label>
              <label className="contact-form__message">
                Message
                <textarea
                  placeholder="Tell us what the official launch should prioritize."
                  rows="5"
                />
              </label>
              <button className="button button--primary button--full" type="button">
                Start the next phase
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__inner">
          <a className="brand" href="#hero">
            Medicore Staffing
          </a>
          <div className="footer__links">
            <a href="#solutions">Solutions</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </div>
          <p>Base homepage scaffold for the upcoming official Medicore build.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
