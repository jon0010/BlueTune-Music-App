const { getLista } = require("../controllers/listaDeReproduccionController");

const ListaDeReproduccionHandler = async (req, res) => {
  const { nombre } = req.query;
  try {
    const response = await getLista(nombre);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  ListaDeReproduccionHandler,
};
