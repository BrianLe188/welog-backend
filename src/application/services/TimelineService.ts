import { ITimeline } from "../../domain/models/Timeline";
import { TimelineRepository } from "../../domain/repositories/TimelineRepository";
import { TodoRepository } from "../../domain/repositories/TodoRepository";

export class TimelineService {
    private timelineRepository: TimelineRepository;
    private todoRepository: TodoRepository;

    constructor(
        timelineRepository: TimelineRepository,
        todoRepository: TodoRepository,
    ) {
        this.timelineRepository = timelineRepository;
        this.todoRepository = todoRepository;
    }

    async createTimeline(timeline: ITimeline): Promise<ITimeline> {
        return this.timelineRepository.createTimeline(timeline);
    }

    async getTimelines(options: any): Promise<Array<ITimeline>> {
        const filter = {};
        const timelines = await this.timelineRepository.getTimelines(filter);

        const timelinesWithTodos = Promise.all(
            timelines.map(async (timeline) => ({
                _id: timeline._id,
                date: timeline.date,
                todos: await this.todoRepository.getTodos({
                    timeline_id: timeline._id,
                }),
            })),
        );

        return timelinesWithTodos;
    }
}
