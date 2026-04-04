import { videos } from '../config/videos'
import './VideosPage.css'

export function VideosPage() {
  return (
    <main className="videos-page">
      <div className="videos-page__inner">
        <h1 className="videos-page__heading">Videos</h1>

        {videos.length === 0 ? (
          <p className="videos-page__empty">No videos yet — check back soon.</p>
        ) : (
          <ul className="videos-grid" role="list">
            {videos.map((video) => (
              <li key={video.youtubeId} className="video-card">
                <div className="video-card__embed-wrapper">
                  <iframe
                    className="video-card__iframe"
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <div className="video-card__caption">
                  <h2 className="video-card__title">{video.title}</h2>
                  {video.description && (
                    <p className="video-card__description">{video.description}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  )
}
