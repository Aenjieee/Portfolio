import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    { name: 'HTML5', level: 90 },
    { name: 'CSS3', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 },
    { name: 'Node.js', level: 70 },
    { name: 'MongoDB', level: 65 },
    { name: 'Python', level: 60 },
    { name: 'UI/UX Design', level: 75 }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-content">
          <div className="skills-text">
            <h3>What I'm capable of</h3>
            <p>
              Throughout my career, I've developed a diverse set of skills that allow me to create
              comprehensive web solutions. From front-end development using modern frameworks like React,
              to back-end implementation with Node.js and database management with MongoDB, I have the
              expertise to bring projects from concept to completion.
            </p>
            <p>
              I'm also proficient in UI/UX design principles, ensuring that the applications I build
              not only function well but also provide an intuitive and enjoyable user experience.
            </p>
          </div>
          <div className="skills-bars">
            {skills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-info">
                  <p>{skill.name}</p>
                  <p>{skill.level}%</p>
                </div>
                <div className="progress-line">
                  <span style={{ width: `${skill.level}%` }} data-percent={`${skill.level}%`}></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills; 