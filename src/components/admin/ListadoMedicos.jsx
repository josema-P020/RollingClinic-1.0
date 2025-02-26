import React, { useState } from "react";
import data from "@/data/dataBase";
import Swal from "sweetalert2";

function ListadoMedicos() {
  const recuperarDoctores = JSON.parse(localStorage.getItem("users")) || data;
  const [doctores, setDoctores] = useState(recuperarDoctores);
  const medicos = doctores.filter((usuario) => usuario.role === "DOCTOR");

  const botonAprobbed = (id) => {
    const doctorSeleccionado = doctores.find((doctor) => doctor.id === id);
    if (doctorSeleccionado.aprobbed) {
      console.log(doctorSeleccionado);
      Swal.fire({
        icon: "question",
        title: "¿Estás seguro de que deseas desactivar este usuario?",
        showCancelButton: true,
        confirmButtonText: "Confirmar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          const actualizarDoctores = doctores.map((doctor) => {
            if (doctor.id === id) {
              return { ...doctor, aprobbed: !doctor.aprobbed };
            }
            return doctor;
          });

          setDoctores(actualizarDoctores);
          localStorage.setItem("users", JSON.stringify(actualizarDoctores));
        }
      });
    } else {
      Swal.fire({
        icon: "question",
        title: "¿Estás seguro de que deseas activar este usuario?",
        showCancelButton: true,
        confirmButtonText: "Confirmar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          const actualizarDoctores = doctores.map((doctor) => {
            if (doctor.id === id) {
              return { ...doctor, aprobbed: !doctor.aprobbed };
            }
            return doctor;
          });

          setDoctores(actualizarDoctores);
          localStorage.setItem("users", JSON.stringify(actualizarDoctores));
        }
      });
    }
  };

  return (
    <div className="mt-4">
      <div className="text-center flex-grow-1">
        <h2 className="fw-bold pb-3">Todos los usuarios</h2>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th className="text-start text-nowrap">Email</th>
                <th className="text-start text-nowrap">Matricula</th>
                <th className="text-start text-nowrap">DNI</th>
                <th className="text-start text-nowrap">Estado</th>
              </tr>
            </thead>
            <tbody>
              {medicos.map((d) => (
                <tr key={d.id}>
                  <td className="align-middle text-start">{d.email}</td>
                  <td className="align-middle text-start">
                    <span>{d.matricula}</span>
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
