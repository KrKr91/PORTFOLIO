import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import projectsData from '../data/projects';
import Banner from './Banner';

function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'instant' });
}, [id]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightbox]);

  if (!project) {
    return (
      <div className="project-detail__notfound">
        <h2>Projet introuvable 😕</h2>
        <Link to="/" className="btn btn--primary">Retour à l'accueil</Link>
      </div>
    );
  }

  return (
    <div className="project-detail page">

      <div className="project-detail__nav">
        <Link to="/" className="project-detail__back">Accueil</Link>
      </div>

      <Banner
        image={project.banner}
        title={project.title}
        subtitle={project.tag}
      />

      <div className="project-detail__links">
        {project.github && (
          <a href={project.github} className="btn btn--secondary" target="_blank" rel="noopener noreferrer">
            Voir sur GitHub
          </a>
        )}
        {project.demo && (
          <a href={project.demo} className="btn btn--primary" target="_blank" rel="noopener noreferrer">
            Voir la démo
          </a>
        )}
      </div>

      <section className="project-detail__section">
        <h2>Contexte</h2>
        <p>{project.context}</p>
      </section>

      <section className="project-detail__section">
        <h2>Objectif</h2>
        <p>{project.objectif}</p>
      </section>

      <section className="project-detail__section">
        <h2>Ce que j'ai réalisé</h2>
        <ul className="project-detail__list">
          {project.realisations.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="project-detail__section">
        <h2>Difficulté principale</h2>
        <p>{project.difficulte}</p>
      </section>

      {project.screenshots.length > 0 && (
        <section className="project-detail__section">
          <h2>Captures d'écran</h2>
          <div className="project-detail__screenshots">
            {project.screenshots.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Capture d'écran ${project.title} ${index + 1}`}
                className="project-detail__screenshot"
                onClick={() => setLightbox(src)}
              />
            ))}
          </div>
        </section>
      )}

      {lightbox && (
        <div
          className="lightbox"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Agrandissement de l'image"
        >
          <button
            className="lightbox__close"
            onClick={() => setLightbox(null)}
            aria-label="Fermer"
          >
            ✕
          </button>
          <img
            src={lightbox}
            alt="Capture agrandie"
            className="lightbox__img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </div>
  );
}

export default ProjectDetail;