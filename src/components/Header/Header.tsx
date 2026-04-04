import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Header.css'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/tour', label: 'Tour' },
  { to: '/videos', label: 'Videos' },
  { to: '/contact', label: 'Contact' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Close menu on route change (nav click)
  function handleNavClick() {
    setMenuOpen(false)
  }

  // Close menu on Escape key
  useEffect(() => {
    if (!menuOpen) return
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="site-header__logo" onClick={handleNavClick}>
          Mike Fountain
        </Link>

        <button
          className="site-header__hamburger"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <span className="site-header__hamburger-bar" />
          <span className="site-header__hamburger-bar" />
          <span className="site-header__hamburger-bar" />
        </button>

        <nav
          id="site-nav"
          className={`site-header__nav${menuOpen ? ' site-header__nav--open' : ''}`}
          aria-label="Site navigation"
        >
          <ul className="site-header__nav-list">
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `site-header__nav-link${isActive ? ' site-header__nav-link--active' : ''}`
                  }
                  onClick={handleNavClick}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
