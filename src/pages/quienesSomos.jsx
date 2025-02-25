import React, { useState, useEffect } from 'react';
import data from '../data/integrantes';

function quienesSomos() {
  const [integrantes, setIntegrantes] = useState([]);

  useEffect(() => {
    setIntegrantes(data);
  }, []);

  return (
    <div className="container container col-md-4 col-sm-6 col-12 my-3 d-flex justify-content-center mt-5">
      {integrantes.map((integrante) => (
        <div key={integrante.id} className="card tarjeta">
          <img src={integrante.foto} className="card-img-top tarjeta-img-top" alt={integrante.nombre} />
          <div className="card-body tarjeta-body">
            <h5 className="card-title tarjeta-title">{integrante.nombre}</h5>
            <p className="card-text tarjeta-text">Edad: {integrante.edad}</p>
            <p className="card-text tarjeta-text">{integrante.descripcion}</p>
            <a href={integrante.git} className="btn bot fa-brands fa-github fa-lg" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default quienesSomos;