const { Router } = require("express");
const {
  getAllUsers,
  getUserById,
  getUserWithTasks,
  getUserWithCategories,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.controller");

const authMiddleware = require("../middlewares/auth.middleware");
const router = Router();

router.get("/users", authMiddleware, getAllUsers);
router.get("/users/:id", authMiddleware, getUserById);
//Obtener usuario con sus tareas
router.get("/:id/users/tasks", authMiddleware, getUserWithTasks);
router.get("/:id/users/categories", getUserWithCategories);

router.post("/users", createUser);

router.put("/users/:id", authMiddleware, updateUser);

router.delete("/users/:id", authMiddleware, deleteUser);

module.exports = router;
