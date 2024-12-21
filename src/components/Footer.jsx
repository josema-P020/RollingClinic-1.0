import React from "react";
import { NavLink } from "react-router-dom"; // O puedes usar Link si prefieres
import "../css/footer.css";

function Footer() {
  return (
    <div className="row text-center footer-style">
      {/* Primera columna */}
      <div className="col-12 col-md-3 mb-3 mb-md-0">
        <NavLink className="navbar-brand" to="#">
          <i className="fa fa-ravelry" aria-hidden="true">
            CODER
          </i>
        </NavLink>
      </div>

      {/* Segunda columna */}
      <div className="col-12 col-md-3 mb-3 mb-md-0">
        <h5>Soporte</h5>
        <ul className="ul-style">
          <li>
            <NavLink className="navbar-brand" to="#">Preguntas Frecuentes</NavLink>
          </li>
          <li>
            <NavLink className="navbar-brand" to="#">Política de Privacidad</NavLink>
          </li>
          <li>
            <NavLink className="navbar-brand" to="#">Términos y Condiciones</NavLink>
          </li>
        </ul>
      </div>

      {/* Tercera columna */}
      <div className="col-12 col-md-3 mb-3 mb-md-0">
        <h5>Quiénes Somos</h5>
        <ul className="ul-style">
          <li>
            <NavLink className="navbar-brand" to="#">Sobre Nosotros</NavLink>
          </li>
          <li>
            <NavLink className="navbar-brand"to="#">Nuestro Equipo Médico</NavLink>
          </li>
          <li>
            <NavLink className="navbar-brand" to="#">Ubicación y Horarios</NavLink>
          </li>
        </ul>
      </div>

      {/* Cuarta columna */}
      <div className="col-12 col-md-3 mb-3 mb-md-0">
        <h5>Contáctanos</h5>
        <ul className="ul-style">
          <li>
            <NavLink className="navbar-brand" to="#">Teléfono: +123 456 7890</NavLink>
          </li>
          <li>
            <NavLink className="navbar-brand" to="#">Email: contacto@clinic.com</NavLink>
          </li>
          <li>
            <NavLink className="navbar-brand" to="#">Formulario de Contacto</NavLink>
          </li>
        </ul>
      </div>

      {/* Copyright */}
      <p className="col-12 text-center my-0 mt-3">
        &copy; 2024. Todos los derechos reservados
      </p>
    </div>
  );
}

export default Footer;
