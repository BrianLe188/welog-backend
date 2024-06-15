import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../env";

export function signToken(payload: any, expiresIn: string | number) {
    return jwt.sign(payload, JWT_SECRET, {
        expiresIn,
        // algorithm: JWT_ALGORITHM,
    });
}

export function verifyToken(token: string) {
    return jwt.verify(token, JWT_SECRET);
}
