import { React, useState } from "react";

function ListadoTurnos() {
  const [info, setInfo] = useState(() => {
    const turnosGuardados = localStorage.getItem("reservasTurnos");
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!turnosGuardados || !loggedInUser) return [];
    const reservasTurnos = JSON.parse(turnosGuardados);

    const turnosUsuario = reservasTurnos.filter((turno) => {
      return turno.paciente && turno.paciente.id === loggedInUser.id;
    });

    return turnosUsuario;
  });

  return (
    <div>
      <div className="text-center flex-grow-1">
        <h2 className="fw-bold pb-3">Mis Turnos</h2>
        <div className="table-responsive">
          <table className="table table-hover ">
            <thead>
              <tr>
                <th className="text-start text-nowrap">Doctor / Doctora</th>
                <th className="text-start text-nowrap">Fecha</th>
                <th className="text-start text-nowrap">Hora</th>
              </tr>
            </thead>
            <tbody>
              {info.map((turno) => (
                <tr key={turno.idUnico}>
                  <td>
                    <div>
                      <div className="d-flex align-items-center">
                        <span className="ms-2">{turno.doctor}</span>
                      </div>
                    </div>
                  </td>

                  <td className="align-middle text-start">{turno.fecha}</td>
                  <td className="align-middle text-start">{turno.horario}</td>
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
