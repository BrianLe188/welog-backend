import { TimelineService } from "../../application/services/TimelineService";
import { NextFunction, Request, Response } from "express";
import { TimelineRepository } from "../../domain/repositories/TimelineRepository";
import { TodoRepository } from "../../domain/repositories/TodoRepository";

const timelineService = new TimelineService(
    new TimelineRepository(),
    new TodoRepository(),
);

export class TimelineController {
    async createTimeline(req: Request, res: Response, next: NextFunction) {
        try {
            const { date } = req.body;
            const timeline = await timelineService.createTimeline({
                date,
            });

            res.status(201);
            res.locals.data = timeline;
            next();
        } catch (error) {
            next(error);
        }
    }

    async getTimelines(req: Request, res: Response, next: NextFunction) {
        try {
            const timelines = await timelineService.getTimelines(req.query);

            res.status(200);
            res.locals.data = timelines;
            next();
        } catch (error) {
            next(error);
        }
    }
}
