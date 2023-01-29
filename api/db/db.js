const Sequelize = require("sequelize");
const sequelize = new Sequelize("dracdo", "root", "gamemode", {
    dialect: "mysql",
    host: "localhost",
});

module.exports = sequelize;
