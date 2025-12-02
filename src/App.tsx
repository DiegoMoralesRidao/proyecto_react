import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Estilos globales (si los tienes en la raíz)

// Importamos desde la carpeta "componentes"
import Header from './componentes/Header';
import Body from './componentes/Body';
import Footer from './componentes/Footer';

// Importamos las nuevas páginas
import Home from './pages/Home';
import Asistencia from './pages/Asistencia';
import Descargar from './pages/Descargar';
import Registrarse from './pages/Registrarse';
import IniciarSesion from './pages/IniciarSesion';
import PremiumIndividual from './pages/PremiumIndividual';
import PremiumDuo from './pages/PremiumDuo';
import PremiumFamiliar from './pages/PremiumFamiliar';
import PremiumEstudiantes from './pages/PremiumEstudiantes';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/asistencia" element={<Asistencia />} />
          <Route path="/descargar" element={<Descargar />} />
          <Route path="/registrarse" element={<Registrarse />} />
          <Route path="/iniciar-sesion" element={<IniciarSesion />} />
          <Route path="/premium-individual" element={<PremiumIndividual />} />
          <Route path="/premium-duo" element={<PremiumDuo />} />
          <Route path="/premium-familiar" element={<PremiumFamiliar />} />
          <Route path="/premium-estudiantes" element={<PremiumEstudiantes />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;