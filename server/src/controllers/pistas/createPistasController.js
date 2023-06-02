const { Pistas } = require("../../db");
const { hash } = require("../hashContraseñas");

const createPistasController = async (nombre, autor) => {
  const allPistas = await allPistas();

  if (!nombre || !autor) throw new Error("hubo un error");

  const validate = allPistas.filter((e) => e.email === email);
  if (validate.length) throw new Error("Ya existe una pista igual");
  if (!validate.length) {
    const newPista = await Pistas.create({
      nombre: nombre,
      autor: autor,
    });

    return "Pista agregada correctamente";
  }
};

module.exports = {
  createPistasController,
};
