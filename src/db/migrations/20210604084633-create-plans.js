'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('plans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      requester: {
        type: Sequelize.INTEGER
      },
      responsible: {
        type: Sequelize.INTEGER
      },
      problem: {
        type: Sequelize.STRING
      },
      start_date: {
        type: Sequelize.DATE
      },
      prev_end_date: {
        type: Sequelize.DATE
      },
      sector_name: {
        type: Sequelize.STRING
      },
      local_name: {
        type: Sequelize.STRING
      },
      finished_date: {
        type: Sequelize.DATE
      },
      acao: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('plans')
  }
}
