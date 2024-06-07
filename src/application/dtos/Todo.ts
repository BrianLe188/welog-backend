import { Schema } from "mongoose";
import { ITodo } from "../../domain/models/Todo";

export class CreateTodoDTO implements ITodo {
    title: string;
    above: number;
    below: number;
    timeline_id: Schema.Types.ObjectId;
}

export class ReOrderTodoDTO {
    id: string;
    above: number;
    below: number;
}
