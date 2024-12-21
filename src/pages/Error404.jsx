import React from "react";
import { Link } from "react-router-dom";
function Error404() {
  return (
    <div className="bg-dark h-100">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="error_container">
          <div className="error_code">
            <p className="myBounce">4</p>
            <p className="fa-solid fa-stethoscope mx-3" id="myLemon"></p>
            <p>4</p>
          </div>
          <div className="error_title">Página no encontrada</div>
          <div className="error_description">!Ups! Algo no salió bien.</div>
          {/* <Link to="/login" className="btn btn-lg btn-warning">
            Volver al inicio
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Error404;
