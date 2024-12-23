import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login/Login";
import Calendario from "./components/Calendario";
import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";
// import PacienteDoctor from "./pages/PacienteDoctor";
// import RegisterPatient from "./pages/Register/RegisterPatient";
// import RegisterDoctor from "./pages/Register/RegisterDoctor";
// import HomeScreen from "./pages/HomeScreen";
import PerfilAdmin from "./pages/PerfilAdmin";
import PerfilPaciente from "./pages/PerfilPaciente";
import "./App.css";
import Error404 from "./pages/Error404";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* <Route path="/" element={<HomeScreen />} /> */}
          <Route path="/calendario" element={<Calendario />} />
          <Route path="/Paciente" element={<PerfilPaciente />} />
          <Route path="/Admin" element={<PerfilAdmin />} />
          {/* <Route path="/doc" element={<PacienteDoctor />} /> */}
          {/* <Route path="/RegisterPatient" element={<RegisterPatient />} /> */}
          {/* <Route path="/RegisterDoctor" element={<RegisterDoctor />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/*" element={<Error404 />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
