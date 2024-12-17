import { useState } from "react";
import PerfilPaciente from "./components/pacientes/PerfilPaciente";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PerfilPaciente />
    </>
  );
}

export default App;
