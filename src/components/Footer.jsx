import React from "react";

function Footer() {
  return (
    <div className="row pt-md-4 text-center footer-style">
      <div className="col-sm-12 col-md-4 mb-3 mb-md-0">
        <a className="navbar-brand" href="#">
          <i className="fa fa-ravelry" aria-hidden="true">
            CODER
          </i>
        </a>
      </div>

      <div className="col-sm-12 col-md-4">
        <h5 className="">Soporte</h5>
        <ul className="ul-style">
          <li>
            <a href="#">LISTA 2</a>
          </li>
          <li>
            <a href="#">LISTA 2</a>
          </li>
          <li>
            <a href="#">LISTA 2</a>
          </li>
        </ul>
      </div>

      <div className="col-sm-12 col-md-4">
        <h5 className="">Contáctanos</h5>
        <ul className="ul-style">
          <li>
            <a href="#">LISTA 2</a>
          </li>
          <li>
            <a href="#">LISTA 2</a>
          </li>
          <li>
            <a href="#">LISTA 2</a>
          </li>
        </ul>
      </div>
      <p className="text-center my-0 mt-2">
        &copy; 2024. Todos los derechos reservados
      </p>
    </div>
  );
}

export default Footer;
