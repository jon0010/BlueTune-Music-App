const {
  createUsuarioController,
} = require("../../controllers/usuarios/createUsuarioController");

const createUsuarioHandler = async (req, res) => {
  const { nombre, apellido, email, contraseña } = req.body;

  try {
    const response = await createUsuarioController(
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
  createUsuarioHandler,
};
