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
      sexo: "hombre",
    },
    {
      id: 2,
      nombre: "Lucas",
      apellido: "Ferruchi",
      especialidad: "Odontologia",
      avatar: "foto-perfil.jpg",
      estado: "Incompleta",
      sexo: "hombre",
    },
    {
      id: 3,
      nombre: "Nahuel",
      apellido: "Romano",
      especialidad: "Ginecologia",
      avatar: "foto-perfil.jpg",
      estado: "Completada",
      sexo: "hombre",
    },
    {
      id: 4,
      nombre: "Mauricio",
      apellido: "Gomez",
      especialidad: "Urologia",
      avatar: "foto-perfil.jpg",
      estado: "Completada",
      sexo: "hombre",
    },
    {
      id: 5,
      nombre: "Jose",
      apellido: "Perez",
      especialidad: "Proctologia",
      avatar: "foto-perfil.jpg",
      estado: "Completada",
      sexo: "hombre",
    },
    {
      id: 5,
      nombre: "Sofia",
      apellido: "Soria",
      especialidad: "Pediatria",
      avatar: "foto-perfil.jpg",
      estado: "Incompleta",
      sexo: "mujer",
    },
  ];

  return (
    <div>
      <div className="text-center flex-grow-1">
        <h2 className="fw-bold pb-3">Mis Turnos</h2>
        <div className="table-responsive">
          <table className="table table-hover ">
            <thead>
              <tr>
                <th className="text-start text-nowrap">Doctor / Doctora</th>
                <th className="text-start text-nowrap">Especialidad</th>
                <th className="text-start text-nowrap">Estado</th>
              </tr>
            </thead>
            <tbody>
              {medicos.map((medico) => (
                <tr key={medico.id}>
                  <th>
                    <div>
                      <div className="d-flex align-items-center">
                        <img
                          src={`${
                            medico.sexo === "hombre"
                              ? "src/images/avatar-hombre.jpg"
                              : "src/images/avatar-mujer.webp"
                          }`}
                          alt="avatar usuario"
                          className="avatarPte"
                          loading="lazy"
                        />
                        <span className="ms-2">
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
