const { DataTypes } = require("sequelize");

const Checklist = (sequelize) =>
  sequelize.define(
    "Checklist",
    {
      task: { type: DataTypes.STRING, allowNull: false },
      is_checked: { type: DataTypes.BOOLEAN, allowNull: false },
    },
    {
      tableName: "Checklists",
    }
  );

module.exports = Checklist;
