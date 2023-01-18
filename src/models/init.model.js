//Se importan todos los modelos creados
const Users = require("./users.model");
const Tasks = require("./tasks.model");
const Categories = require("./categories.model");
const TaskCategories = require("./task_categories.model");

const initModels = () => {
  //Crear relaciones
  //hasOne -> para indicar que tiene un ___
  //hasMany -> Tiene muchos __
  //belongsTo -> Pertenece a __
  Tasks.belongsTo(Users, { as: "author", foreignKey: "user_id" }); //Se verá en el JSON de respuesta
  Users.hasMany(Tasks, { as: "task", foreignKey: "user_id" });

  Categories.belongsTo(Users, { as: "author", foreignKey: "user_id" });
  Users.hasMany(Categories, { as: "category", foreignKey: "user_id" });

  TaskCategories.belongsTo(Tasks, { as: "task", foreignKey: "task_id" });
  Tasks.hasMany(TaskCategories, { as: "category", foreignKey: "task_id" });
  TaskCategories.belongsTo(Categories, {
    as: "category",
    foreignKey: "category_id",
  });
  Categories.hasMany(TaskCategories, { as: "task", foreignKey: "category_id" });
};

module.exports = initModels;
