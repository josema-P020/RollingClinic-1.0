import React, { useState } from "react";

function ListadoTurnos() {
  const [info, setInfo] = useState(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedInUser) return []; // Si no hay usuario, devuelve un array vacío
    return Array.isArray(loggedInUser) ? loggedInUser : [loggedInUser];
  });

  return (
    <div>
      <div className="text-center flex-grow-1">
        <h2 className="fw-bold pb-3">Mis Turnos</h2>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th className="text-center text-nowrap">Doctor / Doctora</th>
                <th className="text-center text-nowrap">Fecha</th>
                <th className="text-center text-nowrap">Hora</th>
              </tr>
            </thead>
            <tbody>
              {info.length === 0 ? (
                <tr>
                  <td colSpan="3" className="fw-bold py-2">
                    No hay turnos aún
                  </td>
                </tr>
              ) : (
                info.map((turno, key) =>
                  turno.turnos.map((turn, index) => (
                    <tr key={`${key}-${index}`}>
                      <td>{turn.doctor}</td>
                      <td>{turn.fecha}</td>
                      <td>{turn.hora}</td>
                    </tr>
                  ))
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListadoTurnos;
