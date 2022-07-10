'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const PatientSurgeries = await queryInterface.createTable('patient_surgeries', {
      patientId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'patients',
          key: 'id',
        },
        field: 'patient_id',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      surgeryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'surgeries',
          key: 'id',
        },
        field: 'surgery_id',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
    });

    return PatientSurgeries;
  },

  down: (queryInterface, _Sequelize) => queryInterface.dropTable('patient_surgeries'),
};
