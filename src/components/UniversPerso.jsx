import { useState } from 'react';
import Banner from './Banner';
import { Link } from 'react-router-dom';

const designsData = [
  {
    id: 1,
    title: 'Affiche Japon - Dream',
    src: '/designs/affiche-jap.webp',
    description: 'Affiche personnelle concernant un rêve japonais',
  },
  {
    id: 2,
    title: 'Logo Betsu Studio',
    src: '/designs/betsu-logo.webp',
    description: 'Logo pour le studio Betsu',
  },
];

function UniversPerso() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <div className="univers page">

      <div className="univers__nav">
        <Link to="/" className="project-detail__back">Accueil</Link>
      </div>

      <Banner
        image="/banners/gaming.webp"
        title="Univers Perso"
        subtitle="🎨 Créations & Passions"
      />
      

      {/* la section designs photoshop */}
      <section className="univers__section">
        <h2 className="univers__title">Créations Graphiques</h2>
        <p className="univers__intro">
          En dehors du code, je crée des visuels sur Photoshop affiches, montages, compositions. Voici quelques-unes de mes créations qui je l'espère pourront vous plaire ! 
        </p>

        <div className="univers__grid">
          {designsData.map((design) => (
            <div
              key={design.id}
              className="univers__card"
              onClick={() => setLightbox(design)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setLightbox(design)}
              aria-label={`Voir la création : ${design.title}`}
            >
              <div className="univers__img-wrapper">
                <img
                  src={design.src}
                  alt={design.title}
                  loading="lazy"
                  className="univers__img"
                />
                <div className="univers__overlay">
                  <span>🔍 Voir</span>
                </div>
              </div>
              <div className="univers__card-info">
                <p className="univers__card-title">{design.title}</p>
                <p className="univers__card-desc">{design.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* la section Gaming pour plus tard */}
      <section className="univers__section univers__section--coming">
        <h2 className="univers__title">🎮 Gaming & Clips</h2>
        <p className="univers__intro">
          Je streame et joue aux jeux vidéo sur mon temps libre. 
          Des clips de mes meilleurs moments sont en cours de montage 
          et seront disponibles très prochainement !
        </p>
        <div className="univers__coming-soon">
          <span className="univers__coming-icon">🎬</span>
          <p>Clips en cours de montage...</p>
          <span className="univers__badge">Bientôt disponible</span>
        </div>
      </section>

      {/* lightbox */}
      {lightbox && (
        <div
          className="lightbox"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
        >
          <button
            className="lightbox__close"
            onClick={() => setLightbox(null)}
            aria-label="Fermer"
          >
            ✕
          </button>
          <div
            className="lightbox__content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.title}
              className="lightbox__img"
            />
            <div className="lightbox__info">
              <p className="lightbox__title">{lightbox.title}</p>
              <p className="lightbox__desc">{lightbox.description}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default UniversPerso;