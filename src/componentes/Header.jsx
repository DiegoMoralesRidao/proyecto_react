import React, { useState } from 'react';
import { FaSpotify, FaBars } from 'react-icons/fa'; // Iconos para logo y menú móvil
import './Header.css';

const Header = () => {
  // Estado simple para controlar si el menú móvil está abierto o cerrado
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="spotify-header">
      <div className="header-container">
        
        {/* 1. LOGO */}
        <div className="header-logo">
          <FaSpotify className="logo-icon" />
          <span>Spotify</span>
        </div>

        {/* 2. BOTÓN MENÚ MÓVIL (Solo visible en pantallas pequeñas) */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </div>

        {/* 3. NAVEGACIÓN (Links + Login) */}
        {/* La clase 'active' se añade si el menú móvil está abierto */}
        <nav className={`header-nav ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#premium">Premium</a></li>
            <li><a href="#ayuda">Ayuda</a></li>
            <li><a href="#descargar">Descargar</a></li>
            <li className="divider">|</li>
            <li className="auth-link"><a href="#registro">Registrarse</a></li>
            <li className="auth-link"><a href="#login">Iniciar sesión</a></li>
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;