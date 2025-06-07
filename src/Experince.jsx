import React from 'react';
import './Experience.css';

const experiences = [
  {
    role: 'AI Trainer',
    company: 'Deccan AI',
    duration: 'Apr 2025 – Present',
    type: 'Fulltime - On-site',
    description: `
      Specialized in enhancing generative AI models using Reinforcement Learning with Human Feedback (RLHF).
      Evaluated AI responses for accuracy and user alignment, providing detailed feedback to improve model behavior.
      Worked with RLHF, SFT, LLMs, Prompt Engineering, and Prompt Evaluation to create human-centric AI experiences.
    `,
  },
  {
    role: 'DSA Mentor',
    company: 'SmartInterviews',
    duration: 'Jan 2025 – Feb 2025',
    type: 'Internship - Part-time',
    description: `
      Guided students on Data Structures, Algorithms, and Problem Solving with detailed solutions and clear explanations.
      Helped students enhance problem-solving skills through personalized mentorship and structured guidance.
      Mentored 10+ students, boosting their problem-solving skills by 30%.
    `,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="text-center mb-5">Experience</h2>
        {experiences.map((exp, index) => (
          <div className="experience-card mb-4" key={index}>
            <h4>{exp.role}</h4>
            <h5>{exp.company}</h5>
            <p className="duration"><strong>{exp.type}</strong> | {exp.duration}</p>
            <p>{exp.description.trim()}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
