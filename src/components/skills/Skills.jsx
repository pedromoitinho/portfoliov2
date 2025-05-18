import "./Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Angular", "Typescript"],
    },
    {
      title: "Backend",
      skills: ["Node.js / Express", "SQL", "Java / Spring", "Rest"],
    },
    {
      title: "Ferramentas e Metodologias",
      skills: [
        "Git",
        "Postman",
        "Swagger",
        "AWS",
        "CI/CD",
        "Figma",
        "Clean Code",
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
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
