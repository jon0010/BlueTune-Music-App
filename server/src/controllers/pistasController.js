const { Pistas } = require("../db");

const getAllPistas = async () => {
  const response = await Pistas.findAll({});
  return response;
};

module.exports = { getAllPistas };
