import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // supp le # pour avoir juste l'id
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // scroll vers la section trouvée
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // pas de hash = nouvelle page donc retour en haut
      window.scrollTo(0, 0);
    }
  // Le useEffect se relance à chaque changement de pathname ou hash
  }, [pathname, hash]);
}

export default useScrollToHash;