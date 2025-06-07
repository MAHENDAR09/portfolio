import React from 'react';
import './Skills.css';

const skills = [
  { name: 'JavaScript', icon: '🟨' },
  { name: 'React.js', icon: '⚛️' },
  { name: 'Node.js', icon: '🟩' },
  { name: 'Express.js', icon: '🚂' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'HTML5', icon: '📄' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'Git & GitHub', icon: '🔧' },
  { name: 'Java', icon: '☕' },
  { name: 'DSA', icon: '🧠' }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="text-center mb-5">Skills</h2>
        <div className="row justify-content-center">
          {skills.map((skill, index) => (
            <div className="col-6 col-md-4 col-lg-3 mb-4" key={index}>
              <div className="skill-card text-center shadow-sm">
                <div className="icon">{skill.icon}</div>
                <div className="skill-name">{skill.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
