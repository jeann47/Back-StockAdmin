const { Model, DataTypes } = require('sequelize')

class transactions extends Model {
    static init (sequelize) {
        super.init(
        {
            value: DataTypes.FLOAT,
            products: DataTypes.ARRAY(DataTypes.STRING),
        },
        {sequelize}
        )
    }
    static associate(models) {
        this.belongsTo(models.clients, {foreignKey: 'clientId', as: 'clients'})
    }
}

module.exports = transactions