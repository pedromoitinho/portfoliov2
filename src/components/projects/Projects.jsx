"use client";

import { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations/translations";
import "./Projects.css";
import Codecraft from "./codecraft.jpeg";
import Vitais from "./vitais.png";

const Projects = () => {
	const [activeFilter, setActiveFilter] = useState("all");
	const { language } = useLanguage();
	const t = translations[language];

	const projects = [
		{
			id: 1,
			title: t.projects.list[0].title,
			description: t.projects.list[0].description,
			category: "web",
			technologies: ["React", "Typescript", "EmailJS", "IMGBot"],
			image:
				Vitais,
			link: "https://vitaisconsultoria.com/",
		},
		{
			id: 2,
			title: t.projects.list[1].title,
			description: t.projects.list[1].description,
			category: "backend",
			technologies: ["Spring", "Docker", "Spring Security", "JAuth", "Microserviço", "Maven"],
			image: "https://www.showmetech.com.br/wp-content/uploads//2018/11/conheca-cursos-de-programacao-gratis-1132x600-jpg-webp.webp",
			link: "https://github.com/pedromoitinho/loginMicroservice",
		},
		{
			id: 3,
			title: "LoginCRUD",
			description: t.projects.list[2].description,
			category: "backend",
			technologies: ["Typescript", "Express", "sqlite3", "cors", "typeorm"],
			image: "https://www.showmetech.com.br/wp-content/uploads//2018/11/conheca-cursos-de-programacao-gratis-1132x600-jpg-webp.webp",
			link: "https://github.com/pedromoitinho/login-crud",
		},
		{
			id: 4,
			title: "Fee-API",
			description: t.projects.list[3].description,
			category: "backend",
			technologies: ["Typescript", "Express", "sqlite3", "cors", "typeorm"],
			image: "https://www.showmetech.com.br/wp-content/uploads//2018/11/conheca-cursos-de-programacao-gratis-1132x600-jpg-webp.webp",
			link: "https://github.com/pedromoitinho/fee-api",
		},
	];

	const filters = [
		{ name: t.projects.filters.all, value: "all" },
		{ name: t.projects.filters.web, value: "web" },
		{ name: t.projects.filters.backend, value: "backend" }
	];

	const filteredProjects =
		activeFilter === "all"
			? projects
			: projects.filter((project) => project.category === activeFilter);

	return (
		<section id="projects" className="projects">
			<h2>{t.projects.title}</h2>
			<div className="project-filters">
				{filters.map((filter) => (
					<button
						key={filter.value}
						className={`filter-btn ${activeFilter === filter.value ? "active" : ""
							}`}
						onClick={() => setActiveFilter(filter.value)}
					>
						{filter.name}
					</button>
				))}
			</div>
			<div className="projects-grid">
				{filteredProjects.map((project) => (
					<div key={project.id} className="project-card">
						<div className="project-image">
							<div
								className="image-placeholder"
								style={{ backgroundImage: `url(${project.image})` }}
							></div>
							<div className="project-overlay">
								<a href={project.link} className="project-link" target="_blank">
									{t.projects.viewProject}
								</a>
							</div>
						</div>
						<div className="project-info">
							<h3 className="project-title">{project.title}</h3>
							<p className="project-description">{project.description}</p>
							<div className="project-tech">
								{project.technologies.map((tech, index) => (
									<span key={index} className="tech-tag">
										{tech}
									</span>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;
