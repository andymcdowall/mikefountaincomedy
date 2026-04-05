import { Link } from 'react-router-dom'
import { content } from '../../config/content'
import './HeroSection.css'
import { TextSwitcher } from './NameSwitcher'


export function HeroSection() {
  return (
    <section className="hero grain" aria-label="Hero">
      <div className="hero__inner">
        <h1 className="hero__heading"><TextSwitcher/><div>Fountain!</div></h1>

        <p className="hero__tagline">{content.artist.tagline}</p>
        <Link to={content.hero.ctaHref} className="hero__cta" aria-label={content.hero.ctaAriaLabel}>
          {content.hero.ctaText}
        </Link>
      </div>
    </section>
  )
}
