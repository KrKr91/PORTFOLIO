import '../style/layouts/_intro.scss'; 

function Intro() { 
  return (
    
    <section className="intro" id="home"> 
      <div className="intro__content">
        <p className="intro__tag">Disponible immédiatement à Toulouse</p>
        <h1 className="intro__title">
          Christophe <span className="intro__title--accent">AIREAUDEAU</span>
        </h1>
        <h2 className="intro__subtitle">Développeur Web Junior</h2>
        <p className="intro__pitch">
          Je code des interfaces React modernes et responsives. 
          Passionné par le web depuis le lycée, reconverti et déterminé à transformer ma passion en expertise !
        </p>
        <div className="intro__cta">
          <a href="#projects" className="btn btn--primary">Voir mes projets</a>
          <a href="#contact" className="btn btn--secondary">Me contacter</a>
        </div>
      </div>
      <div className="intro__avatar">
        <div className="intro__avatar-circle">CA</div>
      </div>
    </section>
  );
}

export default Intro; 