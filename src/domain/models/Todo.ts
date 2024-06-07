import { Document, ObjectId, Schema, model } from "mongoose";

export interface ITodo {
    title: string;
    timeline_id?: ObjectId;
    done?: boolean;
    order?: number;
}

interface ITodoDoc extends Document, ITodo {}

const todoSchema = new Schema<ITodoDoc>({
    title: {
        type: String,
    },
    timeline_id: {
        type: Schema.Types.ObjectId,
        ref: "Timeline",
    },
    done: {
        type: Boolean,
        default: false,
    },
    order: {
        type: Number,
        default: 0,
    },
});

export const Todo = model<ITodoDoc>("Todo", todoSchema);
