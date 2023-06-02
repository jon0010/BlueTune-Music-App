const { getAllPistas } = require("../controllers/PistasController");

const handlerAllPistas = async (req, res) => {
  const { nombre, autor } = req.query;
  try {
    const response = await getAllPistas(nombre, autor);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  handlerAllPistas,
};
