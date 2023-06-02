const { Router } = require("express");
const {
  listaDeReproduccionRouter,
} = require("../routes/listaDeReproduccionRoute");
const { usuarioRouter } = require("./usuarioRoute");
const { pistasRouter } = require("./pistasRoute");
const { loginRouter } = require("./loginRoute");

// Importar todos los routers;

const mainRouter = Router();

// Configurar los routers

mainRouter.use("/usuario", usuarioRouter);
mainRouter.use("/pistas", pistasRouter);
mainRouter.use("/listadereproduccion", listaDeReproduccionRouter);
mainRouter.use("/login", loginRouter);

module.exports = mainRouter;
