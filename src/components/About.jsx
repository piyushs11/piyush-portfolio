import React from 'react';
import './About.css';

export default function About() {
  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind', 'Vite'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'] },
    { category: 'Tools & Platforms', items: ['Git', 'Docker', 'AWS', 'Vercel', 'Firebase'] }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate full-stack developer with a love for building scalable, 
              beautiful web applications. With expertise in modern JavaScript frameworks 
              and cloud technologies, I create solutions that combine stunning design 
              with robust functionality.
            </p>
            <p>
              My journey in tech has taught me that great software is a blend of 
              technical excellence, user-centric design, and collaborative problem-solving. 
              I'm always eager to learn new technologies and tackle challenging problems.
            </p>
            <p>
              When I'm not coding, you'll find me exploring emerging tech trends, 
              contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skillGroup, index) => (
              <div key={index} className="skill-category">
                <h3>{skillGroup.category}</h3>
                <div className="skill-tags">
                  {skillGroup.items.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
