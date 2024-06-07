import { Router } from "express";
import { TodoController } from "../controllers/TodoController";
import { validateRequest } from "../../shared/validates";
import {
    createTodoSchema,
    reOrderTodoSchema,
} from "../../shared/validates/TodoValidate";

const router = Router();

const todoController = new TodoController();

router.post(
    "/",
    validateRequest(createTodoSchema, "body"),
    todoController.createTodo,
);
router.delete("/:id", todoController.removeTodo);
router.put("/:id", todoController.updateTodo);
router.patch("/:id", todoController.updateTodoByKey);
router.patch(
    "/:id/re-order",
    validateRequest(reOrderTodoSchema, "body"),
    todoController.reOrderTodo,
);

export default router;
