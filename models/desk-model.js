const { DataTypes } = require("sequelize");

const Desk = (sequelize) =>
  sequelize.define(
    "Desk",
    {
      name: { type: DataTypes.STRING, allowNull: false },
    },
    {
      tableName: "Desks",
    }
  );

module.exports = Desk;
