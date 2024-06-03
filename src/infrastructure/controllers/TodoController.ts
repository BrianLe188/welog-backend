import { Request, Response } from "express";
import { TodoService } from "../../application/services/TodoService";
import { TodoRepository } from "../../domain/repositories/TodoRepository";

const todoService = new TodoService(new TodoRepository());

export class TodoController {
    async createTodo(req: Request, res: Response) {
        try {
            const { title } = req.body;
            const todo = await todoService.createTodo({
                title,
            });
            res.status(201).json(todo);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}
