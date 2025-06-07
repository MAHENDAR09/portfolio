import React from 'react';
import './About.css';


const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>About Me</h2>
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <img
              src="img.jpg"
              alt="Profile"
              className="img-fluid"
            />
          </div>
          <div className="col-md-8">
            <p className="lead">
              Hi! I'm <strong>Siliveru Mahendar</strong>, a passionate Software Developer specializing in MERN Stack and DSA. I love building modern, responsive web apps and solving real-world problems through clean, efficient code.
            </p>
            <p>
              I enjoy developing, contributing to open-source, and exploring new technologies to become a stronger full-stack developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
