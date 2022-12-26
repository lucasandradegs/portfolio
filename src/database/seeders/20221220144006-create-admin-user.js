'use strict';

const bcrypt = require('bcrypt')

module.exports = {
  async up (queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('123456', 10)

    await queryInterface.bulkInsert('users', [
      {
        first_name: 'Lucas',
        last_name: 'Andrade',
        phone: '31984702550',
        birth: '2001-02-16',
        email: 'admin@email.com',
        password: hashedPassword,
        role: 'admin',
        created_at: new Date(),
        updated_at: new Date()
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, { where: { email: 'admin@email.com' } })
  }
};
