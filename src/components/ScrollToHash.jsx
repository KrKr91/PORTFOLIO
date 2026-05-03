import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    // si y a un # dans l'URL 
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      
      // on fait glisser la page jusqu'à la section
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // sinon on remonte tout en haut
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return null;
}

export default ScrollToHash;