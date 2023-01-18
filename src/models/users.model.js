//Instancia para la conexión con la base de datos
const db = require("../utils/database");

//Tipos de datos Sequelize
const { DataTypes } = require("sequelize")

//Definir el modelo de usuarios (se definen con una mayúscula)

const Users = db.define("users", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    unique: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = Users;