'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    const Surgeries = queryInterface.bulkInsert('surgeries',
      [
        {
          specialty: 'Apendicectomia',
          doctor: 'Rey Dos Santos',
        },
        {
          specialty: 'Cistectomia',
          doctor: 'Marcos Afonso',
        },

        {
          specialty: 'Colecistectomia',
          doctor: 'Iuri Solto',
        },
        {
          specialty: 'Craniectomia',
          doctor: 'Marilene Tobias',
        },
        {
          specialty: 'Gastrorrafia',
          doctor: 'Joana Machado',
        },
        {
          specialty: 'Herniorrafia',
          doctor: 'Lincoln Mathias',
        },
        {
          specialty: 'Hisperopexia',
          doctor: 'Alessandra Martins',
        },
        {
          specialty: 'Cistoscopia',
          doctor: 'Adailton Rodrigues',
        },
      ],
      {});

    return Surgeries;
  },

  down: async (queryInterface, _Sequelize) => {
    queryInterface.bulkDelete('surgeries', null, {});
  },
};
