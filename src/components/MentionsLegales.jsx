import Banner from './Banner';
import { Link } from 'react-router-dom';

function MentionsLegales() {
  return (
    <div className="page">

      <div className="mentions-legales__nav">
        <Link to="/" className="project-detail__back">Accueil</Link>
      </div>

      <Banner 
        image="/banners/mentions.webp"
        title="Mentions Légales" 
      />
      
      <section className="univers__section">
        <h2 className="univers__title">Éditeur du site</h2>
        <p className="univers__intro">
          Le présent site est édité par : <strong>Christophe AIREAUDEAU</strong><br />
          Contact : aireaudeau.christophe@gmail.com
        </p>

        <h2 className="univers__title">Hébergement</h2>
        <p className="univers__intro">
          Ce site est hébergé par : <strong>Vercel Inc.</strong><br />
          Adresse de l'hébergeur : 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
          Site web : https://vercel.com 
        </p>

        <h2 className="univers__title">Propriété intellectuelle</h2>
        <p className="univers__intro">
          L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés.
        </p>
      </section>
    </div>
  );
}

export default MentionsLegales;