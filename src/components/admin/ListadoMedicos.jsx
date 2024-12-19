import React, { useState, useEffect } from "react";
import data from "../../data/dataBase";

function ListadoMedicos() {
  // Recuperar datos del localStorage, si existen
  const recuperarDoctores =
    JSON.parse(localStorage.getItem("users")) ||
    data.filter((user) => user.role === "DOCTOR");

  const [doctores, setDoctores] = useState(recuperarDoctores);

  const botonAprobbed = (id) => {
    // Cambiar el estado del doctor
    const actualizarDoctores = doctores.map((doctor) =>
      doctor.id === id ? { ...doctor, aprobbed: !doctor.aprobbed } : doctor
    );

    // Actualizar el estado y guardar en localStorage
    setDoctores(actualizarDoctores);
    localStorage.setItem("users", JSON.stringify(actualizarDoctores));
  };

  return (
    <div className="mt-4">
      <div className="text-center flex-grow-1">
        <h2 className="fw-bold pb-3">Todos los usuarios</h2>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th className="text-start text-nowrap">Usuario</th>
                <th className="text-start text-nowrap">Email</th>
                <th className="text-start text-nowrap">Telefono</th>
                <th className="text-start text-nowrap">DNI</th>
                <th className="text-start text-nowrap">Estado</th>
              </tr>
            </thead>
            <tbody>
              {doctores.map((d) => (
                <tr key={d.id}>
                  <th>
                    <div>
                      <div className="d-flex align-items-center">
                        <img
                          src={`${
                            d.genre === "male"
                              ? "src/images/avatar-hombre.jpg"
                              : "src/images/avatar-mujer.webp"
                          }`}
                          alt="avatar usuario"
                          className="avatarPte"
                          loading="lazy"
                        />
                        <span className="ms-2">{d.name}</span>
                      </div>
                    </div>
                  </th>
                  <td className="align-middle text-start">{d.especialidad}</td>
                  <td className="align-middle text-start">
                    <span>{d.tel}</span>
                  </td>
                  <td className="align-middle text-start">{d.dni}</td>
                  <td className="align-middle text-start">
                    <button
                      className={`btn ${
                        d.aprobbed ? "btn-success" : "btn-danger"
                      }`}
                      onClick={() => botonAprobbed(d.id)}
                    >
                      {d.aprobbed ? "Activo" : "Inactivo"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <nav aria-label="paginacion">
          <ul className="pagination ">
            <li className="page-item">
              <a className="page-link disabled" href="#">
                Anterior
              </a>
            </li>
            <li className="page-item active ">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link disabled" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link disabled" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link disabled" href="#">
                Siguiente
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default ListadoMedicos;
