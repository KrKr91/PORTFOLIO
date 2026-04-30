import '../style/layouts/_footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">

        <p className="footer__name">Christophe Aireaudeau</p>
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
            href="https://www.linkedin.com/in/christophe-aireaudeau"
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
        </div>

        <p className="footer__copy">
          © 2026 Christophe Aireaudeau — Fait avec React & ❤️
        </p>

      </div>
    </footer>
  );
}

export default Footer;