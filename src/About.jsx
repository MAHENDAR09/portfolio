import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-image">
          <img src="src/pic.jpg" alt="Profile" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi! I'm <strong>Siliveru Mahendar</strong>, a passionate Software Developer specializing in the MERN Stack and DSA. I love building modern, responsive web apps and solving real-world problems through clean, efficient code.
          </p>
          <p>
            I enjoy developing, contributing to open-source, and exploring new technologies to become a stronger full-stack developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
