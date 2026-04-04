import { Link } from 'react-router-dom'
import './HeroSection.css'

export function HeroSection() {
  return (
    <section className="hero grain" aria-label="Hero">
      <div className="hero__inner">
        <h1 className="hero__heading">Mike Fountain</h1>
        <p className="hero__tagline">Stand-up Comedy. No apologies.</p>
        <Link to="/tour" className="hero__cta" aria-label="See tour dates">
          See Tour Dates
        </Link>
      </div>
    </section>
  )
}
