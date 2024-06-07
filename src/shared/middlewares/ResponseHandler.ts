import { Request, Response } from "express";

export function appResponseHandler(_req: Request, res: Response) {
    const data = res.locals.data;

    res.json(data);
}
