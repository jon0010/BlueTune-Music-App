const { Router } = require("express");
const { usuarioRouter } = require("./usuarioRoute");
const { pistasRouter } = require("./pistasRoute");
const { loginRouter } = require("./loginRoute");

// Importar todos los routers;

const mainRouter = Router();

// Configurar los routers

mainRouter.use("/usuario", usuarioRouter);
mainRouter.use("/pistas", pistasRouter);
mainRouter.use("/login", loginRouter);

module.exports = {
  mainRouter,
};
