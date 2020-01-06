const Sequelize = require("sequelize");
const dbconfig = require('../Config');

const conn = new Sequelize(dbconfig);

module.exports = conn;