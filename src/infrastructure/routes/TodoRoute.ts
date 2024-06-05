import { Router } from "express";
import { TodoController } from "../controllers/TodoController";

const router = Router();

const todoController = new TodoController();

router.post("/", todoController.createTodo);
router.delete("/:id", todoController.removeTodo);
router.put("/:id", todoController.updateTodo);
router.patch("/:id", todoController.updateTodoByKey);

export default router;
