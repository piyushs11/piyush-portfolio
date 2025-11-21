import React from 'react';
import './Experience.css';

export default function Experience() {
  const experiences = [
    {
      title: 'Full-stack Web Engineer ',
      company: 'Launch Ventures',
      duration: '2023 - 2025',
      description: 'Built a scalable investment-management platform using React, Node.js, and PostgreSQL, migrating the firm from Retool and delivering faster performance, advanced reporting modules, and optimized trade processing. Also improved a task-tracking platform with better UI, encrypted data handling, and data analytics in Python that accelerated decision-making from days to hours.',
      highlights: ['React', 'Node.js', 'PostgreSQL', 'Python', 'Data Analytics', 'AWS']
    },
    {
      title: 'Machine Learning Intern',
      company: 'Capgemini',
      duration: '2022 - 2022',
      description: 'Developed and containerized YOLO-based computer-vision services on Microsoft Azure, automating model training, testing, and deployment while building Flask APIs with validated endpoints and incorporating a feedback loop to improve detection accuracy. Managed and annotated large image and video datasets using CVAT, resulting in a 10% boost in overall model performance.',
      highlights: ['Computer Vision', 'Azure', 'CVAT']
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
