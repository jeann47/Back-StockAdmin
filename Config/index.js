const SECRET = require('./SECRET')

module.exports = {
    username: 'jeans',  
    password: SECRET,  
    database: 'stock',  
    host: 'localhost',  
    dialect: 'postgres',
    define: {timestamps: true}
}