const { Usuario } = require("../../db");

const getAllUsuarioController = async () => {
  const response = await Usuario.findAll({});
  return response;
};

module.exports = { getAllUsuarioController };
