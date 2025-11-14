import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const socialLinks = [
    { name: 'GitHub', icon: '🔗', link: 'https://github.com' },
    { name: 'LinkedIn', icon: '💼', link: 'https://linkedin.com' },
    { name: 'Twitter', icon: '🐦', link: 'https://twitter.com' },
    { name: 'Email', icon: '✉️', link: 'mailto:hello@example.com' }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-intro">
              I'm always interested in hearing about new projects and opportunities. 
              Feel free to reach out!
            </p>
            
            <div className="contact-methods">
              <div className="method">
                <h4>📧 Email</h4>
                <a href="mailto:hello@example.com">hello@example.com</a>
              </div>
              
              <div className="method">
                <h4>📍 Location</h4>
                <p>San Francisco, CA</p>
              </div>
              
              <div className="method">
                <h4>⏰ Availability</h4>
                <p>Available for freelance & full-time roles</p>
              </div>
            </div>

            <div className="social-links">
              <h4>Connect With Me</h4>
              <div className="social-grid">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                    title={social.name}
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project..."
                rows="6"
              ></textarea>
            </div>

            <button type="submit" className="btn-submit">
              {submitted ? '✓ Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
