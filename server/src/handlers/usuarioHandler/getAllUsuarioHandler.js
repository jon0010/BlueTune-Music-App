const {
  getAllUsuarioController,
} = require("../../controllers/usuarios/getAllUsuarioController");

const getAllUsuarioHandler = async (req, res) => {
  const { nombre, apellido, email, contraseña } = req.query;
  try {
    const response = await getAllUsuarioController(
      nombre,
      apellido,
      email,
      contraseña
    );
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllUsuarioHandler,
};
