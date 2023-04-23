//Criando conexão com o banco
const sequelize = require ("sequelize");
const connection = new sequelize('guiaPerguntas', 'root','1234',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;