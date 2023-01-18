const db = require("../utils/database");
const Users = require("../models/users.model");
const Tasks = require("../models/tasks.model");
const Categories = require("../models/categories.model");
const TaskCategories = require("../models/task_categories.model");

const users = [
  { username: "oscar", email: "oscar@aol.com", password: "root123" },
  { username: "ian", email: "ian@aol.com", password: "root123" },
  { username: "kat", email: "kat@aol.com", password: "root123" }
];
const tasks = [
  { title: "Estudiar node", description: "Descripcion 1", user_id: 1 },
  { title: "Pasear al perro", description: "Node", user_id: 1 },
  { title: "lavar platos", user_id: 2 },
  { title: "chequeo mensual", description: "Hamburguesa", user_id: 3 }
];

const categories = [
  { name: "personal", user_id: 1 },
  { name: "educación", user_id: 1 },
  { name: "salud", user_id: 1 },
  { name: "trabajo", user_id: 2 },
  { name: "hogar", user_id: 2 },
  { name: "cocina", user_id: 2 },
  { name: "deporte", user_id: 3 },
  { name: "ocio", user_id: 3 },
  { name: "financiero", user_id: 3 },
  { name: "otros", user_id: 3 }
];

const taskCategories = [
  { categoryId: 1, taskId: 1 },
  { categoryId: 2, taskId: 1 },
  { categoryId: 4, taskId: 1 },
  { categoryId: 1, taskId: 2 },
  { categoryId: 3, taskId: 2 },
  { categoryId: 7, taskId: 2 },
  { categoryId: 10, taskId: 2 },
  { categoryId: 5, taskId: 3 },
  { categoryId: 6, taskId: 3 },
  { categoryId: 1, taskId: 4 },
  { categoryId: 3, taskId: 4 },
]

db.sync({ force: false })
  .then(() => {
    console.log("Iniciando seeding")
    users.forEach(user => Users.create(user))
    setTimeout(() => {
      tasks.forEach(task => Tasks.create(task));
    }, 100);
    setTimeout(() => {
      categories.forEach(category => Categories.create(category));
    }, 200);
    setTimeout(() => {
      taskCategories.forEach(tc => TaskCategories.create(tc));
    }, 300);
  })
  .catch(error => console.log(error));