import React from "react";
import { NavLink } from "react-router-dom";
import "../css/footer.css";

function Footer() {
  return (
    <div className="footer-style">
      <div className="container">
        <div className="row text-center">
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <NavLink className="navlink-style" to="#">
              <i className="fa fa-ravelry" aria-hidden="true">
                CODER
              </i>
            </NavLink>
          </div>

          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <h5>Soporte</h5>
            <ul className="ul-style">
              <li>
                <NavLink className="navlink-style" to="#">
                  Preguntas Frecuentes
                </NavLink>
              </li>
              <li>
                <NavLink className="navlink-style" to="#">
                  Política de Privacidad
                </NavLink>
              </li>
              <li>
                <NavLink className="navlink-style" to="#">
                  Términos y Condiciones
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <h5>Quiénes Somos</h5>
            <ul className="ul-style">
              <li>
                <NavLink className="navlink-style" to="#">
                  Sobre Nosotros
                </NavLink>
              </li>
              <li>
                <NavLink className="navlink-style" to="#">
                  Nuestro Equipo Médico
                </NavLink>
              </li>
              <li>
                <NavLink className="navlink-style" to="#">
                  Teléfono: +123 456 7890
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center my-0 mt-3">
          &copy; 2024. Todos los derechos reservados
        </p>
      </div>
    </div>
  );
}

export default Footer;
