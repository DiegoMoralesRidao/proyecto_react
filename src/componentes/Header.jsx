import React, { useState } from 'react';
import { FaSpotify, FaBars, FaChevronDown } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="spotify-header">
      <div className="header-container">
        
        {/* LOGO */}
        <div className="header-logo">
          <FaSpotify className="logo-icon" />
          <span>Spotify</span>
        </div>

        {/* MENÚ HAMBURGUESA (MÓVIL) */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </div>

        {/* NAVEGACIÓN */}
        <nav className={`header-nav ${menuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            
            {/* --- ITEM 1: PLANES PREMIUM (ESTILO COMPLETO) --- */}
            <li className="nav-item">
              <span className="nav-link">
                Planes Premium <FaChevronDown className="arrow-icon"/>
              </span>
              
              {/* CAJA DESPLEGABLE */}
              <div className="dropdown-box">
                <a href="#individual" className="dropdown-item">
                  <strong>Premium Individual</strong>
                  <span className="desc">1 cuenta para una persona.</span>
                </a>
                <a href="#duo" className="dropdown-item">
                  <strong>Premium Duo</strong>
                  <span className="desc">2 cuentas para parejas en un mismo domicilio.</span>
                </a>
                <a href="#familiar" className="dropdown-item">
                  <strong>Premium Familiar</strong>
                  <span className="desc">Hasta 6 cuentas para familiares que viven en un mismo domicilio.</span>
                </a>
                <a href="#estudiantes" className="dropdown-item">
                  <strong>Premium para Estudiantes</strong>
                  <span className="desc">1 cuenta con descuento para estudiantes que cumplan los requisitos.</span>
                </a>
              </div>
            </li>

            {/* ITEM 2: ASISTENCIA (SIMPLE) */}
            <li className="nav-item">
              <span className="nav-link">Asistencia <FaChevronDown className="arrow-icon"/></span>
              <div className="dropdown-box simple">
                <a href="#ayuda" className="dropdown-item"><strong>Ayuda</strong></a>
                <a href="#comunidad" className="dropdown-item"><strong>Comunidad</strong></a>
              </div>
            </li>

            {/* ITEM 3: DESCARGAR (SIMPLE) */}
            <li className="nav-item">
              <span className="nav-link">Descargar <FaChevronDown className="arrow-icon"/></span>
              <div className="dropdown-box simple">
                <a href="#mac" className="dropdown-item"><strong>Mac</strong></a>
                <a href="#windows" className="dropdown-item"><strong>Windows</strong></a>
                <a href="#linux" className="dropdown-item"><strong>Linux</strong></a>
              </div>
            </li>

            <li className="divider">|</li>

            <li className="nav-item"><a href="#" className="nav-link">Registrarse</a></li>
            <li className="nav-item login-btn">
              <a href="#" className="nav-link-btn">Iniciar sesión</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;