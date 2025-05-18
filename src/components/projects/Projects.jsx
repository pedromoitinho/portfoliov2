"use client";

import { useState } from "react";
import "./Projects.css";

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
      link: "https://github.com/pedromoitinho/janainaSite",
    },
  ];

  const filters = [
    { name: "Todos", value: "all" },
    { name: "Web", value: "web" },
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
            className={`filter-btn ${
              activeFilter === filter.value ? "active" : ""
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
