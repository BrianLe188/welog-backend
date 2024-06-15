import { Document, ObjectId, Schema, model } from "mongoose";
import { EAccountType } from "../../shared/enums";

export interface IUser {
    email: string;
    password: string;
    account_type: EAccountType;
    refresh_token?: string;
}

export interface IUserDoc extends Document, IUser {
    _id: ObjectId;
}

const userSchema = new Schema<IUserDoc>({
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    account_type: {
        type: String,
        enum: EAccountType,
    },
    refresh_token: {
        type: String,
    },
});

export const User = model<IUserDoc>("User", userSchema);
