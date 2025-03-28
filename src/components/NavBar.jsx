import { Link } from "react-router-dom";
import "../css/navbar.css";

function NavBar() {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const { role, name } = user;

  return (
    <div className="navbar ">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="nav_logo">
          <Link to={role === "ADMIN" ? "/Admin" : "/"} className="btn-shine">
            Rolling Clinica
          </Link>
        </div>
        <div className="me-5 text-white fw-bold"> {name} </div>
      </div>
    </div>
  );
}

export default NavBar;
