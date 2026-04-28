import '../style/layouts/_header.scss';
import logo from '../assets/logo.jpg'; 

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        {/* On affiche l'image avec une balise img et un attribut alt pour l'accessibilité */}
        <img src={logo} alt="Logo Christophe" className="logo-img" />
      </div>
      
      <nav className="nav-row">
        <a href="#about" className="nav-item">À propos</a>
        <a href="#projects" className="nav-item">Projets</a>
        <a href="#skills" className="nav-item">Compétences</a>
        <a href="#contact" className="nav-item">Contact</a>
      </nav>
    </header>
  );
}

export default Header;