import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/HomeScreen.css";

function CustomCarousel() {
  return (
    <>
      <div className="pb-5 bg-drop">
        <section className="container">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-6 py-4 d-flex flex-column justify-content-center align-items-center">
              <h1 className="text-center text-light">Bienvenido a Rolling Clinic</h1>
              <p className="lead py-2 text-center text-light">
                En Rolling Clinic, nos enorgullece ofrecerte un enfoque integral
                y personalizado para tu salud y bienestar. Nuestro equipo de
                expertos está comprometido a brindarte atención médica de
                calidad, utilizando{" "}
                <span className="fw-bold">tecnología avanzada</span> y un
                ambiente acogedor. Ya sea que necesites atención preventiva,
                tratamiento especializado o asesoramiento personalizado, estamos
                aquí para acompañarte en cada paso del camino. Tu salud es
                nuestra prioridad, y nos esforzamos por brindarte el mejor
                cuidado posible.
              </p>
            </div>
            <div className="col-12 col-md-4 col-lg-6 pt-2 flex-column d-flex justify-content-center align-items-center ">
              <div className="d-flex flex-column justify-content-center align-items-center gap-4">
                <div>
                  <Link to="/calendario" className="text-decoration-none">
                    <button className="animated-button">
                      <svg
                        viewBox="0 0 24 24"
                        className="arr-2"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                      </svg>
                      <span className="text">Sacar un turno</span>
                      <span className="circle"></span>
                      <svg
                        viewBox="0 0 24 24"
                        className="arr-1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                      </svg>
                    </button>
                  </Link>
                </div>
                <div>
                  <Link to="/Paciente" className="text-decoration-none">
                    <button className="animated-button">
                      <svg
                        viewBox="0 0 24 24"
                        className="arr-2"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                      </svg>
                      <span className="text">Ver mis turnos</span>
                      <span className="circle"></span>
                      <svg
                        viewBox="0 0 24 24"
                        className="arr-1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default CustomCarousel;
