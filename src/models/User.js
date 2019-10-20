//model = ele é a representacao de como a aplicação irá se comunicar com o db

const { Model, DataTypes } = require('sequelize'); //importanto o Model

class User extends Model{ //
    static init(sequelize){ //metodo init estático - padrão do sequelize - para receber a base de dados
        super.init({ //passar os campos da tabela - Não é necessário passar ID
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        },{
            sequelize
        })
    }

    static associate(models){ //informar a relacao - Usario tem muitos endereços
        this.hasMany(models.Address, {foreignKey: 'user_id', as: 'addresses'});
        this.belongsToMany(models.Tech, {foreignKey: 'user_id', through: 'user_techs', as: 'techs'}); //tech é o relacionamento

    }
}

module.exports = User;