//Importar Sequelize
const { Sequelize } = require("sequelize");
require("dotenv").config();
//Crear una instancia con parámentros de configuración de nuestra base de datos
//Se necesita un objeto de configuración -> Credenciales de la base de datos

const db = new Sequelize({
  database: "process.env.DB_NAME",
  username: "process.env.DB_USER", //Depende de cada caso
  host: "process.env.DB_HOST", // 127.0.0.1
  port: "process.env.DB_PORT",
  password: "process.env.DB_PASSWORD",
  dialect: "postgres", //La base de datos que se está usando
  logging: false,
});

module.exports = db;
