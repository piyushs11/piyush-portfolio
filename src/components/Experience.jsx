import React from 'react';
import './Experience.css';

export default function Experience() {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovation Labs',
      duration: '2022 - Present',
      description: 'Leading development of scalable web applications, mentoring junior developers, and implementing modern architecture patterns.',
      highlights: ['React & Node.js', 'Team Leadership', 'AWS Architecture']
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Inc',
      duration: '2020 - 2022',
      description: 'Developed and maintained full-stack applications serving 100K+ users, optimized performance, and improved system reliability.',
      highlights: ['Full-stack Development', 'Database Optimization', 'CI/CD Pipeline']
    },
    {
      title: 'Junior Web Developer',
      company: 'StartUp Ventures',
      duration: '2019 - 2020',
      description: 'Built responsive web applications, collaborated with design team, and learned best practices in modern web development.',
      highlights: ['Frontend Development', 'API Integration', 'Responsive Design']
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <p className="company">{exp.company}</p>
                <p className="duration">{exp.duration}</p>
                <p className="description">{exp.description}</p>
                <div className="highlights">
                  {exp.highlights.map((highlight, i) => (
                    <span key={i} className="highlight">{highlight}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
