import { useState } from "react";
// import PerfilPaciente from "./components/pacientes/PerfilPaciente";
import "./App.css";
import PerfilPaciente from "./pages/PerfilPaciente.jsx";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PerfilPaciente />
    </>
  );
}

export default App;
