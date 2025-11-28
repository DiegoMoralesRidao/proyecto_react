import React, { useState } from 'react';
import { FaSpotify, FaBars } from 'react-icons/fa'; // Iconos para logo y menú móvil
import Dropdown from './dropdown.jsx'; // Importamos el nuevo componente
import './Header.css';

const Header = () => {
  // Estado simple para controlar si el menú móvil está abierto o cerrado
  const [menuOpen, setMenuOpen] = useState(false);

  // --- DATOS PARA LOS MENÚS DESPLEGABLES ---
  const premiumItems = [
    { label: 'Individual', href: '#individual' },
    { label: 'Duo', href: '#duo' },
    { label: 'Familiar', href: '#familiar' },
    { label: 'Estudiantes', href: '#estudiantes' },
  ];

  const helpItems = [
    { label: 'Ayuda', href: '#ayuda' },
    { label: 'Comunidad', href: '#comunidad' },
    { label: 'Contáctanos', href: '#contacto' },
  ];

  const downloadItems = [
    { label: 'Mac', href: '#mac' },
    { label: 'Windows', href: '#windows' },
    { label: 'Linux', href: '#linux' },
  ];

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
        <nav className={`header-nav ${menuOpen ? 'active' : ''}`}>
          <ul>
            {/* AQUÍ REEMPLAZAMOS LOS ENLACES FIJOS POR LOS COMPONENTES DROPDOWN */}
            <li><Dropdown title="Planes Premium" items={premiumItems} /></li>
            <li><Dropdown title="Asistencia" items={helpItems} /></li>
            <li><Dropdown title="Descargar" items={downloadItems} /></li>
            
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