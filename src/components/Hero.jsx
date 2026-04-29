import '../style/layouts/_hero.scss';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <p className="hero__tag">Disponible immédiatement · Toulouse</p>
        <h1 className="hero__title">
          Christophe <span className="hero__title--accent">Aireaudeau</span>
        </h1>
        <h2 className="hero__subtitle">Développeur Web Junior</h2>
        <p className="hero__pitch">
          Je code des interfaces React modernes et responsives. 
          Passionné par le web depuis le lycée, reconverti et déterminé 
          à transformer ma passion en expertise.
        </p>
        <div className="hero__cta">
          <a href="#projects" className="btn btn--primary">Voir mes projets</a>
          <a href="#contact" className="btn btn--secondary">Me contacter</a>
        </div>
      </div>
      <div className="hero__avatar">
        <div className="hero__avatar-circle">CA</div>
      </div>
    </section>
  );
}

export default Hero;