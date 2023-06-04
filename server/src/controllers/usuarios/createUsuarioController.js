const { Usuario } = require("../../db");
const { hash } = require("../hashContraseñas.js");
const { getAllUsuarioController } = require("./getAllUsuarioController");

const createUsuarioController = async (nombre, apellido, email, contraseña) => {
  if (!nombre || !apellido || !email || !contraseña)
    throw new Error("Falta informacion requerida");
  const validateUsuario = await getAllUsuarioController();
  const validate = validateUsuario.filter((e) => e.email === email);
  if (validate.length) throw new Error("Ya existe un usuario con ese email");
  if (!validate.length) {
    const newUsuario = await Usuario.create({
      nombre: nombre,
      apellido: apellido,
      email: email,
      contraseña: hash(contraseña),
    });

    return "Usuario creado correctamente";
  }
};

module.exports = {
  createUsuarioController,
};
