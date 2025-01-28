import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="nav_logo">
        <Link to="/" className="nav_logo-link">
          CLINICA
        </Link>
      </div>

      <div className="sector-derecho"></div>
    </div>
  );
}

export default NavBar;
