import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./NavBarProject.css";

const NavBarProject = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;

    // Filtrer par catégorie
    const handleFilter = (filter) => {
        // Utiliser des query params pour conserver l'état du filtre
        navigate(`/all-projects${filter ? `?filter=${filter}` : ''}`);
    };

    // Déterminer si un filtre est actif
    const isActive = (filter) => {
        if (!filter && !location.search) return true;
        return location.search === `?filter=${filter}`;
    };

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <h2>Navigation</h2>
            </div>
            <nav className="sidebar-nav">
                <ul>
                    <li className={isActive() ? "active" : ""}>
                        <button onClick={() => handleFilter()} className="nav-button">
                            Tous les projets
                        </button>
                    </li>
                    <li className={isActive("recent") ? "active" : ""}>
                        <button onClick={() => handleFilter("recent")} className="nav-button">
                            Projets récents
                        </button>
                    </li>
                    <li className={isActive("github") ? "active" : ""}>
                        <button onClick={() => handleFilter("github")} className="nav-button">
                            Projets GitHub
                        </button>
                    </li>
                    <li className={isActive("html") ? "active" : ""}>
                        <button onClick={() => handleFilter("html")} className="nav-button">
                            Projets HTML/CSS
                        </button>
                    </li>
                    <li className={isActive("java") ? "active" : ""}>
                        <button onClick={() => handleFilter("java")} className="nav-button">
                            Projets Java
                        </button>
                    </li>
                    <li className={isActive("python") ? "active" : ""}>
                        <button onClick={() => handleFilter("python")} className="nav-button">
                            Projets Python
                        </button>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default NavBarProject;