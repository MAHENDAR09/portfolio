import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log the submitted data to console
    console.log('Contact Form Submitted:', formData);

    setSubmitted(true);

    // Reset form fields
    setFormData({ name: '', email: '', message: '' });

    // Remove success message after 5 seconds (optional)
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Get In Touch</h2>
      <div className="contact-container">

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            placeholder="Your Name" 
          />

          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            placeholder="Your Email" 
          />

          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message" 
            rows="5" 
            value={formData.message} 
            onChange={handleChange} 
            required 
            placeholder="Your Message" 
          ></textarea>

          <button type="submit">Send Message</button>

          {submitted && (
            <p className="success-msg">
              Thanks for reaching out! I'll get back to you soon.
            </p>
          )}
        </form>

        <div className="contact-info">
          <h3>Contact Info</h3>
          <p><strong>Email:</strong> siliverumahendar2@gmail.com</p>
          <p><strong>Phone:</strong> +91 81794 72648</p>
          <p><strong>Location:</strong> Hyderabad, India</p>

          <h3 style={{ marginTop: '30px' }}>Coding Profiles</h3>
          <div className="Profiles" aria-label="Coding Profiles">
            <a
              href="https://github.com/MAHENDAR09"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="22" height="22" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.388-1.333-1.758-1.333-1.758-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.805 1.305 3.49.998.108-.775.42-1.305.763-1.605-2.665-.3-5.467-1.335-5.467-5.933 0-1.31.47-2.38 1.236-3.22-.123-.303-.536-1.522.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.984-.4 3.003-.404 1.02.004 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.654.242 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.63-5.48 5.922.43.37.823 1.1.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.192.694.8.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/siliveru-mahendar-7aaba8281/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="22" height="22" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.849-3.037-1.851 0-2.134 1.445-2.134 2.939v5.667H9.355V9h3.415v1.561h.049c.476-.9 1.637-1.849 3.368-1.849 3.602 0 4.267 2.368 4.267 5.451v6.289zM5.337 7.433c-1.144 0-2.07-.927-2.07-2.07 0-1.146.927-2.073 2.07-2.073 1.146 0 2.073.927 2.073 2.073 0 1.143-.927 2.07-2.073 2.07zM6.867 20.452H3.808V9h3.06v11.452zM22.225 0H1.771C.792 0 0 .773 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .773 23.2 0 22.225 0z"/>
              </svg>
              LinkedIn
            </a>

            <a
              href="https://leetcode.com/u/siliverumahendar2/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="22" height="22" fill="currentColor">
                <path d="M18.19 5.245a1 1 0 0 1 1.414 1.414l-7.07 7.071a1 1 0 0 1-1.415 0l-3.536-3.535a1 1 0 1 1 1.414-1.415l2.829 2.829 6.364-6.364z"/>
              </svg>
              LeetCode
            </a>

            <a
              href="https://www.hackerrank.com/profile/siliverumahenda1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="HackerRank"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="22" height="22" fill="currentColor">
                <path d="M20.707 7.293l-8-5.999a1 1 0 0 0-1.414 0l-8 6a1 1 0 0 0 0 1.414l8 8a1 1 0 0 0 1.414 0l8-8a1 1 0 0 0 0-1.414zM13 15h-2v-6h2v6z"/>
              </svg>
              HackerRank
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
