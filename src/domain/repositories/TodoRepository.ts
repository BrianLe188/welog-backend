import { ITodo, Todo } from "../models/Todo";

export class TodoRepository {
    async createTodo(todo: ITodo): Promise<ITodo> {
        const newTodo = new Todo(todo);
        await newTodo.save();
        return newTodo;
    }

    async removeTodo(id: string) {
        await Todo.findOneAndDelete({
            _id: id,
        });
    }

    async getTodos(options: any) {
        const todos = await Todo.find(options).sort({
            order: 1,
        });
        return todos;
    }

    async updateTodo(
        id: string,
        options: Partial<ITodo>,
    ): Promise<ITodo | null> {
        const updated = await Todo.findByIdAndUpdate(id, options, {
            new: true,
        });
        return updated;
    }
}
