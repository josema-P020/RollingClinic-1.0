import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login/Login"
import RegisterDoctor from "./pages/Register/RegisterDoctor"
import RegisterPatient from "./pages/Register/RegisterPatient"

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registerDoctor" element={<RegisterDoctor/>}/>
        <Route path="/registerPatient" element={<RegisterPatient/>}/>
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
