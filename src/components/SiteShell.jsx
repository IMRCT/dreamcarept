import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { BRAND, CONDITIONS, NAV } from '../data/site'
import FallbackImage from './FallbackImage'
import Icon from './Icon'

function BrandLockup({ variant = 'header' }) {
  const isFooter = variant === 'footer'
  const src = '/images/dreamcare-logo-transparent.png'
  const fallback = '/images/dreamcare-logo.jpg'
  return (
    <Link
      className={`brand${isFooter ? ' brand--footer' : ''}`}
      to="/"
      aria-label={`${BRAND.full} home`}
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
              <NavLink
                to="/conditions"
                className={({ isActive }) => `nav__trigger${isActive ? ' is-active' : ''}`}
              >
                Conditions <Icon className="nav__chev" name="chev" size={12} />
              </NavLink>
              <div className="nav__panel" role="menu">
                {CONDITIONS.map((c) => (
                  <Link key={c.slug} to={`/conditions#${c.slug}`} className="nav__panel-link" role="menuitem">
                    <span><Icon name={c.icon} size={18} /></span>
                    {c.label}
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
          { label: 'Our Team', to: '/our-team' },
          { label: 'Conditions', to: '/conditions' },
          { label: 'Contact', to: '/contact' },
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
            to={`/conditions#${c.slug}`}
            className={({ isActive }) => `drawer__link${isActive ? ' is-active' : ''}`}
            onClick={onClose}
          >
            {c.label}
          </NavLink>
        ))}

        <div className="drawer__cta">
          <Link to="/book" className="btn btn--primary" onClick={onClose} style={{ width: '100%' }}>
            Book An Appointment
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
    if (location.hash) {
      requestAnimationFrame(() => {
        document.querySelector(location.hash)?.scrollIntoView({ block: 'start' })
      })
      return
    }

    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [location.pathname, location.hash])

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
              Book An Appointment
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

      <footer className="site-footer" id="footer">
        <div className="shell shell--wide">
          <div className="footer-grid">
            <div className="footer-brand">
              <BrandLockup variant="footer" />
              <p>
                One-on-one physical therapy designed to help you move better,
                recover faster, and live with less pain.
              </p>
              <div className="footer-brand__badges" aria-label="DreamCare practice values">
                <span><Icon name="heart" size={25} />Compassionate Care</span>
                <span><Icon name="sparkles" size={25} />Evidence Based</span>
                <span><Icon name="user" size={25} />Doctor Led</span>
                <span><Icon name="shield" size={25} />Your Safety Matters</span>
              </div>
            </div>

            <div className="footer-col">
              <h5>Practice</h5>
              <Link to="/about">About Dr. Ashkani</Link>
              <Link to="/our-team">Our Team</Link>
              <Link to="/services">Services</Link>
              <Link to="/#recovery-path">How It Works</Link>
              <Link to="/#insurance-access">Insurance</Link>
              <Link to="/services">Private Pay</Link>
              <Link to="/book">Book a Visit</Link>
              <Link to="/contact">Contact Us</Link>
            </div>

            <div className="footer-col">
              <h5>Conditions We Treat</h5>
              <Link to="/conditions">All Conditions</Link>
              {CONDITIONS.map((c) => (
                <Link key={c.slug} to={`/conditions#${c.slug}`}>{c.label}</Link>
              ))}
            </div>

            <div className="footer-col footer-col--contact">
              <h5>Serving Southern California</h5>
              <span className="footer-contact-row">
                <Icon name="pin" size={20} />
                <span>Los Angeles County<br />Orange County<br />San Diego County<br />San Fernando Valley</span>
              </span>
              <a className="footer-contact-row" href={`tel:${BRAND.phoneRaw}`}>
                <Icon name="phone" size={20} />
                <span>{BRAND.phone}</span>
              </a>
              <a className="footer-contact-row" href={`mailto:${BRAND.email}`}>
                <Icon name="mail" size={20} />
                <span>{BRAND.email}</span>
              </a>
            </div>
          </div>

          <div className="site-footer__bottom">
            <span>© {new Date().getFullYear()} DreamCare Physical Therapy, Sport and Wellness.</span>
            <span className="site-footer__copyright">&copy; {new Date().getFullYear()} DreamCare Physical Therapy, Sport and Wellness. All rights reserved.</span>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
