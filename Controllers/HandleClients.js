const clients = require('../Models/Clients')

module.exports = {

    async add(req, res) {
        let { name, phone, email } = req.body
        const data = await clients.create( { name, phone, email } )
        return res.json(data)
    },

    async all(req, res) {
        const data = await clients.findAll()
        return res.json(data)
    },

    async findByName(req, res) {
        const {name} = req.body
        const data = await clients.findOne({where: {name}})
        return res.json(data)
    },
    async findTransactions(req, res) {
        const {clientId} = req.body

        const data = await clients.findByPk(clientId , {
            include: {association: 'transactions'}
        })
        return res.json(data)
    },

    async change(req, res) {
        const {name, newName, phone, email} = req.body
        let data = null
        if(newName)
        {
            data = clients.update({name: newName}, {where: {name}})
        }
        if(phone)
        {
            data = clients.update({phone}, {where: {name}})
        }
        if(email)
        {
            data = clients.update({email}, {where: {name}})
        }
        return res.json(data)
    },

    async delete(req, res) {
        const {name} = req.body
        const data = await clients.findOne({where: name})
        data.destroy()
        return res.json(data)
    }
}