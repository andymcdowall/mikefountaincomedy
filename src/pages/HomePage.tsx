import { Link } from 'react-router-dom'
import { HeroSection } from '../components/HeroSection/HeroSection'
import { content } from '../config/content'
import './HomePage.css'

export function HomePage() {
  const { bio } = content
  return (
    <main>
      <HeroSection />

      <section className="bio" aria-label="About Mike Fountain">
        <div className="bio__inner">
          <div className="bio__photo-wrap">
            <div className="bio__photo-placeholder" aria-hidden="true">
              <span className="bio__photo-label">{bio.photoLabel}</span>
            </div>
          </div>

          <div className="bio__text">
            <h2 className="bio__heading">{bio.heading}</h2>

            {bio.paragraphs.map((para, i) => (
              <p key={i} className="bio__para">{para}</p>
            ))}

            <p className="bio__para">
              Catch him live on the{' '}
              <Link to={bio.tourHref} className="bio__link">
                {bio.tourLinkText}
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
