import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>
          <span className="greeting">Oi, eu sou</span>
          <span className="name">Pedro Moitinho</span>
          <span className="title">Engenheiro de Software</span>
        </h1>
        <p className="description">
          Arquiteto e desenvolvo soluções reais para a engenharia web.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            Descubra Meu Trabalho
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contato
          </a>
        </div>
      </div>
      <div className="hero-image">
        <div className="image-container">
          <div className="geometric-shape"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
