const { DataTypes } = require("sequelize");

const Position = (sequelize) =>
  sequelize.define(
    "Position",
    {
      name: { type: DataTypes.STRING, allowNull: false },
    },
    {
      tableName: "Positions",
    }
  );

module.exports = Position;
