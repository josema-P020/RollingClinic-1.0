import React from "react";
import { Link } from "react-router-dom";
import { handleLogout } from "@/utils/logout";
import "./btnLogout.css"

function BtnLogout() {
  return (
    <div className="d-flex justify-content-end mb-2">
      <Link
        to="/login"
        className="cerrarSesion my-3 btn btn-danger"
        onClick={handleLogout}
      >
        <i className="bi bi-box-arrow-right">Cerrar Sesión</i>
      </Link>
    </div>
  );
}
export default BtnLogout;
