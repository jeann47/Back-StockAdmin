const transactions = require('../Models/Transactions')
const Sequelize = require('sequelize')

module.exports = {

    async add(req, res) {
        const {value, products, clientId} = req.body
        const data = await transactions.create({value, products, clientId})
        return res.json(data)
    },

    async all(req, res) {
        const data = await transactions.findAll()
        return res.json(data)
    },

    async findByClient(req, res) {
        const {clientId} = req.body
        const data = await transactions.findAll({where: {clientId}})
        return res.json(data)
    },
    async findByDate(req, res) {
        const {date} = req.body
        const data = await findAll({where: {
            createdAt: {
                [Sequelize.Op.substring]: date
            }
        }})
        return res.json(data)
    },
    async findByValue(req, res) {
        const {value} = req.body
        const data = await transactions.findAll({where: {
            value: {
                [Sequelize.Op.gte]: value
            }
        }})
        return res.json(data)
    },
    async findByProduct(req, res) {
        const {product} = req.body
        const data = await transactions.findAll({where: {
            products: {
                [Sequelize.Op.contains]: product
            }
        }})
        return res.json(data)
    },

    async change(req, res) {
        const {value, products, clientId, id} = req.body
        let data = null

        if(value)
        {
            data = await transactions.update({value}, {where: {id}})
        }
        if(products)
        {
            data = await transactions.update({products}, {where: {id}})
        }if(clientId)
        {
            data = await transactions.update({clientId}, {where: {id}})
        }
        return res.json(data)
    },

    async delete(req, res) {
        const {id} = req.body
        const data = await transactions.findByPk(id)
        data.destroy()
        return res.json(data)
    }
}