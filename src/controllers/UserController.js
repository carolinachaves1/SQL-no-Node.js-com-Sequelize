const User = require('../models/User');

module.exports = {
    async index(req, res){ 
        const users = await User.findAll(); //metodo para buscar todos os usuários
        return res.json(users);
    },
    async store(req, res){
        const {name, email} = req.body;

        const user = await User.create({ name, email }); //espera a instrucao acima para executar esta
        return res.json(user);
    }
};