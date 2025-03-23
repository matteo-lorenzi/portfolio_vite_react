import React, { useEffect, useRef } from "react";
import "./Skills.css";
import { htmlLogo, cssLogo, jsLogo, phpLogo, javaLogo, sqlLogo, figmaLogo, gitLogo } from "../js/skillLogos";

const skillsData = [
    { name: "HTML", description: "Maîtrise de la structure des pages web.", logo: htmlLogo },
    { name: "CSS", description: "Maîtrise du design des pages web.", logo: cssLogo },
    { name: "JavaScript", description: "Maîtrise de la programmation web.", logo: jsLogo },
    { name: "PHP", description: "Maîtrise du développement backend.", logo: phpLogo },
    { name: "Java", description: "Maîtrise de la programmation orientée objet.", logo: javaLogo },
    { name: "SQL", description: "Maîtrise des bases de données relationnelles.", logo: sqlLogo },
    { name: "Figma", description: "Maîtrise de la conception d'interface utilisateur.", logo: figmaLogo },
    { name: "Git/GitHub", description: "Maîtrise du contrôle de version et de la collaboration.", logo: gitLogo }
];

const Skills = () => {
    const containerRef = useRef(null);
    const animationFrameId = useRef(null);
    const isPaused = useRef(false);
    const speed = 0.5; // Vitesse de défilement (pixels par frame)

    useEffect(() => {
        const container = containerRef.current;
        let scrollAmount = container.scrollLeft;

        const animate = () => {
            if (!isPaused.current) {
                scrollAmount += speed;
                // Lorsque le scroll atteint la moitié du scrollWidth, on soustrait cette valeur
                if (scrollAmount >= container.scrollWidth / 2) {
                    scrollAmount -= container.scrollWidth / 2;
                }
                container.scrollLeft = scrollAmount;
            }
            animationFrameId.current = requestAnimationFrame(animate);
        };

        // Démarrer l'animation
        animationFrameId.current = requestAnimationFrame(animate);

        const handleMouseEnter = () => {
            isPaused.current = true;
        };

        const handleMouseLeave = () => {
            isPaused.current = false;
        };

        container.addEventListener("mouseenter", handleMouseEnter);
        container.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            cancelAnimationFrame(animationFrameId.current);
            container.removeEventListener("mouseenter", handleMouseEnter);
            container.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <section id="skills" className="skills">
            <div className="skills-header">
                <span className="section-subtitle">Expertise</span>
                <h2>Compétences</h2>
            </div>

            <div className="skills-carousel-container">
                <div className="skills-container" ref={containerRef}>
                    {/* Duplication de la liste pour créer un effet de boucle infinie */}
                    {[...skillsData, ...skillsData].map((skill, index) => (
                        <div className="skill" key={`${skill.name}-${index}`}>
                            <div className="skill-icon">
                                <img src={skill.logo} alt={`Logo ${skill.name}`} className="skill-logo" />
                            </div>
                            <h3>{skill.name}</h3>
                            <p>{skill.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="skills-shapes">
                <div className="shape shape-8"></div>
                <div className="shape shape-9"></div>
            </div>
        </section>
    );
};

export default Skills;
