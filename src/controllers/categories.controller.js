const CategoryServices = require("../services/category.service");

const getAllCategories = async (req, res) => {
  try {
    const result = await CategoryServices.getAll();
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await CategoryServices.getById(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const createCategory = async (req, res) => {
  try {
    const newCategory = req.body;
    const result = await CategoryServices.create(newCategory);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const field = req.body;
    const result = CategoryServices.update(id, field);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message)
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const result = CategoryServices.delete(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message)
  }
}

module.exports = { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory };