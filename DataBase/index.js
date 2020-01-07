const Sequelize = require("sequelize");
const dbconfig = require('../Config');

const products =  require('../Models/Products');
const clients =  require('../Models/Clients');
const transactions =  require('../Models/Transactions');

const conn = new Sequelize(dbconfig);

products.init(conn);
clients.init(conn);
transactions.init(conn);

clients.associate(conn.models)
transactions.associate(conn.models)

module.exports = conn;