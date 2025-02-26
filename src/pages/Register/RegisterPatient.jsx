import React, { useState } from "react";
import "../../css/registerCorrect.css";
import data from "../../data/dataBase";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function RegisterPatient() {
  const navigate = useNavigate();

  let usersJSON = JSON.stringify(data);
  localStorage.setItem("users", usersJSON);
  let users = JSON.parse(localStorage.getItem("users"));

  const [isAccepted, setIsAccepted] = useState(false);

  const handleCheckboxClick = () => {
    setIsAccepted(!isAccepted);
  };

  const year = new Date().getFullYear() - 18;

  const month = (new Date().getMonth() + 1).toString().padStart(2, "0");

  const day = new Date().getDate().toString().padStart(2, "0");

  const maxDate = `${year}-${month}-${day}`;

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/;

  const phoneRegex = /^\d{8,15}$/;

  const nameRegex = /^[a-zA-Z]+( [a-zA-Z]+)*$/;

  const [formValues, setFormValues] = useState({
    name: "",
    tel: "",
    dateBirth: "",
    city: "",
    dni: "",
    genre: "",
    obraSocial: "",
    email: "",
    password: "",
    passwordrepeat: "",
    id: new Date().getTime(),
    role: "PACIENTE",
    aprobbed: true,
    turnos: [""],
  });

  const [showPassword, setShowPassword] = useState(false);

  const showPwd = () => {
    setShowPassword(!showPassword);
  };

  const [showRepeatedPassword, setShowRepeatedPassword] = useState(false);

  const showRepeatedPwd = () => {
    setShowRepeatedPassword(!showRepeatedPassword);
  };

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formValues.email ||
      !formValues.password ||
      !formValues.passwordrepeat ||
      !formValues.dateBirth ||
      !formValues.dni ||
      !formValues.tel ||
      !formValues.name ||
      !formValues.obraSocial ||
      !formValues.city ||
      !formValues.genre
    ) {
      Swal.fire({
        icon: "error",
        title: "Datos faltantes",
        text: `Debe completar todos los campos para continuar.`,
        confirmButtonText: "Entendido",
      });
      return;
    }

    if (!nameRegex.test(formValues.name)) {
      Swal.fire({
        icon: "error",
        title: "Datos erróneos o faltantes",
        text: `El nombre debe contener solo letras, con un mínimo de 3 y un máximo de 20 caracteres.`,
        confirmButtonText: "Entendido",
      });
      return;
    }

    if (!phoneRegex.test(formValues.tel)) {
      Swal.fire({
        icon: "error",
        title: "Datos erróneos o faltantes",
        text: `El número de teléfono debe contener entre 8 y 15 dígitos.`,
        confirmButtonText: "Entendido",
      });
      return;
    }

    if (formValues.dni.length < 7 || formValues.dni.length > 8) {
      Swal.fire({
        icon: "error",
        title: "Datos erróneos o faltantes",
        text: `El DNI debe contener entre 7 y 8 dígitos.`,
        confirmButtonText: "Entendido",
      });
      return;
    }

    if (formValues.password !== formValues.passwordrepeat) {
      Swal.fire({
        icon: "error",
        title: "Datos erróneos o faltantes",
        text: `Las contraseñas deben coincidir`,
        confirmButtonText: "Entendido",
      });
      return;
    }

    if (!isAccepted) {
      Swal.fire({
        icon: "error",
        title: "Datos erróneos o faltantes",
        text: `Debe aceptar los términos y condiciones.`,
        confirmButtonText: "Entendido",
      });
      return;
    }

    const emailExists = users.find((user) => user.email === formValues.email);

    if (emailExists) {
      Swal.fire({
        icon: "error",
        title: "Datos erróneos o faltantes",
        text: `Este correo ya está registrado, por favor, elige otro.`,
        confirmButtonText: "Entendido",
      });
      return;
    }

    if (!passwordRegex.test(formValues.password)) {
      Swal.fire({
        icon: "error",
        title: "Datos erróneos o faltantes",
        text: `La contraseña debe tener mínimo 6 caracteres, maximo 20, incluyendo mayúscula, minúscula, número y carácter especial.`,
        confirmButtonText: "Entendido",
      });
      return;
    }

    const newUser = {
      name: formValues.name,
      tel: parseInt(formValues.tel),
      dateBirth: formValues.dateBirth,
      city: formValues.city,
      dni: parseInt(formValues.dni),
      genre: formValues.genre,
      obraSocial: formValues.obraSocial,
      email: formValues.email,
      password: formValues.password,
      role: formValues.role,
      aprobbed: formValues.aprobbed,
      turnos: formValues.turnos,
      id: formValues.id,
    };

    data.push(newUser);
    usersJSON = JSON.stringify(data);
    localStorage.setItem("users", usersJSON);
    users = JSON.parse(localStorage.getItem("users"));

    Swal.fire({
      icon: "success",
      title: "Registro exitoso",
      text: `Hemos recibido tus datos correctamente. Ya puedes iniciar sesión.`,
      confirmButtonText: "Entendido",
    }).then(() => {
      navigate("/login");
    });

    setFormValues({
      name: "",
      tel: "",
      dateBirth: "",
      city: "",
      dni: "",
      obraSocial: "",
      genre: "",
      email: "",
      password: "",
      passwordrepeat: "",
      id: new Date().getTime(),
    });
  };
  return (
    <>
      <div className="container imgContainer">
        <div className="register-container text-white">
          <h3 className="text-center mt-5">
            Registrate para comenzar a pedir turno
          </h3>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <label htmlFor="name" className="mb-1">
                  Nombre completo
                </label>
                <input
                  type="text"
                  className="form-control mb-3"
                  id="name"
                  name="name"
                  placeholder="Giancarlo Esposito"
                  required
                  minLength={3}
                  maxLength={20}
                  onChange={handleChange}
                  value={formValues.name}
                />
              </div>
              <div className="col-sm-6 col-md-3">
                <label htmlFor="tel" className="mb-1">
                  Teléfono
                </label>
                <input
                  type="phone"
                  className="form-control mb-3"
                  id="tel"
                  name="tel"
                  placeholder="3816093788"
                  required
                  minLength={8}
                  maxLength={15}
                  onChange={handleChange}
                  value={formValues.tel}
                />
              </div>
              <div className="col-sm-6 col-md-3">
                <label htmlFor="date" className="mb-1">
                  Fecha de nacimiento
                </label>
                <input
                  type="date"
                  className="form-control mb-1"
                  id="date"
                  name="dateBirth"
                  required
                  min="1930-01-01"
                  max={maxDate}
                  value={formValues.dateBirth}
                  onChange={handleChange}
                />
                <p className="text-muted mb-3">Debes ser mayor de 18 años.</p>
              </div>
              <div className="col-sm-12 col-md-6">
                <label htmlFor="city" className="mb-1">
                  Elige tu ciudad
                </label>
                <select
                  className="form-control mb-3 select-options"
                  name="city"
                  id="city"
                  required
                  onChange={handleChange}
                  value={formValues.city}
                >
                  <option value="" disabled>
                    -- Elegir una opción --
                  </option>
                  <option value="San Miguel de Tucuman">
                    San Miguel de Tucuman
                  </option>
                  <option value="Tafi Viejo">Tafi Viejo</option>
                  <option value="Monteros">Monteros</option>
                  <option value="Lules">Lules</option>
                  <option value="Las Talitas">Las Talitas</option>
                  <option value="Yerba Buena">Yerba Buena</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <div className="col-sm-12 col-md-6">
                <label htmlFor="obraSocial" className="mb-1">
                  ¿Tienes obra social?
                </label>
                <select
                  className="form-control mb-3 select-options"
                  name="obraSocial"
                  id="obraSocial"
                  required
                  value={formValues.obraSocial}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    -- Elegir una opción --
                  </option>
                  <option value="OSDE">OSDE</option>
                  <option value="SWISS MEDICAL">SWISS MEDICAL</option>
                  <option value="PRENSA">PRENSA</option>
                  <option value="SUBSIDIO">SUBSIDIO</option>
                  <option value="PAMI">PAMI</option>
                  <option value="OSECAC">OSECAC</option>
                  <option value="PARTICULAR">
                    No tengo obra social (particular)
                  </option>
                </select>
              </div>

              <div className="col-sm-12 col-md-6">
                <label htmlFor="email" className="mb-1">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  className="form-control mb-3"
                  id="email"
                  name="email"
                  placeholder="usuario@outlook.com"
                  required
                  minLength={5}
                  maxLength={254}
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>

              <div className="col-sm-6 col-md-3">
                <label htmlFor="genre" className="mb-1">
                  Sexo
                </label>
                <select
                  className="form-control mb-3 select-options"
                  name="genre"
                  id="genre"
                  required
                  value={formValues.genre}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    -- Elegir una opción --
                  </option>
                  <option value="female">Mujer</option>
                  <option value="male">Varon</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div className="col-sm-6 col-md-3">
                <label htmlFor="dni" className="mb-1">
                  DNI
                </label>
                <input
                  type="number"
                  className="form-control mb-3"
                  id="dni"
                  name="dni"
                  placeholder="18016723"
                  required
                  min={0}
                  minLength={7}
                  maxLength={8}
                  value={formValues.dni}
                  onChange={handleChange}
                />
              </div>

              <div className="col-sm-12 col-md-6">
                <label htmlFor="password" className="mb-1">
                  Contraseña
                </label>
                <div className="position-relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control mb-1"
                    name="password"
                    id="password"
                    placeholder="Ingrese aquí su contraseña"
                    required
                    minLength={6}
                    maxLength={20}
                    value={formValues.password}
                    onChange={handleChange}
                  />
                  {showPassword ? (
                    <i
                      className="bi bi-eye-fill position-absolute showPwd"
                      onClick={showPwd}
                    ></i>
                  ) : (
                    <i
                      className="bi bi-eye-slash-fill position-absolute showPwd"
                      onClick={showPwd}
                    ></i>
                  )}
                </div>
                <p className="text-muted mb-3">
                  Mínimo 6 caracteres, incluyendo mayúscula, minúscula, número y
                  carácter especial.
                </p>
              </div>

              <div className="col-sm-12 col-md-6">
                <label htmlFor="repeatedpassword" className="mb-1">
                  Repita su contraseña
                </label>
                <div className="position-relative">
                  <input
                    type={showRepeatedPassword ? "text" : "password"}
                    className="form-control mb-3"
                    name="passwordrepeat"
                    id="repeatedpassword"
                    placeholder="Ingrese aquí su contraseña nuevamente"
                    required
                    minLength={6}
                    maxLength={20}
                    value={formValues.passwordrepeat}
                    onChange={handleChange}
                  />
                  {showRepeatedPassword ? (
                    <i
                      className="bi bi-eye-fill position-absolute showPwd"
                      onClick={showRepeatedPwd}
                    ></i>
                  ) : (
                    <i
                      className="bi bi-eye-slash-fill position-absolute showPwd"
                      onClick={showRepeatedPwd}
                    ></i>
                  )}
                </div>
              </div>
            </div>

            <div className="my-3 d-flex justify-content-center">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id=""
                  required
                  onChange={handleCheckboxClick}
                />
              </div>

              <p>
                Acepto los{" "}
                <Link to="/*" className="text-dark">
                  Términos y Condiciones
                </Link>
              </p>
            </div>

            <div className="mb-3 d-grid justify-content-center">
              <button type="submit" className="btn btn-success px-5">
                Registrarse
              </button>
            </div>
          </form>
          <div className="mb-3 d-grid text-center d-flex justify-content-center align-items-center">
            <p className="mx-3 pt-3">¿Ya tienes una cuenta?</p>
            <Link to="/login">
              <button type="submit" className="btn btn-primary mx-1">
                Inicia sesion
              </button>
            </Link>
          </div>
          <div className="mb-3 d-grid text-center">
            <p>
              ¿Sos Profesional de Salud? Registrate{" "}
              <Link to="/registerDoctor" className="text-dark">
                acá
              </Link>{" "}
              para trabajar con nosotros
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPatient;
