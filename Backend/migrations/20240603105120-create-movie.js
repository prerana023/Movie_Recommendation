'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      overview: {
        type: Sequelize.TEXT
      },
      release_date: {
        type: Sequelize.DATE
      },
      popularity: {
        type: Sequelize.FLOAT
      },
      vote_average: {
        type: Sequelize.FLOAT
      },
      vote_count: {
        type: Sequelize.INTEGER
      },
      backdrop_path: {
        type: Sequelize.STRING
      },
      poster_path: {
        type: Sequelize.STRING
      },
      genre_ids: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Movies');
  }
};