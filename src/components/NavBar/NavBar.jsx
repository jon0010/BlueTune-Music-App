import React from "react";
import bluetune from "../../assets/bluetune.png";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="barranav row navbar mx-0 px-0">
      <div className="col-8">
        <NavLink className="navbar-brand" to="/">
          <img src={bluetune} alt="logo" width="100" height="90" />
        </NavLink>
        <NavLink to="/login">
          <button className="botonCV ms-5">
            <div className="BOTONCV">Escucha tu música favorita 🎶</div>
          </button>
        </NavLink>
      </div>
      <div className="col-2 d-none d-md-block">
        <NavLink className="nav-link active" aria-current="page" to="/signup">
          Registrate
        </NavLink>
      </div>
      <div className="col-2 d-none d-md-block">
        <NavLink className="nav-link active" aria-current="page" to="/login">
          Iniciar Sesion
        </NavLink>
      </div>
      <div className="btn-group col-6 d-sm-block d-md-none">
        <button
          className="btn btn-secondary dropdown-toggle bi bi-list"
          type="button"
          data-bs-toggle="list"
          aria-expanded="false"
        >
          Menu
        </button>
        <ul className="dropdown-menu">
          <li>
            <NavLink
              className="nav-link active"
              aria-current="page"
              to="/login"
            >
              Iniciar Sesion
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link active"
              aria-current="page"
              to="/signup"
            >
              Registrate
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
