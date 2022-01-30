require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const Sequelize = require("sequelize");
const router = require("./router/index");

const sequelize = new Sequelize("KanbanDB", "sa", "evgeniya12345678", {
  dialect: "mssql",
  host: "localhost",
  port: "1433",
});

require("./models")(sequelize);

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/api", router);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server started on PORT ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
