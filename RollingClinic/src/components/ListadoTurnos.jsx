import React from "react";

function ListadoTurnos() {
  // const [avatar, setAvatar] = useState(0);
  let medicos = [
    {
      id: 1,
      nombre: "Jose",
      apellido: "Alvarez",
      especialidad: "Pediatria",
      avatar: "foto-perfil.jpg",
      estado: "Completada",
    },
    {
      id: 2,
      nombre: "Lucas",
      apellido: "Ferruchi",
      especialidad: "Odontologia",
      avatar: "foto-perfil.jpg",
      estado: "Incompleta",
    },
    {
      id: 3,
      nombre: "Nahuel",
      apellido: "Romano",
      especialidad: "Ginecologo",
      avatar: "foto-perfil.jpg",
      estado: "Completada",
    },
    {
      id: 4,
      nombre: "Mauricio",
      apellido: "Gomez",
      especialidad: "Urologo",
      avatar: "foto-perfil.jpg",
      estado: "Completada",
    },
    {
      id: 5,
      nombre: "Jose",
      apellido: "Perez",
      especialidad: "Proctologo",
      avatar: "foto-perfil.jpg",
      estado: "Completada",
    },
    {
      id: 5,
      nombre: "Jose",
      apellido: "Perez",
      especialidad: "Proctologo",
      avatar: "foto-perfil.jpg",
      estado: "Incompleta",
    },
  ];

  return (
    <div>
      <div className="text-center flex-grow-1">
        <h2 className="fw-bold pb-3">Mis Turnos</h2>
        <table className="table table-hover">
          <thead>
            <tr>
              <th></th>
              <th className="text-start col-4">Doctor / Doctora</th>
              <th className="text-start col-4">Especialidad</th>
              <th className="text-start col-4">Estado</th>
            </tr>
          </thead>
          <tbody>
            {medicos.map((medico, index) => (
              <tr key={medico.id}>
                <th scope="row" className="align-middle"></th>
                <th>
                  <div>
                    <div className="d-flex align-items-center">
                      <img
                        src={medico.avatar}
                        // alt="avatar usuario"
                        className="avatarPte flex-start"
                        loading="lazy"
                      />
                      <span className="ms-5">
                        {medico.nombre} {medico.apellido}
                      </span>
                    </div>
                  </div>
                </th>
                <td className="align-middle text-start">
                  {medico.especialidad}
                </td>
                <td className="align-middle text-start">
                  <span
                    className={`btn ${
                      medico.estado === "Completada"
                        ? "btn-success"
                        : "btn-danger"
                    }`}
                  >
                    {medico.estado}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-center">
        <nav aria-label="paginacion">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link disabled" href="#">
                Anterior
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="javascript:void(0)">
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

export default ListadoTurnos;
