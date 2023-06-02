const { Router } = require("express");
const {
  getListaDeReproduccionHandler,
} = require("../handlers/getListaDeReproduccionHandler");

const listaDeReproduccionRouter = Router();

listaDeReproduccionRouter.get("/", getListaDeReproduccionHandler);
listaDeReproduccionRouter.post("/", getListaDeReproduccionHandler);
listaDeReproduccionRouter.put("/", getListaDeReproduccionHandler);

module.exports = {
  listaDeReproduccionRouter,
};
