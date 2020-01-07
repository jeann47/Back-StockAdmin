'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('products', { 

        id: 
        {
             type: Sequelize.INTEGER,
             primaryKey: true,
             autoIncrement: true,
             allowNull: false,
        },
        name:
        {
            type: Sequelize.STRING,
            allowNull: false,
        },
        ammount:
        {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        price:
        {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        type:
        {
            type: Sequelize.STRING,
            allowNull: false,
        },
        ready:
        {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        createdAt:
        {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updatedAt: 
        {
          type: Sequelize.DATE,
          allowNull: false,
        }
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('products');
    }
};
 