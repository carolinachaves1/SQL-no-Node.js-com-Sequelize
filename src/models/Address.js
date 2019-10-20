//model = ele é a representacao de como a aplicação irá se comunicar com o db

const { Model, DataTypes } = require('sequelize'); //importanto o Model

class Address extends Model{ //
    static init(sequelize){ //metodo init estático - padrão do sequelize - para receber a base de dados
        super.init({ //passar os campos da tabela - Não é necessário passar ID
            zipcode: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.INTEGER,
        },{
            sequelize
        })
    }

    static associate(models){ //criar o relacionamento entre as tabelas
        this.belongsTo(models.User, {foreignKey: 'user_id', as: 'user'}); //as nome do relacionamento
    }

    //belongsToMany = relacionamento N:M
}

module.exports = Address;