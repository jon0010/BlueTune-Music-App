const { Router } = require("express");
const {
  getAllPistasHandler,
} = require("../handlers/pistasHandler/getAllPistasHandler");
const {
  createPistasHandler,
} = require("../handlers/pistasHandler/createPistasHandler");

const pistasRouter = Router();

pistasRouter.get("/", getAllPistasHandler);
pistasRouter.post("/", createPistasHandler);

module.exports = {
  pistasRouter,
};
