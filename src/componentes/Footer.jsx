import { FaSpotify, FaInstagram, FaFacebookF } from 'react-icons/fa';
// Importamos el nuevo icono de X (Twitter) y el icono del mundo para el idioma
import { FaXTwitter } from 'react-icons/fa6'; 
import { MdLanguage } from 'react-icons/md';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="spotify-footer">
      <div className="footer-top-content">
        
        {/* 1. LOGO */}
        <div className="footer-logo-container">
          <a href="#home" className="spotify-logo-link">
            <FaSpotify className="logo-icon-svg" />
            <span>Spotify</span>
          </a>
        </div>

        {/* 2. LAS 4 COLUMNAS DE ENLACES */}
        <div className="footer-nav-columns">
          
          {/* Columna 1 */}
          <div className="footer-col">
            <h4>EMPRESA</h4>
            <ul>
              <li><a href="#acerca">Acerca de</a></li>
              <li><a href="#empleo">Empleo</a></li>
              <li><a href="#record">For the Record</a></li>
            </ul>
          </div>

          {/* Columna 2 */}
          <div className="footer-col">
            <h4>COMUNIDADES</h4>
            <ul>
              <li><a href="#artistas">Para artistas</a></li>
              <li><a href="#desarrolladores">Desarrolladores</a></li>
              <li><a href="#publicidad">Publicidad</a></li>
              <li><a href="#inversores">Inversores</a></li>
              <li><a href="#proveedores">Proveedores</a></li>
            </ul>
          </div>

          {/* Columna 3 (Actualizada) */}
          <div className="footer-col">
            <h4>ENLACES ÚTILES</h4>
            <ul>
              <li><a href="#asistencia">Asistencia</a></li>
              <li><a href="#webplayer">Reproductor web</a></li>
              <li><a href="#appmovil">App gratis para móvil</a></li>
              <li><a href="#import">Import your music</a></li>
            </ul>
          </div>

          {/* Columna 4 (NUEVA) */}
          <div className="footer-col">
            <h4>PLANES DE SPOTIFY</h4>
            <ul>
              <li><a href="#premium">Premium Individual</a></li>
              <li><a href="#duo">Premium Duo</a></li>
              <li><a href="#familiar">Premium Familiar</a></li>
              <li><a href="#estudiantes">Premium para Estudiantes</a></li>
              <li><a href="#free">Spotify Free</a></li>
            </ul>
          </div>

        </div>

        {/* 3. ICONOS REDES SOCIALES (Con X) */}
        <div className="footer-social-icons">
          <a href="#insta" className="social-btn"><FaInstagram /></a>
          <a href="#twitter" className="social-btn"><FaXTwitter /></a> {/* Icono X */}
          <a href="#fb" className="social-btn"><FaFacebookF /></a>
        </div>
      </div>

      {/* --- PARTE INFERIOR --- */}
      <div className="footer-bottom-content">
        
        {/* Enlaces legales */}
        <ul className="legal-links-list">
          <li><a href="#legal">Legal</a></li>
          <li><a href="#seguridad">Centro de seguridad y privacidad</a></li>
          <li><a href="#privacidad">Política de Privacidad</a></li>
          <li><a href="#cookies">Información sobre los anuncios</a></li>
          <li><a href="#accesibilidad">Accesibilidad</a></li>
        </ul>

        {/* Idioma y Copyright (Derecha) */}
        <div className="bottom-right-section">
          <button className="language-selector-btn">
            <MdLanguage className="globe-icon" />
            España (Español)
          </button>
          <div className="copyright-text">
            © 2025 Spotify AB
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;