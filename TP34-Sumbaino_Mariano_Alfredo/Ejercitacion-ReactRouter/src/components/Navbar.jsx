import React from 'react';
// TODO: Importar Link de react-router-dom
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-logo">🍽️ Recetario Digital</div>
        <div className="nav-links">
          {/* TODO: Agregar los Links aquí */}
        <li><Link to="/home">Inicio</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;