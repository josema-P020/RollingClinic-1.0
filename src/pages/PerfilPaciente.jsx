import React from "react";
import DatosPaciente from "../components/paciente/DatosPaciente.jsx";
import Breadcrumb from "../components/breadcrumb/Breadcrumb.jsx";

function PerfilPaciente() {
  return (
    <>
      <Breadcrumb></Breadcrumb>
      <DatosPaciente />
    </>
  );
}

export default PerfilPaciente;
