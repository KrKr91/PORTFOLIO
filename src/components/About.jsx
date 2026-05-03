import { Link } from 'react-router-dom';

function About() {
  return (
    <section className="about" id="about">
      <h2 className="about__title">À propos</h2>

      <div className="about__content">
        <div className="about__text">
          <p>
            Le code, c'est une passion qui remonte au lycée malgré les heures à me prendre la tête dessus. Mes premières lignes 
            de HTML et PHP m'ont accroché et depuis, je n'ai jamais vraiment décroché.
          </p>
          <p>
            Après un parcours en gestion et communication, j'ai sauté le pas et me 
            suis pleinement reconverti dans le développement web. Résultat ? Une double 
            casquette que peu de developpeurs ont. Je comprends autant les contraintes techniques 
            que les besoins métier et les attentes utilisateurs.
          </p>
          <p>
            Aujourd'hui chez OpenClassrooms, je conçois et développe des projets 
            full front-end en <strong>React, JavaScript, HTML/CSS</strong> avec une 
            obsession pour le code propre, le responsive et l'accessibilité.
          </p>
          <p className="about__fun">
            Créatif dans l'âme dessin, j'adore la culture japonaise ainsi que les jeux vidéo 🎮 mais aussi plein d'autres choses que je pourrais vous faire découvrir ! 
            J'apporte un vrai regard sur le design à chaque projet que je touche ! 
          </p>
        </div>

        <div className="about__info">
          <ul className="about__list">
            <li><span>📍</span> Toulouse</li>
            <li><span>🟢</span> Disponible immédiatement</li>
            <li><span>🎓</span> OpenClassrooms — Dév. Web</li>
            <li><span>🚗</span> Permis B, véhiculé</li>
          </ul>
          
          <Link to="/cv" className="btn btn--primary">
            Afficher mon CV
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;