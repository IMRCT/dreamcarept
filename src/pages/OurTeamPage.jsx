import { useRef } from 'react'
import { Link } from 'react-router-dom'
import FallbackImage from '../components/FallbackImage'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import { BRAND } from '../data/site'

const TEAM_MEMBERS = [
  {
    name: 'Dr. Ashkan Ashkani',
    role: 'PT, DPT, CMTPT, COMT',
    focus: 'Orthopedic, sports and home health PT',
    photo: '/images/doctor-photo.jpg',
    pos: 'center bottom',
    body: 'Founder of DreamCare PT with 13+ years of clinical experience, Olympic team consulting experience and advanced manual therapy training.',
  },
  {
    name: 'Niki Mahmoudzadeh',
    role: 'Clinical Director & Lead PT – San Diego',
    focus: 'Doctor of Physical Therapy',
    photo: '/images/team/niki-mahmoudzadeh.jpg',
    pos: 'center 25%',
    body: 'Earned her DPT from George Washington University, with orthopedic residency and COMT certification. She specializes in orthopedic rehabilitation and is committed to hands-on treatment, movement-based interventions, and individualized care to help each patient achieve lasting results.',
  },
  {
    name: 'Tim Lee',
    role: 'Lead PT – Los Angeles',
    focus: 'Doctor of Physical Therapy',
    photo: '/images/team/tim-lee.jpg',
    pos: 'center top',
    body: 'Dedicated to helping patients return to the activities they love through expert, evidence-based care and performance-focused rehabilitation. He takes a personalized approach to support each patient’s unique goals.',
  },
  {
    name: 'Sarvenaz Dirakvand',
    role: 'Manager of Operations',
    focus: 'Operations & patient experience leader',
    photo: '/images/team/sarvenaz-dirakvand.jpg',
    pos: 'center 8%',
    body: 'Ensures smooth business processes and a seamless patient experience from the first visit to full recovery and beyond. She is dedicated to supporting both our team and patients every step of the way.',
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
                    <FallbackImage src={member.photo} fallback="/images/doctor.svg" alt={member.name} style={member.pos ? { objectPosition: member.pos } : undefined} />
                  </div>
                  <div className="team-card__copy">
                    <span>{member.role}</span>
                    <h3>{member.name}</h3>
                    <strong>{member.focus}</strong>
                    <p>{member.body}</p>
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
