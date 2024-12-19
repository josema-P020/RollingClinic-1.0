import React, { useState } from "react";
import "./Paciente.css";
import ListaMedicos from "./ListadoTurnos.jsx";
import data from "../../data/dataBase.js";

function DatosPaciente() {
  const [editar, setEditar] = useState(false);
  const [info, setInfo] = useState(data);

  // Aca lo que me falta es que cuando el paciente se logee con nahuel, yo muestre en la variable paciente la informacion del paciente logeado. Filtrando por el id o algo asi.
  const paciente = info[0];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo([
      {
        ...paciente,
        [name]: value,
      },
    ]);
  };

  const handleClick = () => {
    setEditar(!editar);
  };

  return (
    <>
      <div className="diseño container-fluid">
        <nav aria-label="breadcrumb" className="bg-white p-2">
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
        <section>
          <div>
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-12 text-center py-2">
                <img
                  src="src/images/avatar-hombre.jpg"
                  alt="avatar paciente"
                  className="avatarPte"
                />
                <p className="pt-2">{paciente.name}</p>

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
                          value={paciente.name}
                          onChange={handleChange}
                          className="form-control"
                        />
                      ) : (
                        paciente.name
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
                          value={paciente.email}
                          onChange={handleChange}
                          className="form-control"
                        />
                      ) : (
                        paciente.email
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
                          value={paciente.tel}
                          onChange={handleChange}
                          className="form-control"
                        />
                      ) : (
                        paciente.tel
                      )}
                    </li>
                    <li className="list-group-item ">
                      <span className="fw-bold">Fecha de nacimiento: </span>
                      {editar ? (
                        <input
                          type="date"
                          name="dateBirth"
                          value={paciente.dateBirth}
                          onChange={handleChange}
                          className="form-control"
                        />
                      ) : (
                        paciente.dateBirth
                      )}
                    </li>
                    <li className="list-group-item">
                      <span className="fw-bold">Ciudad: </span>
                      {editar ? (
                        <input
                          type="text"
                          name="city"
                          value={paciente.city}
                          onChange={handleChange}
                          className="form-control"
                        />
                      ) : (
                        paciente.city
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
                          value={paciente.dni}
                          onChange={handleChange}
                          className="form-control"
                        />
                      ) : (
                        paciente.dni
                      )}
                    </li>
                    <li className="list-group-item">
                      <span className="fw-bold">Obra Social: </span>
                      {editar ? (
                        <input
                          type="text"
                          name="obraSocial"
                          value={paciente.obraSocial}
                          onChange={handleChange}
                          className="form-control"
                        />
                      ) : (
                        paciente.obraSocial
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
