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
        <button type="submit" className="submit">
          Crea tu cuenta
        </button>
        <p className="text-center mt-4 mb-0">O Accede con:</p>
        <button className="botongoogle mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
            viewBox="0 0 256 262"
          >
            <path
              fill="#4285F4"
              d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
            ></path>
            <path
              fill="#34A853"
              d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
            ></path>
            <path
              fill="#FBBC05"
              d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
            ></path>
            <path
              fill="#EB4335"
              d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
            ></path>
          </svg>
          Registra tu cuenta con Google
        </button>
      </form>
    </div>
  );
};

export default SignUp;
