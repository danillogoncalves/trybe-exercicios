'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const Patients = await queryInterface.createTable('patients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fullname: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      planId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'plans',
          key: 'id',
        },
        field: 'plan_id',
        onDelete: 'CASCADE',
      },
    });

    return Patients;
  },

  down: (queryInterface, _Sequelize) => queryInterface.dropTable('patients'),
};
