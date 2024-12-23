import React, { useState } from "react";
import data from "../../data/dataBase";

function ListadoTurnos() {
  const [info, setInfo] = useState(data);
  const pacientes = info.filter((user) => user.role === "PACIENTE");
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
              {pacientes.map((doctor) =>
                doctor.turnos.map((turno) => (
                  <tr key={turno.id}>
                    <td>
                      <div>
                        <div className="d-flex align-items-center">
                          <img
                            src={`${
                              doctor.genre === "male"
                                ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-phYUCybCZV8ldQUDjk-S_EZumc6lYYA1Hg&s"
                                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv-wn0BeGWOa2CGmYc83SdQtfWwPebF9KX1g&s"
                            }`}
                            alt="avatar usuario"
                            className="avatarPte"
                            loading="lazy"
                          />
                          <span className="ms-2">{turno.doctor}</span>
                        </div>
                      </div>
                    </td>
                    <td className="align-middle text-start">
                      {turno.especialidad}
                    </td>
                    <td className="align-middle text-start">{turno.fecha}</td>
                    <td className="align-middle text-start">
                      <span
                        className={`${
                          turno.estado === "pendiente"
                            ? "text-danger"
                            : "text-success"
                        }`}
                      >
                        {turno.estado === "pendiente"
                          ? "Pendiente"
                          : "Completado"}
                      </span>
                    </td>
                  </tr>
                ))
              )}
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
