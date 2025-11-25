import React from 'react';
import './App.css'; // Estilos globales (si los tienes en la raíz)

// Importamos desde la carpeta "componentes"
import Header from './componentes/Header';
import Body from './componentes/Body';
import Footer from './componentes/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;