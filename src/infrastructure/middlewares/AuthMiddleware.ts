import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../../shared/common/jwt";

export function authenticate(req: Request, res: Response, next: NextFunction) {
    try {
        const authorization = req.headers?.authorization;

        if (!authorization) {
            res.status(401);
            throw new Error("Token is missing");
        }

        const splitedAuthorization = authorization.split(" ");
        const token = splitedAuthorization[1];

        if (splitedAuthorization[0] !== "Bearer" || !token) {
            res.status(401);
            throw new Error("Invalid token");
        }

        const data = verifyToken(token);

        req.auth = data;

        next();
    } catch (error) {
        next(error);
    }
}
