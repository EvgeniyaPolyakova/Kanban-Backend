const { DataTypes } = require("sequelize");

const Comment = (sequelize) =>
  sequelize.define(
    "Comment",
    {
      text: { type: DataTypes.STRING, allowNull: false },
    },
    {
      tableName: "Comments",
    }
  );

module.exports = Comment;
