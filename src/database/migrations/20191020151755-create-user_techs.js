'use strict';

//metodo up: o que a migration irá realizar no bd
//metodo down: o que a migration irá desfazer no bd

//os tipos de dados está na documentacao do sequelize - Datatypes

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('user_techs', { 
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false, //not null
        },
        user_id:{ //campo para criar o relacionamento
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {model: 'users', key: 'id'}, //referencia uma outra tabela - chave estrangeira
          onUpdate: 'CASCADE', //refletir ações na tabela filha
          onDelete: 'CASCADE',
        },
        tech_id:{ //campo para criar o relacionamento
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {model: 'techs', key: 'id'}, //referencia uma outra tabela - chave estrangeira
          onUpdate: 'CASCADE', //refletir ações na tabela filha
          onDelete: 'CASCADE',
        },
        name:{
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
      return queryInterface.dropTable('user_techs');
  }
};
