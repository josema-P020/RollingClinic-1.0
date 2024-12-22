import React from "react";
import { NavLink } from "react-router-dom";
import "../css/navbar.css";

function NavBar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <div className="nav_logo">CLINICA</div>
        </div>

        <div className="sector-derecho">
          <div className="dropdown">
            <button className="dropdown-button">Iniciar Sesion</button>
            <div className="dropdown-menu">
              <NavLink to="/usuario" className="dropdown-link">
                Paciente
              </NavLink>
              <NavLink to="/doctor" className="dropdown-link">
                Doctor
              </NavLink>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropdown-button">Registrarse</button>
            <div className="dropdown-menu">
              <NavLink to="/usuario" className="dropdown-link">
                Paciente
              </NavLink>
              <NavLink to="/doctor" className="dropdown-link">
                Doctor
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
