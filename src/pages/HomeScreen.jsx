import React from "react";
import { Link, NavLink } from "react-router-dom";
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
                src="https://images.squarespace-cdn.com/content/v1/613b5a0384c780048e17f234/afa9f73d-f90e-46a8-90de-10bd9896e0d8/consultorio-vacio-2000px.jpg?format=2500w"
                className="img-fluid"
                alt="escritorio de recepcion"
              />
            </div>
           
            <div className="carousel-item">
              <img
                src="https://images.squarespace-cdn.com/content/v1/613b5a0384c780048e17f234/0a6ea39f-4e24-466e-90e6-9d9fd8ad5c81/odontopediatria-3.jpg?format=2500w"
                className="img-fluid"
                alt="odontologia"
              />
            </div>
             <div className="carousel-item">
              <img
                src="https://images.squarespace-cdn.com/content/v1/613b5a0384c780048e17f234/62686aaa-d2a0-40eb-9e7d-e1d3ab296036/dos-odontologas.jpg?format=2500w"
                className="img-fluid"
                alt="dengue"
              />
            </div>
          </div>
        </div>
      </div>
   
          <div className="button-container d-flex justify-content-around align-items-center">
            <button type="button" className="btn-1 btn btn-danger m-3">
              <Link to="/calendario"><p className="p-button">pedir tu turno</p></Link>
              
            </button>
            <button type="button" className="btn-1 btn btn-info m-3">
              <Link to="/Paciente"><p className=".p-1 p-button">info de turnos</p></Link>
              
            </button>
          </div>
        
    </div>
  );
}

export default CustomCarousel;
