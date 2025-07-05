// src/pages/ProjectPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { projectsData } from '../data/projectsData';
import './ProjectPage.css';

const ProjectPage = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <>
        <Header />
        <div className="project-not-found">
          <h2>Projet non trouvé</h2>
          <Link to="/all-projects" className="btn primary">Retour aux projets</Link>
        </div>
        <Footer />
      </>
    );
  }

  const currentIndex = projectsData.findIndex(p => p.id === project.id);
  const nextProject = projectsData[currentIndex + 1];
  const prevProject = projectsData[currentIndex - 1];

  return (
    <>
      <Header />
      <div className="project-page-container">
        <div className="project-layout">
          <main className="project-content-container">
            <div className="project-card-description">
              <header className="project-header">
                <h1 className="project-title">{project.title}</h1>
                <div className="tags-section">
                  <h3 className="tags-title">Catégories</h3>
                  <div className="tags-container">
                    {project.tags.map(tag => (
                      <span key={tag} className={`tag tag-${tag.toLowerCase().replace(/\s+/g, '-')}`}>{tag}</span>
                    ))}
                  </div>
                </div>
              </header>

              <section className="project-description">
                <p>{project.long_description}</p>
              </section>

              <section className="tags-section">
                <h3 className="tags-title">Technologies</h3>
                <div className="tags-container">
                  {project.technologies.map(tech => (
                    <span key={tech} className={`tag tag-${tech.toLowerCase().replace(/\s+/g, '-')}`}>{tech}</span>
                  ))}
                </div>
              </section>

              <div className="project-page-links">
                {project.sourceCodeUrl && (
                  <a href={project.sourceCodeUrl} target="_blank" rel="noopener noreferrer" className="btn secondary">Code Source</a>
                )}
                {project.liveDemoUrl && (
                  <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="btn primary">Démo Live</a>
                )}
              </div>

              <nav className="project-navigation">
                {prevProject && (
                  <Link to={`/projects/${prevProject.id}`} className="nav-button nav-prev">Projet précédent</Link>
                )}
                {nextProject && (
                  <Link to={`/projects/${nextProject.id}`} className="nav-button nav-next">Projet suivant</Link>
                )}
              </nav>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectPage;