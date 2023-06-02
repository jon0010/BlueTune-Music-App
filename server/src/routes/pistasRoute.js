const { Router } = require("express");
const { handlerAllPistas } = require("../handlers/pistasHandler");

const pistasRouter = Router();

pistasRouter.get("/", handlerAllPistas);
pistasRouter.post("/", handlerAllPistas);
pistasRouter.put("/", handlerAllPistas);

module.exports = {
  pistasRouter,
};
