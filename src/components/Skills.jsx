import Collapse from './Collapse';

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

      <div className="skills__list">
        {skillsData.map((group) => (
          <Collapse
            key={group.category}
            title={group.category}
            icon={group.icon}
          >
            {group.skills.map((skill) => (
              <span className="skills__badge" key={skill}>{skill}</span>
            ))}
          </Collapse>
        ))}
      </div>
    </section>
  );
}

export default Skills;