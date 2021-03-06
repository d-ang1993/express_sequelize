const Sequelize = require("sequelize");

// Option 1: Passing parameters separately
const db = new Sequelize("psql_sequelize", "test_user", "12345", {
  host: "localhost",
  dialect: "postgres",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = db;
