import React, { useState } from "react";
import "../paciente/Paciente.css";
import data from "../../data/dataBase.js";
import ListadoMedicos from "./ListadoMedicos.jsx";

function DatosAdmin() {
  const [editar, setEditar] = useState(false);
  const [info, setInfo] = useState(data);

  const admin = info.find((usuario) => usuario.role === "ADMIN");

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedInfo = info.map((item) =>
      item.id === admin.id ? { ...item, [name]: value } : item
    );
    setInfo(updatedInfo);
  };

  //Como hago para 
  const modificarDb = () => {
    const actualizarAdmin = info.map((admin) =>
      admin.role === "ADMIN" ? { ...admin, aprobbed: !admin.aprobbed } : admin
    );
 //Desactivar los botones para modificar datos. 
 
    // Actualizar el estado y guardar en localStorage
    setInfo(actualizarAdmin);
    localStorage.setItem("users", JSON.stringify(actualizarAdmin));
  };

  const handleClick = () => {
    setEditar(!editar);
    modificarDb();
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
              Perfil de {admin.role}
            </li>
          </ol>
        </nav>
        <section>
          <div>
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-12 text-center pt-4 pb-2">
                <img
                  src="src/images/avatar-admin.png"
                  alt="avatar admin"
                  className="avatarPte"
                />
                <p className="py-2">
                  {admin.role}: {admin.name}
                </p>

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
                          value={admin.name}
                          onChange={handleChange}
                          className="form-control"
                        />
                      ) : (
                        admin.name
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
                          value={admin.email}
                          onChange={handleChange}
                          className="form-control"
                        />
                      ) : (
                        admin.email
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
                          value={admin.tel}
                          onChange={handleChange}
                          className="form-control"
                        />
                      ) : (
                        admin.tel
                      )}
                    </li>
                    <li className="list-group-item ">
                      <span className="fw-bold">Fecha de nacimiento: </span>
                      {editar ? (
                        <input
                          type="date"
                          name="dateBirth"
                          value={admin.dateBirth}
                          onChange={handleChange}
                          className="form-control"
                        />
                      ) : (
                        admin.dateBirth
                      )}
                    </li>
                    <li className="list-group-item">
                      <span className="fw-bold">Ciudad: </span>
                      {editar ? (
                        <input
                          type="text"
                          name="city"
                          value={admin.city}
                          onChange={handleChange}
                          className="form-control"
                        />
                      ) : (
                        admin.city
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
                          value={admin.dni}
                          onChange={handleChange}
                          className="form-control"
                        />
                      ) : (
                        admin.dni
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
                <ListadoMedicos />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default DatosAdmin;
