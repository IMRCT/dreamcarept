import { Link } from 'react-router-dom'
import FallbackImage from '../components/FallbackImage'
import Reveal from '../components/Reveal'

const QUOTES = [
  { quote: 'I had nagging back pain for two years and tried everything. Three weeks with Dr. Ashkani and the difference is night and day. He found the actual cause — not just chased the pain.', name: 'Maya R.', role: 'Chronic low back pain', tone: 'mint' },
  { quote: 'Post-knee-replacement rehab. I was walking without a cane in five weeks. Doctor-led every visit, real progression every time. Worth every minute.', name: 'David K.', role: 'Total knee rehab', tone: 'sun' },
  { quote: 'After my concussion the dizziness was making me skip work. The vestibular eval was the most thorough I have had. Two weeks in I could drive again confidently.', name: 'Priya S.', role: 'Vestibular & concussion', tone: 'coral' },
  { quote: 'I tore my rotator cuff playing tennis. Surgeon recommended Dr. Ashkani for rehab. I am back on the court — and stronger than I was before the injury.', name: 'Marcus T.', role: 'Rotator cuff post-op', tone: 'mint' },
  { quote: 'My ankle had been giving out for years. We rebuilt the strength and balance from scratch. I trail run again without taping it.', name: 'Hannah L.', role: 'Chronic ankle instability', tone: 'sun' },
  { quote: 'I had FAI surgery and was nervous about rehab. Dr. Ashkani worked directly with my surgeon and pushed me at exactly the right pace.', name: 'Joel M.', role: 'Hip FAI post-op', tone: 'coral' },
  { quote: 'The 1-on-1 attention is real. Forty-five focused minutes, hands-on, every visit. I never once felt like a number on a clipboard.', name: 'Ana V.', role: 'Sports rehab', tone: 'mint' },
  { quote: 'Telehealth sessions while I was recovering at home — full evaluation, exercise progressions and check-ins. Honestly better than some in-person care I had before.', name: 'Sam P.', role: 'Telehealth client', tone: 'sun' },
  { quote: 'I work from a desk all day and was stuck with neck pain. Dr. Ashkani fixed the posture and movement issues at the root. Six months later, no recurrence.', name: 'Lena B.', role: 'Cervical pain & posture', tone: 'coral' },
]

import { StoryArt } from '../components/Illustrations'

export default function TestimonialsPage() {
  return (
    <>
      <section className="inner-hero">
        <div className="shell shell--wide">
          <Reveal className="inner-hero__grid">
            <div>
              <p className="eyebrow">Testimonials</p>
              <h1 className="h1">Real recoveries. <em>Real people.</em></h1>
              <p className="lead" style={{ marginTop: '1.4rem' }}>
                Stories from clients who showed up, did the work and got their movement back.
                Names abbreviated for privacy.
              </p>
            </div>
            <div className="inner-hero__art">
              <FallbackImage src="/images/testimonials-hero.png" fallback="/images/patient-story-card.png" alt="Five-star testimonial illustration with speech bubble and heart icon" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell shell--wide">
          <div className="grid grid--3">
            {QUOTES.map((q, i) => (
              <Reveal key={q.name + i} delay={(i % 3) + 1} className="quote-card">
                <p>{q.quote}</p>
                <div className="quote-card__author">
                  <span className="quote-card__avatar">{q.name.split(' ').map(w => w[0]).slice(0, 2).join('')}</span>
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

      <section className="section">
        <div className="shell shell--wide">
          <Reveal className="cta-banner">
            <div>
              <p className="eyebrow">Your story is next</p>
              <h2 className="h2">Start with a <em>doctor-led evaluation</em>.</h2>
              <p>One conversation, one assessment — and a clear path forward.</p>
              <div className="btn-row">
                <Link to="/book" className="btn btn--primary">Book Appointment</Link>
                <Link to="/patient-stories" className="btn btn--cream">Read patient stories</Link>
              </div>
            </div>
            <div className="cta-banner__art"><StoryArt tone="sun" /></div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
