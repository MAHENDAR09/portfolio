import React, { useState } from 'react';
import './Education.css';

const educationData = [
  {
    degree: 'B.Tech in Computer Science',
    institution: 'CMR Technical Campus',
    board: 'JNTU Hyderabad',
    year: '2022 – 2025',
    score: '7.2 CGPA'
  },
  {
    degree: 'Diploma in Computer Science',
    institution: 'Government Institute of Electronics',
    board: 'SBTET Board',
    year: '2020 – 2022',
    score: '92%'
  },
  {
    degree: '10th Grade',
    institution: 'ZPHS School',
    board: 'Telangana State Board',
    year: '2019 – 2020',
    score: '9.7 GPA'
  }
];

const Education = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section id="education" className="education-section">
      <h2 className="education-title">Education</h2>
      <div className={`timeline ${hovered ? 'thick-line' : ''}`}>
        {educationData.map((edu, index) => (
          <div
            className="timeline-item"
            key={index}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="degree">{edu.degree}</h3>
              <p className="institution">{edu.institution} | {edu.board}</p>
              <p className="year-score">{edu.year} | {edu.score}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
