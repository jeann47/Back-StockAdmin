'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('transactions', { 
        id: 
        {
             type: Sequelize.INTEGER,
             primaryKey: true,
             autoIncrement: true,
             allowNull: false,
        },
        value:
        {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        clientId:
        {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: { model: 'client', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        products:
        {
          type: Sequelize.ARRAY(Sequelize.STRING),
          allowNull: false
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
      return queryInterface.dropTable('transactions');
  }
};
