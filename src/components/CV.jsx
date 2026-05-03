import { Link } from 'react-router-dom';

function CV() {
  return (
    <div className="cv page">

      <div className="cv__nav">
        <Link to="/" className="cv__back">Accueil</Link>
        
        <a 
          href="/CV_AIREAUDEAU_CHRISTOPHE_2026.pdf"
          download
          className="btn btn--primary"
        >
          Télécharger le CV
        </a>
      </div>

      <h1 className="cv__title">Mon CV</h1>

      <div className="cv__viewer">
        <iframe
          src="/CV_AIREAUDEAU_CHRISTOPHE_2026.pdf"
          title="CV Christophe Aireaudeau"
          className="cv__iframe"
        />
      </div>

    </div>
  );
}

export default CV;