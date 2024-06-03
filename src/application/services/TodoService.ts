import { ITodo } from "../../domain/models/Todo";
import { TodoRepository } from "../../domain/repositories/TodoRepository";

export class TodoService {
    private todoRepository: TodoRepository;

    constructor(todoRepository: TodoRepository) {
        this.todoRepository = todoRepository;
    }

    async createTodo(todo: ITodo): Promise<ITodo> {
        return this.todoRepository.createTodo(todo);
    }
}
