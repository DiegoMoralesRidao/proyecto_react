import React from 'react';
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* COLUMNA 1: LOGO (Texto simple si no hay svg) */}
        <div className="footer-logo-section">
          <h2 className="logo-text">Spotify</h2>
        </div>

        {/* COLUMNA 2: ENLACES */}
        <div className="footer-links-section">
          <div className="link-column">
            <h4>EMPRESA</h4>
            <ul>
              <li><a href="#a">Acerca de</a></li>
              <li><a href="#a">Empleo</a></li>
              <li><a href="#a">For the Record</a></li>
            </ul>
          </div>
          <div className="link-column">
            <h4>COMUNIDADES</h4>
            <ul>
              <li><a href="#a">Para artistas</a></li>
              <li><a href="#a">Desarrolladores</a></li>
              <li><a href="#a">Publicidad</a></li>
              <li><a href="#a">Inversores</a></li>
              <li><a href="#a">Proveedores</a></li>
            </ul>
          </div>
          <div className="link-column">
            <h4>ENLACES ÚTILES</h4>
            <ul>
              <li><a href="#a">Ayuda</a></li>
              <li><a href="#a">Reproductor web</a></li>
              <li><a href="#a">App móvil gratis</a></li>
            </ul>
          </div>
        </div>

        {/* COLUMNA 3: REDES SOCIALES */}
        <div className="footer-socials-section">
          <div className="social-icon"><FaInstagram /></div>
          <div className="social-icon"><FaTwitter /></div>
          <div className="social-icon"><FaFacebookF /></div>
        </div>
      </div>

      {/* PARTE INFERIOR: LEGAL */}
      <div className="footer-bottom">
        <ul className="legal-nav">
          <li><a href="#a">Legal</a></li>
          <li><a href="#a">Centro de privacidad</a></li>
          <li><a href="#a">Política de privacidad</a></li>
          <li><a href="#a">Cookies</a></li>
          <li><a href="#a">Sobre los anuncios</a></li>
        </ul>
        <div className="copyright">© 2025 Spotify AB</div>
      </div>
    </footer>
  );
};

export default Footer;