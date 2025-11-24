import React from 'react';
import './header.scss'; 

const Header: React.FC = () => {
  return (
    <header className="header-cajamar">
      <div className="header-top">
        <div className="container">
          <div className="header-top-left">
            <span>Personas</span>
            <span>Autonomos y Empresas</span>
            <span>Sector agro</span>
          </div>
        </div>
      </div>
      <div className="header-main">
        <div className="container">
          <div className="header-cajamar .logo">
            <img src="C:\Users\diego\Desktop\proyecto_React\proyecto_react\src\assets\logo.svg" alt="Cajamar" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
