// src/components/Hero.jsx
import React from 'react';
import './Hero.css';
import avatar from '../assets/profile/avatar.jpeg';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <span className="greeting">Bonjour, je suis</span>
          <h1>Matteo</h1>
          <p>
            Étudiant en 3ème année d'informatique, passionné par le design et l'innovation.
          </p>
          <div className="btn-container">
            <a href="#projects" className="btn primary">Voir mes projets</a>
            <a href="#contact" className="btn secondary">Me contacter</a>
          </div>
        </div>
        <div className="hero-avatar">
          <div className="avatar-container">
            <img src={avatar} alt="Avatar Matteo" />
            <div className="avatar-decoration"></div>
          </div>
        </div>
      </div>
      <div className="hero-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>
    </section>
  );
};

export default Hero;