const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Categories = require("./categories.model");
const Tasks = require("./tasks.model");

const TaskCategories = db.define("task_categories", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    unique: true
  },
  taskId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "task_id"
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "category_id"
  }
},
  {
    timestamps: false
  })

module.exports = TaskCategories;