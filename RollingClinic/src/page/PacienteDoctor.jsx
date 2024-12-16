import React from 'react'

function PacienteDoctor() {
    return (
        <>
            <section class="container-fluid row mt-5 d-flex justify-content-around">

                <div class="col-sm-12 col-md-5 border border-dark m-3 rounded-2 bg-secondary bg-opacity-75 text-light">
                    <h3 class="text-center">Lista de Pacientes</h3>
                    <ul class="list-unstyled">
                        <li class="border border-dark m-2 p-2 text-center rounded" id="">
                            <a href="" class="text-light text-decoration-none">N°(turno) Nombre del Paciente</a>
                        </li>
                    </ul>
                </div>

                <div class="col-sm-12 col-md-5 border border-dark m-3 rounded-2 bg-secondary bg-opacity-75 text-light">
                    <div class="mb-3">
                        <h4 class="d-inline">Nombre del Paciente</h4>
                        <span id="status" class="text-success">(pendiente)</span>
                    </div>
                    <div class="mb-3" id="patient-description">
                        <p class="text-light">Breve descripción paciente.</p>
                    </div>
                    <textarea class="form-control w-100" name="text" id="paciente-detales" rows="4"
                        placeholder="Acerca del paciente, dificultades, alergias, etc..."></textarea>
                    <div class="mt-3">
                        <h5>Resumen de la Consulta</h5>
                        <textarea class="form-control" name="summary" id="consulta-sumario" rows="4"
                            placeholder="Describa las acciones realizadas y observaciones de la consulta..."></textarea>
                    </div>
                    <button class="btn btn-primary mt-3" onclick="">Atendido</button>
                </div>

            </section>
        </>
    )
}

export default PacienteDoctor