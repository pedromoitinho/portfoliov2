import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations/translations";
import "./Experience.css";

const Experience = () => {
	const { language } = useLanguage();
	const t = translations[language];

	return (
		<section id="experience" className="experience">
			<h2>{t.experience.title}</h2>
			<ul className="timeline">
				{t.experience.jobs.map((exp, index) => (
					<li key={index} className="timeline-item">
						<div className="timeline-dot" />
						<div className="timeline-content">
							<h3 id="titleExp">{exp.title}</h3>
							<span className="company">{exp.company}</span>
							<span className="period">{exp.period}</span>
							<p dangerouslySetInnerHTML={{ __html: exp.description }} />
						</div>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Experience;
