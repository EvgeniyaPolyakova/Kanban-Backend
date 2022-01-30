const { DataTypes } = require("sequelize");

const Column = (sequelize) =>
  sequelize.define(
    "Column",
    {
      name: { type: DataTypes.STRING, allowNull: false },
      number: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      tableName: "Columns",
    }
  );

module.exports = Column;
