const products = require('../Models/Products');
const sequelize = require('sequelize');

module.exports = {

    async add(req, res) { //used to add data into db
        let { name, ammount, price, sellPrice, type, ready } = req.body;
        if(!ready) ready = 0;
        if(!ammount) ammount = 0;
        const product = await products.create( { name, ammount, price, sellPrice, type, ready } );
        return res.json(product);
    },
    async all(req, res) { //return all data as a plain json
        const data = await products.findAll()//.map(found => found.get({ plain: true }))
        return res.json(data)
    },
    async findById(req, res) { //return the product who match the id param //used as post just for testing reasons
        const {id} = req.body;
        const data = await products.findOne({where: id})
        return res.json(data)
    },
    async findByName(req, res) { //return the product who match the name param
        const {name} = req.body
        const data = await products.findOne({where: {name}})
        return res.json(data)
    },
    async findByType(req, res) {
        const {type} = req.body
        console.log(type)
        const data = await products.findAll({where: {type}})
        return res.json(data)
    },
    async findByWeight(req, res) {
        const {weight} = req.body
        const data = await products.findAll({
            where: {
                ready: { [sequelize.Op.gte]: weight }
            }})
        return res.json(data)
    }
}