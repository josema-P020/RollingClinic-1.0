import React from "react";
import DatosPaciente from "@/components/paciente/DatosPaciente.jsx";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.jsx";
import BtnLogout from "@/components/btn-logout/BtnLogout.jsx";

function PerfilPaciente() {
  return (
    <>
      <Breadcrumb></Breadcrumb>
      <DatosPaciente />
      <BtnLogout></BtnLogout>
    </>
  );
}

export default PerfilPaciente;
