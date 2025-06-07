import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations/translations";
import "./Education.css";

const Education = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section id="education" className="education">
            <h2>{t.education.title}</h2>
            <ul className="edu-timeline">
                {t.education.list.map((edu, index) => (
                    <li key={index} className="edu-item">
                        <div className="edu-dot" />
                        <div className="edu-content">
                            <h3 id="degree">{edu.degree}</h3>
                            <span className="institution">{edu.institution}</span>
                            <span className="period">{edu.period}</span>
                            <p>{edu.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Education;
