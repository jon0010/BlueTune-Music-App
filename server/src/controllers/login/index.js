const { Usuario } = require("../../db");
const { Op } = require("sequelize");
const { hash } = require("../hashContraseñas");

const loginController = async ({ nombre, apellido, email, contraseña }) => {
  let user = null;
  contraseña = hash(contraseña);
  user = await Usuario.findOne({
    where: {
      contraseña,
      [Op.or]: [{ nombre: Usuario }, { email: Usuario }],
    },
  });
  if (!user) {
    throw new Error("No existe el usuario");
  }
  return { ...user.dataValues };
};

module.exports = {
  loginController,
};
