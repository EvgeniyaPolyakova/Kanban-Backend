const { DataTypes } = require("sequelize");

const File = (sequelize) =>
  sequelize.define(
    "File",
    {
      file_name: { type: DataTypes.STRING, allowNull: false },
      data: { type: DataTypes.STRING.BINARY, allowNull: false },
    },
    {
      tableName: "Files",
    }
  );

module.exports = File;
