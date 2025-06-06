import { Link } from "react-router-dom";
import "../css/navbar.css";
import BtnLogout from "./btn-logout/BtnLogout";
function NavBar() {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const { role, name } = user;

  return (
    <div className="navbar">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="nav_logo">
          {role === "ADMIN" ? (
            <Link to="/Admin" className="btn-shine">
              Rolling Clinica
            </Link>
          ) : (
            <span
              className="btn-shine"
              style={{ cursor: "default", textDecoration: "none" }}
            >
              Rolling Clinica
            </span>
          )}
        </div>
        <div className="contenidoDr">
          <div className="me-5 text-white fw-bold">
            {role === "DOCTOR" ? (name.startsWith("A") ? "Dra." : "Dr.") : ""}
            {` ${name}`}
          </div>
          <div className="d-flex justify-content-center mt-1">
            <BtnLogout />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
