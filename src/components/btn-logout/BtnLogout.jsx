import React from "react";
import { Link } from "react-router-dom";
import { handleLogout } from "@/utils/logout";

function BtnLogout() {
  return (
    <div className="d-flex justify-content-end me-3 mb-2">
      <Link
        to="/login"
        className="my-3 btn btn-secondary"
        onClick={handleLogout}
      >
        <i className="bi bi-box-arrow-right"> Cerrar Sesión</i>
      </Link>
    </div>
  );
}
export default BtnLogout;
