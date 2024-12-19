import React, { useState } from "react";
import "./Paciente.css";
import ListaMedicos from "./ListadoTurnos";

function DatosPaciente() {
  const [editar, setEditar] = useState(false);
  const [data, setData] = useState({
    nombre: "Juan Perez",
    email: "Juanperez@gmail.com",
    telefono: "3812345678",
    fechaNacimiento: "14-10-90",
    ciudad: "Tucumán",
    dni: "34123456",
    obraSocial: "OSDE",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleClick = () => {
    setEditar(!editar);
  };

  return (
    <>
      <div className="diseño">
        <section className="container-fluid">
          <nav aria-label="breadcrumb" className="container-fluid">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#" className="nave">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Mi Perfil
              </li>
            </ol>
          </nav>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-12 text-center py-2">
                <img
                  src="src/images/avatar-hombre.jpg"
                  alt="avatar paciente"
                  className="avatarPte"
                />
                <p className="pt-2">{data.nombre}</p>
                <div className="d-flex justify-content-center align-items-center py-3"></div>

                <div className="container">
                  <ul className="list-group list-group-flush text-start">
                    <li className="list-group-item">
                      <span className="fw-bold">Nombre: </span>
                      {editar ? (
                        <input
                          type="text"
                          name="nombre"
                          value={data.nombre}
                          onChange={handleChange}
                          className="form-control"
                        />
                      ) : (
                        data.nombre
                      )}
                    </li>
                    <li className="list-group-item text-break">
                      <span className="fw-bold">Email: </span>
                      {editar ? (
                        <input
                          type="email"
                          name="email"
                          value={data.email}
                          onChange={handleChange}
                          className="form-control"
                        />
                      ) : (
                        data.email
                      )}
                    </li>
                    <li className="list-group-item">
                      <span className="fw-bold">Telefono: </span>
                      {editar ? (
                        <input
                          type="text"
                          name="telefono"
                          value={data.telefono}
                          onChange={handleChange}
                          className="form-control"
                        />
                      ) : (
                        data.telefono
                      )}
                    </li>
                    <li className="list-group-item ">
                      <span className="fw-bold">Fecha de nacimiento: </span>
                      {editar ? (
                        <input
                          type="date"
                          name="fechaNacimiento"
                          value={data.fechaNacimiento}
                          onChange={handleChange}
                          className="form-control"
                        />
                      ) : (
                        data.fechaNacimiento
                      )}
                    </li>
                    <li className="list-group-item">
                      <span className="fw-bold">Ciudad: </span>
                      {editar ? (
                        <input
                          type="text"
                          name="ciudad"
                          value={data.ciudad}
                          onChange={handleChange}
                          className="form-control"
                        />
                      ) : (
                        data.ciudad
                      )}
                    </li>
                    <li className="list-group-item">
                      <span className="fw-bold">DNI: </span>
                      {editar ? (
                        <input
                          type="text"
                          name="dni"
                          value={data.dni}
                          onChange={handleChange}
                          className="form-control"
                        />
                      ) : (
                        data.dni
                      )}
                    </li>
                    <li className="list-group-item">
                      <span className="fw-bold">Obra Social: </span>
                      {editar ? (
                        <input
                          type="text"
                          name="obraSocial"
                          value={data.obraSocial}
                          onChange={handleChange}
                          className="form-control"
                        />
                      ) : (
                        data.obraSocial
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
      </div>
    </>
  );
}

export default DatosPaciente;
