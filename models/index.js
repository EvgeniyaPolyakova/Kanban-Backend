const defineModels = (sequelize) => {
  const User = require("./user-model")(sequelize);
  const Desk = require("./desk-model")(sequelize);
  const Position = require("./position-model")(sequelize);
  const Comment = require("./comment-model")(sequelize);
  const Card = require("./card-model")(sequelize);
  const Column = require("./column-model")(sequelize);
  const Checklist = require("./checklist-model")(sequelize);
  const File = require("./file-model")(sequelize);

  const UserDesk = sequelize.define(
    "UserDesk",
    {},
    {
      tableName: "User_Desk",
    }
  );

  User.belongsToMany(Desk, {
    through: UserDesk,
    as: "desks",
    foreignKey: "id_desk",
  });

  Desk.belongsToMany(User, {
    through: UserDesk,
    as: "users",
    foreignKey: "id_user",
  });

  Position.hasOne(UserDesk, { foreignKey: "id_position" });

  User.hasMany(Comment, { foreignKey: "id_user" });

  Card.hasMany(Comment, { foreignKey: "id_card" });

  Column.hasMany(Card, { foreignKey: "id_column" });

  Desk.hasMany(Column, { foreignKey: "id_desk" });

  User.hasMany(Card, { foreignKey: "id_user" });

  User.hasMany(Card, { foreignKey: "id_executor" });

  Card.hasMany(Checklist, { foreignKey: "id_card" });

  Card.hasMany(File, { foreignKey: "id_card" });
};

module.exports = defineModels;
