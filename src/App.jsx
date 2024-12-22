import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './pages/Login/Login'
import Calendario from "./components/Calendario";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import PacienteDoctor from "./pages/PacienteDoctor";
import RegisterPatient from "./pages/Register/RegisterPatient";
import RegisterDoctor from "./pages/Register/RegisterDoctor";
import HomeScreen from "./pages/HomeScreen";
import "./App.css"
function App() {

  return (
    <> 
        

      <BrowserRouter>
      
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeScreen/>} />
          <Route path="/calendario" element={<Calendario/>} />
          <Route path="/doc" element={<PacienteDoctor/>} />
          <Route path="/RegisterPatient" element={<RegisterPatient />} />
          <Route path="/RegisterDoctor" element={<RegisterDoctor />} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
