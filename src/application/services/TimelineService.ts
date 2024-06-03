import { ITimeline } from "../../domain/models/Timeline";
import { TimelineRepository } from "../../domain/repositories/TimelineRepository";

export class TimelineService {
    private timelineRepository: TimelineRepository;

    constructor(timelineRepository: TimelineRepository) {
        this.timelineRepository = timelineRepository;
    }

    async createTimeline(timeline: ITimeline): Promise<ITimeline> {
        return this.timelineRepository.createTimeline(timeline);
    }

    async getTimelines(options: any): Promise<Array<ITimeline>> {
        const filter = {};
        return this.timelineRepository.getTimelines(filter);
    }
}
