# SQL no Node.Js com Sequelize

# Visão Geral do Projeto

Projeto desenvolvido durante a Masterclass #01 - SQL no Node.js com Sequelize oferecida pela [Rockeseat](https://blog.rocketseat.com.br/) e disponível no [Youtube](https://www.youtube.com/watch?v=Fbu7z5dXcRs).

## :computer: Tecnologias Utilizadas  

* [Node.js](https://nodejs.org/en/): Ambiente de execução Javascript server-side;
* [Express](https://expressjs.com/pt-br/): Framework Node.js para construção das rotas e middlewares do projeto;
* [Sequelize](https://sequelize.org/): ORM (Object-relational mapping) para Banco de Dados relacional;
* [Postegre](https://www.postgresql.org/) : Sistema Gerenciador de Banco de Dados;

## :page_facing_up: Estrutura do Projeto 

--src/  
----config/  
------database.js  
----controllers/  
------AddressController.js    
------ReportController.js   
------TechController.js  
------UserController.js   
----database/  
------migrations  
---------20191020115124-create-users.js  
---------20191020125604-create-addresses.js  
---------20191020151505-create-techs.js  
---------20191020151755-create-user_techs.js  
------index.js 
----models/  
------Address.js    
------Tech.js  
------User.js  
----server.js  
--.sequelizerc  
--package.json  

## :lock: Licença

Desenvolvido por [Carolina Chaves](https://www.linkedin.com/in/carolinachaves1/)
