const visitPrograms = [
  {
    title: 'In-home physical therapy',
    description:
      'For clients who want a physical therapist to come directly to the home for guided treatment and recovery support.',
  },
  {
    title: 'Post-surgical home recovery',
    description:
      'For clients rebuilding strength, mobility, and confidence after a procedure or hospitalization.',
  },
  {
    title: 'Sport and wellness care',
    description:
      'For active adults and wellness-focused clients working on movement quality, return to activity, and daily performance.',
  },
]

const prepItems = [
  'Client name and preferred contact details',
  'Home address or visit location',
  'Reason for care, injury, surgery, or goal',
  'Preferred schedule and any movement concerns',
]

const visitSteps = [
  'Share the client details and what support is needed.',
  'DreamCare reviews the request and helps shape the visit plan.',
  'A physical therapist is matched for the in-home visit.',
  'Care begins with treatment and next-step guidance at home.',
]

function RequestStaffPage() {
  return (
    <>
      <section className="page-section page-section--hero page-section--inner">
        <div className="page-hero surface-card">
          <div className="page-hero__content">
            <p className="eyebrow">Book a Visit</p>
            <h1 className="page-title">
              Request an in-home physical therapist from DreamCare.
            </h1>
            <p className="page-copy page-copy--lead">
              This page now works as a clean starting point for new clients,
              families, or referral partners who want to book in-home physical
              therapy, sport recovery, or wellness support.
            </p>
          </div>

          <div className="page-hero__aside">
            <div className="aside-card">
              <span className="aside-card__label">Use this page for</span>
              <strong>Home PT requests, post-surgical visits, movement recovery, sport rehab, and wellness support.</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-head">
          <p className="eyebrow">Visit Types</p>
          <h2 className="section-title">The main ways clients can request care through DreamCare.</h2>
        </div>

        <div className="card-grid card-grid--three">
          {visitPrograms.map((program) => (
            <article className="surface-card info-card" key={program.title}>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section page-section--band">
        <div className="form-layout">
          <form className="surface-card form-card">
            <div className="section-head section-head--compact">
              <p className="eyebrow">Visit Request Form</p>
              <h2 className="section-title">Share the basics and we can shape the home PT visit from there.</h2>
            </div>

            <div className="form-grid">
              <label>
                Client name
                <input placeholder="Jordan Parker" type="text" />
              </label>
              <label>
                Contact phone
                <input placeholder="(555) 123-4567" type="text" />
              </label>
              <label>
                Email
                <input placeholder="jordan@example.com" type="email" />
              </label>
              <label>
                Visit type
                <select defaultValue="In-home physical therapy">
                  <option>In-home physical therapy</option>
                  <option>Post-surgical recovery</option>
                  <option>Sport rehabilitation</option>
                  <option>Wellness and mobility support</option>
                </select>
              </label>
              <label className="form-grid__full">
                Home address or visit location
                <input placeholder="123 Main Street, City, State" type="text" />
              </label>
              <label className="form-grid__full">
                What support is needed?
                <textarea
                  placeholder="Tell DreamCare about the client’s goals, current condition, injury, surgery, or movement concerns."
                  rows="6"
                />
              </label>
            </div>

            <button className="button button--primary" type="button">
              Request a Visit
            </button>
          </form>

          <div className="stack-column">
            <article className="surface-card detail-card">
              <p className="eyebrow">What to Prepare</p>
              <ul className="feature-list">
                {prepItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="surface-card detail-card">
              <p className="eyebrow">DreamCare Visit Flow</p>
              <ol className="ordered-list">
                {visitSteps.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

export default RequestStaffPage
