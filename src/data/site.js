// Single source of truth for nav, services, conditions, contact, etc.

export const BRAND = {
  name: 'DreamCare PT',
  full: 'DreamCare PT, Sport and Wellness',
  tagline: 'DreamCare. You Deserve It.',
  doctor: 'Dr. Ashkan Ashkani, PT, DPT, CMTPT, COMT',
  phone: '(706) 300-5710',
  phoneRaw: '+17063005710',
  email: 'info@dreamcarept.com',
  address: '13425 Ventura Blvd, Ste 102',
  city: 'Sherman Oaks, CA',
  hours: [
    { day: 'Mon – Fri', time: '8:00 am – 6:00 pm' },
    { day: 'Saturday', time: '8:00 am – 6:00 pm' },
    { day: 'Sunday', time: 'Closed' },
  ],
  serviceAreas: ['Sherman Oaks', 'Beverly Hills', 'Encino', 'Santa Monica', 'West LA', 'San Fernando Valley'],
}

export const CONDITIONS = [
  { slug: 'back-pain',         label: 'Back Pain',                     icon: 'spine',   short: 'Sciatica, lower back, thoracic, cervical and post-accident care.' },
  { slug: 'shoulder-pain',     label: 'Shoulder Pain',                 icon: 'shoulder', short: 'Rotator cuff, SLAP tears, post-op and non-surgical recovery.' },
  { slug: 'knee-pain',         label: 'Knee Pain',                     icon: 'knee',    short: 'Meniscus, osteoarthritis, ACL and sport-related injuries.' },
  { slug: 'ankle-injuries',    label: 'Ankle Injuries',                icon: 'ankle',   short: 'Sprains, fractures, chronic instability and return-to-play.' },
  { slug: 'vestibular',        label: 'Vestibular & Concussion',       icon: 'vestibular', short: 'Dizziness, vertigo, balance work and post-concussion care.' },
  { slug: 'hip-pain',          label: 'Hip Pain',                      icon: 'hip',     short: 'FAI, total hip arthroplasty rehab and movement restoration.' },
]

export const SERVICES = [
  { title: 'Physical Therapy Comprehensive Evaluation', duration: '45 min', price: null, blurb: 'A complete movement, posture and pain assessment with a Doctor of Physical Therapy.' },
  { title: 'Initial Evaluation & Treatment',            duration: '45 min', price: null, blurb: 'Comprehensive assessment combined with a first hands-on treatment session.' },
  { title: 'Physical Therapy Session',                  duration: '30 min', price: 100,  blurb: 'Focused 1-on-1 therapy to improve mobility, reduce pain and progress recovery.' },
  { title: 'Post-Injury Rehabilitation',                duration: '1 hr 15 min', price: 125, blurb: 'Expert care for healthy recovery after surgery, total knee, total hip and major injuries.' },
  { title: 'Shockwave Therapy',                         duration: '30 min', price: 150,  blurb: 'Non-invasive acoustic wave therapy for chronic tendon pain and tissue healing.' },
  { title: 'Vestibular, Balance & Concussion Eval',     duration: '45 min', price: 175,  blurb: 'Specialized assessment for dizziness, vertigo, post-concussion symptoms and balance loss.' },
  { title: 'Spinal Decompression & Stretching',         duration: '30 min', price: null, blurb: 'Targeted decompression and mobility work to improve flexibility and prevent injury.' },
  { title: 'Sports & Relaxation Massage',               duration: '30 min', price: null, blurb: 'Therapeutic massage to relieve tension, support performance and aid recovery.' },
  { title: 'Telehealth Evaluation',                     duration: '45 min', price: null, blurb: 'Virtual consultation, movement screen and home exercise guidance from anywhere.' },
]

export const NAV = {
  primary: [
    { label: 'Home',     to: '/' },
    { label: 'About',    to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Conditions', to: null, group: 'conditions' },
    { label: 'Resources', to: null, group: 'resources' },
    { label: 'Contact',  to: '/contact' },
  ],
  resources: [
    { label: 'Testimonials',     to: '/testimonials',    icon: 'star' },
    { label: 'Patient Stories',  to: '/patient-stories', icon: 'heart' },
    { label: 'FAQ',              to: '/faq',             icon: 'help'  },
  ],
}
