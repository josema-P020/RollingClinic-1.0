import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import RegisterPatient from "./pages/Register/RegisterPatient"
import RegisterDoctor from "./pages/Register/RegisterDoctor"
import HomeScreen from "./pages/HomeScreen"
import "./App.css"
function App() {

  return (
    <> 
        

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen/>} />
          <Route path="/RegisterPatient" element={<RegisterPatient />} />
          <Route path="/RegisterDoctor" element={<RegisterDoctor />} />
          {/* <Route path="/login" element={<Login/>}/> */}
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
