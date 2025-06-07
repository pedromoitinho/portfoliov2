import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations/translations";
import "./About.css";
import CurriculoPDF from "./public/curriculo pedro final final.pdf";

const About = () => {
	const { language } = useLanguage();
	const t = translations[language];

	return (
		<section id="about" className="about">
			<h2>{t.about.title}</h2>
			<div className="about-content">
				<div className="about-text">
					<p>
						{t.about.description}
					</p>
					<div className="about-details">
						<div className="detail">
							<span className="detail-label">{t.about.details.name}</span>
							<span className="detail-value">Pedro Moitinho</span>
						</div>
						<div className="detail">
							<span className="detail-label">{t.about.details.availability}</span>
							<span className="detail-value">{t.about.details.availabilityValue}</span>
						</div>
					</div>
					<a href="#contact" className="btn btn-primary">
						{t.about.buttons.contact}
					</a>
					<a href={CurriculoPDF} download="curriculo_pedro_moitinho.pdf" className="btn btn-primary" id="curriculo">
						{t.about.buttons.resume}
					</a>
				</div>
			</div>
		</section >
	);
};

export default About;
