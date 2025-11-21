import React from 'react';
import './Projects.css';

export default function Projects() {

  const projects = [
    {
      title: 'Multimodal Job Interview Analyzer',
      description: 'Developed an integrated platform utilizing CNN models for video and Random Forest classifiers for audio, applying late-fusion strategies to deliver holistic candidate feedback in mock interviews and resume screening scenarios.',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'CNN', 'Random Forest', 'Flask'],
      link: '#',
      image: '👩🏻‍💻'
    },
    {
      title: 'Hate Speech Detection Using ML',
      description: 'Collected and cleaned 30,000 tweets using Tweepy, built multiple NLP classifiers, and achieved a top accuracy of 94.11% with Logistic Regression for hate-speech detection.',
      tech: ['Python', 'NLP', 'Logistic Regression', 'Scikit-learn', 'Tweepy'],
      link: 'https://github.com/piyushs11/Hate-Speech-Detection-using-Machine-Learning-Techniques',
      image: '💬'
    },
    {
      title: 'Criminal Record Management System',
      description: 'Implemented a secure full-stack PHP–MySQL web application with role-based access control, enabling fast, secure access to critical data and reducing police record-retrieval time from hours to minutes.',
      tech: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript', 'Bootstrap'],
      link: 'https://github.com/Aradhyatg17/Criminal-Record-Management-System',
      image: '🗄️'
    },
    {
      title: 'Angry Bird 2D Game',
      description: 'Developed a 2D physics-based Unity game inspired by Angry Birds, featuring slingshot mechanics, destructible structures, and progressively challenging levels.',
      tech: ['Unity', 'C#', 'Game Development', 'Physics Simulation'],
      link: '#',
      image: '🐦'
    },
    {
      title: 'Collaborative Code Editor',
      description: 'Built a real-time collaborative code editor with instant updates, and multi-user editing using web sockets, enabling seamless shared coding and faster team collaboration.',
      tech: ['React', 'Monaco Editor', 'Websocket', 'Node.js'],
      link: 'https://github.com/piyushs11/realtime-code-editor',
      image: '📝'
    },
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
