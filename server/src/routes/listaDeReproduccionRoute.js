const { Router } = require("express");
const {
  ListaDeReproduccionHandler,
} = require("../handlers/listaDeReproduccionHandler");

const listaDeReproduccionRouter = Router();

listaDeReproduccionRouter.get("/", ListaDeReproduccionHandler);
listaDeReproduccionRouter.post("/", ListaDeReproduccionHandler);
listaDeReproduccionRouter.put("/", ListaDeReproduccionHandler);

module.exports = {
  listaDeReproduccionRouter,
};
