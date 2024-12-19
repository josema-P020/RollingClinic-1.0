import { useState } from "react";
// import PerfilPaciente from "./components/pacientes/PerfilPaciente";
import "./App.css";
// import PerfilPaciente from "./pages/PerfilPaciente.jsx";
import PerfilAdmin from "./pages/PerfilAdmin.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <PerfilPaciente /> */}
      <PerfilAdmin />
    </>
  );
}

export default App;
