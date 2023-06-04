const { Usuario } = require("../../db");
const { hash } = require("../hashContraseñas");

const loginController = async ({ email, contraseña }) => {
  let user = null;
  const hashedPassword = hash(contraseña);
  user = await Usuario.findOne({
    where: {
      email: email,
      contraseña: hashedPassword,
    },
  });
  if (user) return { ...user.dataValues };
  throw new Error("No existe el usuario");
};

module.exports = {
  loginController,
};
