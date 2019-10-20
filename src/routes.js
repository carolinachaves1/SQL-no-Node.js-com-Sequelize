const express = require('express');

const UserController = require('./controllers/UserController');  //importando o User Controller
const AddressController = require('./controllers/AddressController');  //importando o Address Controller
const TechController = require('./controllers/TechController'); 
const ReportController = require('./controllers/ReportController'); 



const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/users/:user_id/addresses', AddressController.index);
routes.post('/users/:user_id/addresses', AddressController.store); //usar encadeamento de rotas - paramentro

routes.get('/users/:user_id/techs', TechController.index);
routes.post('/users/:user_id/techs', TechController.store); 
routes.delete('/users/:user_id/techs', TechController.delete); 

routes.get('/report', ReportController.show);


module.exports = routes;