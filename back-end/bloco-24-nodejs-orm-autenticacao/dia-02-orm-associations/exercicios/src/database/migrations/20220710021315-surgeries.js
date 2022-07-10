'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const Surgeries = await queryInterface.createTable('surgeries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      specialty: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      doctor: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });

    return Surgeries;
  },

  down: async (queryInterface, _Sequelize) => queryInterface.dropTable('surgeries'),
};
