import { ObjectId } from "mongoose";
import { IUser, IUserDoc, User } from "../models/User";

export class UserRepositoty {
    async createUser(user: IUser): Promise<IUserDoc> {
        const newUser = new User(user);
        await newUser.save();
        return newUser;
    }

    async getByUnique(options: Record<string, unknown>) {
        const user = await User.findOne(options);

        return user;
    }

    async updateUser(id: string | ObjectId, options: Record<string, unknown>) {
        const updated = await User.findByIdAndUpdate(id, options, {
            returnDocument: "after",
        });
        return updated;
    }
}
