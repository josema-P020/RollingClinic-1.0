import React from 'react'
import {Routes, Route } from "react-router-dom"
import Calendario from "../components/Calendario";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PacienteDoctor from "../pages/PacienteDoctor";

import HomeScreen from "../pages/HomeScreen";
import PerfilAdmin from "../pages/PerfilAdmin";
import PerfilPaciente from "../pages/PerfilPaciente";
import Error404 from "../pages/Error404";

function RoutesApp() {
  return (
    <>
    <NavBar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="/Paciente" element={<PerfilPaciente/>} />
          <Route path="/Admin" element={<PerfilAdmin/>} />
          <Route path="/doc" element={<PacienteDoctor/>} /> 
          <Route path="/*" element={<Error404/>} />
        </Routes>
       <Footer />
    </>
  )
}

export default RoutesApp