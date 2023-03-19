const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("Awstest", "admin", "Vamshi111047", {
  host: "database-1.crgivcsnvovm.us-east-1.rds.amazonaws.com",
  dialect: "mysql",
});



module.exports = { sequelize };
