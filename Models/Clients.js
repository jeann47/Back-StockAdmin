const { Model, DataTypes } = require('sequelize')

class clients extends Model {
    static init (sequelize) {
        super.init(
        {
            name: DataTypes.STRING,
            phone: DataTypes.STRING,
            email: DataTypes.STRING,
        },
        {sequelize}
        )
    }

    static associate(models) {
        this.hasMany(models.transactions, {foreignKey: 'clientId', as: 'transactions'})
    }
}

module.exports = clients