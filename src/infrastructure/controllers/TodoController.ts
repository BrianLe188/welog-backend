import { NextFunction, Request, Response } from "express";
import { TodoService } from "../../application/services/TodoService";
import { TodoRepository } from "../../domain/repositories/TodoRepository";
import { DELETED } from "../../shared/constants/message";

const todoService = new TodoService(new TodoRepository());

export class TodoController {
    async createTodo(req: Request, res: Response, next: NextFunction) {
        try {
            const { title, timeline_id, above, below } = req.body;

            const todo = await todoService.createTodo({
                title,
                timeline_id,
                above,
                below,
            });

            res.status(201);
            res.locals.data = todo;
            next();
        } catch (error) {
            next(error);
        }
    }

    async removeTodo(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;

            await todoService.removeTodo(id);

            res.status(200);
            res.locals.data = DELETED;
            next();
        } catch (error) {
            next(error);
        }
    }

    async updateTodo(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const options = req.body;

            const updated = await todoService.updateTodo(id, options);

            res.status(200);
            res.locals.data = updated;
            next();
        } catch (error) {
            next(error);
        }
    }

    async updateTodoByKey(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const { key, value } = req.body;

            const options = {
                [key]: value,
            };

            const updated = await todoService.updateTodo(id, options);

            res.status(200);
            res.locals.data = updated;
            next();
        } catch (error) {
            next(error);
        }
    }

    async reOrderTodo(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const { above, below } = req.body;

            const updated = await todoService.reOrderTodo({ id, above, below });

            res.status(200);
            res.locals.data = updated;
            next();
        } catch (error) {
            next(error);
        }
    }
}
