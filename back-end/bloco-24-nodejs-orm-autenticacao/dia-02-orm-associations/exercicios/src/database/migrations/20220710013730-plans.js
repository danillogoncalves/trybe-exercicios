'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const Plans = await queryInterface.createTable('plans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      coverage: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      price: {
        allowNull: false,
        type: Sequelize.DOUBLE,
      },
    });

    return Plans;
  },

  down: (queryInterface, _Sequelize) => queryInterface.dropTable('plans'),
};
