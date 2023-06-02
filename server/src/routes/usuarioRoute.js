const { Router } = require("express");
const {
  getAllUsuarioHandler,
} = require("../handlers/usuarioHandler/getAllUsuarioHandler");
const {
  createUsuarioHandler,
} = require("../handlers/usuarioHandler/createUsuarioHandler");

const usuarioRouter = Router();

usuarioRouter.get("/", getAllUsuarioHandler);
usuarioRouter.post("/", createUsuarioHandler);
usuarioRouter.put("/", handlerAllUsuario);

module.exports = {
  usuarioRouter,
};
