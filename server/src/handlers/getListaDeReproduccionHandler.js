const {
  getListaReproduccionController,
} = require("../controllers/getListaReproduccionController");

const getListaDeReproduccionHandler = async (req, res) => {
  const { nombre, pistas } = req.query;
  try {
    const response = await getListaReproduccionController(nombre, pistas);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getListaDeReproduccionHandler,
};
