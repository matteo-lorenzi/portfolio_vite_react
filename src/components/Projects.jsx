// src/components/Projects.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-header">
        <span className="section-subtitle">Portfolio</span>
        <h2>Mes Projets</h2>
      </div>

      <div className="projects-inner">
        {/* Projet 1: Terraforma */}
        <div className="project-card">
          <div className="project-image">
            <div className="project-overlay">
              <div className="project-tags">
                <span>Éducation</span>
                <span>Jeu Vidéo</span>
              </div>
            </div>
          </div>
          <div className="project-content">
            <h3>Terraforma</h3>
            <p>Création d’un jeu vidéo ludo-éducatif pour un niveau de 3ème en SVT.</p>
            <div className="project-links">
              <Link to="/projects/1" className="project-link primary">Voir le projet</Link>
              <a href="#" className="project-link secondary disabled">Code source</a>
            </div>
          </div>
        </div>

        {/* Projet 2: GameJam */}
        <div className="project-card">
          <div className="project-image">
            <div className="project-overlay">
              <div className="project-tags">
                <span>GameJam</span>
                <span>Développement</span>
              </div>
            </div>
          </div>
          <div className="project-content">
            <h3>GameJam</h3>
            <p>Création d’un jeu en lien avec l’IUT.</p>
            <div className="project-links">
              <Link to="/projects/2" className="project-link primary">Voir le projet</Link>
              <a href="#" className="project-link secondary disabled">Code source</a>
            </div>
          </div>
        </div>

        {/* Projet 3: Fish’Event */}
        <div className="project-card">
          <div className="project-image">
            <div className="project-overlay">
              <div className="project-tags">
                <span>Évènementiel</span>
                <span>Application</span>
              </div>
            </div>
          </div>
          <div className="project-content">
            <h3>Fish’Event</h3>
            <p>Développement d'une application évènementielle pour la pêche.</p>
            <div className="project-links">
              <Link to="/projects/3" className="project-link primary">Voir le projet</Link>
              <a href="#" className="project-link secondary disabled">Code source</a>
            </div>
          </div>
        </div>

        {/* Projet 4: Comparaison d’approches algorithmiques */}
        {/*
        <div className="project-card">
          <div className="project-image">
            <div className="project-overlay">
              <div className="project-tags">
                <span>Algorithmie</span>
                <span>Code</span>
              </div>
            </div>
          </div>
          <div className="project-content">
            <h3>Comparaison d’approches algorithmiques</h3>
            <p>Comparaison d’approches algorithmiques.</p>
            <div className="project-links">
              <Link to="/projects/4" className="project-link primary">Voir le projet</Link>
              <a href="#" className="project-link secondary disabled">Code source</a>
            </div>
          </div>
        </div>
        */}

        {/* Projet 5: Site web pour élèves de 3ème */}
        {/*
        <div className="project-card">
          <div className="project-image">
            <div className="project-overlay">
              <div className="project-tags">
                <span>Web</span>
                <span>Éducation</span>
              </div>
            </div>
          </div>
          <div className="project-content">
            <h3>Site web pour élèves de 3ème</h3>
            <p>Site web simplifiant la recherche de stage pour les élèves de 3ème.</p>
            <div className="project-links">
              <Link to="/projects/5" className="project-link primary">Voir le projet</Link>
              <a href="#" className="project-link secondary disabled">Code source</a>
            </div>
          </div>
        </div>
        */}

        {/* Projet 6: Installation d'un poste pour le développement */}
        {/*
        <div className="project-card">
          <div className="project-image">
            <div className="project-overlay">
              <div className="project-tags">
                <span>Développement</span>
                <span>Installation</span>
              </div>
            </div>
          </div>
          <div className="project-content">
            <h3>Installation d'un poste pour le développement</h3>
            <p>Installation d'un poste pour le développement.</p>
            <div className="project-links">
              <Link to="/projects/6" className="project-link primary">Voir le projet</Link>
              <a href="#" className="project-link secondary disabled">Code source</a>
            </div>
          </div>
        </div>
        */}
      </div>

      <div className="projects-cta">
        <Link to="/all-projects" className="btn primary">Voir tous mes projets</Link>
      </div>

      <div className="projects-shapes">
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
      </div>
    </section>
  );
};

export default Projects;
