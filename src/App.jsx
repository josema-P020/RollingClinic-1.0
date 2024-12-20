import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPatient from "./pages/Register/RegisterPatient";
import RegisterDoctor from "./pages/Register/RegisterDoctor";
import PacienteDoctor from "./pages/PacienteDoctor";
// import ContainerBtn from "./pages/ContainerLoginBtn/ContainerBtn"

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Doctor" element={<PacienteDoctor />} />
          <Route path="/RegisterPatient" element={<RegisterPatient />} />
          <Route path="/RegisterDoctor" element={<RegisterDoctor />} />
        {/* <Route path="/login" element={<Login/>}/> */}
        {/* <Route path="/containerBtn" element={<ContainerBtn/>}/> */}
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
