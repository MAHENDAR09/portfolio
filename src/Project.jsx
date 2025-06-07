import React from 'react';
import './Project.css'; // Make sure this file exists with your styles

const projects = [
  {
    title: 'ClubHub',
    type: 'Full-Stack Project',
    stack: 'HTML, CSS, ReactJS, Node.js, Express.js, MongoDB',
    description: [
      'Developed a MERN-based platform, boosting club engagement by 50% through intuitive UI features.',
      'Integrated OAuth for secure login, reducing unauthorized access incidents by 35%.',
      'Deployed on Vercel, achieving 99.9% uptime with scalable deployment strategies.'
    ],
    github: 'https://github.com/MAHENDAR09/clubhub'
  },
  {
    title: 'DevelopersHub',
    type: 'Full-Stack Project',
    stack: 'HTML, CSS, ReactJS, Node.js, Express.js, MongoDB',
    description: [
      'Built a collaborative platform enabling developers to connect, share knowledge, and work together.',
      'Implemented secure authentication, profile management, and project collaboration features.',
      'Utilized MongoDB for efficient data handling and analytics.'
    ],
    github: 'https://github.com/MAHENDAR09/developersHub_MERN'
  },
  {
    title: 'Text Editor',
    type: 'Java Project',
    stack: 'Java, JFrames',
    description: [
      'Created a Java-based text editor with dark mode and customizable fonts.',
      'Improved user experience for editing and saving documents locally.'
    ],
    github: 'https://github.com/MAHENDAR09/Notepad'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-type">{project.type}</p>
              <p className="project-stack"><strong>Tech Stack:</strong> {project.stack}</p>
              <ul className="project-description">
                {project.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
