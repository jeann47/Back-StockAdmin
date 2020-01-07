'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('client', { 
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
        phone:
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
        email:
        {
          type: Sequelize.STRING,
          allowNull: true,
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
      return queryInterface.dropTable('client');
  }
};
