import React, { useState } from "react";
import "./login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className="container">
        <div className="row text-center mb-5 text-dark ">
          <div className="col-sm-12">
            <h2>Iniciar Sesion</h2>
          </div>
          <div className="col">
            <form className="d-flex flex-column justify-content-center align-items-center bg-dark text-white">
              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password">Contraseña</label>
                <div className="position-relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    name="password"
                    id="password"
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
                <button className="btn btn-success">Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
