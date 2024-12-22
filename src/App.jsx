import React from "react"
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import RegisterPatient from "./pages/Register/RegisterPatient"
import RegisterDoctor from "./pages/Register/RegisterDoctor"
import HomeScreen from "./pages/HomeScreen"
import "./App.css"
function App() {

  return (
    <> 
        

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeScreen/>} />
          <Route path="/RegisterPatient" element={<RegisterPatient />} />
          <Route path="/RegisterDoctor" element={<RegisterDoctor />} />
          {/* <Route path="/login" element={<Login/>}/> */}
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
