import React from 'react';
import './Body.css'; // Importamos sus estilos

const Body = () => {
  return (
    <main className="main-container">
      
      {/* --- HERO SECTION (El banner azul/morado) --- */}
      <section className="hero">
        <div className="hero-content">
          <h1>Escuchar es todo</h1>
          <p>Millones de canciones y podcasts. No necesitas tarjeta de crédito.</p>
          <button className="btn-cta">CONSIGUE SPOTIFY FREE</button>
        </div>
      </section>

      {/* --- FEATURES SECTION (Por qué ser Premium) --- */}
      <section className="features">
        <h2 className="features-title">¿Por qué ser Premium?</h2>
        
        <div className="features-grid">
          {/* Tarjeta 1 */}
          <div className="feature-item">
            <div className="feature-icon-circle">
              <img src="https://i.scdn.co/image/ab671c3d0000f43009302fb4347465056f642a48" alt="Modo offline" />
            </div>
            <h3>Descarga música.</h3>
            <p>Escúchala donde quieras.</p>
          </div>

          {/* Tarjeta 2 */}
          <div className="feature-item">
            <div className="feature-icon-circle">
              <img src="https://i.scdn.co/image/ab671c3d0000f43098292b95d245815fe49cf134" alt="Sin anuncios" />
            </div>
            <h3>Música sin anuncios.</h3>
            <p>Disfruta de música sin interrupciones.</p>
          </div>

          {/* Tarjeta 3 */}
          <div className="feature-item">
            <div className="feature-icon-circle">
              <img src="https://i.scdn.co/image/ab671c3d0000f4306998d3ffd58aad6da6afdf67" alt="Calidad de sonido" />
            </div>
            <h3>Escucha lo que quieras.</h3>
            <p>Incluso en el móvil.</p>
          </div>

          {/* Tarjeta 4 */}
          <div className="feature-item">
            <div className="feature-icon-circle">
              <img src="https://i.scdn.co/image/ab671c3d0000f430cd6c528745e510c5be63a012" alt="Saltos ilimitados" />
            </div>
            <h3>Saltos de canción ilimitados.</h3>
            <p>Solo pasa a la siguiente.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Body;