const Users = require("../models/users.model");
const Tasks = require("../models/tasks.model");
const Categories = require("../models/categories.model");

class UserServices {
  static async getAll() {
    try {
      const result = await Users.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getById(id) {
    try {
      const result = await Users.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getWithTasks(id) {
    try {
      const result = await Users.findOne(
        {
          where: { id },
          attributes: ["username", "email"],
          include:
          {
            model: Tasks,
            as: "task",
            attributes: ["title", "description", "isComplete"]
          }
        });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getWithCategories(id) {
    try {
      const result = Users.findOne(
        {
          where: { id },
          attributes: ["username", "email"],
          include: {
            model: Categories,
            as: "category",
            attributes: ["name"]
          }
        });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async create(newUser) {
    try {
      const result = await Users.create(newUser);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async update(id, field) {
    try {
      const result = await Users.update(field, { where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;