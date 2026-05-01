import { Link } from 'react-router-dom';
import '../style/layouts/_not-found.scss';

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__content">
        <span className="not-found__code">404</span>
        <h1 className="not-found__title">Page introuvable</h1>
        <p className="not-found__text">
          Oups ! La page que tu cherches n'existe pas ou a été déplacée.
        </p>
        <Link to="/" className="btn btn--primary">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}

export default NotFound;