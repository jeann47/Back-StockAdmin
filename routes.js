const express = require('express')

const route = express.Router()

const HandleProducts = require('./Controllers/HandleProducts')


////////////////////POST////////////////////
route.post('/add', HandleProducts.add)
route.post('/id', HandleProducts.findById)

////////////////////GET////////////////////
route.get('/all', HandleProducts.all)
route.get('/name', HandleProducts.findByName)
route.get('/type', HandleProducts.findByType)
route.get('/ready', HandleProducts.findByWeight)

module.exports = route
