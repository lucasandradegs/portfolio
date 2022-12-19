'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const [categories] = await queryInterface.sequelize.query('SELECT id FROM categories;')
    
    await queryInterface.bulkInsert('projects', [
      { name: 'Programador Full-stack Javascript', synopsis: 'Curso programador FullStack JavaScript na OneBitCode', featured: true, category_id: categories[0].id, created_at: new Date(), updated_at: new Date() },
      { name: 'Sistema de Automatização de Certificação', synopsis: 'Sistema para automatizar o processo de certificação de uma faculdade de pós graduação', featured: true, category_id: categories[1].id, created_at: new Date(), updated_at: new Date() },
      { name: 'Tela de Login em JavaScript', synopsis: 'Tela de login com cadastro em JavaScript', category_id: categories[0].id, created_at: new Date(), updated_at: new Date() },   
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('projects', null, {})
  }
};
