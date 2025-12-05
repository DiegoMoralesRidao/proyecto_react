import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaSpotify, FaBars, FaChevronDown } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <header className="spotify-header">
      <div className="header-container">
        
        {/* LOGO */}
        <Link to="/" className="header-logo">
          <FaSpotify className="logo-icon" />
          <span>Spotify</span>
        </Link>

        {/* MENÚ HAMBURGUESA (MÓVIL) */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </div>

        {/* NAVEGACIÓN */}
        <nav className={`header-nav ${menuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            
            {/* --- ITEM 1: PLANES PREMIUM --- */}
            <li className="nav-item" ref={dropdownRef}>
              <span className="nav-link" onClick={toggleDropdown}>
                Planes Premium <FaChevronDown className={`arrow-icon ${isDropdownOpen ? 'open' : ''}`}/>
              </span>
              
              {/* CAJA DESPLEGABLE */}
              <div className={`dropdown-box ${isDropdownOpen ? 'active' : ''}`}>
                <Link to="/premium-individual" className="dropdown-item">
                  <strong>Premium Individual</strong>
                  <span className="desc">1 cuenta para una persona.</span>
                </Link>
                <Link to="/premium-duo" className="dropdown-item">
                  <strong>Premium Duo</strong>
                  <span className="desc">2 cuentas para parejas en un mismo domicilio.</span>
                </Link>
                <Link to="/premium-familiar" className="dropdown-item">
                  <strong>Premium Familiar</strong>
                  <span className="desc">Hasta 6 cuentas para familiares que viven en un mismo domicilio.</span>
                </Link>
                <Link to="/premium-estudiantes" className="dropdown-item">
                  <strong>Premium para Estudiantes</strong>
                  <span className="desc">1 cuenta con descuento para estudiantes que cumplan los requisitos.</span>
                </Link>
              </div>
            </li>

            <li className="nav-item"><Link to="/asistencia" className="nav-link">Asistencia</Link></li>
            <li className="nav-item"><Link to="/descargar" className="nav-link">Descargar</Link></li>

            <li className="divider">|</li>

            <li className="nav-item"><Link to="/registrarse" className="nav-link">Registrarse</Link></li>
            <li className="nav-item">
              <Link to="/iniciar-sesion" className="nav-link">Iniciar sesión</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;