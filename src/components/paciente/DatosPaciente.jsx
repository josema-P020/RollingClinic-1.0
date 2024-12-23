import React, { useState } from "react";
import "./Paciente.css";
import ListaMedicos from "./ListadoTurnos.jsx";
import data from "../../data/dataBase.js";
import { Link } from "react-router-dom";

function DatosPaciente() {
  const [editar, setEditar] = useState(false);
  const [info, setInfo] = useState(data);

  localStorage.setItem("users", JSON.stringify(info));

  const logeado = info.find((log) => log.login === true);

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedInfo = info.map((user) => {
      if (user.id === logeado.id) {
        return {
          ...user,
          [name]: value,
        };
      }
      return user;
    });

    setInfo(updatedInfo);
    localStorage.setItem("users", JSON.stringify(updatedInfo));
  };

  const handleClick = () => {
    setEditar(!editar);
  };

  const handleLogout = () => {
    setInfo(info.map((user) => ({ ...user, login: false })));
    localStorage.setItem("users", JSON.stringify(info));
    window.location.href = "/login";
  };

  if (!logeado) {
    return (
      <div className="container mt-5 text-center">
        <h3>No hay ningún usuario logueado.</h3>
        <Link to="/login" className="btn btn-primary mt-3">
          Ir a Login
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="diseño container-fluid">
        <nav aria-label="breadcrumb" className="bg-white p-2">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/login" className="nave">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Paciente
            </li>
          </ol>
        </nav>
        <section>
          <div>
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-12 text-center py-2">
                <img src="" alt="avatar paciente" className="avatarPte" />
                <p className="pt-2">{logeado.name}</p>
                <div className="container">
                  <ul className="list-group list-group-flush text-start">
                    <li className="list-group-item">
                      <span className="fw-bold">Nombre: </span>
                      {editar ? (
                        <input
                          type="text"
                          name="name"
                          maxLength={25}
                          required
                          value={logeado.name}
                          onChange={handleChange}
                          className="form-control"
                        />
                      ) : (
                        logeado.name
                      )}
                    </li>
                    <li className="list-group-item text-break">
                      <span className="fw-bold">Email: </span>
                      {editar ? (
                        <input
                          type="email"
                          name="email"
                          maxLength={200}
                          minLength={6}
                          required
                          value={logeado.email}
                          onChange={handleChange}
                          className="form-control"
                        />
                      ) : (
                        logeado.email
                      )}
                    </li>
                    <li className="list-group-item">
                      <span className="fw-bold">Teléfono: </span>
                      {editar ? (
                        <input
                          type="text"
                          name="tel"
                          required
                          minLength={9}
                          maxLength={18}
                          value={logeado.tel}
                          onChange={handleChange}
                          className="form-control"
                        />
                      ) : (
                        logeado.tel
                      )}
                    </li>
                    <li className="list-group-item">
                      <span className="fw-bold">Fecha de nacimiento: </span>
                      {editar ? (
                        <input
                          type="date"
                          name="dateBirth"
                          value={logeado.dateBirth}
                          onChange={handleChange}
                          className="form-control"
                        />
                      ) : (
                        logeado.dateBirth
                      )}
                    </li>
                    <li className="list-group-item">
                      <span className="fw-bold">Ciudad: </span>
                      {editar ? (
                        <input
                          type="text"
                          name="city"
                          value={logeado.city}
                          onChange={handleChange}
                          className="form-control"
                        />
                      ) : (
                        logeado.city
                      )}
                    </li>
                    <li className="list-group-item">
                      <span className="fw-bold">DNI: </span>
                      {editar ? (
                        <input
                          type="text"
                          name="dni"
                          minLength={6}
                          maxLength={9}
                          value={logeado.dni}
                          onChange={handleChange}
                          className="form-control"
                        />
                      ) : (
                        logeado.dni
                      )}
                    </li>
                    <li className="list-group-item">
                      <span className="fw-bold">Obra Social: </span>
                      {editar ? (
                        <input
                          type="text"
                          name="obraSocial"
                          value={logeado.obraSocial}
                          onChange={handleChange}
                          className="form-control"
                        />
                      ) : (
                        logeado.obraSocial
                      )}
                    </li>
                  </ul>
                </div>
                <div className="pt-3">
                  <button className="btn btn-success" onClick={handleClick}>
                    {editar ? "Guardar" : "Modificar Datos"}
                  </button>
                </div>
              </div>
              <div className="col-lg-9 col-md-8 col-sm-12 pt-2 d-flex flex-column justify-content-center">
                <ListaMedicos />
              </div>
            </div>
          </div>
        </section>
        <div className="d-flex justify-content-end me-3 mb-2">
          <Link
            to="/login"
            className="my-3 btn btn-secondary"
            onClick={handleLogout}
          >
            <i className="bi bi-box-arrow-right"> Cerrar Sesión</i>
          </Link>
        </div>
      </div>
    </>
  );
}

export default DatosPaciente;
