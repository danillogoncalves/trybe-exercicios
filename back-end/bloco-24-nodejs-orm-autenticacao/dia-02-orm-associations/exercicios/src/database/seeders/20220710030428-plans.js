'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    queryInterface.bulkInsert('plans',
      [
        {
          coverage: 'Total',
          price: 549.99,
        },
        {
          coverage: 'Partial',
          price: 349.99,
        },
        {
          coverage: 'Emergencies only',
          price: 109.99,
        },
        {
          coverage: 'Family',
          price: 949.99,
        },
      ],
      {});
  },

  down: async (queryInterface, _Sequelize) => {
    queryInterface.bulkDelete('plans', null, {});
  },
};
