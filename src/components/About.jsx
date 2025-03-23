// src/components/About.jsx
import React from 'react';
import './About.css';
import Spline from '@splinetool/react-spline';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-inner">
        <div className="about-text">
          <span className="section-subtitle">Découvrez</span>
          <h2>À propos de moi</h2>
          <p>
            Je suis Matteo, étudiant en informatique passionné par le développement web et le design moderne.
            J'aime créer des expériences utilisateur innovantes et esthétiques qui combinent fonctionnalité et élégance visuelle.
          </p>
          <div className="skills">
            <div className="skill-tag">React</div>
            <div className="skill-tag">UI/UX</div>
            <div className="skill-tag">JavaScript</div>
            <div className="skill-tag">Web Design</div>
          </div>
        </div>
        <div className="spline-effect">
          <Spline scene="https://prod.spline.design/XreLqeQGXNDEoant/scene.splinecode" />
        </div>
      </div>
      <div className="about-shapes">
        <div className="shape shape-3"></div>
      </div>
    </section>
  );
};

export default About;