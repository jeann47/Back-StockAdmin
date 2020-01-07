const express = require('express')

const route = express.Router()

const HandleProducts = require('./Controllers/HandleProducts')

route.post('/add', HandleProducts.add)

module.exports = route
