const { loginController } = require("../../controllers/login/index");

const loginHandler = async (req, res) => {
  const { email, contraseña } = req.body;
  try {
    const response = await loginController({ email, contraseña });
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  loginHandler,
};
