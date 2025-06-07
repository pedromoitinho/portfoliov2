import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations/translations";
import "./Hero.css";

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>
          <span className="greeting">{t.hero.greeting}</span>
          <span className="name">{t.hero.name}</span>
          <span className="title">{t.hero.title}</span>
        </h1>
        <p className="description">
          {t.hero.description}
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            {t.hero.cta}
          </a>
          <a href="#contact" className="btn btn-secondary">
            {t.hero.contact}
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
