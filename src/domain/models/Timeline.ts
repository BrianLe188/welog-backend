import { Document, Schema, model } from "mongoose";

export interface ITimeline {
    date: String;
}

interface ITimelineDoc extends Document, ITimeline {}

const timelineSchema = new Schema<ITimelineDoc>({
    date: {
        type: String,
    },
});

export const Timeline = model<ITimelineDoc>("Timeline", timelineSchema);
