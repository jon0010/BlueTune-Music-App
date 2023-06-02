const { ListaDeReproduccion } = require("../../db.js");

const getListaReproduccionController = async () => {
  const { nombre, pistas } = req.query;
  const response = await ListaDeReproduccion.findAll({
    where: {
      nombre: nombre,
      pistas: pistas,
    },
  });
  return response;
};

module.exports = {
  getListaReproduccionController,
};
