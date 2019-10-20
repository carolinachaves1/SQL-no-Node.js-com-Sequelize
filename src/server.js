const express = require('express'); //importar express
const routes = require('./routes'); //importar rotas

require('./database'); //importando o db

const app = express(); //chamar express

app.use(express.json());
app.use(routes); //usar as rotas

app.listen(3333); //definir porta
