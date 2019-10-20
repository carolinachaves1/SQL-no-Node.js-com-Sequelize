'use strict';

//metodo up: o que a migration irá realizar no bd
//metodo down: o que a migration irá desfazer no bd

//os tipos de dados está na documentacao do sequelize - Datatypes

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('users', { 
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false, //not null
        },
        name:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        email:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        created_at:{
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('users');
  }
};
