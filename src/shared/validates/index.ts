import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

export function validateRequest(
    schema: ObjectSchema,
    key: "body" | "query" | "params",
) {
    return (req: Request, _res: Response, next: NextFunction) => {
        const requestData = req[key];

        const result = schema.validate(requestData);

        if (result?.error) {
            return next(result.error);
        }

        next();
    };
}
