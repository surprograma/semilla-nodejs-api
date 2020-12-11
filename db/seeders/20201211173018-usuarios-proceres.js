'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Usuarios', [
      { nombre: 'Juana Azurduy', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'José Artigas', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Simón Bolívar', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Usuarios', null, {});
  }
};
