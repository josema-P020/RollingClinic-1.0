import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="container-fluid">
        <div className="nav_logo">
          <Link to="/" className="btn-shine">
            Rolling Clinica
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
