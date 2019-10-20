const { Op } = require('sequelize'); //importar os operadores do sequelize
const User = require('../models/User');

module.exports = {
    async show(req, res){
        //Encontrar todos os usuários que tem email que termina com @gmail
        //Destes usuários, buscar todos que moram na Rua Água
        //Destes usuário, buscar as tecnolgias que começam com React -> Não é considerado um filtro

        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: { 
                email: {
                    [Op.iLike]: '%@gmail.com' //Op.ilike é uma variável
                } //operadores -> Verificar documentação sequelize
            },
            include: [ //relacionamento - precisa ser um array
                {association: 'addresses', where: {street: 'Rua A'}}, 
                {association: 'techs',
                required: false, //left join
                where:{
                    name: { 
                        [Op.iLike]: 'React%'
                    }
                }}
            ] 
        })

        return res.json(users);


    }
};