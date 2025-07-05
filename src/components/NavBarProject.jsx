import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import "./NavBarProject.css";

const NavBarProject = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleFilter = (filter) => {
        navigate(`/all-projects${filter ? `?filter=${filter}` : ''}`);
    };

    const isActive = (filter) => {
        const searchParams = new URLSearchParams(location.search);
        const currentFilter = searchParams.get('filter');
        if (!filter && !currentFilter) return true;
        return currentFilter === filter;
    };

    // Extraire les technologies uniques de tous les projets
    const allTechnologies = projectsData.flatMap(p => p.technologies);
    const uniqueTechnologies = [...new Set(allTechnologies)];

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <h2>Filtres</h2>
            </div>
            <nav className="sidebar-nav">
                <ul>
                    <li className={isActive(null) ? "active" : ""}>
                        <button onClick={() => handleFilter(null)} className="nav-button">
                            Tous les projets
                        </button>
                    </li>
                    <li className={isActive("recent") ? "active" : ""}>
                        <button onClick={() => handleFilter("recent")} className="nav-button">
                            Projets récents
                        </button>
                    </li>
                    {uniqueTechnologies.map(tech => (
                        <li key={tech} className={isActive(tech.toLowerCase()) ? "active" : ""}>
                            <button onClick={() => handleFilter(tech.toLowerCase())} className="nav-button">
                                Projets {tech}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default NavBarProject;
