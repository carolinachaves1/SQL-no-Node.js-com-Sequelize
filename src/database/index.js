const Sequelize = require('sequelize'); //importar sequelize
const dbConfig = require('../config/database'); //importar configurações banco de dados

const User = require('../models/User');
const Address = require('../models/Address');
const Tech = require('../models/Tech');


const connection = new Sequelize(dbConfig);

User.init(connection);
Address.init(connection);
Tech.init(connection);

User.associate(connection.models); //chamar o metodo criado no models
Address.associate(connection.models); //chamar o metodo criado no models
Tech.associate(connection.models);




module.exports = connection;