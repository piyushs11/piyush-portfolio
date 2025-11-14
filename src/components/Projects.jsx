import React from 'react';
import './Projects.css';

export default function Projects() {

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory, payment integration, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'Redux'],
      link: '#',
      image: '🛍️'
    },
    {
      title: 'Real-time Chat App',
      description: 'Feature-rich messaging application with real-time notifications, file sharing, and user authentication.',
      tech: ['React', 'Socket.io', 'Express', 'PostgreSQL', 'JWT'],
      link: '#',
      image: '💬'
    },
    {
      title: 'AI Task Manager',
      description: 'Intelligent task management system with AI-powered suggestions, priority sorting, and analytics dashboard.',
      tech: ['React', 'AI API', 'Firebase', 'Tailwind CSS', 'D3.js'],
      link: '#',
      image: '✓'
    },
    {
      title: 'Streaming Analytics Dashboard',
      description: 'Real-time data visualization platform for monitoring streaming metrics with custom reports.',
      tech: ['React', 'WebSocket', 'AWS', 'Chart.js', 'Node.js'],
      link: '#',
      image: '📊'
    },
    {
      title: 'Collaborative Code Editor',
      description: 'Browser-based code editor with live collaboration, syntax highlighting, and multiple language support.',
      tech: ['React', 'Monaco Editor', 'Websocket', 'Node.js', 'Docker'],
      link: '#',
      image: '📝'
    },
    {
      title: 'Machine Learning API',
      description: 'REST API for machine learning models with model versioning, performance tracking, and documentation.',
      tech: ['Python', 'FastAPI', 'TensorFlow', 'PostgreSQL', 'Docker'],
      link: '#',
      image: '🤖'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card"
            >
              <div className="project-header">
                <div className="project-icon">{project.image}</div>
                <h3>{project.title}</h3>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <a href={project.link} className="project-link">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
