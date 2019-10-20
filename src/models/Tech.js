//model = ele é a representacao de como a aplicação irá se comunicar com o db

const { Model, DataTypes } = require('sequelize'); //importanto o Model

class Tech extends Model{ //
    static init(sequelize){ //metodo init estático - padrão do sequelize - para receber a base de dados
        super.init({ //passar os campos da tabela - Não é necessário passar ID
            name: DataTypes.STRING,
        },{
            sequelize,
            
            tableName: 'techs', //necessário usasr o tableName para formar o sequelize a nao fazer a pluralizacao
        })
    }

    static associate(models){ //criar o relacionamento entre as tabelas
        this.belongsToMany(models.User, {foreignKey: 'tech_id', through: 'user_techs', as: 'users'}); //as é nome do relacionamento
    }

    //through: qual o nome da tabela que irá relacionar usuários com tecnologia

    //belongsToMany = relacionamento N:M
}

module.exports = Tech;

//UnhandledPromiseRejectionWarning: SequelizeDatabaseError: relation "teches" does not exist
//sequelize tenta fazer a pluralização dos Models