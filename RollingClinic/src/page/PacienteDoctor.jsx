import React, { useState, useEffect } from 'react';
import { pacientes as initialPacientes } from '../data/BdDPaciente';

function PacienteDoctor() {
    const [pacientes, setPacientes] = useState([]);
    const [selectedPacienteId, setSelectedPacienteId] = useState(null);
    const [consultaDetalles, setConsultaDetalles] = useState('');
    const [resumenConsulta, setResumenConsulta] = useState('');

    
    useEffect(() => {
        const storedPacientes = localStorage.getItem('pacientes');
        if (storedPacientes) {
            setPacientes(JSON.parse(storedPacientes)); 
        } else {
            setPacientes(initialPacientes); 
        }
    }, []);

   
    const handleSelectPaciente = (paciente) => {
        setSelectedPacienteId(paciente.id);
        setConsultaDetalles(paciente.detalles || '');
        setResumenConsulta(paciente.resumenConsulta || '');
    };

  
    const handleEnviarDatos = () => {
        const updatedPacientes = pacientes.map((paciente) =>
            paciente.id === selectedPacienteId
                ? {
                      ...paciente,
                      detalles: consultaDetalles,
                      resumenConsulta: resumenConsulta,
                      estado: paciente.estado === 'atendido' ? 'en espera' : 'atendido',
                  }
                : paciente
        );

        setPacientes(updatedPacientes); 
        localStorage.setItem('pacientes', JSON.stringify(updatedPacientes)); 
        alert('Datos guardados correctamente');
    };

    return (
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
                {selectedPacienteId ? (
                    <>
                        <div className="mb-3">
                            <h4 className="d-inline m-3">
                                {pacientes.find((p) => p.id === selectedPacienteId)?.nombre}
                            </h4>
                            <span
                                className={
                                    pacientes.find((p) => p.id === selectedPacienteId)?.estado ===
                                    'atendido'
                                        ? 'text-success'
                                        : 'text-danger'
                                }
                            >
                                (
                                {
                                    pacientes.find((p) => p.id === selectedPacienteId)
                                        ?.estado
                                }
                                )
                            </span>
                        </div>
                        <div className="mb-3">
                            <textarea
                                className="form-control w-100"
                                rows="5"
                                value={consultaDetalles}
                                onChange={(e) => setConsultaDetalles(e.target.value)}
                                placeholder="Detalles sobre el paciente..."
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
                            className="btn btn-primary mt-3"
                            onClick={handleEnviarDatos}
                        >
                            Guardar cambios
                        </button>
                    </>
                ) : (
                    <p className="text-light">Seleccione un paciente para ver los detalles.</p>
                )}
            </div>
        </section>
    );
}

export default PacienteDoctor;
