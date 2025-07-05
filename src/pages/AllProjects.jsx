// src/pages/AllProjects.jsx
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NavBarProject from '../components/NavBarProject';
import { projectsData } from '../data/projectsData';
import './AllProjects.css';

const AllProjects = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const filter = queryParams.get('filter');

  let filteredProjects = projectsData;

  if (filter === 'recent') {
    // Triez les projets par ID ou par une date si vous l'ajoutez
    filteredProjects = [...projectsData].sort((a, b) => b.id - a.id).slice(0, 5); // Affiche les 5 plus récents
  } else if (filter) {
    filteredProjects = projectsData.filter(p => p.technologies.map(t => t.toLowerCase()).includes(filter));
  }

  return (
    <>
      <Header />
      <div className="all-projects-container">
        <div className="all-projects-layout">
          <aside className="sidebar-container">
            <NavBarProject />
          </aside>
          <main className="projects-main">
            <div className="projects-header">
              <h1>Tous les projets</h1>
              <p>Découvrez une sélection de mes travaux, allant du développement web aux jeux vidéo.</p>
            </div>
            {filteredProjects.length > 0 ? (
              <div className="projects-grid">
                {filteredProjects.map((project) => (
                  <div className="project-item" key={project.id}>
                    <div className="project-content">
                      <h2>{project.title}</h2>
                      <p className="project-description">{project.short_description}</p>
                      <div className="project-meta">
                        <div className="project-tags">
                          {project.tags.map((tag) => (
                            <span key={tag} className={`tag tag-${tag.toLowerCase().replace(/\s+/g, '-')}`}>{tag}</span>
                          ))}
                        </div>
                      </div>
                      <Link to={`/projects/${project.id}`} className="project-link">Voir le projet</Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-projects">
                <p>Aucun projet trouvé pour le filtre sélectionné.</p>
              </div>
            )}
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllProjects;
