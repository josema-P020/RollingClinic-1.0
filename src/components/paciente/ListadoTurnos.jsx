import React, { useState, useEffect } from "react";

function ListadoTurnos() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("users")) || [];
    setInfo(storedData);
  }, []);

  const turnos = info.flatMap((usuario) =>
    usuario.turnos
      ? usuario.turnos.map((turno) => ({
          doctor: turno.doctor,
          fecha: turno.fecha,
          hora: turno.hora,
        }))
      : []
  );
  console.log(info);
  console.log(turnos);
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
              {turnos.length === 0 ? (
                <tr>
                  <td colSpan="3" className="fw-bold py-2">
                    No hay turnos aún
                  </td>
                </tr>
              ) : (
                turnos.map((turno, index) => (
                  <tr key={index}>
                    <td>{turno.doctor}</td>
                    <td>{turno.fecha}</td>
                    <td>{turno.hora}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListadoTurnos;
