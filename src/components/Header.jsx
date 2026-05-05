import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';


// données nav centralisées
const navItems = [
  { label: 'À propos', to: '/#about' },
  { label: 'Compétences', to: '/#skills' },
  { label: 'Projets', to: '/#projects' },
  { label: 'Univers Perso', to: '/univers-perso' },
  { label: 'Contact', to: '/#contact' },
];

// fonction header avec gestion du curseur glissant
function Header() {
  const [cursor, setCursor] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef(null);

  const handleMouseEnter = (e) => {
    const item = e.currentTarget;
    setCursor({
      left: item.offsetLeft,
      width: item.offsetWidth,
      opacity: 1,
    });
  };

  // cacher le curseur quand on quitte la nav
  const handleMouseLeave = () => {
    setCursor((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo Christophe" className="logo-img" />
        </Link>
      </div>

      {/* nav principale et aria-label pour accessibilité */}
      <nav className="nav-row" ref={navRef} onMouseLeave={handleMouseLeave} aria-label="Navigation principale">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="nav-item"
            onMouseEnter={handleMouseEnter}
          >
            {item.label}
          </Link>
        ))}

        {/* curseur glissant */}
        <span
          className="nav-cursor"
          style={{
            left: cursor.left,
            width: cursor.width,
            opacity: cursor.opacity,
          }}
        />
      </nav>
    </header>
  );
}

export default Header;