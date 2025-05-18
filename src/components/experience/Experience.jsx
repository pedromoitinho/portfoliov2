import React from "react";
import "./Experience.css";

const Experience = () => {
    const experiences = [
        {
            title: "Estágio em TI",
            company: "Lupalina",
            period: "01/24 - 11/24",
            description:
                "Aprimorei meus conhecimentos em React, desenvolvendo uma landing page para a empresa, além de expandir meu entendimento sobre bancos de dados e infraestrutura.",
        },
        {
            title: "Estágio em Desenvolvimento",
            company: "InfoAtiva",
            period: "10/24 - 05/25",
            description:
                "Desenvolvemos um chatbot, além de otimizar seu desempenho e corrigir bugs.O que resultou em uma redução de 25% nas reclamações de usuários sobre erros e falhas.",
        },
    ];

    return (
        <section id="experience" className="experience">
            <h2>Experiência</h2>
            <ul className="timeline">
                {experiences.map((exp, index) => (
                    <li key={index} className="timeline-item">
                        <div className="timeline-dot" />
                        <div className="timeline-content">
                            <h3 id="titleExp">{exp.title}</h3>
                            <span className="company">{exp.company}</span>
                            <span className="period">{exp.period}</span>
                            <p>{exp.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Experience;
