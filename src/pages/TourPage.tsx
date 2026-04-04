import { shows } from '../config/shows'
import './TourPage.css'

function formatDate(isoDate: string): { weekday: string; month: string; day: string; year: string } {
  const date = new Date(`${isoDate}T12:00:00`)
  return {
    weekday: date.toLocaleDateString('en-US', { weekday: 'short' }),
    month: date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
    day: date.toLocaleDateString('en-US', { day: 'numeric' }),
    year: date.toLocaleDateString('en-US', { year: 'numeric' }),
  }
}

const sortedShows = [...shows].sort(
  (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
)

export function TourPage() {
  return (
    <main className="tour-page">
      <div className="tour-page__inner">
        <h1 className="tour-page__heading">Tour Dates</h1>

        {sortedShows.length === 0 ? (
          <p className="tour-page__empty">No upcoming shows. Check back soon.</p>
        ) : (
          <ul className="tour-page__list" aria-label="Upcoming shows">
            {sortedShows.map((show) => {
              const { weekday, month, day, year } = formatDate(show.date)
              return (
                <li key={`${show.date}-${show.venue}`} className="show-card">
                  <time dateTime={show.date} className="show-card__date">
                    <span className="show-card__date-weekday">{weekday}</span>
                    <span className="show-card__date-month">{month}</span>
                    <span className="show-card__date-day">{day}</span>
                    <span className="show-card__date-year">{year}</span>
                  </time>

                  <div className="show-card__info">
                    <span className="show-card__venue">{show.venue}</span>
                    <span className="show-card__location">
                      {show.city}, {show.state}
                    </span>
                  </div>

                  <div className="show-card__action">
                    {show.soldOut ? (
                      <span className="show-card__sold-out">Sold Out</span>
                    ) : show.ticketUrl ? (
                      <a
                        href={show.ticketUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="show-card__ticket-btn"
                      >
                        Get Tickets
                      </a>
                    ) : null}
                  </div>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </main>
  )
}
