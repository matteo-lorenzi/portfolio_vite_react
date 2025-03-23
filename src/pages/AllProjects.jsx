// src/pages/AllProjects.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './AllProjects.css';
import Header from '../components/Header';
import NavBarProject from '../components/NavBarProject';

const AllProjects = () => {
    const location = useLocation();
    const [filteredProjects, setFilteredProjects] = useState([]);

    // Définir les projets avec leurs tags associés
    const projects = [
        {
            id: 1,
            title: 'Terraforma',
            description: 'Création d\'un jeu vidéo ludo- éducatif pour un niveau de 3ème en SVT.',
            tags: ['javascript', 'html', 'css', 'php', 'github'],
            date: '2024-01-15', // Format YYYY-MM-DD pour faciliter le tri
            isRecent: true
        },
        {
            id: 2,
            title: 'GameJam',
            description: 'Création d\'un jeu en lien avec l\'IUT.',
            tags: ['python', 'github'],
            date: '2023-11-20',
            isRecent: true
        },
        {
            id: 3,
            title: 'Fish\'Event',
            description: 'Développement d\'une application évènementielle pour la pêche.',
            tags: ['event', 'fishing'],
            date: '2023-08-05',
            isRecent: false
        },
        {
            id: 4,
            title: 'Comparaison d\'approches algorithmiques',
            description: 'Comparaison d\'approches algorithmiques.',
            tags: ['java', 'javafx'],
            date: '2023-05-10',
            isRecent: false
        },
        {
            id: 5,
            title: 'Site web pour élèves de 3ème',
            description: 'Site web simplifiant la recherche de stage pour les élèves de 3ème.',
            tags: ['html', 'css', 'github'],
            date: '2022-12-12',
            isRecent: false
        },
        {
            id: 6,
            title: 'Installation d\'un poste pour le développement',
            description: 'Installation d\'un poste pour le développement.',
            tags: ['word', 'github'],
            date: '2022-09-25',
            isRecent: false
        },
    ];

    // Filtrer les projets en fonction de l'URL
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const filter = params.get('filter');

        if (!filter) {
            setFilteredProjects(projects);
            return;
        }

        let filtered;
        switch (filter) {
            case 'recent':
                filtered = projects.filter(project => project.isRecent);
                break;
            case 'github':
                filtered = projects.filter(project => project.tags.includes('github'));
                break;
            case 'html':
                filtered = projects.filter(project =>
                    project.tags.includes('html') || project.tags.includes('css'));
                break;
            case 'java':
                filtered = projects.filter(project =>
                    project.tags.includes('java') || project.tags.includes('javafx'));
                break;
            case 'python':
                filtered = projects.filter(project => project.tags.includes('python'));
                break;
            default:
                filtered = projects;
        }

        setFilteredProjects(filtered);
    }, [location.search]);

    // Fonction pour obtenir les tags formatés pour l'affichage
    const getFormattedTags = (tags) => {
        return tags.map(tag => `#${tag}`);
    };

    return (
        <>
            <Header />
            <div className="all-projects-container">
                <div className="all-projects-layout">
                    <aside className="sidebar-container">
                        <NavBarProject />
                    </aside>
                    <main className="projects-main">
                        <header className="projects-header">
                            <h1>Mes projets</h1>
                            <p>
                                Découvrez tous mes projets et filtrez-les par catégorie en utilisant la barre de navigation.
                            </p>
                        </header>

                        {filteredProjects.length === 0 ? (
                            <div className="no-projects">
                                <p>Aucun projet ne correspond à ce filtre.</p>
                            </div>
                        ) : (
                            <section className="projects-grid">
                                {filteredProjects.map((project) => (
                                    <article key={project.id} className="project-item">
                                        <div className="project-content">
                                            <h2>{project.title}</h2>
                                            <p className="project-description">{project.description}</p>
                                            <div className="project-meta">
                                                <div className="project-tags">
                                                    {getFormattedTags(project.tags).map((tag, index) => (
                                                        <span key={index} className={`tag tag-${tag.slice(1)}`}>
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                {project.isRecent && (
                                                    <span className="project-badge">Récent</span>
                                                )}
                                            </div>
                                            <Link to={`/projects/${project.id}`} className="project-link">
                                                Voir le détail
                                            </Link>
                                        </div>
                                    </article>
                                ))}
                            </section>
                        )}
                    </main>
                </div>
            </div>
        </>
    );
};

export default AllProjects;