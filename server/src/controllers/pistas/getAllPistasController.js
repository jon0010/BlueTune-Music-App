const { Pistas } = require("../../db");

const getAllPistasController = async () => {
  const response = await Pistas.findAll({});
  return response;
};

module.exports = { getAllPistasController };
