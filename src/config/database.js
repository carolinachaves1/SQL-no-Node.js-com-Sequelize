module.exports = { //exportar as configurações
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '1234',
    database: 'sequelize',
    define:{
        timestamps: true, //configurar que automaticamente crie os campos created_at e update_at
        underscored: true, //definir que o nome das colunas será no formado user_group e não UserGroup (padrão sequelize)
        
    },

};