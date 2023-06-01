import React from "react";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="contregistro">
      <form className="form mx-auto">
        <span className="title">Registrate</span>
        <label for="nombre" className="label">
          Nombre
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          required=""
          className="input"
        />
        <label for="Apellido" className="label">
          Apellido
        </label>
        <input
          type="text"
          id="Apellido"
          name="Apellido"
          required=""
          className="input"
        />
        <label for="email" className="label">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required=""
          className="input"
        />
        <label for="Contraseña" className="label">
          Contraseña
        </label>
        <input
          type="Contraseña"
          id="Contraseña"
          name="Contraseña"
          required=""
          className="input"
        />
        <button type="submit" className="submit">
          Crea tu cuenta
        </button>
      </form>
    </div>
  );
};

export default SignUp;
