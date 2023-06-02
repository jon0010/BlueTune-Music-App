const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Usuario",
    {
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
      apellido: {
        type: DataTypes.STRING(),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(),
        allowNull: false,
      },
      contraseña: {
        type: DataTypes.STRING(),
        allowNull: false,
      },
    },

    { timestamps: false }
  );
};
