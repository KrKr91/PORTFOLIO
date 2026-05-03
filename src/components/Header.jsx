import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';

const navItems = [
  { label: 'À propos', to: '/#about' },
  { label: 'Projets', to: '/#projects' },
  { label: 'Compétences', to: '/#skills' },
  { label: 'Univers Perso', to: '/univers-perso' },
  { label: 'Contact', to: '/#contact' },
];

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

      <nav className="nav-row" ref={navRef} onMouseLeave={handleMouseLeave}>
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

        {/* Curseur glissant */}
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