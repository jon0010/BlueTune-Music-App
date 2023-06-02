const { listaDeReproduccion } = require("../../db.js");

const getLista = async () => {
  const response = await listaDeReproduccion.findAll({});
  return response;
};

module.exports = { getLista };
