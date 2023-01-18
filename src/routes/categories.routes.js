const { Router } = require("express");
const {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categories.controller");

const router = Router();

router.get("/category", getAllCategories);
router.get("/category/:id", getCategoryById);

router.post("/category", createCategory);

router.put("/category/:id", updateCategory);

router.delete("/category/:id", deleteCategory);

module.exports = router;
