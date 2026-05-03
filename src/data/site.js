// Single source of truth for nav, services, conditions, contact, etc.

export const BRAND = {
  name: 'DreamCare PT',
  full: 'DreamCare PT, Sport and Wellness',
  tagline: 'DreamCare. You Deserve It.',
  doctor: 'Dr. Ashkan Ashkani, PT, DPT, CMTPT, COMT',
  phone: '+1 (310) 916-8581',
  phoneRaw: '+13109168581',
  email: 'info@dreamcarept.com',
  address: '13425 Ventura Blvd, Ste 102',
  city: 'Sherman Oaks, CA',
  hours: [
    { day: 'Mon to Fri', time: '8:00 am to 6:00 pm' },
    { day: 'Saturday', time: '8:00 am to 6:00 pm' },
    { day: 'Sunday', time: 'Closed' },
  ],
  serviceAreas: ['Sherman Oaks', 'Beverly Hills', 'Encino', 'Santa Monica', 'West LA', 'San Fernando Valley'],
}

export const CONDITIONS = [
  { slug: 'back-pain',         label: 'Back and Neck Pain',               icon: 'spine',      short: 'Whiplash injuries and post-discectomy and disc replacement rehabilitation.' },
  { slug: 'shoulder-pain',     label: 'Shoulder Pain',                    icon: 'shoulder',   short: 'Post-operative rehabilitation after reverse shoulder replacement.' },
  { slug: 'knee-pain',         label: 'Knee Pain',                        icon: 'knee',       short: 'Support for arthritis, meniscus, ACL and osteoarthritis degeneration to help you move with less pain.' },
  { slug: 'hip-pain',          label: 'Hip Pain',                         icon: 'hip',        short: 'Hip impingement.' },
  { slug: 'ankle-injuries',    label: 'Ankle & Foot Injuries',            icon: 'ankle',      short: 'Rehabilitation for sprains, instability, and post-injury recovery.' },
  { slug: 'vestibular',        label: 'Vestibular & Concussion Care',     icon: 'vestibular', short: 'Help with dizziness, balance issues, headaches, and return-to-function after concussion.' },
  { slug: 'balance-fall-prevention', label: 'Balance & Fall Prevention',  icon: 'pulse',      short: 'Gait and stairs training to improve stability, confidence, and reduce fall risk at home.' },
  { slug: 'post-surgical-rehabilitation', label: 'Post-Surgical Rehabilitation', icon: 'tools', short: 'Recovery programs after total knee, total hip, and shoulder replacement using evidence-based protocols.' },
  { slug: 'hand-upper-extremity-therapy', label: 'Hand & Upper Extremity Therapy (At Home)', icon: 'hands', short: 'Care for hand, wrist, post-operative rehabilitation and arm conditions to improve function and daily use.' },
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
