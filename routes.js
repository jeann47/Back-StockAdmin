const express = require('express')

const route = express.Router()

const HandleProducts = require('./Controllers/HandleProducts')
const HandleClients = require('./Controllers/HandleClients')
const HandleTransactions = require('./Controllers/HandleTransactions')



/* CLIENTS */

////////////////////POST////////////////////
route.post('/clients/add', HandleClients.add)


////////////////////GET////////////////////
route.get('/clients', HandleClients.all)
route.get('/clients/name', HandleClients.findByName)
route.get('/clients/transactions', HandleClients.findTransactions)

////////////////////PUT////////////////////
route.put('/clients/update', HandleClients.change)

////////////////////DELETE////////////////////
route.delete('/clients/delete', HandleClients.delete)


/* PRODUCTS */

////////////////////POST////////////////////
route.post('/products/add', HandleProducts.add)
route.post('/products/id', HandleProducts.findById)

////////////////////GET////////////////////
route.get('/products', HandleProducts.all)
route.get('/products/name', HandleProducts.findByName)
route.get('/products/type', HandleProducts.findByType)
route.get('/products/ready', HandleProducts.findByWeight)

////////////////////PUT////////////////////
route.put('/products/update', HandleProducts.change)

////////////////////DELETE////////////////////
route.delete('/products/delete', HandleProducts.delete)

/* TRANSACTIONS */

////////////////////POST////////////////////
route.post('/transactions/add', HandleTransactions.add)

////////////////////GET////////////////////
route.get('/transactions', HandleTransactions.all)
route.get('/transactions/client', HandleTransactions.findByClient)
route.get('/transactions/date', HandleTransactions.findByDate)
route.get('/transactions/value', HandleTransactions.findByValue)
route.get('/transactions/product', HandleTransactions.findByProduct)

////////////////////PUT////////////////////
route.put('/transactions/update', HandleTransactions.change)

////////////////////DELETE////////////////////
route.delete('/transactions/delete', HandleTransactions.delete)


module.exports = route
