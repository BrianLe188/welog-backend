import { TimelineService } from "../../application/services/TimelineService";
import { Request, Response } from "express";
import { TimelineRepository } from "../../domain/repositories/TimelineRepository";
import { TodoRepository } from "../../domain/repositories/TodoRepository";

const timelineService = new TimelineService(
    new TimelineRepository(),
    new TodoRepository(),
);

export class TimelineController {
    async createTimeline(req: Request, res: Response) {
        try {
            const { date } = req.body;
            const timeline = await timelineService.createTimeline({
                date,
            });
            res.status(201).json(timeline);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async getTimelines(req: Request, res: Response) {
        try {
            const timelines = await timelineService.getTimelines(req.query);
            res.status(200).json(timelines);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}
