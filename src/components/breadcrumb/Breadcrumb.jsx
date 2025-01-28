import React from "react";
import { Link, useLocation } from "react-router-dom";
function Breadcrumb() {
  const location = useLocation();
  const obtenerPagina = () => {
    const path = location.pathname.split("/");
    const nombrePagina = path[path.length - 1];
    return nombrePagina.charAt(0).toUpperCase() + nombrePagina.slice(1);
  };

  return (
    <div className="container-fluid">
      <nav aria-label="breadcrumb" className="bg-white p-2">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/" className="nave">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {obtenerPagina()}
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default Breadcrumb;
