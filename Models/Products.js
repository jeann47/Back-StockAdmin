const { Model, DataTypes } = require('sequelize')

class products extends Model {
    static init (sequelize) {
        super.init(
        {
            name: DataTypes.STRING,
            ammount: DataTypes.FLOAT,
            price: DataTypes.FLOAT,
            sellPrice: DataTypes.FLOAT,
            type: DataTypes.STRING,
            ready: DataTypes.FLOAT,
        },
        {sequelize}
        )
    }
}

module.exports = products