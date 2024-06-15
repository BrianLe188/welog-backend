import { ObjectId } from "mongoose";
import { IUser } from "../../domain/models/User";
import { UserRepositoty } from "../../domain/repositories/UserRepository";
import { CreateUserDTO } from "../dtos/User";

export class UserService {
    private userRepository: UserRepositoty;

    constructor(userRepository: UserRepositoty) {
        this.userRepository = userRepository;
    }

    createUser(user: CreateUserDTO) {
        return this.userRepository.createUser(user);
    }

    getOne(options: Record<string, unknown>) {
        return this.userRepository.getByUnique(options);
    }

    updateUser(id: string | ObjectId, options: Record<string, unknown>) {
        return this.userRepository.updateUser(id, options);
    }
}
