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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }

    if (!isValidEmail(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    console.log('Contact Form Submitted:', formData);

    try {
      const response = await fetch('https://portfolio-backend-5mw7.onrender.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          mail: formData.email,
          msg: formData.message
        })
      });

      const data = await response.json();
      console.log('Server Response:', data);

      if (data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert('Error: ' + data.message);
      }
    } catch (error) {
      console.error('Error sending contact form:', error);
      alert('An error occurred. Please try again later.');
    }
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
            <a href="https://github.com/MAHENDAR09" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/siliveru-mahendar-7aaba8281/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://leetcode.com/u/siliverumahendar2/" target="_blank" rel="noopener noreferrer">LeetCode</a>
            <a href="https://www.hackerrank.com/profile/siliverumahenda1" target="_blank" rel="noopener noreferrer">HackerRank</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
