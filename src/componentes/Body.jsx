import './Body.css';

const Body = () => {
  return (
    <main className="main-content">
      
      {/* --- SECCIÓN 1: HERO DESCARGA --- */}
      <section className="download-hero">
        <div className="download-content">
          <h1>Descargar Spotify</h1>
          <p>Escucha millones de canciones y pódcasts en tu dispositivo.</p>
          
          {/* --- AQUÍ EMPIEZA EL BOTÓN de Microsoft --- */}
          <button className="btn-microsoft-big">
            {/* Icono SVG oficial de Microsoft */}
            <svg 
              width="28" 
              height="28" 
              viewBox="0 0 23 23" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="#F25022" d="M1 1H10V10H1V1Z"/>
              <path fill="#7FBA00" d="M12 1H21V10H12V1Z"/>
              <path fill="#00A4EF" d="M1 12H10V21H1V12Z"/>
              <path fill="#FFB900" d="M12 12H21V21H12V12Z"/>
            </svg>

            <div className="btn-text">
              <span>Descargar desde</span>
              <strong>Microsoft Store</strong>
            </div>
          </button>
          {/* --- AQUÍ TERMINA EL BOTÓN De Microsoft --- */}

          <a href="#direct" className="direct-download-link">
            Descárgala directamente desde Spotify
          </a>
        </div>
      </section>

      {/* --- SECCIÓN 2: ENLACES A TIENDAS --- */}
      <section className="store-links-section">
        <h2>También puedes escuchar contenido en dispositivos móviles y tablets</h2>
        <p>Usar Spotify en tu teléfono o tablet es gratis, fácil y divertido.</p>
        
        <div className="store-badges">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Get_it_from_Microsoft_Badge.svg" alt="Microsoft" />
        </div>
      </section>

      {/* --- SECCIÓN 3: DISPOSITIVOS --- */}
      <section className="devices-section">
        <div className="devices-content">
          <h2>Una cuenta para escuchar contenido en todas partes</h2>
          
          <ul className="device-list">
            <li><a href="#movil">Móvil</a></li>
            <li><a href="#ordenador">Ordenador</a></li>
            <li><a href="#tablet">Tablet</a></li>
            <li><a href="#coche">Coche</a></li>
            <li><a href="#playstation">PlayStation®</a></li>
            <li><a href="#xbox">Xbox</a></li>
            <li><a href="#tv">TV</a></li>
            <li><a href="#altavoz">Altavoz</a></li>
            <li><a href="#web">Reproductor web</a></li>
          </ul>
        </div>
      </section>

    </main>
  );
};

export default Body;