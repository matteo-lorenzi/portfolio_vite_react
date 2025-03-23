import React from "react";
import "./Experiences.css";

const Experiences = () => {
    return (
        <section id="experiences" className="experiences">
            <div className="experiences-header">
                <span className="section-subtitle">Parcours</span>
                <h2>Expériences</h2>
            </div>

            <div className="experiences-inner">
                <div className="timeline">


                    <div className="experience">
                        <div className="experience-content">
                            <div className="experience-date">
                                <span>2024 - 2025</span>
                            </div>
                            <div className="experience-details">
                                <h3>Développeur web</h3>
                                <h4>MSH-Alpes</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aliquam ad vitae dolore reprehenderit vero nihil! Incidunt alias, 
                                    id aspernatur, possimus quam ab dolorum aliquam totam autem recusandae sunt vel.
                                </p>
                                <div className="experience-tags">
                                    <span>UI Design</span>
                                    <span>UX Research</span>
                                    <span>Figma</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="experience">
                        <div className="experience-content">
                            <div className="experience-date">
                                <span>2023 - 2024</span>
                            </div>
                            <div className="experience-details">
                                <h3>Développeur web</h3>
                                <h4>MSH-Alpes</h4>
                                <p>J'ai eu l'opportunité de travailler chez MSH-Alpes (Plateforme SCREEN) en tant que développeur
                                    web pendant l'été dernier. Au cours de ce stage, j'ai été chargé de concevoir et de développer
                                    un module de création, de gestion et de déploiement de questionnaires en ligne pour aider les
                                    chercheurs en SHS à recueillir des données de manière efficace et professionnelle. Ce module
                                    permet aux utilisateurs de créer des questionnaires personnalisés, de les gérer et de les
                                    déployer en ligne, et de visualiser les résultats sous forme de graphiques et de tableaux.</p>
                                <p>Au cours de ce projet, j'ai eu l'occasion de travailler sur des technologies web modernes. J'ai
                                    également eu l'occasion de développer mes compétences en
                                    conception d'interface utilisateur et en gestion de projet.</p>
                                <p>Ce stage m'a permis de développer mes compétences en programmation et en conception d'interface
                                    utilisateur, et de mieux comprendre les besoins des chercheurs en SHS en matière de collecte de
                                    données. J'ai également appris à travailler en équipe et à gérer les contraintes de temps et de
                                    budget d'un projet réel.</p>
                                <div className="experience-tags">
                                    <span>HTML/CSS</span>
                                    <span>JavaScript</span>
                                    <span>PHP</span>
                                    <span>MySQL</span>
                                    <span>JATOS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="experiences-shapes">
                <div className="shape shape-6"></div>
                <div className="shape shape-7"></div>
            </div>
        </section>
    );
};

export default Experiences;