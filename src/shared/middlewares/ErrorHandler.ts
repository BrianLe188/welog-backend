import { NextFunction, Request, Response } from "express";

export function appErrorHandler(
    err: Error,
    _req: Request,
    res: Response,
    _next: NextFunction,
) {
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;

    res.status(statusCode);

    const responseBody = {
        message: err.message,
        stack: err.stack,
    };

    res.json(responseBody);
}
