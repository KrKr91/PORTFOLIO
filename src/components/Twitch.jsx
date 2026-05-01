import { useState } from 'react';
import clipsData from '../data/clips';
import '../style/layouts/_twitch.scss';
import Banner from './Banner';

function Twitch() {
  const [selectedClip, setSelectedClip] = useState(null);

  const openClip = (clip) => setSelectedClip(clip);
  const closeClip = () => setSelectedClip(null);

  return (
    <div className="twitch page">

      {}
      <Banner
        image="/banners/gaming.webp"
        title="Gaming & Twitch"
        subtitle="🎮 Mes meilleurs moments"
      />

      <section className="twitch__section">
        {}
        <p className="twitch__intro" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          En dehors du code, je streame et joue aux jeux vidéo. 
          Voici quelques-uns de mes meilleurs moments !
        </p>

        <h2 className="twitch__section-title">Mes clips</h2>
        <div className="twitch__grid">
          {clipsData.map((clip) => (
            <div
              className="twitch__card"
              key={clip.id}
              onClick={() => openClip(clip)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openClip(clip)}
              aria-label={`Voir le clip : ${clip.title}`}
            >
              <div className="twitch__thumbnail">
                {clip.thumbnail ? (
                  <img src={clip.thumbnail} alt={clip.title} />
                ) : (
                  <video src={clip.video} muted preload="metadata" />
                )}
                <div className="twitch__play-btn">▶</div>
              </div>
              <div className="twitch__card-info">
                <span className="twitch__game">{clip.game}</span>
                <p className="twitch__clip-title">{clip.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* la modale */}
      {selectedClip && (
        <div
          className="twitch__modal"
          onClick={closeClip}
          role="dialog"
          aria-modal="true"
          aria-label={selectedClip.title}
        >
          <div
            className="twitch__modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="twitch__modal-close"
              onClick={closeClip}
              aria-label="Fermer la vidéo"
            >
              ✕
            </button>
            <h3 className="twitch__modal-title">{selectedClip.title}</h3>
            <video
              src={selectedClip.video}
              controls
              autoPlay
              className="twitch__video"
            />
          </div>
        </div>
      )}

    </div>
  );
}

export default Twitch;
