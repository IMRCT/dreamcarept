import { useRef } from 'react'
import { Link } from 'react-router-dom'
import FallbackImage from '../components/FallbackImage'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import { BRAND } from '../data/site'

const TEAM_MEMBERS = [
  {
    name: 'Dr. Ashkan Ashkani',
    initials: 'AA',
    role: 'PT, DPT, CMTPT, COMT',
    focus: 'Orthopedic, sports and home health PT',
    photo: '/images/doctor-photo.jpg',
    body: 'Founder of DreamCare PT with 13+ years of clinical experience, Olympic team consulting experience and advanced manual therapy training.',
    tags: ['Founder', 'Doctor of PT', 'Manual therapy'],
  },
  {
    name: 'Home Health PT',
    initials: 'PT',
    icon: 'home',
    role: 'Licensed clinician',
    focus: 'In-home recovery and mobility',
    body: 'Placeholder for a future physical therapist profile with service area, credentials and a short care style summary.',
    tags: ['Home visits', 'Mobility', 'Strength'],
  },
  {
    name: 'Post-Surgical Specialist',
    initials: 'PS',
    icon: 'tools',
    role: 'Rehab clinician',
    focus: 'Joint replacement and post-op care',
    body: 'Placeholder for a clinician focused on total knee, hip, shoulder and ankle replacement rehabilitation.',
    tags: ['Post-op', 'Protocols', 'Gait'],
  },
  {
    name: 'Vestibular Therapist',
    initials: 'VT',
    icon: 'vestibular',
    role: 'Specialty PT',
    focus: 'Dizziness, balance and concussion',
    body: 'Placeholder for a provider who supports vertigo, concussion symptoms, gaze stability and fall-risk recovery.',
    tags: ['Balance', 'Vestibular', 'Concussion'],
  },
  {
    name: 'Care Coordinator',
    initials: 'CC',
    icon: 'phone',
    role: 'Scheduling support',
    focus: 'Benefits, onboarding and visits',
    body: 'Placeholder for the person who helps with referrals, scheduling, insurance checks and first-visit preparation.',
    tags: ['Scheduling', 'Benefits', 'Referrals'],
  },
  {
    name: 'Balance Coach',
    initials: 'BC',
    icon: 'pulse',
    role: 'Fall-prevention support',
    focus: 'Gait, confidence and safety',
    body: 'Placeholder for a team member focused on home safety, walking confidence and progressive balance work.',
    tags: ['Gait', 'Safety', 'Confidence'],
  },
  {
    name: 'Sports Rehab PT',
    initials: 'SR',
    icon: 'trophy',
    role: 'Return-to-sport clinician',
    focus: 'Loading, performance and prevention',
    body: 'Placeholder for a clinician who helps active adults return to running, lifting, training and weekend sport.',
    tags: ['Sport', 'Loading', 'Return'],
  },
  {
    name: 'Wellness Therapist',
    initials: 'WT',
    icon: 'heart',
    role: 'Wellness support',
    focus: 'Mobility and long-term function',
    body: 'Placeholder for a provider focused on flexibility, strength maintenance and independence at home.',
    tags: ['Wellness', 'Mobility', 'Function'],
  },
]

export default function OurTeamPage() {
  const teamTrackRef = useRef(null)

  const slideTeam = (direction) => {
    const track = teamTrackRef.current
    if (!track) return
    track.scrollBy({
      left: direction * Math.min(track.clientWidth * 0.82, 780),
      behavior: 'smooth',
    })
  }

  return (
    <>
      <section className="inner-hero team-hero">
        <div className="shell shell--wide">
          <Reveal className="inner-hero__grid">
            <div>
              <p className="eyebrow">Our team</p>
              <h1 className="h1">The people behind your <em>home recovery</em>.</h1>
              <p className="lead" style={{ marginTop: '1.4rem' }}>
                DreamCare is built around focused, one-on-one care. Our team is committed to helping patients improve mobility, reduce pain, and achieve lasting results through personalized treatment, clinical expertise, and compassionate support every step of the recovery journey.
              </p>
              <div className="btn-row">
                <Link to="/book" className="btn btn--primary">Book an Appointment</Link>
                <a href={`tel:${BRAND.phoneRaw}`} className="btn btn--ghost">
                  <Icon name="phone" size={16} /> {BRAND.phone}
                </a>
              </div>
            </div>
            <div className="team-hero__panel" aria-label="DreamCare care team strengths">
              {[
                { icon: 'user', title: 'One-on-one', body: 'Focused clinician time at every visit.' },
                { icon: 'home', title: 'At home', body: 'Care shaped around your real environment.' },
                { icon: 'shield', title: 'Evidence-led', body: 'Clear progression and clinical reasoning.' },
                { icon: 'heart', title: 'Human care', body: 'Supportive communication from start to finish.' },
              ].map((item) => (
                <div className="team-hero__tile" key={item.title}>
                  <span><Icon name={item.icon} size={22} /></span>
                  <strong>{item.title}</strong>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--cream">
        <div className="shell shell--wide">
          <Reveal className="section-head team-slider__head">
            <p className="eyebrow">Care team profiles</p>
            <h2 className="h2">Meet the Professionals Supporting Your Recovery</h2>
            <p className="lead" style={{ marginTop: '1.15rem' }}>
              Learn more about the clinicians and care professionals dedicated to helping you achieve your recovery goals. Our team combines clinical expertise, personalized treatment, and compassionate care to support every step of your journey.
            </p>
          </Reveal>

          <Reveal delay={1} className="team-slider">
            <div className="team-slider__controls" aria-label="Team carousel controls">
              <button type="button" onClick={() => slideTeam(-1)} aria-label="Previous team profiles">
                <Icon name="arrow" size={18} />
              </button>
              <button type="button" onClick={() => slideTeam(1)} aria-label="Next team profiles">
                <Icon name="arrow" size={18} />
              </button>
            </div>

            <div className="team-track" ref={teamTrackRef}>
              {TEAM_MEMBERS.map((member, i) => (
                <article key={member.name} className={`team-card team-card--compact${i === 0 ? ' team-card--founder' : ''}`}>
                  <div className="team-card__media">
                    {member.photo ? (
                      <FallbackImage src={member.photo} fallback="/images/doctor.svg" alt={member.name} />
                    ) : (
                      <div className="team-card__placeholder">
                        <Icon name={member.icon} size={24} />
                      </div>
                    )}
                  </div>
                  <div className="team-card__copy">
                    <span>{member.role}</span>
                    <h3>{member.name}</h3>
                    <strong>{member.focus}</strong>
                    <p>{member.body}</p>
                    <div className="team-card__tags">
                      {member.tags.map((tag) => (
                        <em key={tag}>{tag}</em>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
