"use client";

import { useState } from "react";
import "./Projects.css";
import Codecraft from "./codecraft.jpeg";
const Projects = () => {
	const [activeFilter, setActiveFilter] = useState("all");

	const projects = [
		{
			id: 1,
			title: "Vitais Consultoria",
			description:
				"Projeto real, realizado para uma empresa de consultorias da minha cidade",
			category: "web",
			technologies: ["React", "Typescript", "EmailJS", "IMGBot"],
			image:
				"https://media.licdn.com/dms/image/v2/D4D22AQGcssAVx9oyqw/feedshare-shrink_1280/B4DZbhwwmBIAAo-/0/1747544384473?e=1750291200&v=beta&t=zebAYTujf-GC8x9esy-SI5cLtoBagCAlgVPb4DSXWis",
			link: "https://vitaisconsultoria.com/",
		},
		{
			id: 2,
			title: "CodeCraft",
			description:
				"Abertura da minha empresa, projeto completamente desenvolvido por mim em um projeto fullstack",
			category: "web",
			technologies: ["React", "Typescript", "EmailJS"],
			image: Codecraft,
			link: "https://codecraft.social/",
		},
		{
			id: 3,
			title: "Microserviço de Login e de Entrega de Formulários",
			description:
				"Microserviço em backend desenvolvido, para suprir a nova ideia da cliente da Vitais Consultoria",
			category: "backend",
			technologies: ["Spring", "Docker", "Spring Security", "JAuth", "Microserviço", "Maven"],
			image: "https://www.showmetech.com.br/wp-content/uploads//2018/11/conheca-cursos-de-programacao-gratis-1132x600-jpg-webp.webp",
			link: "https://github.com/pedromoitinho/loginMicroservice",
		},
	];

	const filters = [
		{ name: "Todos", value: "all" },
		{ name: "Web", value: "web" },
		{ name: "Backend", value: "backend" }
	];

	const filteredProjects =
		activeFilter === "all"
			? projects
			: projects.filter((project) => project.category === activeFilter);

	return (
		<section id="projects" className="projects">
			<h2>Meus Projetos</h2>
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
									Visualizar Projeto
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
