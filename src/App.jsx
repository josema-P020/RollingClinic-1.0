import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import RoutesApp from "./routes/RoutesApp";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import RegisterPatient from "./pages/Register/RegisterPatient";
import RegisterDoctor from "./pages/Register/RegisterDoctor";
import PerfilAdmin from "./pages/PerfilAdmin.jsx";
function App() {
  const [login, setLogin] = useState(false);

  const cambiarLogin = () => {
    setLogin(!login);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={
              <ProtectedRoutes login={login}>
                <RoutesApp cambiarLogin={cambiarLogin} />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/login"
            element={<Login cambiarLogin={cambiarLogin} />}
          />
          <Route path="/Admin" element={<PerfilAdmin />} />
          <Route path="/RegisterPatient" element={<RegisterPatient />} />
          <Route path="/RegisterDoctor" element={<RegisterDoctor />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
