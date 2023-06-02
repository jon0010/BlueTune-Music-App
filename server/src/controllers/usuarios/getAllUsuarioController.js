const { Usuario } = require("../../db");

const getAllUsuario = async () => {
  const response = await Usuario.findAll({});
  return response;
};

module.exports = { getAllUsuario };
