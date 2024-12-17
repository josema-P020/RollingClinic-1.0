import React from "react";

function PerfilPaciente() {
  return (
    <>
      <section className="container-fluid">
        <nav aria-label="breadcrumb" className="container-fluid">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#" className="nave">
                Home
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Mi Perfil
            </li>
          </ol>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-12 text-center border border-danger">
              <img src="" alt="avatar paciente" className="avatarPte " />
              <p className="pt-2">Juan Perez</p>
              <div className="d-flex justify-content-center align-items-center py-3">
                <button className=" btn btn-success">Nuevo turno</button>
              </div>
              <div className="my-3 shadow-sm">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <span className="fw-bold">Nombre: </span>Juan Perez
                  </li>
                  <li className="list-group-item text-break">
                    <span className="fw-bold">Email: </span>Juanperez@gmail.com
                  </li>
                  <li className="list-group-item">
                    <span className="fw-bold">Telefono: </span>3812345678
                  </li>
                  <li className="list-group-item">
                    <span className="fw-bold">Fecha de nacimiento: </span>
                    14-10-90
                  </li>
                  <li className="list-group-item">
                    <span className="fw-bold">Ciudad: </span>Tucumán
                  </li>
                  <li className="list-group-item">
                    <span className="fw-bold">DNI: </span>34123456
                  </li>
                  <li className="list-group-item">
                    <span className="fw-bold">Obra Social: </span>OSDE
                  </li>
                </ul>
              </div>
              <div className="pb-1">
                <button className=" btn btn-success">Modificar Datos</button>
              </div>
            </div>
            <div className="col-lg-9 col-md-8 col-sm-12 border border-danger">
                
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PerfilPaciente;
