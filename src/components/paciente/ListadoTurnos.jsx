import React from "react";
import data from "../../data/dataBase";

function ListadoTurnos() {
  let doctor = data.filter((user) => user.role === "DOCTOR");

  return (
    <div>
      <div className="text-center flex-grow-1">
        <h2 className="fw-bold pb-3">Mis Turnos</h2>
        <div className="table-responsive">
          <table className="table table-hover ">
            <thead>
              <tr>
                <th className="text-start text-nowrap">Doctor / Doctora</th>
                <th className="text-start text-nowrap">Especialidad</th>
                <th className="text-start text-nowrap">Fecha</th>
                <th className="text-start text-nowrap">Estado</th>
              </tr>
            </thead>
            <tbody>
              {doctor.map((d) => (
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
                  <td className="align-middle text-start">{} Aca va la fecha</td>
                  <td className="align-middle text-start">
                    <span
                      className={`btn ${
                        d.status === "Completada" ? "btn-success" : "btn-danger"
                      }`}
                    >
                      {d.status}
                    </span>
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

export default ListadoTurnos;
