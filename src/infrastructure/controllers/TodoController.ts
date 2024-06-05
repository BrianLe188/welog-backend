import { Request, Response } from "express";
import { TodoService } from "../../application/services/TodoService";
import { TodoRepository } from "../../domain/repositories/TodoRepository";

const todoService = new TodoService(new TodoRepository());

export class TodoController {
    async createTodo(req: Request, res: Response) {
        try {
            const { title, timeline_id } = req.body;

            const todo = await todoService.createTodo({
                title,
                timeline_id,
            });

            res.status(201).json(todo);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async removeTodo(req: Request, res: Response) {
        try {
            const { id } = req.params;

            await todoService.removeTodo(id);

            res.status(200).json("Deleted");
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async updateTodo(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const options = req.body;

            const updated = await todoService.updateTodo(id, options);

            res.status(200).json(updated);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async updateTodoByKey(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { key, value } = req.body;

            const options = {
                [key]: value,
            };

            const updated = await todoService.updateTodo(id, options);

            res.status(200).json(updated);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}
