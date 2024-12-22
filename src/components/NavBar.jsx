import React from "react";
import { NavLink } from "react-router-dom";
import "../css/navbar.css";

function NavBar() {
  return (
    <>
      <div className="navbar">
        <div className="envoltura-contenido">
          {/* Sector Izquierdo - Logo */}
          <div className="sector-izquierdo">
            <div className="nav_logo">CLINICA</div>
          </div>


          {/* Sector Derecho - Opciones de Sesión */}
          <div className="sector-derecho">
            <div className="dropdown">
              <button className="dropdown-button">Iniciar Sesión</button>
              <div className="dropdown-menu">
                <NavLink to="/login-usuario" className="dropdown-link">
                  Usuario
                </NavLink>
                <NavLink to="/login-doctor" className="dropdown-link">
                  Doctor
                </NavLink>
              </div>
            </div>

            <div className="dropdown">
              <button className="dropdown-button">Registrarse</button>
              <div className="dropdown-menu">
                <NavLink to="/registro-usuario" className="dropdown-link">
                  Usuario
                </NavLink>
                <NavLink to="/registro-doctor" className="dropdown-link">
                  Doctor
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
