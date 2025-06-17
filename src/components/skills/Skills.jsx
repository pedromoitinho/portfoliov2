import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations/translations";
import "./Skills.css";

const Skills = () => {
	const { language } = useLanguage();
	const t = translations[language];

	const skillCategories = [
		{
			title: t.skills.categories.frontend,
			skills: ["React", "Typescript"],
		},
		{
			title: t.skills.categories.backend,
			skills: ["Java / Spring", "Api Development", "Docker", "Node.JS / Express", "Microsservices"],
		},
		{
			title: t.skills.categories.tools,
			skills: [
				"Git",
				"Postman",
				"Swagger",
				"AWS",
				"Clean Code",
			],
		},
	];

	return (
		<section id="skills" className="skills">
			<h2>{t.skills.title}</h2>
			<div className="skills-container">
				{skillCategories.map((category, index) => (
					<div key={index} className="skill-category">
						<h3>{category.title}</h3>
						<div className="skills-grid">
							{category.skills.map((skill, skillIndex) => (
								<div key={skillIndex} className="skill-item">
									<div className="skill-info">
										<span className="skill-name">{skill}</span>
									</div>
									<div className="skill-bar">
										<div
											className="skill-progress"
											style={{
												width: `${Math.floor(Math.random() * 30) + 70}%`,
											}}
										></div>
									</div>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Skills;
