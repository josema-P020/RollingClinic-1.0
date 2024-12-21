import React, { useState } from "react";
import "../css/navbar.css";


function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="navbar">
        <div className="nav_toggle " onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="nav_logo">CODEAR</div>
        <div className="nav_search">
          <input type="text" placeholder="Buscar productos..." />
        </div>
        <div className="nav_actions">
          <button className="nav_login">Login</button>
          <button className="nav_cart">Carrito</button>
        </div>
      </div>

      <div
        className={`row fila1 m-0 text-center align-items-center ${
          isOpen ? "open" : ""
        }`}
      >
        <div className="col-md-3">
          <a href="">PRODUCTOS</a>
        </div>
        <div className="col-md-3">
          <a href="">NOTEBOOKS</a>
        </div>
        <div className="col-md-3">
          <a href="">ARMÁ TU PC</a>
        </div>
        <div className="col-md-3">
          <a href="">AYUDA</a>
        </div>
      </div>
    </>
  );
}

export default NavBar;
