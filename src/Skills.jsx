import React from 'react';
import './Skills.css';

const skillsData = {
  'Programming Languages': [

    { name: 'Java', icon: '☕' },
    { name: 'C', icon: '📘' },
    { name: 'Python', icon: '🐍' },
    { name: 'C++', icon: '💠' },
    { name: 'Data Structures & Algorithms (DSA) through Java', icon: '🧠' }
  ],
  'Web Technologies': [
  { name: 'HTML5', icon: '📄' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'Bootstrap CSS', icon: '🅱️' },
  { name: 'JavaScript', icon: '🟨' },
  { name: 'React.js', icon: '⚛️' },
  { name: 'Node.js', icon: '🟩' },
  { name: 'Express.js', icon: '🚂' },
  { name: 'UI/UX Design', icon: '🖌️' },
  { name: 'Git & GitHub', icon: '🔧' }
],
  'Machine Learning Technologies': [
    { name: 'Machine Learning', icon: '📊' },
    { name: 'Prompt Engineering', icon: '📝' },
    { name: 'LLMs', icon: '🤖' },
    { name: 'RLHF', icon: '🔁' }
  ],
  'Database Management': [
    { name: 'SQL', icon: '🗄️' },
    { name: 'MongoDB', icon: '🍃' }
  ]
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="text-center mb-5">Skills</h2>
        {Object.entries(skillsData).map(([category, skills], i) => (
          <div key={i} className="mb-5">
            <h4 className="mb-3">{category}</h4>
            <div className="row">
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
        ))}
      </div>
    </section>
  );
};

export default Skills;
