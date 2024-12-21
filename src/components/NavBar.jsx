import React from "react";
import { NavLink } from "react-router-dom"; 
import "../css/navbar.css";

function NavBar() {
  return (
    <>
      <div className="navbar">
        <div className="envoltura-contenido">
          <div className="sector-izquierdo">
            <div className="nav_logo">CLINICA</div>
          </div>

          <div className="sector-derecho">
            <NavLink to="">
              <button className="nav_login">Login</button>
            </NavLink>

            <NavLink to="">
              <button className="nav_cart">Carrito</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
