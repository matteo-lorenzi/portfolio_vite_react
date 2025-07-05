// src/components/Projects.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  // Afficher seulement les 3 premiers projets sur la page d'accueil
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <section id="projects" className="projects">
      <div className="projects-header">
        <span className="section-subtitle">Portfolio</span>
        <h2>
          Mes Projets <span style={{ color: '#e0115f' }}>préférés</span>
        </h2>
      </div>

      <div className="projects-inner">
        {featuredProjects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              {/* Vous pouvez ajouter une image ici en utilisant project.imageUrl */}
              <div className="project-overlay">
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.short_description}</p>
              <div className="project-links">
                <Link to={`/projects/${project.id}`} className="project-link primary">Voir le projet</Link>
              </div>
            </div>
          </div>
        ))}
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