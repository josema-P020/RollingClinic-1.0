import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import data from "../../data/dataBase";
import Swal from "sweetalert2";

function Login( {cambiarLogin} ) {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  let usersJSON = JSON.stringify(data);
  localStorage.setItem("users", usersJSON);
  let users = JSON.parse(localStorage.getItem("users"));

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const matchedUser = users.find(
    (eachUser) =>
      formValues.email === eachUser.email &&
      formValues.password === eachUser.password
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formValues.email || !formValues.password) {
      Swal.fire({
        icon: "error",
        title: "Datos faltantes",
        text: `Debe completar todos los campos para continuar.`,
        confirmButtonText: "Entendido",
      });
      return;
    }

    if (matchedUser) {
      if (!matchedUser.aprobbed) {
        Swal.fire({
          icon: "error",
          title: "Validación pendiente",
          text: `Usuario pendiente de aprobación. Por favor, espere a que un administrador valide su cuenta.`,
          confirmButtonText: "Entendido",
        });
        return;
      }

      const loggedInUser = { ...matchedUser };

      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

     if (loggedInUser.role === "PACIENTE") {
      cambiarLogin();
        navigate("/");
        return;
      }
     if (loggedInUser.role === "DOCTOR") {
      cambiarLogin();
        navigate("/doc");
        return;
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Datos erróneos",
        text: `Email o contraseña incorrectos. Por favor, verifique sus datos e intente nuevamente.`,
        confirmButtonText: "Entendido",
      });
    }
  };

  return (
    <>
      <div className="container-fluid imgContainer text-white">
        <div className="row d-flex align-items-center justify-content-center min-vh-100">
          <div className="col-sm-12 col-md-7 col-lg-9">
            <div className="login-container">
              <div className="row text-center mb-5">
                <div className="col-sm-12 mt-3">
                  <h2>Iniciar Sesion</h2>
                </div>
                <div className="col-sm-12">
                  <form
                    onSubmit={handleSubmit}
                    className="d-flex flex-column justify-content-center align-items-center"
                  >
                    <div className="mb-3">
                      <label htmlFor="email" className="mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        required
                        placeholder="ejemplo@gmail.com"
                        value={formValues.email}
                        onChange={handleChange}
                        autoComplete="username"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="mb-1">
                        Contraseña
                      </label>
                      <div className="position-relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          className="form-control"
                          name="password"
                          id="password"
                          required
                          placeholder="Ingrese aqui"
                          value={formValues.password}
                          onChange={handleChange}
                          autoComplete="current-password"
                        />
                        {showPassword ? (
                          <i
                            className="bi bi-eye-slash-fill position-absolute showPassword"
                            onClick={() => setShowPassword(!showPassword)}
                          ></i>
                        ) : (
                          <i
                            className="bi bi-eye-fill position-absolute showPassword"
                            onClick={() => setShowPassword(!showPassword)}
                          ></i>
                        )}
                      </div>
                    </div>
                    <div className="mb-3 d-grid">
                      <button className="btn btn-success">
                        Iniciar sesión
                      </button>
                    </div>
                  </form>
                  <div className="dropdow">
                    <button
                      className="btn btn-primary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Registrate
                    </button>
                    <ul
                      className="dropdown-menu dropdown-menu-dark"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li>
                        <a className="dropdown-item" href="/registerPatient">
                          Paciente
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/registerDoctor">
                          Médico
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
