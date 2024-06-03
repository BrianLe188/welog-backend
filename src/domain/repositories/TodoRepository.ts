import { ITodo, Todo } from "../models/Todo";

export class TodoRepository {
    async createTodo(todo: ITodo): Promise<ITodo> {
        const newTodo = new Todo(todo);
        await newTodo.save();
        return newTodo;
    }
}
