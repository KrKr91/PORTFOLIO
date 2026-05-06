import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">

        <h2 className="footer__name">Christophe Aireaudeau</h2>
        <p className="footer__sub">Développeur Web Junior · Toulouse</p>

        <div className="footer__links">
          <a 
            href="https://github.com/KrKr91"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            GitHub
          </a>
          <span className="footer__sep">·</span>
          
          <a 
            href="https://www.linkedin.com/in/christophe-a-428a551b3/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            LinkedIn
          </a>
          <span className="footer__sep">·</span>
          
          <a 
            href="mailto:aireaudeau.christophe@gmail.com"
            className="footer__link"
          >
            Email
          </a>
          
          <span className="footer__sep">·</span>
          <Link to="/mentions-legales" className="footer__link">
            Mentions Légales
          </Link>
        </div>

        <p className="footer__copy">
          © 2026 Christophe Aireaudeau - Fait avec React & ❤️ ! 
        </p>

      </div>
    </footer>
  );
}

export default Footer;