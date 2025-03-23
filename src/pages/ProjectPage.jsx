// src/pages/ProjectPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import './ProjectPage.css';
import NavBarProject from '../components/NavBarProject';

const ProjectPage = () => {
    const { id } = useParams();
    const numericId = parseInt(id);

    // Données pour les projets (inchangées)
    const projectsData = {
        1: {
            title: 'Terraforma',
            description: [
                "Le projet Terraforma était un travail de groupe de huit personnes, dans le cadre de notre formation à l'IUT 2 de Grenoble. L'objectif était de créer un jeu ludo-éducatif, et pour cela, nous avons suivi une méthodologie de gestion de projet.",
                "Dans un premier temps, nous avons travaillé sur la construction du projet, en analysant l'existant et en définissant les personas, les objectifs et les fonctionnalités de notre jeu. Nous avons également mis en place une organisation de groupe, en répartissant les rôles et les tâches de chacun. Cette phase était complexe, car il y avait de nombreux éléments à prendre en compte et certains manques d'expérience à combler. Nous avons bénéficié de l'aide de professeurs affiliés, qui nous ont guidés sur le bon chemin et nous ont proposé des séances spécialisées pour nous aider à avancer.",
                "Dans un deuxième temps, nous sommes passés à la phase de développement. Nous avons réparti les tâches en fonction des rôles attribués précédemment, et nous avons commencé à développer notre jeu/application. Cette phase était également intense, car nous avons rencontré de nombreux bugs et autres problèmes techniques à résoudre. Heureusement, notre groupe était soudé et nous avons pu compter sur l'entraide et le soutien de chacun. Dans notre groupe, nous avions un 'parcours B' qui s'est occupé de la partie back du serveur, de la gestion de la sécurité et de la base de données, tandis que les autres 'parcours A' étaient plus axés sur le développement fonctionnel et visuel de l'application.",
                "En somme, le projet Terraforma était une expérience riche et formatrice, qui nous a permis de mettre en pratique nos compétences en gestion de projet et en développement web.",
            ],
            tags: ['#javascript', '#HTML', '#css', '#PHP', '#github'],
        },
        // ... autres projets (inchangés)
        2: {
            title: 'GameJam',
            description: [
                "Dans le cadre de notre formation à l'IUT, nous avons eu l'opportunité de participer à un événement des plus stimulants : la 'GameJAM'. Cet événement, qui s'est déroulé sur plusieurs semaines, nous a permis de mettre en pratique nos compétences en développement de jeux vidéo en équipe.",
                "Notre équipe, composée de quatre membres, a décidé de relever le défi en créant un jeu en Python3 avec la bibliothèque Pygame. Nous avons opté pour une architecture de type MVC (Modèle-Vue-Contrôleur) afin de structurer notre code et de faciliter la collaboration entre les membres de l'équipe. Pour gérer les différentes versions de notre projet, nous avons utilisé Git, un outil de gestion de versions décentralisé.",
                "Cette période de développement intense a été riche en réflexion, en défis et en entraide. Nous avons dû faire face à de nombreux obstacles techniques, mais nous avons toujours trouvé des solutions ensemble. Cette expérience nous a permis de développer nos compétences techniques, mais aussi organisationnelles. Nous avons appris à répartir les tâches en fonction de l'expérience et des préférences de chacun, ce qui a permis à chacun de s'épanouir dans son rôle.",
                "Le thème de la 'GameJAM' était centré autour de notre IUT, mais avec une touche fantastique. Nous avons donc dû faire travailler notre imagination pour créer une histoire captivante. Nous avons imaginé un scénario dans lequel un alien s'écrase dans notre IUT et doit résoudre des énigmes et des mini-jeux basés sur l'informatique pour réparer son vaisseau spatial.",
                "Ce projet nous a permis de développer notre créativité et notre capacité à travailler en équipe. Nous avons appris à nous adapter aux contraintes du projet et à trouver des solutions innovantes pour répondre aux besoins du jeu.",
            ],
            tags: ['#Python', '#github'],
        },
        3: {
            title: 'Fish\'Event',
            description: [
                "Développement d'une application évènementielle pour la pêche.",
            ],
            tags: ['#event', '#fishing'],
        },
        4: {
            title: 'Comparaison d\'approches algorithmiques',
            description: [
                "Ce projet en binôme visait à développer un algorithme de reconnaissance de sujets dans des dépêches. Nous avons développé un programme en Java qui a été entraîné sur une base de données de dépêches et est capable d'analyser le texte d'une dépêche et de déterminer automatiquement son sujet.",
                "La collaboration étroite avec notre binôme nous a permis d'échanger des idées, de partager des connaissances et de résoudre ensemble les défis auxquels nous étions confrontés. Nous avons dû être attentifs aux idées de notre partenaire, expliquer nos propres concepts de manière claire et écouter activement les suggestions et les commentaires.",
                "Ce projet nous a permis d'appliquer nos compétences algorithmiques, de renforcer nos compétences en communication, en collaboration et en rétroaction, et de travailler efficacement en équipe. Pour finir, nous avons dû expliquer et décortiquer notre code face à un jury, ce qui a été un bon moyen de mettre en lumière notre bonne collaboration avec mon binôme.",
            ],
            tags: ['#Java', '#Java FX'],
        },
        5: {
            title: 'Site web pour élèves de 3ème',
            description: [
                "Dans le cadre de ce projet réalisé en trinôme, notre objectif était de créer un site web pour faciliter la recherche de stages dans le domaine du numérique pour les élèves de troisième. Nous avons effectué des recherches approfondies sur ATOS, une entreprise de services numériques, pour recueillir les informations nécessaires au site.",
                "Nous avons défini les fonctionnalités et caractéristiques du site dans un recueil des besoins. Ensuite, nous avons réalisé le wireframe du site et développé le site en utilisant HTML et CSS.",
                "Ce projet m'a permis d'apprendre à rechercher et partager efficacement des informations, ainsi que de développer un site web de A à Z. Le travail d'équipe, la collaboration et la communication ont été essentiels pour mener ce projet à bien.",
            ],
            tags: ['#HTML', '#css', '#github'],
        },
        6: {
            title: "Installation d'un poste pour le développement",
            description: [
                "Le projet consistait à installer un environnement de développement en téléchargeant un système d'exploitation et des outils tels que Git, Visual Studio Code, IntelliJ IDEA et le kit de développement Java. L'objectif était de rendre le processus convivial et accessible à tous, en simplifiant les explications techniques.",
                "Nous avons téléchargé un système d'exploitation, l'avons installé sur une machine, et avons ensuite procédé au téléchargement de tous les packages nécessaires pour pouvoir mener à bien le développement. Cela incluait des outils tels que Git, Visual Studio Code, IntelliJ IDEA et le kit de développement Java (Java Development Kit, JDK).",
                "Pour rendre les étapes d'installation accessibles à tous, nous avons créé des illustrations visuelles et des schémas explicatifs. Ces représentations graphiques ont été conçues de manière à rendre les concepts techniques accessibles à un public non technique.",
                "Grâce à ce projet, j'ai acquis la capacité de synthétiser et de vulgariser des informations techniques pour les rendre accessibles à tous. Cette expérience m'a également permis de développer mes compétences en synthèse et vulgarisation d'informations techniques.",
            ],
            tags: ['#Word', '#github'],
        },
    };

    const project = projectsData[id];

    if (!project) {
        return <div className="project-not-found">Projet non trouvé</div>;
    }

    // Calculer le projet précédent et suivant pour la navigation
    const prevProjectId = numericId > 1 ? numericId - 1 : null;
    const nextProjectId = numericId < Object.keys(projectsData).length ? numericId + 1 : null;

    // Formatter le tag pour l'utiliser comme classe CSS
    const formatTagClass = (tag) => {
        return `tag tag-${tag.slice(1).toLowerCase()} tag-lg`;
    };

    return (
        <>
            <Header />
            <div className="project-page-container">
                <div className="project-layout">
                    <aside className="sidebar-container">
                        <NavBarProject />
                    </aside>
                    <main className="project-content-container">
                        <div className="project-card-description">
                            <div className="project-header">
                                <h1 className="project-title">{project.title}</h1>
                                <div className="tags-section">
                                    <p className="tags-title">Technologies utilisées :</p>
                                    <div className="tags-container">
                                        {project.tags.map((tag, index) => (
                                            <span key={index} className={formatTagClass(tag)}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="project-description">
                                {project.description.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                            <div className="project-navigation">
                                {prevProjectId && (
                                    <Link to={`/projects/${prevProjectId}`} className="nav-button nav-prev">
                                        ← Projet précédent
                                    </Link>
                                )}
                                {nextProjectId && (
                                    <Link to={`/projects/${nextProjectId}`} className="nav-button nav-next">
                                        Projet suivant →
                                    </Link>
                                )}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
};

export default ProjectPage;