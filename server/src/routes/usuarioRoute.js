const { Router } = require("express");
const { handlerAllUsuario } = require("../handlers/usuarioHandler");

const usuarioRouter = Router();

usuarioRouter.get("/", handlerAllUsuario);
usuarioRouter.post("/", handlerAllUsuario);
usuarioRouter.put("/", handlerAllUsuario);

module.exports = {
  pacientsRoutes,
};
