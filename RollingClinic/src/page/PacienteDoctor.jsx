import React, { useState } from 'react';
import { pacientes as initialPacientes } from '../data/BdDPaciente';

function PacienteDoctor() {
    const [pacientes, setPacientes] = useState(initialPacientes); // Estado principal
    const [selectedPacienteId, setSelectedPacienteId] = useState(null); // ID del paciente seleccionado
    const [consultaDetalles, setConsultaDetalles] = useState('');
    const [resumenConsulta, setResumenConsulta] = useState('');

    const handleSelectPaciente = (paciente) => {
        setSelectedPacienteId(paciente.id);
        setConsultaDetalles(paciente.detalles || '');
        setResumenConsulta(paciente.resumenConsulta || '');
    };

    const handleEnviarDatos = () => {
        setPacientes((prevPacientes) =>
            prevPacientes.map((paciente) =>
                paciente.id === selectedPacienteId
                    ? {
                          ...paciente,
                          detalles: consultaDetalles,
                          resumenConsulta: resumenConsulta,
                          estado: paciente.estado === 'atendido' ? 'en espera' : 'atendido',
                      }
                    : paciente
            )
        );
        alert('Datos actualizados correctamente');
    };

    const selectedPaciente = pacientes.find((paciente) => paciente.id === selectedPacienteId);

    return (
        <>
            <section className="container-fluid row mt-5 d-flex justify-content-around">
                <div className="col-5 border border-dark m-3 rounded-2 bg-secondary bg-opacity-75 text-light">
                    <h3 className="text-center">Lista de Pacientes</h3>
                    <ul className="list-unstyled">
                        {pacientes.map((paciente) => (
                            <li
                                key={paciente.id}
                                className="border border-dark m-2 p-2 text-center rounded"
                            >
                                <a
                                    href="#"
                                    className="text-light text-decoration-none"
                                    onClick={() => handleSelectPaciente(paciente)}
                                >
                                    Turno {paciente.turno} - {paciente.nombre}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

             
                <div className="col-5 border border-dark m-3 rounded-2 bg-secondary bg-opacity-75 text-light">
                    {selectedPaciente ? (
                        <>
                            <div className="mb-3">
                                <h4 className="d-inline">{selectedPaciente.nombre}</h4> 
                                <span
                                    className={
                                        selectedPaciente.estado === 'atendido'
                                            ? 'text-success'
                                            : 'text-warning'
                                    }
                                >
                                    ({selectedPaciente.estado})
                                </span>
                            </div>
                            <div className="mb-3">
                                <p className="text-light">{selectedPaciente.descripcion}</p>
                            </div>
                            <textarea
                                className="form-control w-100"
                                rows="5"
                                value={consultaDetalles}
                                onChange={(e) => setConsultaDetalles(e.target.value)}
                                placeholder="Detalles del paciente"
                            ></textarea>
                            <div className="mt-3">
                                <h5>Resumen de la Consulta</h5>
                                <textarea
                                    className="form-control"
                                    rows="4"
                                    value={resumenConsulta}
                                    onChange={(e) => setResumenConsulta(e.target.value)}
                                    placeholder="Resumen de la consulta"
                                ></textarea>
                            </div>
                            <button
                                className="btn btn-primary mt-3"
                                onClick={handleEnviarDatos}
                            >
                                Enviar datos y cambiar estado
                            </button>
                        </>
                    ) : (
                        <p className="text-light">Seleccione un paciente para ver los detalles.</p>
                    )}
                </div>
            </section>
        </>
    );
}

export default PacienteDoctor;
