import { React, useState, useEffect } from "react";
import data from "../data/dataBase";
import "../css/paginaDoctor.css";
import BtnLogout from "../components/btn-logout/BtnLogout";

function PacienteDoctor() {
  const [dataBase, setPacientes] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedTurno, setSelectedTurno] = useState(null);
  const [consultaDetalles, setConsultaDetalles] = useState({});
  const [resumenConsulta, setResumenConsulta] = useState("");

  useEffect(() => {
    const storedPacientes = localStorage.getItem("users");

    if (storedPacientes) {
      setPacientes(JSON.parse(storedPacientes));
    } else {
      setPacientes(data);
    }
  }, []);

  const handleSelectDoctor = (doctor) => {
    setSelectedDoctor(doctor);
    setSelectedTurno(null);
  };

  const handleSelectTurno = (turno) => {
    setSelectedTurno(turno);
    let detalle = [];
    detalle.push(turno.detalles || "");
    setConsultaDetalles(detalle);
    setResumenConsulta(turno.resumenConsulta || "");
  };
  console.log(consultaDetalles);
  const handleEnviarDatos = () => {
    const updatedPacientes = dataBase.map((paciente) => {
      if (paciente.turnos) {
        const updatedTurnos = paciente.turnos.map((turno) => {
          if (turno.id === selectedTurno.id) {
            return {
              ...turno,
              detalles: consultaDetalles,
              resumenConsulta: resumenConsulta,
              estado: "atendido",
            };
          }
          return turno;
        });
        return { ...paciente, turnos: updatedTurnos };
      }
      return paciente;
    });

    setPacientes(updatedPacientes);
    localStorage.setItem("users", JSON.stringify(updatedPacientes));
    alert('El turno ha sido actualizado a "atendido"');
  };

  
  const doctors = dataBase.filter((user) => user.role === "DOCTOR");

 
  const filteredPacientes = dataBase.filter((paciente) =>
    paciente.turnos?.some((turno) => turno.doctor === selectedDoctor?.name)
  );

  return (
    <>
      <section className="container-fluid row d-flex justify-content-around">
        <div className="mb-3">
          <button
            className="btn-2 btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {selectedDoctor ? selectedDoctor.name : "Seleccione un doctor"}
          </button>
          <ul className="color-btn dropdown-menu">
            {doctors.map((doctor) => (
              <li key={doctor.id}>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleSelectDoctor(doctor)}
                >
                  {doctor.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-5 border border-dark m-3 rounded-2 bg-secondary bg-opacity-75 text-light">
          <h3 className="text-center">Lista de Turnos</h3>
          <ul className="list-unstyled">
            {filteredPacientes.map((paciente) =>
              paciente.turnos
                ?.filter((turno) => turno.doctor === selectedDoctor?.name)
                .map((turno) => (
                  <li
                    key={turno.id}
                    className="border border-dark m-2 p-2 text-center rounded "
                  >
                    <a
                      href="#"
                      className="text-light text-decoration-none ps "
                      onClick={() => handleSelectTurno(turno)}
                    >
                      {`Turno: ${turno.fecha} - ${turno.hora} - ${paciente.name}`}
                    </a>
                  </li>
                ))
            )}
          </ul>
        </div>
        <div className="col-5 border border-dark m-3 rounded-2 bg-secondary bg-opacity-75 text-light">
          {selectedTurno ? (
            <>
              <div className="mb-3">
                <h4 className="d-inline m-3">{selectedTurno.especialidad}</h4>
                <span
                  className={
                    selectedTurno.estado === "atendido"
                      ? "text-success"
                      : "text-danger"
                  }
                >
                  ({selectedTurno.estado})
                </span>
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control w-100"
                  rows="5"
                  value={consultaDetalles}
                  onChange={(e) => setConsultaDetalles(e.target.value)}
                  placeholder="Detalles sobre el turno..."
                ></textarea>
              </div>
              <div className="mt-3">
                <h5>Resumen de la Consulta</h5>
                <textarea
                  className="form-control"
                  rows="4"
                  value={resumenConsulta}
                  onChange={(e) => setResumenConsulta(e.target.value)}
                  placeholder="Describa la consulta..."
                ></textarea>
              </div>
              <button
                className="btn-2 btn btn-primary m-3"
                onClick={handleEnviarDatos}
              >
                Guardar cambios
              </button>
            </>
          ) : (
            <p className="text-light">
              Seleccione un turno para ver los detalles.
            </p>
          )}
        </div>
      </section>
      <BtnLogout></BtnLogout>
    </>
  );
}

export default PacienteDoctor;
