const Categories = require("../models/categories.model");

class CategoryServices {
  static async getAll() {
    try {
      const result = await Categories.findAll();
      return result
    } catch (error) {
      throw error;
    }
  }
  static async getById(id) {
    try {
      const result = await Categories.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async create(newCategory) {
    try {
      const result = await Categories.create(newCategory);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async update(id, field) {
    try {
      const result = Categories.update(field, { where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async delete(id) {
    try {
      const result = Categories.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
};



module.exports = CategoryServices;