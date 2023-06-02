const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("listaDeReproduccion", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    Pistas: {
      type: DataTypes.JSONB,
      defaultValue: [], // [{pista1, pista2}]
    },
  });
};
