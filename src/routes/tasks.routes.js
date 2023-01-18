const { Router } = require("express");
const {
  getAllTasks,
  getTaskById,
  getTaskWithCategories,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks.controllers");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.get("/tasks", authMiddleware, getAllTasks);
router.get("/tasks/:id", authMiddleware, getTaskById);
router.get("/tasks/:id/categories", getTaskWithCategories);

router.post("/tasks", createTask, authMiddleware);

router.put("/tasks/:id", updateTask, authMiddleware);

router.delete("/tasks/:id", deleteTask, authMiddleware);

module.exports = router;
