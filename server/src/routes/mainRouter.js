const { Router } = require("express");
const {
  listaDeReproduccionRoute,
} = require("../routes/listaDeReproduccionRoute");
const { usuarioRoute } = require("./usuarioRoute");
const { pistasRoute } = require("./pistasRoute");
const { loginRoute } = require("./loginRoute");

// Importar todos los routers;

const mainRouter = Router();

// Configurar los routers

mainRouter.use("/usuario", usuarioRoute);
mainRouter.use("/pistas", pistasRoute);
mainRouter.use("/listadereproduccion", listaDeReproduccionRoute);
mainRouter.use("/login", loginRoute);

module.exports = mainRouter;
