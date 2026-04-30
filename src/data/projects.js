const projectsData = [
  {
    id: 'kasa',
    title: 'Kasa',
    tag: '⭐ Projet phare',
    description: 'Refonte complète du site de location immobilière Kasa. Développement d\'une SPA React avec routing, composants réutilisables et intégration de données JSON.',
    stack: ['React', 'React Router', 'Vite', 'Sass'],
    github: 'https://github.com/KrKr91/KASA-P5',
    demo: null,
    // détail pour la page projet
    context: 'Mission en tant que développeur front-end pour la refonte complète du site Kasa, leader de la location entre particuliers en France. La CTO a fourni un brief clair : partir de zéro avec React et Vite, en suivant des maquettes Figma responsives.',
    objectif: 'Développer une SPA React entièrement fonctionnelle et responsive, fidèle aux maquettes Figma, sans back-end disponible (données JSON fournies).',
    realisations: [
      'Mise en place du projet avec Vite et configuration de React Router',
      'Création de la page d\'accueil avec affichage dynamique des 20 logements',
      'Composant Slideshow avec navigation circulaire et gestion des cas limites',
      'Composant Collapse avec deux états ouvert/fermé et animation CSS',
      'Page d\'erreur 404 avec redirection automatique si l\'id est incorrect',
    ],
    difficulte: 'La gestion du carrousel avec les cas limites (une seule image = pas de flèches, navigation circulaire) a été le point le plus technique à maîtriser.',
    screenshots: [
      // Tu ajouteras tes images ici :
      // '/screenshots/kasa-1.png',
      // '/screenshots/kasa-2.png',
    ],
  },
  {
    id: 'sophie-bluel',
    title: 'Sophie Bluel',
    tag: 'JavaScript · API',
    description: 'Développement de la partie front-end du site d\'une architecte. Manipulation du DOM, appels API REST, gestion d\'une modale de connexion et d\'upload de médias.',
    stack: ['JavaScript', 'HTML', 'CSS', 'API REST'],
    github: 'https://github.com/KrKr91/P3_Sophie_Bluel',
    demo: null,
    context: 'Mission de développement front-end pour le site portfolio d\'une architecte d\'intérieur. Un back-end et une API REST étaient déjà fournis, l\'objectif était de dynamiser l\'interface.',
    objectif: 'Rendre le site dynamique en connectant le front-end à l\'API : affichage des projets, système de filtres par catégorie, modale de connexion administrateur et upload de nouveaux médias.',
    realisations: [
      'Récupération et affichage dynamique des projets via l\'API REST',
      'Système de filtres par catégorie sans rechargement de page',
      'Modale de connexion avec gestion du token JWT',
      'Formulaire d\'upload de nouveaux projets en mode admin',
      'Manipulation avancée du DOM en JavaScript vanilla',
    ],
    difficulte: 'La gestion de l\'authentification avec le token JWT et la synchronisation entre le mode admin et l\'affichage public ont été les points les plus complexes.',
    screenshots: [],
  },
  {
    id: 'nina-carducci',
    title: 'Nina Carducci',
    tag: 'SEO · Performance',
    description: 'Optimisation SEO et performance d\'un site de photographe. Audit Lighthouse, amélioration du score de performance, accessibilité et référencement naturel.',
    stack: ['SEO', 'Lighthouse', 'HTML', 'CSS'],
    github: 'https://github.com/KrKr91/Nina-carducci',
    demo: null,
    context: 'Mission d\'optimisation pour le site d\'une photographe professionnelle dont le site souffrait de performances dégradées et d\'un mauvais référencement naturel.',
    objectif: 'Auditer et optimiser le site sur les axes performance, accessibilité et SEO pour améliorer significativement les scores Lighthouse.',
    realisations: [
      'Audit complet avec Lighthouse et identification des points bloquants',
      'Optimisation et compression des images (format WebP)',
      'Amélioration de l\'accessibilité : attributs aria, contrastes, balises sémantiques',
      'Optimisation SEO : balises title, meta description, structure h1/h2',
      'Ajout du schema.org pour le référencement local',
    ],
    difficulte: 'Trouver le bon équilibre entre compression des images et qualité visuelle pour ne pas dégrader l\'expérience utilisateur sur un site de photographe.',
    screenshots: [],
  },
];

export default projectsData;