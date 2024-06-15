import { IUser } from "../../domain/models/User";
import { UserRepositoty } from "../../domain/repositories/UserRepository";
import { signToken, verifyToken } from "../../shared/common/jwt";
import { SignPayload } from "../dtos/Auth";
import { CreateUserDTO } from "../dtos/User";

export class AuthService {
    private userRepository: UserRepositoty;

    constructor(userRepository: UserRepositoty) {
        this.userRepository = userRepository;
    }

    sign(payload: SignPayload) {
        const accessToken = signToken(payload, "15m");
        const refreshToken = signToken(payload, "1h");

        return {
            accessToken,
            refreshToken,
        };
    }

    verify(token: string) {
        return verifyToken(token);
    }
}
