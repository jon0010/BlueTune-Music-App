const {
  getAllUsuario,
} = require("../controllers/usuarios/getAllUsuarioController");

const handlerAllUsuario = async (req, res) => {
  const { nombre, apellido, email, contraseña } = req.query;
  try {
    const response = await getAllUsuario(nombre, apellido, email, contraseña);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  handlerAllUsuario,
};
