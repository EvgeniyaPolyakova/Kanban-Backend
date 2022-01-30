const { DataTypes } = require("sequelize");

const Card = (sequelize) =>
  sequelize.define(
    "Card",
    {
      title: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING, allowNull: true },
      deadline: { type: DataTypes.DATE, allowNull: true },
    },
    {
      tableName: "Cards",
    }
  );

module.exports = Card;
