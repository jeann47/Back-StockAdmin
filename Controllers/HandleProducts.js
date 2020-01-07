const products = require('../Models/Products');
const sequelize = require('sequelize');

module.exports = {

    async add(req, res) { //used to add data into db
        let { name, ammount, price, type, ready } = req.body;
        if(!ready) ready = 0;
        if(!ammount) ammount = 0;
        const product = await products.create( { name, ammount, price, type, ready } );
        return res.json(product);
    }
}