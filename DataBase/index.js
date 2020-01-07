const Sequelize = require("sequelize");
const dbconfig = require('../Config');

const products =  require('../Models/Products');

const conn = new Sequelize(dbconfig);

products.init(conn);

module.exports = conn;