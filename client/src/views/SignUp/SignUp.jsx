import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const submit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3001/usuario", data);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Usuario creado correctamente!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/login");
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Oops...",
        text: "Ocurrio un error inesperado!",
      });
      console.error(error);
    }
  };

  return (
    <div className="contregistro">
      <form className="form mx-auto" onSubmit={handleSubmit(submit)}>
        <span className="title">Registrate</span>
        <label htmlFor="nombre" className="label">
          Nombre
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          required=""
          className="input"
          {...register("nombre", {
            required: true,
          })}
        />{" "}
        {errors.nombre?.type === "required" && (
          <p className="text-danger">El campo nombre es requerido</p>
        )}
        <label htmlFor="Apellido" className="label">
          Apellido
        </label>
        <input
          type="text"
          id="Apellido"
          name="Apellido"
          required=""
          className="input"
          {...register("apellido", {
            required: true,
          })}
        />{" "}
        {errors.apellido?.type === "required" && (
          <p className="text-danger">El campo apellido es requerido</p>
        )}
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required=""
          className="input"
          {...register("email", {
            required: true,
          })}
        />{" "}
        {errors.email?.type === "required" && (
          <p className="text-danger">El campo email es requerido</p>
        )}
        <label htmlFor="Contraseña" className="label">
          Contraseña
        </label>
        <input
          type="Contraseña"
          id="Contraseña"
          name="Contraseña"
          required=""
          className="input"
          {...register("contraseña", {
            required: true,
          })}
        />{" "}
        {errors.contraseña?.type === "required" && (
          <p className="text-danger">El campo contraseña es requerido</p>
        )}
        <label htmlFor="floatingPassword">Confirmar Contraseña</label>
        <input
          type="password"
          placeholder="Reingrese su contraseña"
          className="input"
          {...register(
            "contrasenacheck",
            {
              required: true,
              validate: (value) =>
                value === watch("contraseña", "")
                  ? true
                  : "Las contraseñas no coinciden",
            },
            { shouldUnregister: true }
          )}
        />
        {errors.contrasenacheck?.type === "required" && (
          <p className="text-danger">
            El campo confirmar contraseña es requerido
          </p>
        )}
        {errors.contrasenacheck?.message && (
          <p className="text-danger">{errors.contrasenacheck.message}</p>
        )}
        <button type="submit" className="submit mt-5">
          Crea tu cuenta
        </button>
      </form>
    </div>
  );
};

export default SignUp;
