import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToHash() {
  // on récupère le hash ET le pathname (le nom de la page)
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // si y a pas de hash, on force le retour en haut (0, 0)
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]); // le useEffect se relance à chaque changement de page

  return null;
}

export default ScrollToHash;