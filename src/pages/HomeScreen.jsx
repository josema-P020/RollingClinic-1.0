import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/HomeScreen.css";

function CustomCarousel() {
  return (
    <div className="padre-carousel">
      <div className="carousel-container">
        <div
          id="customCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="3200"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://infraestructuramedica.mx/wp-content/uploads/2022/08/hospital-gral-hospital-general-de.png"
                className=""
                alt="escritorio de recepcion"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://3.bp.blogspot.com/-MbFXcy2o9Yw/VtYREaolxkI/AAAAAAAAAAs/4Q48j-EghXI/s1600/111111111111111.jpg"
                className=""
                alt="dengue"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.cloudia.com.br/wp-content/uploads/clnica_portuguesa_4.jpg"
                className=""
                alt="odontologia"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="button-container">
          <div className="d-flex justify-content-around align-items-center">
            <button type="button" className="btn btn-danger square-button m-3">
              <p className="p-button">pedir tu turno</p>
            </button>
            <button type="button" className="btn btn-info square-button m-3">
              <p className="p-button">info de turnos</p>
            </button>
          </div>
        </div>
    </div>
  );
}

export default CustomCarousel;
