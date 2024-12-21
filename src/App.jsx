import React from "react";
import { BrowserRouter } from "react-router-dom"; // Importa BrowserRouter
import NavBar from "./components/NavBar"; // Asegúrate de que el archivo esté bien importado
import Footer from "./components/Footer"; // Asegúrate de que el archivo esté bien importado
import "./App.css"; // Estilos de tu aplicación

function App() {
  return (
    <BrowserRouter>
      <div className="pagina-contenedor">
        <NavBar />
        <div className="contenedor-envoltura">
          
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
