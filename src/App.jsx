import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './pages/Login/Login'
import Calendario from "./components/Calendario";
// import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        {/* <Route path="/containerBtn" element={<ContainerBtn/>}/> */}
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
