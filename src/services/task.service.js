const Categories = require("../models/categories.model");
const Tasks = require("../models/tasks.model");
const TaskCategories = require("../models/task_categories.model");

class TaskServices {
  static async getAll() {
    const db = require("../utils/database");
    const { DataTypes } = require("sequelize");

    const Tasks = db.define("tasks", {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      isComplete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        field: "is_complete",
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id",
      },
    });

    module.exports = Tasks;

    try {
      const result = await Tasks.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getById(id) {
    try {
      const result = Tasks.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getWithCategories(id) {
    try {
      const result = await Tasks.findOne({
        where: { id },
        attributes: ["title", "description", "isComplete", "userId"],
        include: {
          model: TaskCategories,
          as: "category",
          attributes: { exclude: ["id", "taskId", "task_id", "category_id"] },
          include: {
            model: Categories,
            as: "category",
            attributes: { exclude: ["id"] },
          },
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async create(newUser) {
    try {
      const result = await Tasks.create(newUser);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async update(id, field) {
    try {
      const result = await Tasks.update(field, { where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async delete(id) {
    try {
      const result = await Tasks.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TaskServices;
