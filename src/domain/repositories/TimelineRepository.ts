import { ITimeline, Timeline } from "../models/Timeline";

export class TimelineRepository {
    async createTimeline(timeline: ITimeline): Promise<ITimeline> {
        const newTimeline = new Timeline(timeline);
        await newTimeline.save();
        return newTimeline;
    }

    async getTimelines(options: any): Promise<Array<ITimeline>> {
        const timelines = await Timeline.find(options);
        return timelines;
    }
}
