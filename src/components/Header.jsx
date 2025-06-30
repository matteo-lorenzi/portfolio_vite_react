// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [showName, setShowName] = useState(false);

  // Vérifie si l'utilisateur est sur la page principale
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (!isHomePage) {
      setShowName(false);
      return;
    }

    const heroSection = document.getElementById('hero');
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const heroEntry = entries[0];
        // Affiche le nom quand la section hero n'est plus visible (ou très peu visible)
        setShowName(!heroEntry.isIntersecting || heroEntry.intersectionRatio < 0.1);
      },
      {
        threshold: 0.1, // Se déclenche quand moins de 10% de la section est visible
        rootMargin: '0px 0px -50px 0px' // Ajoute une marge pour un déclenchement plus naturel
      }
    );

    observer.observe(heroSection);

    return () => {
      observer.disconnect();
    };
  }, [isHomePage]);

  return (
    <header className="header">
      <div className="logo">
        Portfolio
        {showName && isHomePage && (
          <span className="header-name">- Matteo Lorenzi</span>
        )}
      </div>
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
