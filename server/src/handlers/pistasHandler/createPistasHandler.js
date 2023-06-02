const {
  createPistasController,
} = require("../../controllers/pistas/createPistasController");

const createPistasHandler = async (req, res) => {
  const { nombre, autor } = req.body;

  try {
    const response = await createPistasController(nombre, autor);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createPistasHandler,
};
