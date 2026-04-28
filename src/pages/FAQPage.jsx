import { Link } from 'react-router-dom'
import FAQAccordion from '../components/FAQAccordion'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { BRAND } from '../data/site'

const GROUPS = [
  {
    title: 'Getting started',
    items: [
      { q: 'Do I need a doctor\'s referral to start physical therapy?', a: 'In many cases, no. California is a direct-access state and we accept many plans without a referral. Call us first and we\'ll verify your specific coverage so you can skip the waiting room and start sooner.' },
      { q: 'What happens at my first visit?', a: 'A 45-minute one-on-one comprehensive evaluation with Dr. Ashkani. We review your history and imaging, run a movement and orthopedic assessment, do an initial hands-on treatment and walk you out with a clear plan.' },
      { q: 'How long is each session?', a: 'New-client evaluations are 45 minutes. Follow-up sessions are typically 30 minutes of focused 1-on-1 work, with longer 1 hour 15 minute slots reserved for post-surgical and complex rehabilitation cases.' },
      { q: 'How many visits will I need?', a: 'It depends on the condition and stage. Acute issues may resolve in 4–6 visits. Post-surgical and chronic cases typically run 8–14 visits. We re-assess constantly and stop when you\'re ready to manage independently.' },
    ],
  },
  {
    title: 'Insurance & cost',
    items: [
      { q: 'What insurance do you accept?', a: 'We accept nearly all major insurance plans, including PPOs, Medicare, workers\' comp and auto/personal injury. Call us with your carrier and member ID and we\'ll verify your benefits before your first visit.' },
      { q: 'What if you\'re out of network with my insurance?', a: 'Many out-of-network plans still reimburse a portion of PT visits. We\'ll provide a superbill you can submit, and our cash rates ($100 / 30 min, $125 / post-op session) are designed to be fair without insurance involvement.' },
      { q: 'Do I need to pay anything at the time of visit?', a: 'Copays, coinsurance and any out-of-network costs are due at the visit. We accept all major cards, FSA and HSA.' },
      { q: 'What does the comprehensive evaluation cost?', a: 'Pricing depends on insurance coverage and visit type. Vestibular and concussion evaluations are $175 cash, post-injury rehabilitation visits are $125 cash, and standard PT sessions are $100 cash. We\'ll quote you exactly when you call.' },
    ],
  },
  {
    title: 'Specialty care',
    items: [
      { q: 'Do you treat post-surgical patients?', a: 'Yes — total knee, total hip, ACL reconstruction, rotator cuff repair, hip arthroscopy and more. We coordinate directly with your surgical team and follow protocol while pushing you progressively.' },
      { q: 'Can you help with vertigo or dizziness?', a: 'Yes. Dr. Ashkani is certified in vestibular rehabilitation and post-concussion care from the New York Concussion Corner Academy. The 45-minute vestibular evaluation is the right starting point.' },
      { q: 'Do you work with athletes?', a: 'Absolutely. Dr. Ashkani is FIFA-certified and an Olympic team consultant who has worked with gold-medal weightlifting athletes. We build sport-specific return-to-play programs across all activity levels.' },
      { q: 'Do you offer telehealth visits?', a: 'Yes — full 45-minute virtual evaluations and follow-up sessions for clients across California. Telehealth works especially well for movement coaching, exercise progression and post-surgical check-ins.' },
    ],
  },
  {
    title: 'During & after care',
    items: [
      { q: 'Will I work with the same therapist every visit?', a: 'Yes. You see Dr. Ashkani every session — no aides, no rotating providers. That continuity is core to how we treat the root cause.' },
      { q: 'What should I wear and bring?', a: 'Comfortable clothing you can move in — athletic shorts or leggings that allow access to the area being treated. Bring relevant imaging reports if you have them, and your insurance card on the first visit.' },
      { q: 'Will I have homework between sessions?', a: 'Yes — but it will be focused and realistic. We\'d rather you do 10 minutes of the right work daily than 45 minutes you\'ll skip. Programs adapt to your real schedule.' },
      { q: 'Where is the clinic and what are your hours?', a: `${BRAND.address}, ${BRAND.city}. We're open Monday through Saturday, 8am – 6pm, and closed Sunday.` },
    ],
  },
]

export default function FAQPage() {
  return (
    <>
      <section className="inner-hero">
        <div className="shell shell--wide">
          <Reveal className="inner-hero__grid">
            <div>
              <p className="eyebrow">Frequently asked</p>
              <h1 className="h1">Everything you need to know <em>before booking</em>.</h1>
              <p className="lead" style={{ marginTop: '1.4rem' }}>
                Honest answers about how we work, what care costs and what to expect at
                your first visit. Don't see your question? <Link to="/contact" style={{ color: 'var(--primary)', fontWeight: 600 }}>Send us a message →</Link>
              </p>
            </div>
            <div className="inner-hero__art">
              <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                <defs><linearGradient id="fgrad" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#DCC6EE" /><stop offset="1" stopColor="#FBE7B8" /></linearGradient></defs>
                <rect width="400" height="320" fill="url(#fgrad)" />
                <g transform="translate(200 160)" stroke="#8B2FB7" strokeWidth="3" fill="none">
                  <circle r="80" fill="#FFFFFF" />
                  <text x="0" y="18" textAnchor="middle" fontFamily="serif" fontSize="100" fill="#8B2FB7" stroke="none">?</text>
                  <circle r="100" strokeDasharray="6 8" />
                </g>
              </svg>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell shell--tight">
          {GROUPS.map((group, i) => (
            <Reveal key={group.title} delay={(i % 3) + 1} style={{ marginBottom: '3rem' }}>
              <div className="section-head" style={{ marginBottom: '1.5rem' }}>
                <p className="eyebrow">{group.title}</p>
                <h2 className="h2" style={{ fontSize: '1.7rem' }}>
                  {i === 0 && 'Starting with DreamCare.'}
                  {i === 1 && 'Coverage and costs.'}
                  {i === 2 && 'Specialty programs we offer.'}
                  {i === 3 && 'During and after your visits.'}
                </h2>
              </div>
              <FAQAccordion items={group.items} defaultOpen={i === 0 ? 0 : -1} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="shell shell--wide">
          <Reveal className="cta-banner">
            <div>
              <p className="eyebrow">Still have questions?</p>
              <h2 className="h2">We answer the <em>phone</em>.</h2>
              <p>Call or send a message — we'll respond the same business day.</p>
              <div className="btn-row">
                <a href={`tel:${BRAND.phoneRaw}`} className="btn btn--primary">
                  <Icon name="phone" size={16} /> {BRAND.phone}
                </a>
                <Link to="/contact" className="btn btn--cream">Send a message</Link>
              </div>
            </div>
            <div className="cta-banner__art">
              <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
                <circle cx="120" cy="120" r="100" fill="#F5C56A" />
                <text x="120" y="160" textAnchor="middle" fontFamily="serif" fontSize="140" fill="#8B2FB7">?</text>
              </svg>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
