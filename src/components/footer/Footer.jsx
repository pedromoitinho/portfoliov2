import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations/translations";
import "./Footer.css";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">pm</div>
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Pedro Moitinho. {t.footer.rights}</p>
          <div className="footer-links">
            <a href="#home">{t.footer.links.home}</a>
            <a href="#about">{t.footer.links.about}</a>
            <a href="#experience">{t.footer.links.experience}</a>
            <a href="#education">{t.footer.links.education}</a>
            <a href="#skills">{t.footer.links.skills}</a>
            <a href="#projects">{t.footer.links.projects}</a>
            <a href="#contact">{t.footer.links.contact}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
