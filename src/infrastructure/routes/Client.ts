import { Router } from "express";
import todoRoute from "./TodoRoute";
import timelineRoute from "./TimelineRoute";

const router = Router();

router.use("/todos", todoRoute);
router.use("/timelines", timelineRoute);

export default router;
