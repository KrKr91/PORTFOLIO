import { Link } from 'react-router-dom';
import '../style/layouts/_header.scss';
import logo from '../assets/logo.jpg';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo Christophe" className="logo-img" />
        </Link>
      </div>

      <nav className="nav-row">
        <Link to="/#about" className="nav-item">À propos</Link>
        <Link to="/#projects" className="nav-item">Projets</Link>
        <Link to="/#skills" className="nav-item">Compétences</Link>
        <Link to="/gaming" className="nav-item">🎮 Gaming</Link>
        <Link to="/#contact" className="nav-item">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;