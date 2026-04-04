import { HeroSection } from '../components/HeroSection/HeroSection'
import './HomePage.css'

export function HomePage() {
  return (
    <main>
      <HeroSection />

      <section className="bio" aria-label="About Mike Fountain">
        <div className="bio__inner">
          <div className="bio__photo-wrap">
            <div className="bio__photo-placeholder" aria-hidden="true">
              <span className="bio__photo-label">Photo Coming Soon</span>
            </div>
          </div>

          <div className="bio__text">
            <h2 className="bio__heading">About Mike</h2>

            <p className="bio__para">
              Mike Fountain is a stand-up comedian based in Chicago, IL. Known for his sharp,
              self-deprecating style and razor-wire observations on everyday absurdity, Mike has
              performed at clubs and festivals across the Midwest, bringing down rooms from dive
              bars to seated theatres.
            </p>

            <p className="bio__para">
              After honing his craft on the open-mic circuit for years, Mike has earned
              spots on regional showcases and shared stages with nationally touring headliners.
              His material pulls from real life — relationships, work, the crushing weight of
              owning a car — delivered with the kind of timing that makes the whole thing look
              effortless.
            </p>

            <p className="bio__para">
              When he&rsquo;s not on stage, Mike is writing, recording new material, and eating
              an unreasonable amount of breakfast food at all hours of the day. Catch him live
              on the{' '}
              <a href="/tour" className="bio__link">
                upcoming tour
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
