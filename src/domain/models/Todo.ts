import { Document, ObjectId, Schema, model } from "mongoose";

export interface ITodo {
    title: string;
    timeline_id?: ObjectId;
}

interface ITodoDoc extends Document, ITodo {}

const todoSchema = new Schema<ITodoDoc>({
    title: {
        type: String,
    },
    timeline_id: {
        type: Schema.Types.ObjectId,
    },
});

export const Todo = model<ITodoDoc>("Todo", todoSchema);
