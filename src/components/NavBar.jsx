import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
import BtnLogout from "./btn-logout/BtnLogout";

function NavBar() {
  return (
    <div className="navbar ">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="nav_logo">
          <Link to="/" className="btn-shine">
            Rolling Clinica
          </Link>
        </div>
        <BtnLogout></BtnLogout>
      </div>
      
    </div>
  );
}

export default NavBar;
