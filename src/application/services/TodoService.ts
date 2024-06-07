import { ITodo } from "../../domain/models/Todo";
import { TodoRepository } from "../../domain/repositories/TodoRepository";
import { CreateTodoDTO, ReOrderTodoDTO } from "../dtos/Todo";

export class TodoService {
    private todoRepository: TodoRepository;

    constructor(todoRepository: TodoRepository) {
        this.todoRepository = todoRepository;
    }

    async createTodo(todo: CreateTodoDTO): Promise<ITodo> {
        let order = 0;
        const above = todo.above || 0;
        const below = todo.below || 0;

        if (above || below) {
            order = Math.floor((above + below) * 2);
        } else {
            order = Math.floor(Math.random() * 10000);
        }

        return this.todoRepository.createTodo({ ...todo, order });
    }

    async removeTodo(id: string) {
        await this.todoRepository.removeTodo(id);
    }

    async updateTodo(id: string, options: any) {
        return this.todoRepository.updateTodo(id, options);
    }

    async reOrderTodo({ id, above, below }: ReOrderTodoDTO) {
        let order = 0;

        if (above && below) {
            order = Math.floor((above + below) / 2);
        } else {
            order = (above || below) * 2;
        }

        return this.todoRepository.updateTodo(id, { order });
    }
}
