import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../css/navbar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="nav_logo">CLINICA</div>

      <div className="sector-derecho">
        <div className="dropdown">
        <Link to="/login"><button className="dropdown-button">Iniciar sesion</button></Link>
          
        </div>

        <div className="dropdown">
          <button className="dropdown-button">Registrarse</button>
          <div className="dropdown-menu">
            <NavLink to="/registerPatient" className="dropdown-link">
              Paciente
            </NavLink>
            <NavLink to="/registerDoctor" className="dropdown-link">
              Doctor
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
