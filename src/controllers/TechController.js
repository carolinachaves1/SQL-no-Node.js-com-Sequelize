const User = require('../models/User');
const Tech = require('../models/Tech');


module.exports = {
    async index(req, res){
       const { user_id } = req.params;
       const user = await User.findByPk(user_id, {
           include: {association: 'techs',
           attributes: ['name'],
            through:{
                attributes: ['user_id'] //retornar somente o user_id. Se quiser retornar tudo, deixar atpe association
            }}
       })

       return res.json(user.techs);
    },

    async store(req, res){
       const { user_id } = req.params;
       const { name } = req.body;

       const user = await User.findByPk(user_id);

       if(!user) {
        return res.status(400).json({error: 'User not found!'});
        }

        const [ tech ] = await Tech.findOrCreate({ //tenta procurar por uma tecnologia, se nao encontrar cria
            where: { name }
        });

        await user.addTech(tech);

        return res.json(tech);

    },

    async delete(req, res){
       const { user_id } = req.params;
       const { name } = req.body;

       const user = await User.findByPk(user_id);

       if(!user) {
        return res.status(400).json({error: 'User not found!'});
        }

        const tech  = await Tech.findOne({ //tenta procurar por uma tecnologia, se nao encontrar cria
            where: { name }
        });

        await user.removeTech(tech);

        return res.json();
        
    }
};