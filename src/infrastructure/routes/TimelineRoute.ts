import { Router } from "express";
import { TimelineController } from "../controllers/TimelineController";

const router = Router();
const timelineController = new TimelineController();

router.post("/", timelineController.createTimeline);
router.get("/", timelineController.getTimelines);

export default router;
