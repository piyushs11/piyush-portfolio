import React, { useEffect, useState } from 'react';
import './Hero.css';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Defer the state update to the next animation frame to avoid synchronous setState in the effect
    const raf = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className={`hero-text ${isVisible ? 'fade-in' : ''}`}>
          <h3 className="hero-greeting">👋 Hey, I'm</h3>
          <h1 className="hero-title">
            <span className="gradient-text">Piyush</span>
            <br />
            Full Stack Developer
          </h1>
          <p className="hero-subtitle">
            Crafting beautiful, scalable web experiences
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="/resume.pdf" download className="btn btn-tertiary">
              📥 Download Resume
            </a>
          </div>
        </div>
        <div className={`hero-visual ${isVisible ? 'slide-in' : ''}`}>
          <div className="animated-box"></div>
          <div className="floating-circle circle-1"></div>
          <div className="floating-circle circle-2"></div>
          <div className="floating-circle circle-3"></div>
        </div>
      </div>
    </section>
  );
}
