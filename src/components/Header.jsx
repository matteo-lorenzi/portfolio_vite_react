// src/components/Header.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  // Vérifie si l'utilisateur est sur la page principale
  const isHomePage = location.pathname === '/';

  return (
    <header className="header">
      <div className="logo">Portfolio</div>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li>
            {isHomePage ? (
              <a href="#about">À propos</a>
            ) : (
              <Link to="/#about">À propos</Link>
            )}
          </li>
          <li>
            {isHomePage ? (
              <a href="#projects">Projets</a>
            ) : (
              <Link to="/#projects">Projets</Link>
            )}
          </li>
          <li>
            {isHomePage ? (
              <a href="#contact">Contact</a>
            ) : (
              <Link to="/#contact">Contact</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
