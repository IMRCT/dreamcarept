import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { BRAND, CONDITIONS, NAV } from '../data/site'
import FallbackImage from './FallbackImage'
import Icon from './Icon'

function BrandLockup({ variant = 'header' }) {
  const isFooter = variant === 'footer'
  // Footer drops in the light variant if available; falls back to the standard
  // logo (CSS inverts it for contrast on the dark footer background).
  const src = '/images/dreamcare-logo.jpg'
  const fallback = '/images/dreamcare-logo.jpg'
  return (
    <Link
      className={`brand${isFooter ? ' brand--footer' : ''}`}
      to="/"
      aria-label={`${BRAND.full} — home`}
    >
      <FallbackImage
        className="brand__logo"
        src={src}
        fallback={fallback}
        alt="DreamCare Physical Therapy, Sport and Wellness"
      />
    </Link>
  )
}

function DesktopNav() {
  return (
    <nav className="nav" aria-label="Primary">
      {NAV.primary.map((item) => {
        if (item.group === 'conditions') {
          return (
            <div className="nav__group" key="conditions">
              <button className="nav__trigger" type="button">
                Conditions <Icon className="nav__chev" name="chev" size={12} />
              </button>
              <div className="nav__panel" role="menu">
                {CONDITIONS.map((c) => (
                  <Link key={c.slug} to={`/conditions/${c.slug}`} className="nav__panel-link" role="menuitem">
                    <span><Icon name={c.icon} size={18} /></span>
                    {c.label}
                  </Link>
                ))}
              </div>
            </div>
          )
        }
        if (item.group === 'resources') {
          return (
            <div className="nav__group" key="resources">
              <button className="nav__trigger" type="button">
                Resources <Icon className="nav__chev" name="chev" size={12} />
              </button>
              <div className="nav__panel" role="menu">
                {NAV.resources.map((r) => (
                  <Link key={r.to} to={r.to} className="nav__panel-link" role="menuitem">
                    <span><Icon name={r.icon} size={18} /></span>
                    {r.label}
                  </Link>
                ))}
              </div>
            </div>
          )
        }
        return (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) => `nav__link${isActive ? ' is-active' : ''}`}
          >
            {item.label}
          </NavLink>
        )
      })}
    </nav>
  )
}

function MobileDrawer({ open, onClose }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <div className={`drawer${open ? ' is-open' : ''}`} onClick={onClose} role="dialog" aria-hidden={!open}>
      <aside className="drawer__panel" onClick={(e) => e.stopPropagation()}>
        <button className="drawer__close" onClick={onClose} aria-label="Close menu">
          <Icon name="close" size={20} />
        </button>

        <BrandLockup />

        <p className="drawer__heading">Menu</p>
        {[
          { label: 'Home', to: '/' },
          { label: 'About', to: '/about' },
          { label: 'Services', to: '/services' },
          { label: 'Contact', to: '/contact' },
          { label: 'Testimonials', to: '/testimonials' },
          { label: 'Patient Stories', to: '/patient-stories' },
          { label: 'FAQ', to: '/faq' },
        ].map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === '/'}
            className={({ isActive }) => `drawer__link${isActive ? ' is-active' : ''}`}
            onClick={onClose}
          >
            {l.label}
          </NavLink>
        ))}

        <p className="drawer__heading">Conditions</p>
        {CONDITIONS.map((c) => (
          <NavLink
            key={c.slug}
            to={`/conditions/${c.slug}`}
            className={({ isActive }) => `drawer__link${isActive ? ' is-active' : ''}`}
            onClick={onClose}
          >
            {c.label}
          </NavLink>
        ))}

        <div className="drawer__cta">
          <Link to="/book" className="btn btn--primary" onClick={onClose} style={{ width: '100%' }}>
            Book an Appointment
          </Link>
        </div>
      </aside>
    </div>
  )
}

export default function SiteShell() {
  const location = useLocation()
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [location.pathname])

  return (
    <div className="app-frame">
      <header className="site-header">
        <div className="shell shell--wide site-header__inner">
          <BrandLockup />
          <DesktopNav />
          <div className="site-header__actions">
            <a href={`tel:${BRAND.phoneRaw}`} className="site-header__phone">
              <Icon name="phone" size={16} /> {BRAND.phone}
            </a>
            <Link to="/book" className="btn btn--primary btn--small">
              Book Appointment
            </Link>
            <button
              className="menu-btn"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
            >
              <Icon name="menu" size={22} />
            </button>
          </div>
        </div>
      </header>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="shell shell--wide">
          <div className="footer-grid">
            <div className="footer-brand">
              <BrandLockup variant="footer" />
              <p>
                One-on-one physical therapy led by a Doctor of Physical Therapy.
                Holistic, evidence-based care designed to treat the root cause.
              </p>
              <div className="socials" style={{ marginTop: '1.4rem' }}>
                <a href="#" aria-label="Facebook"><Icon name="heart" size={16} /></a>
                <a href="#" aria-label="Instagram"><Icon name="sparkles" size={16} /></a>
                <a href="#" aria-label="LinkedIn"><Icon name="user" size={16} /></a>
                <a href="#" aria-label="Yelp"><Icon name="star" size={16} /></a>
              </div>
            </div>

            <div className="footer-col">
              <h5>Practice</h5>
              <Link to="/about">About Dr. Ashkani</Link>
              <Link to="/services">Services & Pricing</Link>
              <Link to="/book">Book a Visit</Link>
              <Link to="/contact">Contact</Link>
            </div>

            <div className="footer-col">
              <h5>Conditions</h5>
              {CONDITIONS.map((c) => (
                <Link key={c.slug} to={`/conditions/${c.slug}`}>{c.label}</Link>
              ))}
            </div>

            <div className="footer-col">
              <h5>Visit</h5>
              <span>{BRAND.address}</span>
              <span>{BRAND.city}</span>
              <a href={`tel:${BRAND.phoneRaw}`}>{BRAND.phone}</a>
              <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
            </div>
          </div>

          <div className="site-footer__bottom">
            <span>© {new Date().getFullYear()} DreamCare Physical Therapy, Sport and Wellness.</span>
            <span>Quality over quantity. Doctor-led care, root-cause focused.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
