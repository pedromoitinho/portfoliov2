import React from "react";
import "./Education.css";

const Education = () => {
    const educationList = [
        {
            degree: "Bacharelado em Engenharia de Software",
            institution: "Universidade Nobre",
            period: "2023 - 2027",
            description: "",
        },
        {
            degree: "Web Development Bootcamp",
            institution: "Udemy",
            period: "2025",
            description: "Curso focado em sistemas web escaláveis.",
        },
    ];

    return (
        <section id="education" className="education">
            <h2>Educação</h2>
            <ul className="edu-timeline">
                {educationList.map((edu, index) => (
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
