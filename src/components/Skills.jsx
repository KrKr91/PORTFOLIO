import '../style/layouts/_skills.scss';

const skillsData = [
  {
    category: 'Front-end',
    icon: '🎨',
    skills: ['HTML5', 'CSS3', 'JavaScript ES6+', 'React', 'Sass/SCSS'],
  },
  {
    category: 'Back-end & BDD',
    icon: '⚙️',
    skills: ['PHP', 'SQL', 'Node.js'],
  },
  {
    category: 'Outils & Méthodes',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'Vite', 'WordPress', 'Figma', 'React Router'],
  },
  {
    category: 'Soft skills',
    icon: '🤝',
    skills: ['Polyvalent', 'Curieux', 'Créatif', 'Sérieux', 'Autonome'],
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="skills__title">Compétences</h2>

      <div className="skills__grid">
        {skillsData.map((group) => (
          <div className="skills__card" key={group.category}>
            <div className="skills__card-header">
              <span className="skills__card-icon">{group.icon}</span>
              <h3 className="skills__card-title">{group.category}</h3>
            </div>
            <ul className="skills__list">
              {group.skills.map((skill) => (
                <li className="skills__badge" key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;