import './Footer.css'

const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://instagram.com/' },
  { label: 'TikTok', href: 'https://tiktok.com/' },
  { label: 'YouTube', href: 'https://youtube.com/' },
  { label: 'Twitter / X', href: 'https://x.com/' },
]

const CURRENT_YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <ul className="site-footer__social-list">
          {SOCIAL_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="site-footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} (opens in new tab)`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <p className="site-footer__copy">
          &copy; {CURRENT_YEAR} Mike Fountain. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
