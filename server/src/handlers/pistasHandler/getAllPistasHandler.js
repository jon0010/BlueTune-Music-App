const {
  getAllPistasController,
} = require("../../controllers/pistas/getAllPistasController");

const getAllPistasHandler = async (req, res) => {
  const { nombre, autor } = req.query;
  try {
    const response = await getAllPistasController(nombre, autor);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllPistasHandler,
};
