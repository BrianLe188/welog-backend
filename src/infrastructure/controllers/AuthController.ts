import { NextFunction, Request, Response } from "express";
import { AuthService } from "../../application/services/AuthService";
import { UserRepositoty } from "../../domain/repositories/UserRepository";
import { UserService } from "../../application/services/UserService";

const userRepository = new UserRepositoty();
const authService = new AuthService(userRepository);
const userService = new UserService(userRepository);

export class AuthController {
    async register(req: Request, res: Response, next: NextFunction) {
        try {
            const { email, password, account_type } = req.body;

            const existingUser = await userRepository.getByUnique({
                email,
            });

            if (existingUser) {
                res.status(409);
                throw new Error("User with this email already exists");
            }

            await userService.createUser({
                email,
                password,
                account_type,
            });

            res.status(200);
            res.locals.data = "User created";
            next();
        } catch (error) {
            next(error);
        }
    }

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const { email, password } = req.query;

            if (!email || !password) {
                res.status(400);
                throw new Error("Email or password is missing");
            }

            const user = await userService.getOne({ email });

            if (!user) {
                res.status(401);
                throw new Error("User not found");
            }

            const tokens = authService.sign({
                _id: user._id,
                email: user.email,
                account_type: user.account_type,
            });

            userService.updateUser(user._id, {
                refresh_token: tokens.refreshToken,
            });

            res.status(200);
            res.locals.data = {
                accessToken: tokens.accessToken,
            };
            next();
        } catch (error) {
            next(error);
        }
    }
}
