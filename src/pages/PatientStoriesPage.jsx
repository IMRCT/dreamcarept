import { Link } from 'react-router-dom'
import FallbackImage from '../components/FallbackImage'
import Reveal from '../components/Reveal'
import { StoryArt } from '../components/Illustrations'

const STORIES = [
  {
    name: 'Maya R.',
    age: 42,
    condition: 'Chronic low back pain & sciatica',
    duration: '8 weeks',
    summary: 'Two years of nagging pain, multiple providers, no real progress. Imaging showed mild disc bulge with sciatic involvement.',
    plan: 'Manual therapy, neural mobilization, lumbar stabilization and a graded return to deadlifts. Ergonomic overhaul of her work-from-home setup.',
    outcome: 'Pain-free for 6+ months. Back to deadlifting body-weight and lifting her kids without flares.',
    tone: 'mint',
  },
  {
    name: 'David K.',
    age: 67,
    condition: 'Total knee replacement — left',
    duration: '10 weeks',
    summary: 'Right knee replaced two years ago elsewhere with a slow recovery. Wanted a different experience for the left.',
    plan: 'Aggressive but pain-respecting ROM work, quad reactivation with NMES, BFR for safer strength, gait retraining.',
    outcome: 'Off the cane in 5 weeks. Walking 3 miles by week 10. Hiking again at month 4.',
    tone: 'sun',
  },
  {
    name: 'Priya S.',
    age: 29,
    condition: 'Post-concussion syndrome with vertigo',
    duration: '5 weeks',
    summary: 'Bike accident, post-concussion symptoms persisted for 4 months. Dizziness with screen use and head turns.',
    plan: 'Vestibular rehab — gaze stabilization, habituation, cervical mobility. Graded return to screen and work tasks.',
    outcome: 'Driving comfortably again at week 2. Symptom-free at work by week 5.',
    tone: 'coral',
  },
  {
    name: 'Marcus T.',
    age: 38,
    condition: 'Rotator cuff repair (supraspinatus)',
    duration: '14 weeks',
    summary: 'Recreational tennis player. Full-thickness tear, surgical repair, shoulder-conscious for years.',
    plan: 'Protocol-paced ROM and gentle activation in early phase, scapular stabilizers, then sport-specific overhead progression.',
    outcome: 'Cleared for return to tennis at 14 weeks. Reports shoulder feels stronger than pre-injury.',
    tone: 'mint',
  },
  {
    name: 'Hannah L.',
    age: 31,
    condition: 'Chronic ankle instability',
    duration: '6 weeks',
    summary: 'Multiple sprains over 6 years from trail running. Ankle felt unreliable on uneven ground.',
    plan: 'Peroneal strengthening, single-leg balance progression, plyometric reintroduction, ankle mobility.',
    outcome: 'Returned to trail running with no taping. No re-sprain at 9-month check-in.',
    tone: 'sun',
  },
  {
    name: 'Joel M.',
    age: 34,
    condition: 'FAI hip arthroscopy — right',
    duration: '12 weeks',
    summary: 'Cam-type FAI with labral repair. Active CrossFitter, anxious about returning to lifting.',
    plan: 'Phased post-op protocol, hip stability and motor control, glute progression, sport-specific lifts in late phase.',
    outcome: 'Cleared for full CrossFit programming at 12 weeks. PR\'ing in his squat at 6 months.',
    tone: 'coral',
  },
]

export default function PatientStoriesPage() {
  return (
    <>
      <section className="inner-hero">
        <div className="shell shell--wide">
          <Reveal className="inner-hero__grid">
            <div>
              <p className="eyebrow">Patient stories</p>
              <h1 className="h1">Real recoveries — start to <em>finish</em>.</h1>
              <p className="lead" style={{ marginTop: '1.4rem' }}>
                Six clients who came in stuck and walked out moving. Each story
                shows the diagnosis, the plan and the outcome — so you can see how
                doctor-led PT actually works.
              </p>
            </div>
            <div className="inner-hero__art"><StoryArt tone="mint" /></div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell shell--wide">
          <div className="grid grid--3">
            {STORIES.map((s, i) => (
              <Reveal key={s.name} delay={(i % 3) + 1} className="story-card">
                <div className="story-card__art">
                  <FallbackImage src="/images/patient-story-card.png" fallback="/images/wellness-stretch.svg" alt="" aria-hidden="true" />
                </div>
                <div className="story-card__body">
                  <h4>{s.condition}</h4>
                  <p><strong>Duration:</strong> {s.duration}</p>
                  <p>{s.summary}</p>
                  <p style={{ marginTop: '0.4rem' }}><strong>Plan:</strong> {s.plan}</p>
                  <p><strong>Outcome:</strong> {s.outcome}</p>
                  <div className="story-card__footer">
                    <span className="story-card__avatar">{s.name.split(' ').map(w => w[0]).slice(0, 2).join('')}</span>
                    <div>
                      <strong>{s.name}</strong>
                      <span>Age {s.age}</span>
                    </div>
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
              <h2 className="h2">Doctor-led care, built around <em>you</em>.</h2>
              <p>Tell us where you're stuck — we'll build the plan to get you out of it.</p>
              <div className="btn-row">
                <Link to="/book" className="btn btn--primary">Book Appointment</Link>
                <Link to="/contact" className="btn btn--cream">Talk to us first</Link>
              </div>
            </div>
            <div className="cta-banner__art"><StoryArt tone="coral" /></div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
