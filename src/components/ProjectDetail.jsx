import { useParams, Link } from 'react-router-dom';
import projectsData from '../data/projects';
import '../style/layouts/_project-detail.scss';

function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

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
      <Link to="/#projects" className="project-detail__back">
        ← Retour aux projets
      </Link>

      <header className="project-detail__header">
        <span className="project-detail__tag">{project.tag}</span>
        <h1 className="project-detail__title">{project.title}</h1>
        <ul className="project-detail__stack">
          {project.stack.map((tech) => (
            <li key={tech} className="project-detail__tech">{tech}</li>
          ))}
        </ul>
      </header>

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
              />
            ))}
          </div>
        </section>
      )}

    </div>
  );
}

export default ProjectDetail;