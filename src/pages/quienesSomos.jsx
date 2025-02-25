import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import data from '../data/integrantes';
import '../css/quienesSomos.css';

function quienesSomos() {
  const [integrantes, setIntegrantes] = useState([]);

  useEffect(() => {
    setIntegrantes(data);
  }, []);

  return (
    <div className="row d-flex justify-content-center">
      {integrantes.map((integrante) => (
        <div key={integrante.id} className="card tarjeta m-3 col-md-4 col-sm-6 col-12">
          <img src={integrante.foto} className="card-img-top tarjeta-img-top" alt={integrante.nombre} />
          <div className="card-body tarjeta-body">
            <h5 className="card-title tarjeta-title">{integrante.nombre}</h5>
            <p className="card-text tarjeta-text">Edad: {integrante.edad}</p>
            <p className="card-text tarjeta-text">{integrante.descripcion}</p>
            <a href={integrante.git} className="btn bot bi bi-github" target="_blank" rel="noopener noreferrer">  GitHub</a>
          </div>
        </div>
      ))}
      <div className="container d-flex justify-content-center align-items-center">
        <Link to="/" className="btn btn-lg btn-secondary mb-3 bot">
          Volver al inicio
        </Link>
      </div>

    </div>
  )
}

export default quienesSomos