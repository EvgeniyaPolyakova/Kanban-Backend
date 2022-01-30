const { DataTypes } = require("sequelize");

const User = (sequelize) =>
  sequelize.define(
    "User",
    {
      name: { type: DataTypes.STRING, allowNull: false },
      surname: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false },
      token: { type: DataTypes.STRING, allowNull: true },
    },
    {
      tableName: "Users",
    }
  );

module.exports = User;
