import { Link } from 'react-router-dom';
import projectsData from '../data/projects';

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="projects__title">Mes projets</h2>

      <div className="projects__grid">
        {projectsData.map((project) => (
          <article className="projects__card" key={project.id}>

            <div className="projects__card-header">
              <span className="projects__tag">{project.tag}</span>
              <h3 className="projects__card-title">{project.title}</h3>
            </div>

            <p className="projects__description">{project.description}</p>

            <ul className="projects__stack">
              {project.stack.map((tech) => (
                <li className="projects__tech" key={tech}>{tech}</li>
              ))}
            </ul>

            <div className="projects__links">
              {}
              <Link to={`/projet/${project.id}`} className="btn btn--primary">
                Voir le projet
              </Link>
              
              {project.github && (
                <a 
                  href={project.github}
                  className="btn btn--secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
              
              {project.demo && (
                <a 
                  href={project.demo}
                  className="btn btn--primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir la démo
                </a>
              )}
            </div>

          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;