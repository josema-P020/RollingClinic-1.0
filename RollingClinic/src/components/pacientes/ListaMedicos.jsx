import React from "react";

function ListaMedicos() {
  return (
    <div>
      <div className="text-center flex-grow-1">
        <h2 className="fw-bold pb-3">Lista de Medicos</h2>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Nombre</th>
              <th scope="col">Especialidad</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Juan Perez</td>
              <td>Pediatria</td>
              <td>
                <button className="btn btn-sm btn-success">Sacar Turno</button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Lucas Ferro</td>
              <td>Odontologia</td>
              <td>
                <button className="btn btn-sm btn-success">Sacar Turno</button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Lucas Ferro</td>
              <td>Odontologia</td>
              <td>
                <button className="btn btn-sm btn-success">Sacar Turno</button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Lucas Ferro</td>
              <td>Odontologia</td>
              <td>
                <button className="btn btn-sm btn-success">Sacar Turno</button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Lucas Ferro</td>
              <td>Odontologia</td>
              <td>
                <button className="btn btn-sm btn-success">Sacar Turno</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-center">
        <nav aria-label="paginacion">
          <ul className="pagination">
            <li className="page-item active">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Siguiente
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default ListaMedicos;
